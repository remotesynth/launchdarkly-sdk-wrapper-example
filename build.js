#!/usr/bin/env node

const envFilePlugin = require("esbuild-envfile-plugin");
require("esbuild")
  .build({
    logLevel: "info",
    entryPoints: ["scripts/main.js"],
    bundle: true,
    outfile: "public/javascript/main.js",
    plugins: [envFilePlugin],
  })
  .catch(() => process.exit(1));
