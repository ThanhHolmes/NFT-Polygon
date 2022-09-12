const CONTRACT_ADDRESS = "0xf30c85b791abaB36a65ad0a6E25d4E1c5247fE1F"
const META_DATA_URL = "ipfs://bafyreibsubn7tuqhb6gem3xnb6ivmxewrh76avtfckbiadlo3qsai6qhca"

async function mintNFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
   const [owner] = await ethers.getSigners()
   await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });