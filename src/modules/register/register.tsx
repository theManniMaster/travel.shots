import { Component, ReactNode } from "react";
import { InputLabel } from "../ui";
import { UserActions, WithUser, withUser } from "../user";
import { WithTranslation, withTranslation } from "react-i18next";

/**
 * Register component props.
 */
interface Props extends WithUser, WithTranslation {

}

/**
 * User sign-up component.
 */
class Register extends Component<Props> {
    render(): ReactNode {
        const { t, userContext } = this.props;
        const { user, dispatch } = userContext;

        return (
            <>
                <InputLabel label={t("yourFirstName")} value={user.firstName} onChange={(value) => dispatch({type: UserActions.SET_FIRST_NAME, payload: {firstName: value}})}/>

                <h1>{user.firstName}</h1>
            </>
        );
    }
}

export default withUser(withTranslation("register")(Register));