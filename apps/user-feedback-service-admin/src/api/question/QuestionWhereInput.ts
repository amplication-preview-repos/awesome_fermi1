import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QuestionWhereInput = {
  answer?: StringNullableFilter;
  id?: StringFilter;
  text?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
