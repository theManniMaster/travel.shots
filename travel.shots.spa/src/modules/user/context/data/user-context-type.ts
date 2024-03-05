import { Dispatch } from "react";
import { UserActionList } from "../..";
import { UserState } from "../../data";

/**
 * User context type.
 */
type UserContextType = {
    state: UserState;
    dispatch: Dispatch<UserActionList>;
};

export type { UserContextType };