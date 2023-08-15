import { CssBaseline, ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/styled-engine";
import { MemoryRouter } from "react-router";
import { theme } from "../src/theme/theme";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "./preview.css";

const pocketPayViewPort = {
    PocketPay: {
        name: "PocketPay",
        styles: {
            width: "1366px",
            height: "768px",
        },
        type: "desktop",
        layout: "fullscreen",
        parameters: {
            layout: "fullscreen",
        },
    },
};

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    viewport: {
        viewports: { ...INITIAL_VIEWPORTS, ...pocketPayViewPort },
    },
};
export const decorators = [
    (Story) => (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <MemoryRouter initialEntries={["/"]}>
                    <Story />
                </MemoryRouter>
            </ThemeProvider>
        </StyledEngineProvider>
    ),
];
