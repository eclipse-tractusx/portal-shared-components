# Catena-X Portal Shared UI Components

Contains the Shared UI Components that are used to build the [Portal Frontend](https://github.com/eclipse-tractusx/portal-frontend) and other applications in the Catena-X ecosystem.

- Source Code: https://github.com/eclipse-tractusx/portal-shared-components
- NPM Library: https://npmjs.com/package/@catena-x/portal-shared-components
- Components Storybook: https://eclipse-tractusx.github.io/portal-shared-components/

## User documentation

To use components in your own project follow this guide.
First create a new react app and add dependencies for the library and Material UI.
We are using yarn and TypeScript, if you prefer a different setup like npm/npx or
JavaScript there are other templates available.

    yarn create vite sample-shared-components --template react-ts
    cd sample-shared-components
    yarn add @catena-x/portal-shared-components @mui/icons-material @mui/material

Then start the development server and open the browser

    yarn dev
    # press o + enter

Check the default Vite React App in your browser which shows a button counting the
number of times it has been clicked. Now let's modify this App so it's using the
Shared Components instead of default HTML elements.

Edit `src/main.tsx` to import and wrap the `App` with the Catena-X `SharedThemeProvider` context.

```diff
+ import { SharedThemeProvider } from '@catena-x/portal-shared-components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
+   <SharedThemeProvider>
      <App />
+   </SharedThemeProvider>
  </React.StrictMode>,
)
```

Open `src/App.tsx` to import the Button component and replace the default button with it.

```diff
+ import { Button } from '@catena-x/portal-shared-components'
...
-   <button ...>
+   <Button ...>
...
-   </button>
+   </Button>
```

Then check in your browser how the appearance of the button has changed from
a dark more rectangle shaped to a larger blue more rounded one. However the
behavior of the button hasn't changed.

Now let's have a look at a more complex example. In a first step we remove the
stylings because the components are coming with Catena-X UI styling presets.

Remove the css import from `src/main.tsx`

```diff
+ import './index.css'
```

Add two more libraries

    yarn add amount-to-words @javascript-packages/roman-numerals

Then edit `src/App.tsx` again and overwrite the content with this example.

```diff
import { useState } from 'react'
import { Button, Cards, ViewSelector } from '@catena-x/portal-shared-components'
import { numberToWords } from 'amount-to-words'
import { toRoman } from '@javascript-packages/roman-numerals'

const isPrime = (num: number) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0)
            return false
    return num > 1
}

enum ViewType {
    ALL = 'ALL',
    ODD = 'ODD',
    EVEN = 'EVEN',
    PRIME = 'PRIME',
}

const viewFilter: Record<ViewType, (n: number) => boolean> = {
    ALL: () => true,
    ODD: (n) => n % 2 === 1,
    EVEN: (n) => n % 2 === 0,
    PRIME: isPrime,
}

const svgtext = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" style="background-color:green"><style>text{font:36px bold;stroke-linejoin:round;stroke:#ffa600;fill:#b3cb2d;text-anchor:middle;dominant-baseline:middle;stroke-width:4px;paint-order:stroke;}</style><text x="32" y="36">N</text></svg>'

const generateImage = (n: number) => `data:image/svg+xml,${encodeURIComponent(svgtext.replace('N', n.toString()))}`

const generateCard = (n: number) => ({
    title: numberToWords(n),
    subtitle: n === 0 ? '0' : toRoman(n),
    subscriptionStatus: isPrime(n) ? 'Prime' : undefined,
    description: 'This is a description of the card',
    image: {
        src: generateImage(n),
    }
})

const cardsArgs = {
    variant: 'compact',
    expandOnHover: true,
    imageSize: 'medium',
    imageShape: 'round',
    buttonText: 'View',
}

export default function App() {
    const [count, setCount] = useState<number>(1)
    const [view, setView] = useState<ViewType>(ViewType.ALL)

    return (
        <>
            <Button onClick={() => { setCount(() => count + 1) }}> count is {count} </Button>
            <ViewSelector views={
                Object.keys(ViewType)
                    .map(
                        (buttonText) => ({
                            buttonText,
                            buttonValue: buttonText,
                            onButtonClick: (e: React.MouseEvent) => { setView(e.target.value as ViewType) },
                        })
                    )
            }
                activeView={view}
            />
            <Cards {...cardsArgs} items={
                new Array(count)
                    .fill(0)
                    .map((_, i) => i)
                    .filter(viewFilter[view])
                    .map(generateCard)
            } />
        </>
    )
}
```

This example shows several components working together. Every button click
adds a new card for that number and you can filter the cards by various criteria.

## Developer documentation

### Migration doumentation

Please check [migration guide](/docs/admin/migration/migration.md) for information about library version upgrades.

### Steps to run local storybook and dev server

    yarn
    yarn start:storybook
    yarn start:dev

## License

Distributed under the Apache 2.0 License.
See [LICENSE](./LICENSE) for more information.
