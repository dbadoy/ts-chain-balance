import { connect } from 'near-api-js';
import { printBalance } from '../utils/format'

// https://docs.near.org/tools/near-api-js/account
async function main() {
    const connectionConfig = {
        networkId: "testnet",
        nodeUrl: "https://rpc.testnet.near.org",
        walletUrl: "https://wallet.testnet.near.org",
        helperUrl: "https://helper.testnet.near.org",
        explorerUrl: "https://explorer.testnet.near.org",
      };
      
      const nearConnection = await connect(connectionConfig);

      const account = await nearConnection.account("example-account.testnet");
      const balance = await account.getAccountBalance();

      printBalance('near', 'near-api-js', account.accountId, JSON.stringify(balance));
}

main();