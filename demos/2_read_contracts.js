const { ethers, BigNumber } = require("ethers"); //Getting the Ethers.js module

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
    "function balanceOf(address) view returns (uint)"
]

const address = '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0' //MATIC Token Contract

const contract = new ethers.Contract(address, ERC20_ABI, provider)

const readContract = async () => {
    const name = await contract.name()
    const symbol = await contract.symbol()
    const supply = await contract.totalSupply()
    const totalSupply = BigNumber.from(supply._hex)
    const balance = await contract.balanceOf(address)
    const balStore = ethers.utils.formatEther(balance)

    //DISPLAYING DATA
    console.log("Token Name: ", name)
    console.log("Token Symbol: ", symbol)
    console.log("Total Supply: ", totalSupply)
    console.log(`${name} balance of ${address} ==> ${balStore} ${symbol} \n`)
}

readContract()