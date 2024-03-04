import { UserContextType } from "../data";

/**
 * Interface including user-context type.
 */
interface WithUser {
    userContext: UserContextType;
}

export type { WithUser };