import { defineConfig } from 'cypress';
import { GenerateCtrfReport } from 'cypress-ctrf-json-reporter'
import viteConfig from './vite.config';

export default defineConfig({
  component: {
    port: 5173,
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig,
    },

    setupNodeEvents(on, _config) {
      // implement node event listeners here
      new GenerateCtrfReport({
        on,
      });
    },
  },

  e2e: {
    baseUrl: 'http://localhost:3003',
    // Remove setupNodeEvents from e2e if not needed
    // Or, if you need it, you can use 'on' for event handling here.
  },
});