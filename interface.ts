interface BidsType {
  id: string;
  name: string;
  price: number;
  image: any;
  date: string;
}

export interface NFTCardType {
  id: string;
  name: string;
  creator: string;
  price: number;
  image: any;
  description: string;
  bids: BidsType[];
}

