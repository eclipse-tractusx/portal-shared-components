# Catena-X Portal Shared UI Components

Contains the Shared UI Components that are used to build the [Portal Frontend](https://github.com/eclipse-tractusx/portal-frontend).
Detailed documentation: https://eclipse-tractusx.github.io/portal-shared-components/

## User documentation

To use components in your own project follow this guide.
First create a new react app and add dependencies for the library and Material UI.
We are using yarn and TypeScript, if you prefer npm/npx or JavaScript use those.

    yarn create vite sample-shared-components --template react-ts
    cd sample-shared-components
    yarn
    yarn add @catena-x/portal-shared-components @mui/icons-material @mui/material
    yarn dev

Install dependencies and start the development server

    yarn start

Edit `src/main.tsx` and wrap the `App` with the CX `SharedThemeProvider` context

    import { SharedThemeProvider } from '@catena-x/portal-shared-components'

    ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    ).render(
        <React.StrictMode>
            <SharedThemeProvider>
                <App />
            </SharedThemeProvider>
        </React.StrictMode>
    )

Edit `src/index.css` and add this stylings

Note: replace <YOUR_PORTAL_HOSTNAME> with your installation host name.

    @font-face {
        font-family: "LibreFranklin-SemiBold";
        font-display: block;
        src: url("https://<YOUR_PORTAL_HOSTNAME>/assets/fonts/LibreFranklin-VariableFont_wght.ttf") format("truetype");
        font-weight: 600;
    }
    @font-face {
        font-family: "LibreFranklin-Medium";
        font-display: block;
        src: url("https://<YOUR_PORTAL_HOSTNAME>/assets/fonts/LibreFranklin-VariableFont_wght.ttf") format("truetype");
        font-weight: 500;
    }
    @font-face {
        font-family: "LibreFranklin";
        font-display: block;
        src: url("https://<YOUR_PORTAL_HOSTNAME>/assets/fonts/LibreFranklin-VariableFont_wght.ttf") format("truetype");
        font-weight: 400;
    }
    @font-face {
        font-family: "LibreFranklin-Light";
        font-display: block;
        src: url("https://<YOUR_PORTAL_HOSTNAME>/assets/fonts/LibreFranklin-VariableFont_wght.ttf") format("truetype");
        font-weight: 300;
    }

    body {
        margin: 0;
        font-family: 'LibreFranklin', 'Libre Franklin', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: black;
        font-weight: 300;
    }

Open `App.tsx` and replace the code with this example

    import { Button } from "@catena-x/portal-shared-components"

    const App = () => <Button onClick={() => { alert('clicked') }}>
      Click me
    </Button>

    export default App

## Developer documentation

### Steps to run local storybook

    yarn
    yarn start

## License

Distributed under the Apache 2.0 License.
See [LICENSE](./LICENSE) for more information.
