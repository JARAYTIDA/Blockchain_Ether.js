const {ethers} = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();  

async function main(){
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
    const EncryptedKey = wallet.encryptSync(
        process.env.PASS,
        process.env.PRIVATE_KEY
    );

    console.log(EncryptedKey);
    fs.writeFileSync("./.encryptedKey.json", EncryptedKey);
}

main().then(() => process.exit(0)).catch((error) => {
    console.error(error);
    process.exit(1);
})