import { User } from "../user/User";

export type Question = {
  answer: string | null;
  createdAt: Date;
  id: string;
  text: string | null;
  updatedAt: Date;
  user?: User | null;
};
