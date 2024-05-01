"use client";
import React, { useState, useCallback } from "react";
import { ethers } from "ethers";

export interface AccountType {
  address?: string;
  balance?: string;
  chainId?: string;
  network?: string;
}

interface Window {
  ethereum: any;
}

const MetaMask = () => {
  const [accountData, setAccountData] = useState<AccountType>({});
  const [address,setAddress]=useState<any>(null)
  const [connected, setConnected] = useState<any>(false);
  const _connectToMetaMask = useCallback(async () => {
    const ethereum = (window as any).ethereum;
    // Check if MetaMask is installed
    if (typeof ethereum !== "undefined") {
      try {
        // Request access to the user's MetaMask accounts
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        // Get the connected Ethereum address
        const address = accounts[0];
        setAddress(address)
        setConnected(true);
        // Check address in console of web browser
        console.log("connected to MetaMask with address: ", address);
      } catch (error: Error | any) {
        setConnected(false);
        alert(`Error connecting to MetaMask: ${error?.message ?? error}`);
      }
    } else {
      alert("MetaMask not installed");
    }
  }, []);

  return (
    <div
      className={`h-full flex flex-col before:from-white after:from-sky-200 py-32`}
    >
      <div className="flex flex-col flex-1 justify-center items-center">
        <div className="grid gap-4">
          <img
            src="https://images.ctfassets.net/9sy2a0egs6zh/4zJfzJbG3kTDSk5Wo4RJI1/1b363263141cf629b28155e2625b56c9/mm-logo.svg"
            alt="MetaMask"
            className="text-center mx-auto"
            width={320}
            height={140}
          />
          {!connected ? (
            <button
              onClick={_connectToMetaMask}
              className="bg-black text-white p-4 rounded-lg"
            >
              Connect to MetaMask
            </button>
          ) : null}

          {
            connected? 
             <div>
                <div className="text-center">Connected to METAMASK</div>
                <div className="w-[450px]  rounded-lg my-5 flex flex-col justify-center px-4 py-5 shadow-md shadow-orange-300">
                    <input value={address}  className="w-full mx-auto text-center" type="text" />
                </div>
             </div>
            :null
          }
        </div>
      </div>
    </div>
  );
};

export default MetaMask;
