import { SignJWT, jwtVerify } from "jose";

export const SESSION_COOKIE = "wdglow_admin";

function secret() {
  const value = process.env.AUTH_SECRET;
  if (!value) throw new Error("AUTH_SECRET is not set");
  return new TextEncoder().encode(value);
}

export async function signAdminToken(adminId: string) {
  return new SignJWT({ sub: adminId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("12d")
    .sign(secret());
}

export async function verifyAdminToken(token: string) {
  const { payload } = await jwtVerify(token, secret());
  if (!payload.sub) return null;
  return { id: String(payload.sub) };
}
