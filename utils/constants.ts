import { ChainId, Token } from "@pyroswap/sdk";

// BEP-20 addresses.
export const CAKE = "0x7e6dB6BA3ee86907C59fd4538e1040Cc7821Aa00";
export const WETH = "0xc778417E063141139Fce010982780140Aa0cD5Ab";
export const DEAD = "0x000000000000000000000000000000000000dEaD";

// Contract addresses.
export const CAKE_ETH_FARM = "0x6d427a0C38A3c07E261561ea54f2A5D3F20B9F58";
export const MASTERCHEF_CONTRACT = "0x58EcD5A62A87aB6f71e5d3f519c293FbC44703CB";
export const LOTTERY_CONTRACT = "0xE4cE0B02B489D3790a9c6B5705603408484E15f0";
export const MULTICALL_CONTRACT = "0x51A86f7c855e2Ccef4DeCE8b90409C2a639641E5";

// PancakeSwap SDK Token.
export const CAKE_TOKEN = new Token(ChainId.MAINNET, CAKE, 18);
export const WETH_TOKEN = new Token(ChainId.MAINNET, WETH, 18);
export const CAKE_ETH_TOKEN = new Token(ChainId.MAINNET, CAKE_ETH_FARM, 18);
