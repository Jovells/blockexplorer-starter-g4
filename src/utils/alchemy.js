import { Alchemy, Network } from 'alchemy-sdk';

const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.MATIC_MUMBAI,
};

const alchemy = new Alchemy(settings);

export const getTxnByHash = async () => {
    const tx = await alchemy.core.getTransaction(
        "0xb4d389677691a89ac9d30b33e12df9293559c947c38a944c500ffd211b753ce8"
    );
    return tx
}


const getAllTxns = await alchemy.core.getAssetTransfers({
    fromBlock: "0x0",
    toAddress: "0x1731D34B07CA2235E668c7B0941d4BfAB370a2d0",
    category: ["erc20"],
});

console.log('txns', getAllTxns)


export { getAllTxns }