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


const getAllTxnsFNC = alchemy.core.getAssetTransfers({
    fromBlock: "0x0",
    toAddress: "0x1731D34B07CA2235E668c7B0941d4BfAB370a2d0",
    category: ["erc20"],
});

(async () => {
    let k =  await getAllTxnsFNC
    console.log('txns', k)
}
    )()

const getAllTxns = {
        "transfers": [
            {
                "blockNum": "0x1b78160",
                "uniqueId": "0x643a3e8cf6ec37d912f411f4eb8cada7bcded9ecfbc48c05e35d42846eba73cf:log:170",
                "hash": "0x643a3e8cf6ec37d912f411f4eb8cada7bcded9ecfbc48c05e35d42846eba73cf",
                "from": "0xb25a7ba7c6e0dac2e7a685be3986503c12def933",
                "to": "0x1731d34b07ca2235e668c7b0941d4bfab370a2d0",
                "value": 3,
                "erc721TokenId": null,
                "erc1155Metadata": null,
                "tokenId": null,
                "asset": "ZETA",
                "category": "erc20",
                "rawContract": {
                    "value": "0x29a2241af62c0000",
                    "address": "0x000080383847bd75f91c168269aa74004877592f",
                    "decimal": "0x12"
                }
            },
            {
                "blockNum": "0x1e49881",
                "uniqueId": "0xca03a9ecbe707c50103f93ef8d034e16d546f654981cbee334a386d07e27b604:log:16",
                "hash": "0xca03a9ecbe707c50103f93ef8d034e16d546f654981cbee334a386d07e27b604",
                "from": "0x0000000000000000000000000000000000000000",
                "to": "0x1731d34b07ca2235e668c7b0941d4bfab370a2d0",
                "value": 10000000,
                "erc721TokenId": null,
                "erc1155Metadata": null,
                "tokenId": null,
                "asset": "GHST",
                "category": "erc20",
                "rawContract": {
                    "value": "0x084595161401484a000000",
                    "address": "0x20d0a1ce31f8e8a77b291f25c5fbed007adde932",
                    "decimal": "0x12"
                }
            },
            {
                "blockNum": "0x1f23f84",
                "uniqueId": "0x5b3e1700af9b17b9b477042a25a52cd39e0b3f01f9d458ed930c9f400f7b5240:log:5",
                "hash": "0x5b3e1700af9b17b9b477042a25a52cd39e0b3f01f9d458ed930c9f400f7b5240",
                "from": "0xf5de760f2e916647fd766b4ad9e85ff943ce3a2b",
                "to": "0x1731d34b07ca2235e668c7b0941d4bfab370a2d0",
                "value": 0.1,
                "erc721TokenId": null,
                "erc1155Metadata": null,
                "tokenId": null,
                "asset": "WMATIC",
                "category": "erc20",
                "rawContract": {
                    "value": "0x016345785d8a0000",
                    "address": "0x9c3c9283d3e44854697cd22d3faa240cfb032889",
                    "decimal": "0x12"
                }
            },
            {
                "blockNum": "0x21fe80f",
                "uniqueId": "0x30a6e52d39923a8533c2ff0c5a68070df8c849e4553b60e5cb540af09dd03389:log:11",
                "hash": "0x30a6e52d39923a8533c2ff0c5a68070df8c849e4553b60e5cb540af09dd03389",
                "from": "0x0000000000000000000000000000000000000000",
                "to": "0x1731d34b07ca2235e668c7b0941d4bfab370a2d0",
                "value": 3001,
                "erc721TokenId": null,
                "erc1155Metadata": null,
                "tokenId": null,
                "asset": "USDTF",
                "category": "erc20",
                "rawContract": {
                    "value": "0xb2dfa040",
                    "address": "0xbae94398c358b818635475f9b6c9a36fd2cd00be",
                    "decimal": "0x6"
                }
            },
            {
                "blockNum": "0x21fe848",
                "uniqueId": "0x193918f937fe069537e8305ca0a6f641ff512fdef09f85b4af73ae45457b4e25:log:17",
                "hash": "0x193918f937fe069537e8305ca0a6f641ff512fdef09f85b4af73ae45457b4e25",
                "from": "0x0000000000000000000000000000000000000000",
                "to": "0x1731d34b07ca2235e668c7b0941d4bfab370a2d0",
                "value": 60,
                "erc721TokenId": null,
                "erc1155Metadata": null,
                "tokenId": null,
                "asset": "BNRXa52",
                "category": "erc20",
                "rawContract": {
                    "value": "0x0340aad21b3b700000",
                    "address": "0xd49c5a2c41a29e661df75f7bc3a32e89dce1eb01",
                    "decimal": "0x12"
                }
            },
            {
                "blockNum": "0x21fe85f",
                "uniqueId": "0x018be2ea17ac58266860dac15e47d71cdb03ad794a5c66ec6b7bf2304e5fd866:log:6",
                "hash": "0x018be2ea17ac58266860dac15e47d71cdb03ad794a5c66ec6b7bf2304e5fd866",
                "from": "0x2fc55ec98924f17cf58f3315616fba44f993374a",
                "to": "0x1731d34b07ca2235e668c7b0941d4bfab370a2d0",
                "value": 0.000546,
                "erc721TokenId": null,
                "erc1155Metadata": null,
                "tokenId": null,
                "asset": "USDTF",
                "category": "erc20",
                "rawContract": {
                    "value": "0x0222",
                    "address": "0xbae94398c358b818635475f9b6c9a36fd2cd00be",
                    "decimal": "0x6"
                }
            },
            {
                "blockNum": "0x223326c",
                "uniqueId": "0x41a80dc7406c6c7fd0aa968aeefab1139343bd2d18a3219b9c2f4154fac93911:log:48",
                "hash": "0x41a80dc7406c6c7fd0aa968aeefab1139343bd2d18a3219b9c2f4154fac93911",
                "from": "0x0000000000000000000000000000000000000000",
                "to": "0x1731d34b07ca2235e668c7b0941d4bfab370a2d0",
                "value": 3001,
                "erc721TokenId": null,
                "erc1155Metadata": null,
                "tokenId": null,
                "asset": "USDTF",
                "category": "erc20",
                "rawContract": {
                    "value": "0xb2dfa040",
                    "address": "0xbae94398c358b818635475f9b6c9a36fd2cd00be",
                    "decimal": "0x6"
                }
            },
            {
                "blockNum": "0x2255815",
                "uniqueId": "0x37fdae70eab6e03cf55c05935751412440750d3fc8043746c0e19f895db2d40b:log:14",
                "hash": "0x37fdae70eab6e03cf55c05935751412440750d3fc8043746c0e19f895db2d40b",
                "from": "0x0000000000000000000000000000000000000000",
                "to": "0x1731d34b07ca2235e668c7b0941d4bfab370a2d0",
                "value": 10,
                "erc721TokenId": null,
                "erc1155Metadata": null,
                "tokenId": null,
                "asset": "BNRXa66",
                "category": "erc20",
                "rawContract": {
                    "value": "0x8ac7230489e80000",
                    "address": "0x11202dac6a1801ce5fbd64c8206206305e07c18b",
                    "decimal": "0x12"
                }
            },
            {
                "blockNum": "0x2255aca",
                "uniqueId": "0x82c5e4a8e49036d10f36b99a0cbde6a607abae37e799035a0ef0d82c9242fe8b:log:10",
                "hash": "0x82c5e4a8e49036d10f36b99a0cbde6a607abae37e799035a0ef0d82c9242fe8b",
                "from": "0x0000000000000000000000000000000000000000",
                "to": "0x1731d34b07ca2235e668c7b0941d4bfab370a2d0",
                "value": 10,
                "erc721TokenId": null,
                "erc1155Metadata": null,
                "tokenId": null,
                "asset": "BNRXa67",
                "category": "erc20",
                "rawContract": {
                    "value": "0x8ac7230489e80000",
                    "address": "0x1711ba2b3c48daf8e9524e1e499d2bc804896ac8",
                    "decimal": "0x12"
                }
            },
            {
                "blockNum": "0x237ba51",
                "uniqueId": "0xfffb580ef959df3aa6fb4426921f79bd8bb2a59d37cc030b6051ae0d747e6e08:log:619",
                "hash": "0xfffb580ef959df3aa6fb4426921f79bd8bb2a59d37cc030b6051ae0d747e6e08",
                "from": "0x0000000000000000000000000000000000000000",
                "to": "0x1731d34b07ca2235e668c7b0941d4bfab370a2d0",
                "value": 888888,
                "erc721TokenId": null,
                "erc1155Metadata": null,
                "tokenId": null,
                "asset": "vanityTrx.org",
                "category": "erc20",
                "rawContract": {
                    "value": "0x0d9038",
                    "address": "0xef2f39d9fda4ee7e48a24895fd48a6361c4f006f",
                    "decimal": "0x0"
                }
            },
            {
                "blockNum": "0x23b9445",
                "uniqueId": "0x17018207c437f86ec46d3bd968bfda376e654450d70e9ddbc5b40e15c6f7b40f:log:1755",
                "hash": "0x17018207c437f86ec46d3bd968bfda376e654450d70e9ddbc5b40e15c6f7b40f",
                "from": "0x3b00b3deef27c8c680059558f546366666666666",
                "to": "0x1731d34b07ca2235e668c7b0941d4bfab370a2d0",
                "value": 66666,
                "erc721TokenId": null,
                "erc1155Metadata": null,
                "tokenId": null,
                "asset": "RareTron.io",
                "category": "erc20",
                "rawContract": {
                    "value": "0x01046a",
                    "address": "0x54fa517f05e11ffa87f4b22ae87d91cec0c2d7e1",
                    "decimal": "0x0"
                }
            },
            {
                "blockNum": "0x247e466",
                "uniqueId": "0x35d54d245b93f2a2c0ed940a1dc54f5134211a5f4b13a4747bb7849d8e46b3f5:log:3",
                "hash": "0x35d54d245b93f2a2c0ed940a1dc54f5134211a5f4b13a4747bb7849d8e46b3f5",
                "from": "0xaf28cb0d9e045170e1642321b964740784e7dc64",
                "to": "0x1731d34b07ca2235e668c7b0941d4bfab370a2d0",
                "value": 17.97210614397072,
                "erc721TokenId": null,
                "erc1155Metadata": null,
                "tokenId": null,
                "asset": "ZETA",
                "category": "erc20",
                "rawContract": {
                    "value": "0xf969bf5150fd7813",
                    "address": "0x000080383847bd75f91c168269aa74004877592f",
                    "decimal": "0x12"
                }
            },
            {
                "blockNum": "0x24ba35f",
                "uniqueId": "0x31adc0d52f77a0209215f1b2e50954f099168d8aa30413a0e53d2d0b69ea8695:log:121",
                "hash": "0x31adc0d52f77a0209215f1b2e50954f099168d8aa30413a0e53d2d0b69ea8695",
                "from": "0x3b00b3deef27c8c680059558f546366666666666",
                "to": "0x1731d34b07ca2235e668c7b0941d4bfab370a2d0",
                "value": 6666666,
                "erc721TokenId": null,
                "erc1155Metadata": null,
                "tokenId": null,
                "asset": "VanityTron.io",
                "category": "erc20",
                "rawContract": {
                    "value": "0x65b9aa",
                    "address": "0x14c63920df84f306dcd5bfc84a1a3a6270016a24",
                    "decimal": "0x0"
                }
            }
        ]
    }
export { getAllTxns }