import React, { useState, useEffect } from "react";
import Greeting from "./contracts/Greeting.json";
import Web3 from "web3";

const App = () => {
  const [account, setAccount] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");

      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);
      setLoading(false);

      // const networkId = await web3.eth.net.getId();
      // const deployedNetwork = Greeting.networks[networkId];

      // const resources = new web3.eth.Contract(
      //   Greeting.abi,
      //   deployedNetwork.address
      // );
    }
    load();
  }, []);

  if (loading) {
    return "Loading...";
  }
  return (
    <div>
      <h1>
        Your Account is : <b>{account}</b>
      </h1>
    </div>
  );
};

export default App;
