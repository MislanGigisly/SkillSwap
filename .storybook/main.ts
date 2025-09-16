import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { fileURLToPath } from 'url';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding'
    //'@storybook/addon-interactions'
  ],
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    config.resolve
      ? (config.resolve.alias = {
          ...config.resolve.alias,
          //сокращения для пуйтей иморта п: '@components': path.resolve(__dirname, '../src/components')
          '@app': path.resolve(__dirname, '../src/app'),
          '@shared': path.resolve(__dirname, '../src/shared'),
          '@pages': path.resolve(__dirname, '../src/pages'),
          '@features': path.resolve(__dirname, '../src/features'),
          '@entities': path.resolve(__dirname, '../src/entities'),
          '@api': path.resolve(__dirname, '../src/api'),
          '@widgets': path.resolve(__dirname, './src/widgets')
        })
      : null;

    return config;
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true
      }
    }
  },
  docs: {
    autodocs: 'tag'
  }
};
export default config;
