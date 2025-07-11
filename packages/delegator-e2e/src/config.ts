import dotenv from 'dotenv';
import { Hex } from 'viem';
export { anvil as chain } from 'viem/chains';

dotenv.config({ path: './.env.ci' });

export const deployPk = process.env['DEPLOY_PK']! as Hex;
export const nodeUrl = process.env['NODE_URL']!;
export const bundlerUrl = process.env['BUNDLER_URL']!;
export const paymasterUrl = process.env['PAYMASTER_URL']!;
export const pimlicoAPIKey = 'PAYMASTER-KEY';
