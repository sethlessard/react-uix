import React from "react";
import {
  ColorPicker,
  Paragraph,
  PaddedHeading,
  Table,
  TableBody,
  TableData,
  TableHeader,
  TableRow,
  HeaderCell,
  Code,
  Page
} from "@react-uix/web";

import Example from "../component/Example";
import Fragment from "./Fragment";

const USAGE = `
import { ColorPicker } from "@react-uix/web";

...

<ColorPicker defaultColor="#fff" onChanged={(color) => handleColorChanged(color)} />
`;

const ColorPickerFragment = () => {
  return (
    <Page>
      <Fragment title="Color Picker">
        <Paragraph>The color picker component can be used to pick colors.</Paragraph>
        <Example>
          <ColorPicker />
        </Example>
        <PaddedHeading h={6}>Usage</PaddedHeading>
        <Code code={USAGE} />
        <PaddedHeading h={6}>Props</PaddedHeading>
        <Table>
          <TableHeader>
            <TableRow>
              <HeaderCell>Name</HeaderCell>
              <HeaderCell>Type</HeaderCell>
              <HeaderCell>Required</HeaderCell>
              <HeaderCell>Default</HeaderCell>
              <HeaderCell>Description</HeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableData label="Name">defaultColor</TableData>
              <TableData label="Type">string</TableData>
              <TableData label="Required">No</TableData>
              <TableData label="Default">The 'colorPrimary' or #000</TableData>
              <TableData label="Description">The default color to use.</TableData>
            </TableRow>
            <TableRow>
              <TableData label="Name">onChange</TableData>
              <TableData label="Type">(color: string) =&gt; void</TableData>
              <TableData label="Required">No</TableData>
              <TableData label="Default" />
              <TableData label="Description">The handler function that is called when the color is choosen.</TableData>
            </TableRow>
          </TableBody>
        </Table>
      </Fragment>
    </Page>
  );
};

export default ColorPickerFragment;
