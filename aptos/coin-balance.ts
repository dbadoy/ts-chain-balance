import { AptosClient, AptosAccount, CoinClient } from "aptos";
import { printBalance } from "../utils/format";

async function main() {
    const client = new AptosClient('https://fullnode.devnet.aptoslabs.com/v1');
    const coinClient = new CoinClient(client);

    const balance = await coinClient.checkBalance('0x1');
    printBalance('aptos', 'aptos', '0x1', balance.toString());
}

main();