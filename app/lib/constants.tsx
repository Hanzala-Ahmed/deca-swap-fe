import { title } from 'process';

export const NAV_LINKS: NAV_LINKS[] = [
  {
    title: 'Home',
    href: '/',
    icon: '/icons/home.svg',
  },
  {
    title: 'Swaps',
    href: '/swaps',
    icon: '/icons/swaps.svg',
  },
  {
    title: 'Pools',
    href: '/pools',
    icon: '/icons/pools.svg',
  },
];

export const TOKENS: TOKENS_TYPE[] = [
  {
    name: 'Ethereum',
    symbol: 'ETH',
    icon: '/tokens/eth.svg',
    popular: true,
    value: 0.055,
    status: 'increase',
    statusAmount: 0.005,
  },
  {
    name: 'USDT',
    symbol: 'USDT',
    icon: '/tokens/usdt.svg',
    popular: false,
    value: 0.055,
    status: 'decrease',
    statusAmount: 1.353,
  },
  {
    name: 'USDC BSC',
    symbol: 'USDC',
    icon: '/tokens/usdc.svg',
    popular: true,
    value: 0.055,
    status: 'increase',
    statusAmount: 0.005,
  },
  {
    name: 'W Bitcoin',
    symbol: 'WBTC',
    icon: '/tokens/wbtc.svg',
    popular: false,
    value: 0.055,
    status: 'decrease',
    statusAmount: 1.353,
  },
  {
    name: 'Binance Coin',
    symbol: 'BTRST',
    icon: '/tokens/btrst.svg',
    popular: true,
    value: 0.055,
    status: 'increase',
    statusAmount: 0.005,
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    icon: '/tokens/eth.svg',
    popular: false,
    value: 0.055,
    status: 'decrease',
    statusAmount: 1.353,
  },
  {
    name: 'USDT',
    symbol: 'USDT',
    icon: '/tokens/usdt.svg',
    popular: true,
    value: 0.055,
    status: 'increase',
    statusAmount: 0.005,
  },
  {
    name: 'USDC BSC',
    symbol: 'USDC',
    icon: '/tokens/usdc.svg',
    popular: false,
    value: 0.055,
    status: 'decrease',
    statusAmount: 1.353,
  },
  {
    name: 'W Bitcoin',
    symbol: 'WBTC',
    icon: '/tokens/wbtc.svg',
    popular: true,
    value: 0.055,
    status: 'increase',
    statusAmount: 0.005,
  },
  {
    name: 'Binance Coin',
    symbol: 'BTRST',
    icon: '/tokens/btrst.svg',
    popular: false,
    value: 0.055,
    status: 'decrease',
    statusAmount: 1.353,
  },
];

export const WALLET_TABS: TABS[] = [
  {
    title: 'Stream',
  },
  {
    title: 'Tokens',
  },
];

export const SEL_SECTION_TABS: TABS[] = [
  {
    title: 'Market',
  },
  {
    title: 'Limit',
  },
];
