const fs = require("fs");

const generateCode = () => {
  const newCode = Math.floor(100000 + Math.random() * 900000).toString(); // كود 6 أرقام
  const content = { password: newCode };
  fs.writeFileSync("code.json", JSON.stringify(content, null, 2));
  console.log("✅ Generated:", newCode);
};

generateCode();
