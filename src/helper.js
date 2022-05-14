import Torus from '@toruslabs/torus-embed';
import Web3 from 'web3';


const web3Obj = {
  web3: new Web3(),
  torus: new Torus({}),
  setweb3(provider) {
    web3Obj.web3.setProvider(provider);
  },
};

export default web3Obj; 
