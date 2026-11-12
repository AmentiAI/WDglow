"use server";

import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE, signAdminToken } from "@/lib/auth-token";
import { field } from "@/lib/form";
import { prisma } from "@/lib/prisma";
import { requireSession } from "@/lib/session";
import { safeInternalPath } from "@/lib/utils";

export async function login(formData: FormData) {
  const email = field(formData, "email").toLowerCase();
  const password = field(formData, "password");
  const next = safeInternalPath(field(formData, "next"), "/admin");
  const admin = await prisma.admin.findUnique({ where: { email } });
  const valid = admin ? await bcrypt.compare(password, admin.passwordHash) : false;
  if (!admin || !valid) redirect("/admin/login?error=1");

  const token = await signAdminToken(admin.id);
  const jar = await cookies();
  jar.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 12,
  });
  redirect(next.startsWith("/admin") ? next : "/admin");
}

export async function logout() {
  const jar = await cookies();
  jar.delete(SESSION_COOKIE);
  redirect("/admin/login");
}

export async function changePassword(formData: FormData) {
  const session = await requireSession();
  const current = field(formData, "current");
  const next = field(formData, "next");
  const confirm = field(formData, "confirm");
  if (next.length < 10 || next !== confirm) redirect("/admin/settings?error=password");

  const admin = await prisma.admin.findUnique({ where: { id: session.id } });
  if (!admin || !(await bcrypt.compare(current, admin.passwordHash))) {
    redirect("/admin/settings?error=password");
  }
  await prisma.admin.update({
    where: { id: admin.id },
    data: { passwordHash: await bcrypt.hash(next, 12), mustChangePassword: false },
  });
  redirect("/admin/settings?saved=1");
}
