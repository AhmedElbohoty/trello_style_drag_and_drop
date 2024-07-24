export type UserId = string;

export type User = {
  id: UserId;
  name: string;
  location: string;
  phone: string;
  rate: number;
  status: 0 | 1 | 2;
  is_new?: boolean;
  is_followed?: boolean;
};
