import { ComponentType, useContext } from "react";
import { UserContext } from "./context-provider";
import { UserContextType } from "./data";

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