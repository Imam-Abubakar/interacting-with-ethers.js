const { ethers } = require("ethers"); //Getting the Ethers.js module

// GETTING PROVIDER(s)
/*==================== ETHEREUM NODE(s)   ================= */
/*====== ALCHEMY ETHEREUM NODE ===== */
const ALCHEMY_KEY = 'mWu4egkvpECkQpHavFTREJfrB_y7pzz0'
const provider = new ethers.providers.JsonRpcProvider(`https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`)

/*===== INFURA ETHEREUM NODE =======*/
//const INFURA_ID = 'XXXXXXXXXXXXXXX'
//const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io./v3/${INFURA_ID}`)

const account1 = '' //sender
const account2 = '' //receiver

const privateKey1 = '' // Sender private key
const wallet = ethers.Wallet(privateKey1, provider)

const main = async () => {
    //Show account 1 balance before transfer
    const senderBalBefore = await provider.getBalance(account1)
    console.log(senderBalBefore)
    //Show account 2 balance before transfer
    const receiverBalBefore = await provider.getBalance(account2)
    console.log(receiverBalBefore)


    //Send Ether
   const tx = await wallet.sendTransaction({ to: account2, value: ethers.utils.parseEther("0.025") })

   //Wait for transaction to be mined
   await tx.wait()
   //Fetch Transaction Data
   console.log(tx)

   //Show account 1 balance after transfer
   const senderBalAfter = await provider.getBalance(account1)
   console.log(senderBalAfter)
   //Show account 2 balance after transfer
   const receiverBalAfter = await provider.getBalance(account2)
   console.log(receiverBalAfter)

}

main()
