import { createContext, useReducer, Context, FC } from "react";
import { createInitialState } from "../data";
import { userReducer } from "../reducer";
import { UserContextType, UserProviderProps } from "./data";

/**
 * User context.
 */
const UserContext: Context<UserContextType> = createContext<UserContextType>({
    state: createInitialState(),
    dispatch: () => null
});

/**
 * Functional component serving as a provider for the user context.
 * @param props User provider props.
 * @returns UserProvider functional component.
 */
const UserProvider: FC<UserProviderProps> = (props: UserProviderProps) => {
    const { children } = props;
    const [state, dispatch] = useReducer(userReducer, createInitialState());

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
export { UserContext };