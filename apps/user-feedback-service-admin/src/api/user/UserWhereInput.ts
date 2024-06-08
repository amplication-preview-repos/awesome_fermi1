import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuestionListRelationFilter } from "../question/QuestionListRelationFilter";
import { VideoListRelationFilter } from "../video/VideoListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  questions?: QuestionListRelationFilter;
  username?: StringFilter;
  videos?: VideoListRelationFilter;
};
