const { MerkleTree } = require('merkletreejs')
const keccak256 = require("keccak256");

let addresses = require("./whitelist.json");
let merkleTree;


let leaves = addresses.map((addr) => keccak256(addr));




merkleTree = new MerkleTree(leaves, keccak256)
const root = merkleTree.getRoot().toString('hex')
const leaf = keccak256('tom.holland@gmail.com')
console.log(merkleTree.toString())
const proof = merkleTree.getProof(leaf)
console.log("Verification status: ", merkleTree.verify(proof, leaf, root)) // true

console.log("Roothash: ", merkleTree.getHexRoot())

const badLeaf = keccak256('tommy.holland@gmail.com')
const badProof = merkleTree.getProof(badLeaf)
console.log("Bad Leaf Verification status: ", merkleTree.verify(badProof, badLeaf, root)) // false



