import { UserModel } from ".";

/**
 * User state type.
 */
type UserState = {
    user: UserModel;
};

/**
 * Create initial (empty) user state.
 * @returns User state.
 */
function createInitialState(): UserState {
    return { user: new UserModel() };
}

export type { UserState };
export default createInitialState;