import { ChangeEvent, ChangeEventHandler, Component, ReactNode } from "react";
import { Input, Typography } from "antd";
import { WithTranslation, withTranslation } from "react-i18next";

const { Title } = Typography;

/**
 * Input label props.
 */
interface Props extends WithTranslation {
    label: string;
    value: string | undefined | null;
    onChange: ((value: string) => void) | undefined;
}

/**
 * Input label component.
 */
class InputLabel extends Component<Props> {

    /**
     * Handle value changes.
     * @param value Updated value
     */
    handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { onChange } = this.props;

        if (onChange)
            onChange(e.target.value);
    };

    render(): ReactNode {
        const { label, value, t } = this.props;

        return (
            <>
                <Title level={1}>{label}</Title>
                <Input value={value ?? ""} placeholder={t("typeHere")} onChange={this.handleOnChange}/>
            </>
        );
    }
}

export default withTranslation("ui")(InputLabel);