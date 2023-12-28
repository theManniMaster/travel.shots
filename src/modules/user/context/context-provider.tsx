import { createContext, useReducer, Dispatch, Context, ReactNode, FC } from "react";
import { UserModel, createInitialState } from "../data";
import { UserActionList, userReducer } from "../reducer";

/**
 * User context type.
 */
type UserContextType = {
    user: UserModel;
    dispatch: Dispatch<UserActionList>;
};

/**
 * User provider props data.
 */
type UserProviderProps = {
    children: ReactNode;
};

/**
 * User context.
 */
const UserContext: Context<UserContextType> = createContext<UserContextType>({
    user: createInitialState(),
    dispatch: () => null
});

/**
 * Functional component serving as a provider for the user context.
 * @param props User provider props.
 * @returns UserProvider functional component.
 */
const UserProvider: FC<UserProviderProps> = (props: UserProviderProps) => {
    const { children } = props;
    const [user, dispatch] = useReducer(userReducer, createInitialState());

    return (
        <UserContext.Provider value={{user, dispatch}}>
            { children }
        </UserContext.Provider>
    );
};

export default UserProvider;
export { UserContext };
export type { UserContextType };