import { UserModel } from ".";

/**
 * Create initial (empty) user state.
 * @returns User state.
 */
function createInitialState(): UserModel {
    return new UserModel();
}

export default createInitialState;