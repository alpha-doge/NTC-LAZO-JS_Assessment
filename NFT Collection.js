/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

const NFTs = []
function mintNFT (name,driptype,rizzlevel) {
   const NFT = {
      "name": name,
      "driptype": driptype,
      "rizzlevel": rizzlevel,
   }
   NFTs.push(NFT);
   console.log("Minted: " + NFT.name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for(let i = 0; i < NFTs.length; i++){
      console.log("\nName: \t\t"+NFTs[i].name);
      console.log("Drip Type: \t"+NFTs[i].driptype);
      console.log("Rizz Level: "+NFTs[i].rizzlevel);
   }
   
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("\nTotal Number of NFTs created: "+NFTs.length);
}

// call your functions below this line
mintNFT("Steve","Indie","Rizzler");
mintNFT("Alex","Streetware","Skibidi");
mintNFT("Herobrine","Hiphop","Rizz God");
listNFTs();
getTotalSupply();