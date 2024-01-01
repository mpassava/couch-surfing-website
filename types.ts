export type User = {
  Name: {
    firstName: string;
    lastName: string;
  };
  isReturning: boolean;
  age: number;
  stayedAt: string[];
};

export type Review = {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
}
