import { User } from "../user/User";

export type Video = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  url: string | null;
  user?: User | null;
};
