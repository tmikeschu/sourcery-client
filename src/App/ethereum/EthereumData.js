export const pathsControllerContractAbi = [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_lotId",
          "type": "uint256"
        },
        {
          "name": "_checkpoint",
          "type": "address"
        }
      ],
      "name": "addCheckpoint",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_lotId",
          "type": "uint256"
        },
        {
          "name": "_checkpoint",
          "type": "address"
        }
      ],
      "name": "createPath",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_lotId",
          "type": "uint256"
        },
        {
          "name": "_checkpoint",
          "type": "address"
        }
      ],
      "name": "createOrUpdatePath",
      "outputs": [
        {
          "name": "result",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_lotId",
          "type": "uint256"
        }
      ],
      "name": "getPath",
      "outputs": [
        {
          "name": "path",
          "type": "address[]"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "paths",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "type": "constructor"
    }
  ];

export const pathsControllerAddress = '0x4341439e63417c42e5434b7634f6d6f3b267eeae';
