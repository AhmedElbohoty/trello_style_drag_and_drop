import { UserId } from "types/user";

export type BoardId = string;

export type Board = {
  id: BoardId;
  name: string;
  total: number;
  rejected: number;
  userIds: UserId[];
  is_add_applicants?: boolean;
};
