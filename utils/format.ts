export const printBalance = (chain: string, lib: string, target: string, balance: string) => {
    console.log(`(${chain}.${lib}) address: ${target} balance: ${balance}`);
}