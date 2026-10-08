import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { statSync } from "node:fs";

const assets = fileURLToPath(new URL("../src/assets/", import.meta.url));
const names = ["leggings", "tops", "shorts", "croppeds", "conjuntos", "regatas", "feminino", "masculino"];

for (const n of names) {
  const before = statSync(`${assets}${n}.png`).size;
  const after = (await sharp(`${assets}${n}.png`)
    .resize(720, 900, { fit: "cover", position: "centre" })
    .webp({ quality: 82 })
    .toFile(`${assets}${n}.webp`)).size;
  console.log(`${n}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB (${Math.round((after / before) * 100)}%)`);
}