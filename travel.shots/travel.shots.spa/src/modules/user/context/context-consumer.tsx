import { ComponentType, useContext } from "react";
import { UserContext, UserContextType } from "./context-provider";

/**
 * Interface including user-context type.
 */
interface WithUser {
    userContext: UserContextType;
};

/**
 * Higher order component to provide user context.
 * @param WrappedComponent Component to be enhanced with user context functionality.
 * @returns Enhanced component.
 */
const withUser = <T extends object>(WrappedComponent: ComponentType<T>) => {
    return (props: T) => {
        const userContext = useContext<UserContextType>(UserContext);

        return (
            <WrappedComponent
                {...props}
                userContext={userContext}
            />
        );
    }
};

export default withUser;
export type { WithUser };