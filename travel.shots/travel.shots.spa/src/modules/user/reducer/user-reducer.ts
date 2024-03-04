import { ActionMap } from "../../helpers";
import { UserModel, UserState } from "../data";

/**
 * User actions to modify state.
 */
enum UserActions {
    SET_FIRST_NAME = "SET_FIRST_NAME",
    SET_LAST_NAME = "SET_LAST_NAME",
    SET_EMAIL = "SET_EMAIL",
    SET_PASSWORD = "SET_PASSWORD",
    SET_IS_LOGGED_IN = "SET_IS_LOGGED_IN",
}

/**
 * User actions to parameters mapping.
 */
type UserPayload = {
    [UserActions.SET_FIRST_NAME] : {
        firstName: string;
    };
    [UserActions.SET_LAST_NAME] : {
        lastName: string;
    };
    [UserActions.SET_EMAIL] : {
        email: string;
    };
    [UserActions.SET_PASSWORD] : {
        password: string;
    };
    [UserActions.SET_IS_LOGGED_IN] : {
        isLoggedIn: boolean;
    };
};

/**
 * User actions + parameters type.
 */
type UserActionList = ActionMap<UserPayload>[keyof ActionMap<UserPayload>];

/**
 * Reducer function to update user's state.
 * @param state User state.
 * @param action User action list.
 * @returns Modified user state.
 */
function userReducer(state: UserState, action: UserActionList): UserState {
    return {
        user: reducer(state.user, action)
    };
}

/**
 * Private helper function for userReducer.
 * @param user User model.
 * @param action User action list.
 * @returns Modified user.
 */
function reducer(user: UserModel, action: UserActionList): UserModel {
    switch (action.type) {
        case UserActions.SET_FIRST_NAME: {
            const { firstName } = action.payload;
            return user.setFirstName(firstName);
        }
        case UserActions.SET_LAST_NAME: {
            const { lastName } = action.payload;
            return user.setLastName(lastName);
        }
        case UserActions.SET_EMAIL: {
            const { email } = action.payload;
            return user.setEmail(email);
        }
        case UserActions.SET_PASSWORD: {
            const { password } = action.payload;
            return user.setPassword(password);
        }
        case UserActions.SET_IS_LOGGED_IN: {
            const { isLoggedIn } = action.payload;
            return user.setIsLoggedIn(isLoggedIn);
        }
        default: {
            return user;
        }
    }
}

export { UserActions, userReducer };
export type { UserActionList };