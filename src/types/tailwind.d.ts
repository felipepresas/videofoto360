declare module 'tailwindcss/plugin' {
  import { PluginCreator } from 'postcss';
  import { Config } from 'tailwindcss';

  type PluginFunction = (helpers: Record<string, unknown>) => void;

  interface PluginOptions {
    [key: string]: unknown;
  }

  interface PluginWithOptions {
    (handler: PluginFunction, config?: Partial<Config>): ReturnType<PluginCreator<never>>;
    <T = PluginOptions>(
      handler: (options: T) => PluginFunction,
      config?: Partial<Config>
    ): (options: T) => ReturnType<PluginCreator<never>>;
  }

  const plugin: PluginWithOptions;
  export = plugin;
}

declare module 'tailwindcss/colors' {
  export const colors: Record<string, string | Record<string, string>>;
  export default colors;
}

