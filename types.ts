export enum Permissions {
  ADMIN,
  READ_ONLY
}

export type User = {
  Name: {
    firstName: string;
    lastName: string;
  };
  permissions: Permissions;
  isReturning: boolean;
  age: number;
  stayedAt: string[];
};

export type Review = {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
};

export type Property = {
  image?: string;
  title: string;
  price: number;
  address: {
    firstLine: string;
    city: string;
    code: number;
    country: string;
  }
  contact: [number, string];
  isAvailable: boolean;
};

