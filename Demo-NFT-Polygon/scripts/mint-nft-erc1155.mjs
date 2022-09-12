const CONTRACT_ADDRESS = "0x37dFfFbE2F2663e274d92b0319740D751Bc4efF1"
const META_DATA_URL = "ipfs://bafyreibsubn7tuqhb6gem3xnb6ivmxewrh76avtfckbiadlo3qsai6qhca"

async function mintNFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("MyERC1155NFT")
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