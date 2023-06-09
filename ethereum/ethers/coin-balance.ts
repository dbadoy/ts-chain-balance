import { ethers } from 'ethers';
import { printBalance } from '../../utils/format';
import { EVM_DEFAULT_ADDRESS } from '../../utils/constant';

async function main() {
    let provider = new ethers.JsonRpcProvider(
        "https://mainnet.infura.io/v3/INFURA_PROJECT_ID",
        {
            chainId: 1,
        },
    );

    let balance = await provider.getBalance(EVM_DEFAULT_ADDRESS);
    /*
        const targetBlock = 100;
        balance = await provider.getBalance(EVM_DEFAULT_ADDRESS, targetBlock);
    */
    printBalance("ethereum", "ethers", EVM_DEFAULT_ADDRESS, balance.toString());
}

main();