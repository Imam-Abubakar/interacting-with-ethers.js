const { ethers } = require("ethers"); //Getting the Ethers.js module

// GETTING PROVIDER(s)
/*==================== ETHEREUM NODE(s)   ================= */
/*====== ALCHEMY ETHEREUM NODE ===== */
const ALCHEMY_KEY = 'mWu4egkvpECkQpHavFTREJfrB_y7pzz0'
const provider = new ethers.providers.JsonRpcProvider(`https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`)

/*===== INFURA ETHEREUM NODE =======*/
//const INFURA_ID = 'XXXXXXXXXXXXXXX'
//const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io./v3/${INFURA_ID}`)

const account1 = '' // Your account address 1
const account2 = '' // Your account address 20

const privateKey1 = '' // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider)

const ERC20_ABI = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
];

const address = ''
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    const balance = await contract.balanceOf(account1)

    console.log(`\nReading from ${address}\n`)
    console.log(`Balance of sender: ${balance}\n`)

    const contractWithWallet = contract.connect(wallet)

    const tx = await contractWithWallet.transfer(account2, balance)
    await tx.wait()

    console.log(tx)

    const balanceOfSender = await contract.balanceOf(account1)
    const balanceOfReciever = await contract.balanceOf(account2)

    console.log(`\nBalance of sender: ${balanceOfSender}`)
    console.log(`Balance of reciever: ${balanceOfReciever}\n`)
}

main()