import { configure } from "@storybook/react";

import { setConfig } from "next/config";
import config from "../src/app.config";

// Make sure you can use "publicRuntimeConfig" within stories.
setConfig(config);

// automatically import all files ending in *.stories.js
const req = require.context("./stories", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
