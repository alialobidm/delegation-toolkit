export const abi = [
  {
    "type": "function",
    "name": "afterAllHook",
    "inputs": [
      {
        "name": "",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "",
        "type": "bytes32",
        "internalType": "ModeCode"
      },
      {
        "name": "",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "afterHook",
    "inputs": [
      {
        "name": "",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "",
        "type": "bytes32",
        "internalType": "ModeCode"
      },
      {
        "name": "",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "beforeAllHook",
    "inputs": [
      {
        "name": "",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "",
        "type": "bytes32",
        "internalType": "ModeCode"
      },
      {
        "name": "",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "beforeHook",
    "inputs": [
      {
        "name": "_terms",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "_mode",
        "type": "bytes32",
        "internalType": "ModeCode"
      },
      {
        "name": "_executionCallData",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "getTermsInfo",
    "inputs": [
      {
        "name": "_terms",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "name": "executions_",
        "type": "tuple[]",
        "internalType": "struct Execution[]",
        "components": [
          {
            "name": "target",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "value",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "callData",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      }
    ],
    "stateMutability": "pure"
  }
] as const;


export const bytecode = "0x608060405234801561001057600080fd5b5061083a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063414c3e331461005c578063a145832a14610078578063b99deb0e1461008b578063d3eddcc51461005c578063ed4633671461005c575b600080fd5b61007661006a366004610417565b50505050505050505050565b005b610076610086366004610417565b6100b4565b61009e6100993660046104e4565b6102fd565b6040516100ab9190610526565b60405180910390f35b85600160f81b6001600160f81b03198216146101175760405162461bcd60e51b815260206004820181905260248201527f436176656174456e666f726365723a696e76616c69642d63616c6c2d7479706560448201526064015b60405180910390fd5b86600881901b6001600160f81b03198116156101835760405162461bcd60e51b815260206004820152602560248201527f436176656174456e666f726365723a696e76616c69642d657865637574696f6e6044820152642d7479706560d81b606482015260840161010e565b503660006101918989610319565b9150915060006101a18f8f6102fd565b8051909150821461020a5760405162461bcd60e51b815260206004820152602d60248201527f457861637443616c6c646174614261746368456e666f726365723a696e76616c60448201526c69642d62617463682d73697a6560981b606482015260840161010e565b60005b828110156102eb57838382818110610227576102276105e8565b905060200281019061023991906105fe565b61024790604081019061061e565b604051610255929190610665565b604051809103902082828151811061026f5761026f6105e8565b60200260200101516040015180519060200120146102e35760405162461bcd60e51b815260206004820152602b60248201527f457861637443616c6c646174614261746368456e666f726365723a696e76616c60448201526a69642d63616c6c6461746160a81b606482015260840161010e565b60010161020d565b50505050505050505050505050505050565b60606103098383610319565b610312916106e5565b9392505050565b366000833580850160208587010360208201945081359350808460051b8301118360401c17156103515763ba597e7e6000526004601cfd5b83156103a8578392505b6001830392508260051b850135915081850160408101358082018381358201118460408501111782861782351760401c171561039f5763ba597e7e6000526004601cfd5b5050508261035b575b5050509250929050565b60008083601f8401126103c457600080fd5b50813567ffffffffffffffff8111156103dc57600080fd5b6020830191508360208285010111156103f457600080fd5b9250929050565b80356001600160a01b038116811461041257600080fd5b919050565b60008060008060008060008060008060e08b8d03121561043657600080fd5b8a3567ffffffffffffffff8082111561044e57600080fd5b61045a8e838f016103b2565b909c509a5060208d013591508082111561047357600080fd5b61047f8e838f016103b2565b909a50985060408d0135975060608d013591508082111561049f57600080fd5b506104ac8d828e016103b2565b90965094505060808b013592506104c560a08c016103fb565b91506104d360c08c016103fb565b90509295989b9194979a5092959850565b600080602083850312156104f757600080fd5b823567ffffffffffffffff81111561050e57600080fd5b61051a858286016103b2565b90969095509350505050565b600060208083018184528085518083526040925060408601915060408160051b8701018488016000805b848110156105d957898403603f19018652825180516001600160a01b0316855288810151898601528701516060888601819052815190860181905283905b808210156105ac578282018b015187830160800152908a019061058e565b8681016080908101869052988b0198601f909101601f191690960190950194505091870191600101610550565b50919998505050505050505050565b634e487b7160e01b600052603260045260246000fd5b60008235605e1983360301811261061457600080fd5b9190910192915050565b6000808335601e1984360301811261063557600080fd5b83018035915067ffffffffffffffff82111561065057600080fd5b6020019150368190038213156103f457600080fd5b8183823760009101908152919050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156106ae576106ae610675565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156106dd576106dd610675565b604052919050565b600067ffffffffffffffff8084111561070057610700610675565b8360051b60206107118183016106b4565b86815291850191818101903684111561072957600080fd5b865b848110156107f8578035868111156107435760008081fd5b880160603682900312156107575760008081fd5b61075f61068b565b610768826103fb565b81528582013586820152604080830135898111156107865760008081fd5b9290920191601f368185011261079c5760008081fd5b83358a8111156107ae576107ae610675565b6107bf818301601f19168a016106b4565b915080825236898287010111156107d65760008081fd5b808986018a84013760009082018901529082015284525091830191830161072b565b5097965050505050505056fea26469706673582212208d28ccd8e989ae016d34ead1b420bc19b8be9eaa747049c2602c587d0a44891264736f6c63430008170033" as const;