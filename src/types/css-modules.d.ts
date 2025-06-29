declare module '*.css' {
  const classes: { [key: string]: string };
  export default classes;
  export const __esModule: true;
  export const css: string;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
  export const __esModule: true;
  export const css: string;
}

// Allow CSS Modules to be imported as strings
declare module '*.module.css?raw' {
  const content: string;
  export default content;
}

// Allow global CSS to be imported as strings
declare module '*.css?raw' {
  const content: string;
  export default content;
}

// Add type definitions for CSS modules with :export
declare module '*.module.css' {
  const content: {
    [className: string]: string;
    // This allows using :export in CSS modules
    css?: string;
  };
  export default content;
}

// Add type definitions for @apply directive
declare namespace CSS {
  interface Property {
    // Allow any property name with any value
    [key: string]: never;
  }
}

// Add type definitions for CSS variables
declare module 'csstype' {
  interface Properties {
    // Allow any CSS variable
    [index: `--${string}`]: string | number | undefined;
  }
}
