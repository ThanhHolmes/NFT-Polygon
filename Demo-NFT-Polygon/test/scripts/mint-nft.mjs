const CONTRACT_ADDRESS = '0xBAaa4Fac354281cd2919D81287B6694f3DB82C66';
const META_DATA_URL =
    'ipfs://bafyreicrdbzcw5i32ovmrvcxxceubqsvpmttikcbmepahxbkk3noknpqom';

async function mintNFT(contractAddress, metaDataURL) {
    const ExampleNFT = await ethers.getContractFactory('ExampleNFT');
    const [owner] = await ethers.getSigners();
    await ExampleNFT.attach(contractAddress).mintNFT(
        owner.address,
        metaDataURL,
    );
    console.log('NFT minted successfully: ', owner.address);
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
