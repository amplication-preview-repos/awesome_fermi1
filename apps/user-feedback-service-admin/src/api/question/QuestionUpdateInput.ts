import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QuestionUpdateInput = {
  answer?: string | null;
  text?: string | null;
  user?: UserWhereUniqueInput | null;
};
