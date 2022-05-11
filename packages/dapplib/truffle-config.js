require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'include enroll sure tribe stumble deny random uncle hundred light army genuine'; 
let testAccounts = [
"0x595133a71bcd71412bbfbed228d18a23232294b364d328f8b09c5a70bea777e7",
"0x27d9f9d18eedfe9c788ebc4326a21b1a55ccf331853d41ac1eed5eb0371b1a02",
"0x8ad414767067add31d9124afdacac1fa23e54d5b5c9f4c4d9f59362d27fc3705",
"0x8b6a7521f179f88df6093cf6968c66dd77136cf5af433071e07815e630130859",
"0xcbc65cfc5affcd46d6bfdd5248ed60d9cd9ab0f54efd82912ccbd9165165512a",
"0x11dca6164b7a181d6a2c3c6ee36c92b81815cd5efaf0ce2c74e6945af4025a95",
"0x3fb21391bdd898624403be182c3e7da31d7c2bc7b08bb4447278f7afe2950621",
"0xf23c16821098508cabaff63728bb1cbf3fc5d9cb12aee65fcb391388d6a74935",
"0xd6fb906626eff79bf70bd227e75a56cc9282894a4223b7be462d4197bac9c5a4",
"0x0a91f35536b027209a428fd92600b359be9a94d499f6267266bdb56b2cf32baa"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


