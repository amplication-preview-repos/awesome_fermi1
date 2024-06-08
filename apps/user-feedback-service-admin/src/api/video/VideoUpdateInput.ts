import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VideoUpdateInput = {
  url?: string | null;
  user?: UserWhereUniqueInput | null;
};
