import { Component, ReactNode } from "react";
import { NavigationItem } from "../types";
import { Link } from "react-router-dom";

/**
 * Icon props.
 */
interface Props {
    item: NavigationItem
    onHover: (description: string) => void;
    onHoverOut: () => void;
};

/**
 * Icon ui component.
 */
class NavigationItemLabel extends Component<Props> {
    /**
     * Handle mouse hover event.
     */
    handleOnMouseOver = () => {
        const { onHover, item } = this.props;
        onHover(item.description);
    };

    /**
     * Handle mouse out event.
     */
    handleOnMouseOut = () => {
        const { onHoverOut } = this.props;
        onHoverOut();
    };

    render(): ReactNode {
        const { item } = this.props;

        return (
            <Link to={item.path} onMouseOver={this.handleOnMouseOver} onMouseOut={this.handleOnMouseOut}>
                <>
                    {item.icon}
                    {item.label}
                </>
            </Link>
        );
    }
};

export default NavigationItemLabel;