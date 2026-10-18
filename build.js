const fs = require("node:fs");

fs.mkdirSync("dist", { recursive: true });

for (const file of ["index.html", "style.css", "script.js"]) {
  fs.copyFileSync(file, `dist/${file}`);
}

console.log("Website build completed successfully");
