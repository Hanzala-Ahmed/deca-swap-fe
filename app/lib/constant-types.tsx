type NAV_LINKS = {
  title: string;
  href: string;
  icon: string;
};

type TABS = {
  title: string;
};

type TOKENS_TYPE = {
  name: string;
  symbol: string;
  icon: string;
  popular: boolean;
  value?: number;
  status?: 'increase' | 'decrease';
  statusAmount?: number;
};

type STREAM = {
  amount: number;
  token: string;
};

type STREAMS = {
  sell: STREAM;
  buy: STREAM;
};
