import { QuestionUpdateManyWithoutUsersInput } from "./QuestionUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { VideoUpdateManyWithoutUsersInput } from "./VideoUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  password?: string;
  phoneNumber?: string | null;
  questions?: QuestionUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
  videos?: VideoUpdateManyWithoutUsersInput;
};
