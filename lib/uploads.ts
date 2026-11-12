import { mkdir, writeFile } from "fs/promises";
import path from "path";

const types: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

export async function saveUpload(file: File) {
  const ext = types[file.type];
  if (!ext) throw new Error("Use a JPG, PNG, or WebP image.");
  if (file.size > 8 * 1024 * 1024) throw new Error("Images need to be under 8MB.");
  const bytes = Buffer.from(await file.arrayBuffer());
  const name = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const dir = path.join(process.cwd(), "public", "uploads");
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, name), bytes);
  return `/uploads/${name}`;
}
