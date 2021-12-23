async function main() {
    // Grab the contract factory 
    const IcecreamBananaSoda= await ethers.getContractFactory("IcecreamBananaSoda");
 
    // Start deployment, returning a promise that resolves to a contract object
    const pathDeploy = await IcecreamBananaSoda.deploy("125000000000000000000000000"); // Instance of the contract 
    console.log("Contract deployed to address:", pathDeploy.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });