import { Component, ReactNode } from "react";
import { Row, Typography } from "antd";

const { Title } = Typography;

/**
 * Header props.
 */
interface Props {
    text: string;
    subText?: string;
}

/**
 * Header ui component.
 */
class Header extends Component<Props> {
    render(): ReactNode {
        const { text, subText } = this.props;

        return (
            <>
                <Row>
                    <Title>{text}</Title>
                </Row>
                { 
                    subText && 
                    <Row>
                        <Title level={3}>{subText}</Title> 
                    </Row>
                }
            </>
        );
    }
}

export default Header;