import { Web3, core } from "web3";
import { NFTPlugin } from "../src";

let web3: Web3 = new Web3('https://eth-mainnet.alchemyapi.io/v2/<api_key>');
// You can actually use any Web3.js Blockchain Provider you'd like

  // Define the options for initializing NFTPlugin
  const nftPluginOptions = {
    contractAddress: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d", 
  };

  // Register NFTPlugin with initialization values
  web3.registerPlugin(new NFTPlugin(web3, nftPluginOptions));

  // Initialize Web3Context (if necessary)
  const web3Context = new core.Web3Context(web3);

  // Register NFTPlugin with Web3Context (if necessary)
  web3Context.registerPlugin(new NFTPlugin(web3, nftPluginOptions));

describe("NFTPlugin Tests", () => {
  it("should register NFTPlugin on Web3Context instance", () => {
  
    expect(web3Context.nftPlugin).toBeDefined();
  });

  // Import your module and mock data here

describe('getAllMetadataCombinations', () => {
  test('should return all combinations for given traits', () => {
    const input = [{'Earring': ["Gold", "Silver"]}, {'Grin': ["Crooked", "Toothy"]}]
    const expectedOutput = [
      [
           {
            "trait_type": "Background",
            "value": "Hanuman"
        },
        {
            "trait_type": "Body",
            "value": "Real_monkey"
        },
        {
            "trait_type": "Clothes",
            "value": "Poopy"
        },
        {
            "trait_type": "Earrings",
            "value": "Desiner"
        },
        {
            "trait_type": "Eyes",
            "value": "Heavy_masterbate"
        },
        {
            "trait_type": "Hair",
            "value": "CowBoy"
        },
        {
            "trait_type": "Mouth",
            "value": "Angery"
        }
      ]
    ]
    const result = web3Context.nftPlugin.getAllMetadataCombinations(input);
    expect(result).toEqual(expectedOutput);
  })});
  
  describe('getNFTMetadata', () => {
    test('should return the metadata for NFT of id 20', async () => {
      const tokenId = "38"
      const expectedOutput = {
        image: 'ipfs://QmetybKJAMJAsQsBt8Zpc2zwPiZjYARnv6z8SUzwukCMGV',
        attributes: [
            {
            "trait_type": "Background",
            "value": "Grass"
        },
        {
            "trait_type": "Body",
            "value": "Cursed_yellow"
        },
        {
            "trait_type": "Clothes",
            "value": "Army"
        },
        {
            "trait_type": "Earrings",
            "value": "Desiner"
        },
        {
            "trait_type": "Eyes",
            "value": "baddha"
        },
        {
            "trait_type": "Hair",
            "value": "CowBoy"
        },
        {
            "trait_type": "Mouth",
            "value": "Ballaya"
        }
    ]
        ]
      }
      const result = await web3Context.nftPlugin.getNFTMetadata(tokenId);
      expect(result).toEqual(expectedOutput);
    });});

  describe('getNFTImage', () => {
    test('should return the image link for NFT of id 38', async () => {
      const tokenId = "38"
      const expectedOutput = "ipfs://QmZNurocAsqJA6B6MdchnpxxRqy6xAgigSuSTWvY9PmAaQ"
      const result = await web3Context.nftPlugin.getNFTImage(tokenId);
      expect(result).toEqual(expectedOutput);
    });});

  describe('filterNFTsByAttributes', () => {
    test('should return an array containing the NFTs that have an Orange background and Robot fur', async () => {
      // For the sake of speed, we'll only test the first 10 NFTs of the colleciton by changing the plugin's source code
      const result = await web3Context.nftPlugin.doNotUseThisFunction_filterNFTsByAttributes(
        [{
        "trait_type": "Fur",
        "value": "Robot"
      }, {
        "trait_type": "Background",
        "value": "Orange"
      }]);
      const expectedOutput = [{
        image: 'ipfs://QmRRPWG96cmgTn2qSzjwr2qvfNEuhunv6FNeMFGa9bx6mQ',
        attributes: [
            {
            "trait_type": "Background",
            "value": "Hanuman"
        },
        {
            "trait_type": "Body",
            "value": "Real_monkey"
        },
        {
            "trait_type": "Clothes",
            "value": "Poopy"
        },
        {
            "trait_type": "Earrings",
            "value": "Desiner"
        },
        {
            "trait_type": "Eyes",
            "value": "Heavy_masterbate"
        },
        {
            "trait_type": "Hair",
            "value": "CowBoy"
        },
        {
            "trait_type": "Mouth",
            "value": "Angery"
        }
        ]
      },
      {
        image: 'ipfs://QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi',
        attributes: [
          { trait_type: 'Mouth', value: 'Grin' },
          { trait_type: 'Clothes', value: 'Vietnam Jacket' },
          { trait_type: 'Background', value: 'Orange' },
          { trait_type: 'Eyes', value: 'Blue Beams' },
          { trait_type: 'Fur', value: 'Robot' }
        ]
      }]
      expect(result).toEqual(expectedOutput);
    }, 12000);});

  describe('getCollectionSize', () => {
    test('should return size of the NFT collection', async () => {
      const expectedSize = BigInt(10000);
      const result = await web3Context.nftPlugin.getCollectionSize();
      expect(result).toEqual(expectedSize);
    });});

  describe('getTraitRarityScore', () => {
    test('should return the rarity score of a trait in the collection', async () => {
      // For the sake of speed, we'll only test the first 10 NFTs of the colleciton by changing the plugin's source code
      // But the source code will still use the collection size as the numerator (just for ease of testing)
      const expectedRarity = BigInt(3333);
      const result = await web3Context.nftPlugin.doNotUseThisFunction_getTraitRarityScore({
        "trait_type": "Fur",
        "value": "Robot"
      });
      expect(result).toEqual(expectedRarity);
    }, 12000);});

  describe('filterNFTsByOwner', () => {
    test('should return an array containing the NFTs that have the specified author', async () => {
      // For the sake of speed, we'll only test the first 31 NFTs of the colleciton by changing the plugin's source code
      const owner = "0xf7801B8115f3Fe46AC55f8c0Fdb5243726bdb66A";
      const result = await web3Context.nftPlugin.doNotUseThisFunction_filterNFTsByOwner(owner);
      const expectedOutput = [{
        image: 'ipfs://QmRRPWG96cmgTn2qSzjwr2qvfNEuhunv6FNeMFGa9bx6mQ',
        attributes: [
                {
            "trait_type": "Background",
            "value": "Hanuman"
        },
        {
            "trait_type": "Body",
            "value": "Real_monkey"
        },
        {
            "trait_type": "Clothes",
            "value": "Poopy"
        },
        {
            "trait_type": "Earrings",
            "value": "Desiner"
        },
        {
            "trait_type": "Eyes",
            "value": "Heavy_masterbate"
        },
        {
            "trait_type": "Hair",
            "value": "CowBoy"
        },
        {
            "trait_type": "Mouth",
            "value": "Angery"
        }
        ]
      },
      {
        image: 'ipfs://QmcgoedsGRM4tzEZnSQX3RQ2SWTggATqUKQq1gfhhkzpfs',
        attributes: [
              {
            "trait_type": "Background",
            "value": "Hanuman"
        },
        {
            "trait_type": "Body",
            "value": "Real_monkey"
        },
        {
            "trait_type": "Clothes",
            "value": "Poopy"
        },
        {
            "trait_type": "Earrings",
            "value": "Desiner"
        },
        {
            "trait_type": "Eyes",
            "value": "Heavy_masterbate"
        },
        {
            "trait_type": "Hair",
            "value": "CowBoy"
        },
        {
            "trait_type": "Mouth",
            "value": "Angery"
        }
        ]
      }];
      expect(result).toEqual(expectedOutput);
    }, 30000);});





});
