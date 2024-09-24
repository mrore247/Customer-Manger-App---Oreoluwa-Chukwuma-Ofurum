export interface ICustomer {
  id: number;
  name: string;
  username: string;
  address: IAddress;
  gender: string;
  phone: string;
  website: string;
  company: ICompany;
  email: string;
}

export interface IAddress {
  trim(): unknown;
  street: string;
  city: string;
  suite: string;
  zipcode: string;
  geo: IGeo;
}

export interface IGeo {
  lat: string;
  lng: string;
}

export interface ICompany {
  name: string;
  catchphrase: string;
  bs: string;
}

export type ICustomers = ICustomer[];
