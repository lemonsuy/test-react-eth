import React, { useState } from 'react';
import './App.css';
import Web3 from 'web3';
import { abi } from './abi'

console.log("ABI: ", abi)

const web3 = new Web3(Web3.givenProvider);

const contractAddress = '0x7e0CF369aD6825a4e7cF726B3Ad74A8fBd350582';
const FootballContract = new web3.eth.Contract(abi, contractAddress);

console.log(FootballContract)

function App() {

  const [teamName, setTeamName] = useState('');
  const [getTeamName, setGetTeamName] = useState('');
  const [managerName, setManagerName] = useState('');
  const [getManagerName, setGetManagerName] = useState('');

  const handleGetTeamName = async (e) => {
    e.preventDefault();
    const result = await FootballContract.methods.teamName().call();
    setGetTeamName(result);
    console.log(result);
  }

  const handleGetManagerName = async (e) => {
    e.preventDefault();
    const result = await FootballContract.methods.managerName().call();
    setGetManagerName(result);
    console.log(result);
  }

  const handleSetTeamName = async (e) => {
    e.preventDefault();
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    console.log(account)
    console.log(teamName)
    const gas = await FootballContract.methods.setTeamName(teamName).estimateGas();
    const result = await FootballContract.methods.setTeamName(teamName).send({
      from: account,
      gas
    })
    console.log(result);
  }

  const handleSetManagerName = async (e) => {
    e.preventDefault();
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    console.log(account)
    const gas = await FootballContract.methods.setManagerName(managerName).estimateGas();
    const result = await FootballContract.methods.setManagerName(managerName).send({
      from: account,
      gas
    })
    console.log(result);
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSetTeamName}>
          <label>
            Set TeamName:
          <input
              type="text"
              name="name"
              value={teamName}
              onChange={e => setTeamName(e.target.value)} />
          </label>
          <input type="submit" value="Set TeamName" />
        </form>
        <br />
        <button
          onClick={handleGetTeamName}
          type="button" >
          Get TeamName
      </button>
        {getTeamName}
      </header>
    </div>
  );
}

export default App;
