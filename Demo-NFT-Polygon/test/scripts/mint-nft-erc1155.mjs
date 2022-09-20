const CONTRACT_ADDRESS = '0x592b41cFf040F14c544E3c30EC2C98f93Bcad490';
const META_DATA_URL =
    'ipfs://bafyreibsubn7tuqhb6gem3xnb6ivmxewrh76avtfckbiadlo3qsai6qhca';

async function mintNFT(contractAddress, metaDataURL) {
    const ExampleNFT = await ethers.getContractFactory('MyERC1155NFT');
    const [owner] = await ethers.getSigners();
    await ExampleNFT.attach(contractAddress).mintNFT(
        owner.address,
        metaDataURL,
    );
    console.log('NFT minted to: ', owner.address);
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
