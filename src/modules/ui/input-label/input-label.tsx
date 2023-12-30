import { Component, ReactNode } from "react";
import { Input, Typography } from "antd";

const { Title } = Typography;

/**
 * Input label props.
 */
interface Props {
    label: string;
}

/**
 * Input label component.
 */
class InputLabel extends Component<Props> {

    render(): ReactNode {
        const { label } = this.props;

        return (
            <>
                <Title level={1}>{label}</Title>
                <Input />
            </>
        );
    }
}

export default InputLabel;