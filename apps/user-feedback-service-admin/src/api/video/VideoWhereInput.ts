import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VideoWhereInput = {
  id?: StringFilter;
  url?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
