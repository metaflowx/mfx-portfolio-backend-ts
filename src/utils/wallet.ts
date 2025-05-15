import { generatePrivateKey, privateKeyToAccount } from 'viem/accounts';
import { Keypair } from '@solana/web3.js';
import { TronWeb } from 'tronweb';
import crypto from 'crypto';


export const createEvmWallet = () => {
    // Generate a new private key
    const privateKey = generatePrivateKey();

    // Get wallet address from private key
    const account = privateKeyToAccount(privateKey);

    return {
        address: account.address.toString(),
        privateKey: privateKey,
    };
};

export const createTronWallet = () => {
    const privateKey = crypto.randomBytes(32).toString('hex');
    const tronWeb = new TronWeb({ fullHost: 'https://api.trongrid.io' });
    const address = tronWeb.address.fromPrivateKey(privateKey);

    return {
        address,
        privateKey
    };
};


export const createSolanaWallet = () => {
    const keypair = Keypair.generate();

    return {
        address: keypair.publicKey.toBase58(), // Convert public key to Base58 format
        privateKey: Buffer.from(keypair.secretKey).toString('hex') // Convert secret key to hex
    };
};