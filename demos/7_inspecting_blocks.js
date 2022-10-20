const { ethers } = require("ethers"); //Getting the Ethers.js module

// GETTING PROVIDER(s)
/*==================== ETHEREUM NODE(s)   ================= */
/*====== ALCHEMY ETHEREUM NODE ===== */
const ALCHEMY_KEY = 'mWu4egkvpECkQpHavFTREJfrB_y7pzz0'
const provider = new ethers.providers.JsonRpcProvider(`https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`)

/*===== INFURA ETHEREUM NODE =======*/
//const INFURA_ID = 'XXXXXXXXXXXXXXX'
//const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io./v3/${INFURA_ID}`)

const main = async () => {
    const block = await provider.getBlockNumber()

    console.log(`\nBlock Number: ${block}\n`)

    const blockInfo = await provider.getBlock(block)

    console.log(blockInfo)

    const { transactions } = await provider.getBlockWithTransactions(block)

    console.log(`\nLogging first transaction in block:\n`)
    console.log(transactions[0])
    console.log(`\nNumber of transactions in block:\n`)
    console.log(transactions.length)
}

main()