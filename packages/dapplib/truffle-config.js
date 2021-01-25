require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom produce bone food track return stick modify coral light army general'; 
let testAccounts = [
"0x2ee6ecfec73fe6d11edf7d6a1147b76178cb79ce600ec41356ae36949a29e250",
"0xb5c9d7acc7738009a3b0f0a387a2c49ef6d9234bfe99578b8c3f7ea7c3c3d941",
"0x37cca2151dd727944023194e6cd2232e3177bafc63bc8efda8533ef1014367a9",
"0xa981e2e86245b3b0389604c3afe136439ee68fa808bf2df3beb1b3dc33efd0fe",
"0xe7ce057782c490ee789ca014109a44a0ad5f2308b3d286d7b09f6963b4e1f43b",
"0x803b19b12847eb98040907ffc57e1301e2251cf062a19dd15af2879ba20c2058",
"0x73326e099269fb4af7f83985111231ad7b87936c9f459644e782008c18b7ebfe",
"0xe493f4a4140262710dd664fd32e17076dc7d7388c695059ca0d549696a21c0c5",
"0x8a18cd06c31e1747db0007a5de717f0a229d17f639fbcf8fbc43a1406b6f2327",
"0xa72ac2081d8c1542558de8aaefbd30d1dbbbd62cd8e0e6a28b73d13f7ee3f376"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
