import { Question } from "../question/Question";
import { JsonValue } from "type-fest";
import { Video } from "../video/Video";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  name: string | null;
  phoneNumber: string | null;
  questions?: Array<Question>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  videos?: Array<Video>;
};
