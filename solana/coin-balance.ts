import { Connection, PublicKey } from "@solana/web3.js";
import { printBalance } from "../utils/format";
import { SOLANA_DEFAULT_ADDRESS } from "../utils/constant";
// import * as bs58 from "bs58";

async function main() {
    const connection = new Connection("https://api.devnet.solana.com");

    // const feePayer = Keypair.fromSecretKey(
    //     bs58.decode("SECRET_KEY"),
    // );

    const address = new PublicKey(SOLANA_DEFAULT_ADDRESS);
    let balance = await connection.getBalance(address);

    printBalance('solana', '@solana/web3.js', address.toString(), balance.toString());
}

main();