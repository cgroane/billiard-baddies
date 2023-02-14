/** @type {import('next').NextConfig} */
const process = require('dotenv');

const nextConfig = {
  reactStrictMode: true,
  styledComponents: true
  //   // Enabled by default in development, disabled in production to reduce file size,
  //   // setting this will override the default for all environments.
  //   displayName: boolean,
  //   // Enabled by default.
  //   ssr: boolean,
  //   // Enabled by default.
  //   fileName: boolean,
  //   // Empty by default.
  //   topLevelImportPaths: string[],
  //   // Defaults to ["index"].
  //   meaninglessFileNames: string[],
  //   // Enabled by default.
  //   cssProp: boolean,
  //   // Empty by default.
  //   namespace: string,
  //   // Not supported yet.
  //   minify: boolean,
  //   // Not supported yet.
  //   transpileTemplateLiterals: boolean,
  //   // Not supported yet.
  //   pure: boolean,
  // },
}

module.exports = nextConfig
