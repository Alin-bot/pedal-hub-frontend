export enum GroupsetType {
  electronic = "electronic",
  mechanical = "mechanical",
}

export interface IGroupset {
  id: number;
  name: string;
  make: string;
  type: GroupsetType;
  line: string;
  model: string;
}
