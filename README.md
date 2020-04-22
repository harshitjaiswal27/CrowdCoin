# CrowdCoin
* A decentralized crowdfunding platform based on the ethereum blockchain. 
* The project is a decentralized crowdfunding application, built to solve the problem of money being misused by people, collected using the traditional crowdfunding applications.
* Blockchain helped in keeping track of the money collected using the application, and storing it under the control of a piece of code. 
* Hence not letting the money get into the hands of anyone and removing every possibility of it getting misused. Thus allowing us to reach to a logical solution to the problem in hand.
* Same as crowd funding in the real world, you can create campaigns requiring minimum contribution. 
* The creator can propose how to use money and how much money is needed as a 'Request'. 
* He cannot use money without more than 50% approvers in voting.

### To Run the Project :

Clone the repository by doing `git clone "https://github.com/harshitjaiswal27/CrowdCoin.git"`

#### `cd CrowdCoin`

#### To install dependencies :

#### `npm install`

#### To run the application :

#### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

`You need some ETHERS on Rinkeby. Please get MetaMask Installed!`

#### To test the contract functionalities locally using ganache local ethereum network:

#### `npm run test`

### Note :
The contract is deployed on Rinkeby test network at address '0x742a8BDaDbf60e765d482dA69202AB3384526f31' with the help of infura node api.<br/> 
If you want to deploy the contract on your own. 
* Checkout `deploy.js` file in the `ethereum` directory, do the neccessary changes as suggested over there. 
* Thereafter run the `deploy.js` file and replace the value of `account-address` in `factory.js` file in `ethereum` directory with value of the same printed on console.
