import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { statSync } from "node:fs";

// Baixe antes as imagens do Drive para uma pasta com:
//   Invoke-WebRequest "https://drive.usercontent.google.com/download?id=<FILE_ID>&export=download&confirm=t" -OutFile <pasta>\<nome>.png
// Depois rode: bun run scripts/opt-categories.mjs
const raw = process.env.RAW_PNG_DIR || "C:/Users/sants/AppData/Local/Temp/opencode/drive2";
const assets = fileURLToPath(new URL("../src/assets/", import.meta.url));
const names = [
  "leggings",
  "tops",
  "shorts",
  "conjuntos",
  "croppeds",
  "regatas",
  "feminino",
  "masculino",
  "masculino-variante",
];

for (const n of names) {
  const before = statSync(`${raw}/${n}.png`).size;
  const after = (
    await sharp(`${raw}/${n}.png`)
      .resize(720, 900, { fit: "cover", position: "centre" })
      .webp({ quality: 82 })
      .toFile(`${assets}${n}.webp`)
  ).size;
  console.log(
    `${n}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB (${Math.round((after / before) * 100)}%)`,
  );
}
