export enum CustomerType {
  SILVER = 0,
  GOLD = 1,
  PLATINUM = 2,
}

export type Custumer = {
  id: number;
  name: string;
  type: CustomerType;
};
