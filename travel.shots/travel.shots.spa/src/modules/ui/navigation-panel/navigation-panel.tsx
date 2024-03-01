import { Component, ReactNode } from "react";
import { NavigationItems } from "./data";
import { NavigationItemLabel } from "./components";
import { NavigationItem } from "./types";
import { Col, Row } from "antd";

/**
 * Navigation panel props.
 */
interface Props {

};

/**
 * Navigation panel state.
 */
interface State {
    selectedOptionDescription: string;
};

/**
 * Navigation Panel ui component.
 */
class NavigationPanel extends Component<Props, State> {
    /**
     * Constructor.
     */
    constructor(props: Props) {
        super(props);
        
        this.state = {
            selectedOptionDescription: ""
        };
    };

    /**
     * Handle item hover event.
     * @param description Hovered item description.
     */
    handleOnNavigationItemHover = (description: string) => {
        this.setState({ selectedOptionDescription: description });
    };

    /**
     * Handle item hover out event.
     */
    handleOnNavigationItemHoverOut = () => {
        this.setState({ selectedOptionDescription: "" });
    };

    render(): ReactNode {
        const { selectedOptionDescription } = this.state;

        return (
            <>
                <Row>
                    { selectedOptionDescription }
                </Row>
                <Row>
                    { 
                        NavigationItems.map((item: NavigationItem) => 
                            <NavigationItemLabel 
                                item={item} 
                                onHover={this.handleOnNavigationItemHover}
                                onHoverOut={this.handleOnNavigationItemHoverOut}
                            />
                        )
                    }
                </Row>
            </>
        );
    };
};

export default NavigationPanel;