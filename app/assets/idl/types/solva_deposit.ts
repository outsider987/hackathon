export type SolvaDeposit = {
  "version": "0.0.1",
  "name": "solva_deposit",
  "instructions": [
    {
      "name": "new",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        }
      ],
      "args": [
        {
          "name": "platformpubkey",
          "type": "publicKey"
        },
        {
          "name": "caseamountlamports",
          "type": "u64"
        },
        {
          "name": "expertdepositlamports",
          "type": "u64"
        },
        {
          "name": "clientdepositlamports",
          "type": "u64"
        },
        {
          "name": "expirationtimestamp",
          "type": "u64"
        }
      ]
    },
    {
      "name": "expertCancelCase",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        }
      ],
      "args": []
    },
    {
      "name": "clientActivateCase",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        }
      ],
      "args": [
        {
          "name": "clientdepositlamports",
          "type": "u64"
        }
      ]
    },
    {
      "name": "expertExpireCase",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        }
      ],
      "args": []
    },
    {
      "name": "platformForceCloseCaseForExpert",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        }
      ],
      "args": []
    },
    {
      "name": "platformForceCloseCaseForClient",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        }
      ],
      "args": []
    },
    {
      "name": "indemniteeRecieveCompensation",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        }
      ],
      "args": []
    },
    {
      "name": "clientCompleteCase",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        }
      ],
      "args": []
    },
    {
      "name": "expertGetIncome",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        }
      ],
      "args": []
    },
    {
      "name": "platformCloseCase",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        }
      ],
      "args": []
    }
  ],
  "metadata": {
    "address": "EeUXXNXa5S7Mv6aLFmMTxWybThR1iSEoMPcEL1dpZPKg"
  }
};

export const IDL: SolvaDeposit = {
  "version": "0.0.1",
  "name": "solva_deposit",
  "instructions": [
    {
      "name": "new",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        }
      ],
      "args": [
        {
          "name": "platformpubkey",
          "type": "publicKey"
        },
        {
          "name": "caseamountlamports",
          "type": "u64"
        },
        {
          "name": "expertdepositlamports",
          "type": "u64"
        },
        {
          "name": "clientdepositlamports",
          "type": "u64"
        },
        {
          "name": "expirationtimestamp",
          "type": "u64"
        }
      ]
    },
    {
      "name": "expertCancelCase",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        }
      ],
      "args": []
    },
    {
      "name": "clientActivateCase",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        }
      ],
      "args": [
        {
          "name": "clientdepositlamports",
          "type": "u64"
        }
      ]
    },
    {
      "name": "expertExpireCase",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        }
      ],
      "args": []
    },
    {
      "name": "platformForceCloseCaseForExpert",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        }
      ],
      "args": []
    },
    {
      "name": "platformForceCloseCaseForClient",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        }
      ],
      "args": []
    },
    {
      "name": "indemniteeRecieveCompensation",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        }
      ],
      "args": []
    },
    {
      "name": "clientCompleteCase",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        }
      ],
      "args": []
    },
    {
      "name": "expertGetIncome",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        }
      ],
      "args": []
    },
    {
      "name": "platformCloseCase",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        }
      ],
      "args": []
    }
  ],
  "metadata": {
    "address": "EeUXXNXa5S7Mv6aLFmMTxWybThR1iSEoMPcEL1dpZPKg"
  }
};