import fs from "fs";
import forge from "node-forge";

const generateAccessKeyPair = () => {
  const keypair = forge.pki.rsa.generateKeyPair({ bits: 2048, e: 0x10001 });

  const publicKey = forge.pki.publicKeyToPem(keypair.publicKey);
  const privateKey = forge.pki.privateKeyToPem(keypair.privateKey);

  // Write to current folder (not root)
  fs.writeFileSync("./AccessTokenPublicKey.pem", publicKey);
  fs.writeFileSync("./AccessTokenPrivateKey.pem", privateKey);

  console.log("Access key pair generated ✅");
};

generateAccessKeyPair();
