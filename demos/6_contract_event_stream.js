const { ethers } = require("ethers"); //Getting the Ethers.js module

// GETTING PROVIDER(s)
/*==================== ETHEREUM NODE(s)   ================= */
/*====== ALCHEMY ETHEREUM NODE ===== */
const ALCHEMY_KEY = 'mWu4egkvpECkQpHavFTREJfrB_y7pzz0'
const provider = new ethers.providers.JsonRpcProvider(`https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`)

/*===== INFURA ETHEREUM NODE =======*/
//const INFURA_ID = 'XXXXXXXXXXXXXXX'
//const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io./v3/${INFURA_ID}`)

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",

    "event Transfer(address indexed from, address indexed to, uint amount)"
];

const address = '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0' //MATIC Token Contract
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    const block = await provider.getBlockNumber()

    const transferEvents = await contract.queryFilter('Transfer', block - 1, block)
    console.log(transferEvents)
}

main()