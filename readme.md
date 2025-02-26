# Judix Icon Pack

A collection of beautiful, customizable React icons built with Vite, SVGR, and TypeScript.

## Features

- **React Components:** Each icon is exported as a React component for easy integration.
- **Customizable:** Control icon size, color, stroke, and more via props.
- **Tree-shakeable:** Import only the icons you need.
- **TypeScript Ready:** Fully typed with declaration files.
- **ES Modules & CommonJS:** Supports both module systems.

## Installation

Install via npm or yarn:

```bash
npm install judix-icon
# or
yarn add judix-icon
```

## Usage

### Using the Generic Icon Component

The library exports a generic `Icon` component that accepts an icon name as a prop:

```tsx
import React from 'react';
import { Icon } from 'judix-icon';

const App = () => {
  return (
    <div>
      <Icon name="Add" size={24} color="currentColor" strokeWidth={2} />
    </div>
  );
};

export default App;
```

## Importing Individual Icons

You can also import individual icons directly:

```tsx
import React from 'react';
import { Add, Support } from 'judix-icon';

const App = () => {
  return (
    <div>
      <Add size={24} color="#000" strokeWidth={2} />
      <Support size={24} color="#f00" strokeWidth={2} />
    </div>
  );
};

export default App;
```

## Icon Customization

All icons accept standard SVG props:

- size: Sets both width and height (default is 24).
- color: Controls the icon’s fill and stroke (ensure your SVGs use currentColor).
- strokeWidth: Overrides the default stroke width.

Example:

```tsx
<Icon name="Rotate" size={32} color="blue" strokeWidth={3} />
```

## License

MIT License