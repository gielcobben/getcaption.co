import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, "dist");

const template = fs.readFileSync(path.resolve(distPath, "index.html"), "utf-8");
const { render } = await import(path.resolve(distPath, "server/entry-server.js"));

const html = template.replace('<div id="root"></div>', `<div id="root">${render()}</div>`);

fs.writeFileSync(path.resolve(distPath, "index.html"), html);
fs.rmSync(path.resolve(distPath, "server"), { recursive: true });
console.log("Prerendered index.html");
