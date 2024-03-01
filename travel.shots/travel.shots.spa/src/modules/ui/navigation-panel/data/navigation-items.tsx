import { NavigationOptions } from ".";
import i18next from "../../../translations/i18next";
import { NavigationItem } from "../types";

i18next.setDefaultNamespace("ui");

/**
 * List of navigation items.
 */
const NavigationItems: NavigationItem[] = [
    {
        label: i18next.t(NavigationOptions.Insights),
        description: i18next.t("insightsPanelOptionDescription"),
        path: "/home/insights",
        icon: 
        <svg xmlns="http://www.w3.org/2000/svg" width="88" height="68" viewBox="0 0 88 68" fill="none">
            <path d="M80 20C74.2 20 70.96 25.76 72.28 30.04L58.08 44.28C56.88 43.92 55.12 43.92 53.92 44.28L43.72 34.08C45.08 29.8 41.84 24 36 24C30.2 24 26.92 29.76 28.28 34.08L10.04 52.28C5.76 50.96 0 54.2 0 60C0 64.4 3.6 68 8 68C13.8 68 17.04 62.24 15.72 57.96L33.92 39.72C35.12 40.08 36.88 40.08 38.08 39.72L48.28 49.92C46.92 54.2 50.16 60 56 60C61.8 60 65.08 54.24 63.72 49.92L77.96 35.72C82.24 37.04 88 33.8 88 28C88 23.6 84.4 20 80 20Z" fill="#DB7D27" fill-opacity="0.74"/>
            <path d="M56 24L59.76 15.72L68 12L59.76 8.28L56 0L52.32 8.28L44 12L52.32 15.72L56 24Z" fill="#DB7D27" fill-opacity="0.74"/>
            <path d="M10 32L12 24L20 22L12 20L10 12L8 20L0 22L8 24L10 32Z" fill="#DB7D27" fill-opacity="0.74"/>
        </svg>
    },
    {
        label: i18next.t(NavigationOptions.Images),
        description: i18next.t("imagesPanelOptionDescription"),
        path: "/home/images",
        icon: 
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="64" viewBox="0 0 80 64" fill="none">
                <path d="M8 0C3.62775 0 0 3.62775 0 8V56C0 60.3723 3.62775 64 8 64H72C76.3723 64 80 60.3723 80 56V8C80 3.62775 76.3723 0 72 0H8ZM8 8H72V56H8V8ZM50 28L36 44L26 34L15.1094 48H65L50 28Z" fill="#6B75DB" fill-opacity="0.74"/>
            </svg>
    },
    {
        label: i18next.t(NavigationOptions.Token),
        description: i18next.t("tokenPanelOptionDescription"),
        path: "/home/token",
        icon: 
            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="56" viewBox="0 0 96 56" fill="none">
                <path d="M88 56H64V40H53.28C48.72 49.68 38.88 56 28 56C12.56 56 0 43.44 0 28C0 12.56 12.56 0 28 0C38.88 0 48.68 6.32 53.28 16H96V40H88V56ZM72 48H80V32H88V24H47.76L46.84 21.32C44.04 13.36 36.44 8 28 8C16.96 8 8 16.96 8 28C8 39.04 16.96 48 28 48C36.44 48 44.04 42.64 46.84 34.68L47.76 32H72V48ZM28 40C21.4 40 16 34.6 16 28C16 21.4 21.4 16 28 16C34.6 16 40 21.4 40 28C40 34.6 34.6 40 28 40ZM28 24C25.8 24 24 25.8 24 28C24 30.2 25.8 32 28 32C30.2 32 32 30.2 32 28C32 25.8 30.2 24 28 24Z" fill="#149ECA" fill-opacity="0.74"/>
            </svg>
    },
    {
        label: i18next.t(NavigationOptions.About),
        description: i18next.t("aboutPanelOptionDescription"),
        path: "/home/about",
        icon: 
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="80" viewBox="0 0 72 80" fill="none">
                <path d="M36 0C18.3742 0 4 14.3742 4 32V36V39.6094C1.70516 41.7976 0 44.6126 0 48C0 52.9679 3.4302 56.6516 7.77344 58.4531C12.9776 70.8924 23.4009 80 36 80C48.5991 80 59.0224 70.8924 64.2266 58.4531C68.5698 56.6516 72 52.9679 72 48C72 44.6126 70.2948 41.7976 68 39.6094V36V32C68 14.3742 53.6258 0 36 0ZM36 8C46.6224 8 55.5625 14.8295 58.7422 24.3516C57.8568 24.1401 56.946 24 56 24H16C15.054 24 14.1432 24.1401 13.2578 24.3516C16.4375 14.8295 25.3776 8 36 8ZM16 32H56C58.2601 32 60 33.7399 60 36V40V43.4062L62.0078 44.5547C63.2224 45.2519 64 46.46 64 48C64 50.0605 62.5247 51.6508 60.5547 51.9219L58.2109 52.25L57.3594 54.4531C53.2362 65.198 45.0338 72 36 72C26.9662 72 18.7638 65.198 14.6406 54.4531L13.7891 52.25L11.4453 51.9219C9.47532 51.6508 8 50.0605 8 48C8 46.46 8.77764 45.2519 9.99219 44.5547L12 43.4062V40V36C12 33.7399 13.7399 32 16 32Z" fill="#44AC99" fill-opacity="0.74"/>
            </svg>
    }
];

export default NavigationItems;