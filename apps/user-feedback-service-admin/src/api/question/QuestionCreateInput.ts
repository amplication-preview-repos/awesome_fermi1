import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QuestionCreateInput = {
  answer?: string | null;
  text?: string | null;
  user?: UserWhereUniqueInput | null;
};
