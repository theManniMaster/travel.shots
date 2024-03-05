import { SVGProps } from "react";

/**
 * Navigation panel items type.
 */
type NavigationItem = {
    /**
     * Item label.
     */
    label: string;

    /**
     * Item description.
     */
    description: string;

    /**
     * Relative url path.
     */
    path: string;

    /**
     * Item icon.
     */
    icon: SVGProps<SVGSVGElement>;
};

export type { NavigationItem };