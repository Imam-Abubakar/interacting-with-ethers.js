const { ethers } = require("ethers"); //Getting the Ethers.js module

// GETTING PROVIDER(s)
/*==================== ETHEREUM NODE(s)   ================= */
/*====== ALCHEMY ETHEREUM NODE ===== */
const ALCHEMY_KEY = 'mWu4egkvpECkQpHavFTREJfrB_y7pzz0'
const provider = new ethers.providers.JsonRpcProvider(`https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`)

/*===== INFURA ETHEREUM NODE =======*/
//const INFURA_ID = 'XXXXXXXXXXXXXXX'
//const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io./v3/${INFURA_ID}`)


// --READING THE ETHER BALANCE OF AN ETHEREUM ADDRESS
const address = '0xF977814e90dA44bFA03b6295A0616a897441aceC'

const getBal = async() => {
    const balance = await provider.getBalance(address)
    const balStore = ethers.utils.formatEther(balance)
    console.log(`ETH Balance of ${address} ==> ${balStore} ETH \n`)  
}

getBal()


// OUTPUT:
// ===========
// ETH Balance of 0xF977814e90dA44bFA03b6295A0616a897441aceC ==> 2436827.362084507062493642 ETH 

// node ./demos/1_read_accounts.js