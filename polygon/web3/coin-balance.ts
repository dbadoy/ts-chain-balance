import { Web3 } from 'web3';
import { printBalance } from '../../utils/format';
import { EVM_DEFAULT_ADDRESS } from '../../utils/constant';

async function main() {
    const provider = new Web3(
        "https://mainnet.infura.io/v3/INFURA_PROJECT_ID",
    );

    const balance = await provider.eth.getBalance(EVM_DEFAULT_ADDRESS);
    /*
        const targetBlock = 100;
        balance = await provider.getBalance(EVM_DEFAULT_ADDRESS, targetBlock);
    */

    printBalance("polygon", "web3", EVM_DEFAULT_ADDRESS, balance.toString());
}

main();