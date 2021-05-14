var ERC20_token_address = "0x28092De136685a45F09B5B420C0d225b9EC1E636"
var contract
var erc_contract
var accounts
var web3

const updateDice = async () => {
  console.log("Polling state...")
  dogs = await contract.methods.dogs().call()
  cats = await contract.methods.cats().call()
  setDogClicks(dogs)
  setCatClicks(cats)
};

const clickDogs = async () => {
  var random_seed = "1234"
  await contract.methods
    .dogs()
    .send({ from: accounts[0], gas: 400000 })
  updateDice()
}

const clickCats = async () => {
  var random_seed = "1234"
  await contract.methods
    .cats()
    .send({ from: accounts[0], gas: 400000 })
  updateDice()
}

async function maticDiceGameApp() {
  var awaitWeb3 = async function() {
    web3 = await getWeb3();
    var awaitContract = async function() {
      contract = await getGameContract(web3)
      var awaitERCContract = async function() {
        erc_contract = await getMyERC20Contract(web3)
        var awaitAccounts = async function() {
          accounts = await web3.eth.getAccounts()
          updateDice()
        }
        awaitAccounts()
      }
      awaitERCContract()
    }
    awaitContract()
  }
  awaitWeb3()
}
maticDiceGameApp()


var display_click_count_poller = setInterval(updateDice,1000)