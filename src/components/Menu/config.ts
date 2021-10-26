import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://fomobaby.app/'
  },
  {
    label: 'Buy FOMOBABY',
    icon: 'FomobabyIcon',
    href: 'https://swap.fomobaby.app/#/swap?outputCurrency=0x82D6E409438E9c2eAEd8ceec4Bd95918cbd17c87',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://fomobaby.app/farms'
  },
  {
    label: 'Staking',
    icon: 'PoolIcon',
    href: 'https://fomobaby.app/staking'
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://fomobaby.app/lotto',
  },
  {
    label: 'NFT Marketplace',
    icon: 'NftIcon',
    href: 'https://fomobaby.app/nft',
  },
  {
    label: 'News Articles',
    icon: 'NewsIcon',
    href: 'https://fomobaby.app/news',
  },
  {
    label: 'Community',
    icon: 'CommunityIcon',
    href: 'https://fomobaby.app/community',
  },
  {
    label: 'Whitepaper',
    icon: 'WhitepaperIcon',
    href: 'https://fomobaby.app/files/White_Paper_Fomobaby.pdf',
  },
  {
    label: 'Contract',
    icon: 'ContractIcon',
    href: 'https://bscscan.com/address/0x82D6E409438E9c2eAEd8ceec4Bd95918cbd17c87',
  },
  {
    label: 'Audit',
    icon: 'AuditIcon',
    href: 'https://fomobaby.app/files/audit.pdf',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.goosedefi.com/lottery'
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'PancakeSwap',
  //       href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
  //     },
  //     {
  //       label: 'CoinGecko',
  //       href: 'https://www.coingecko.com/en/coins/goose-finance',
  //     },
  //     {
  //       label: 'CoinMarketCap',
  //       href: 'https://coinmarketcap.com/currencies/goose-finance/',
  //     },
  //     {
  //       label: 'AstroTools',
  //       href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
  //     },
  //   ]
  // },
  // {
  //   label: 'TechFund Audit',
  //   icon: 'AuditIcon',
  //   href: 'https://ebitempuraswap.com/files/TechFund_Audit.pdf',
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: "Github",
  //       href: "",
  //     },
  //     {
  //       label: "Docs",
  //       href: "",
  //     },
  //     {
  //       label: "Blog",
  //       href: "",
  //     },
  //   ],
  // },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
