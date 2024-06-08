import { QuestionCreateNestedManyWithoutUsersInput } from "./QuestionCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { VideoCreateNestedManyWithoutUsersInput } from "./VideoCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  password: string;
  phoneNumber?: string | null;
  questions?: QuestionCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
  videos?: VideoCreateNestedManyWithoutUsersInput;
};
