import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VideoCreateInput = {
  url?: string | null;
  user?: UserWhereUniqueInput | null;
};
