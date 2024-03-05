import { Component, ReactNode } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import { Header, NavigationPanel } from "../ui";

/**
 * Landing page props.
 */
interface Props extends WithTranslation {

}

/**
 * Landing page component.
 */
class LandingPage extends Component<Props> {
    render(): ReactNode {
        const { t } = this.props;

        return (
            <>
                <Header
                    text={t("welcomeFullName", { firstName: "Haytham", lastName: "Kenway" })}
                    subText={t("whatToDo")}
                />
                <NavigationPanel />
            </>
        );
    }
}

const LandingPageComponent = withTranslation("landingPage")(LandingPage);
export default LandingPageComponent;