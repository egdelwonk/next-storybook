import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

import { Button } from "@storybook/react/demo";
import Header from "../../src/components/header";

const stories = storiesOf("Header", module);
stories.addDecorator(withKnobs);
stories.add("default", () => (
  <Header text={text("Header Text", "Welcome to the demo")} />
));
