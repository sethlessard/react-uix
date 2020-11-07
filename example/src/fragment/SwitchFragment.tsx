import React from "react";
// import PropTypes from "prop-types";
import Fragment from "./Fragment";
import { PaddedHeading, Code, Paragraph, Switch, Table, TableHeader, TableBody, TableRow, HeaderCell, TableData, Page } from "@react-uix/web";
import { Example } from "../component";

const USAGE = `
import { Switch } from "@react-uix/web";

...

/**
 * Called when the switch is flipped.
 * @param {boolean} checked whether or not the switch is checked.
 */
const onChecked = (checked) => {
  alert(\`Is checked: \${checked}\`);
};

<Switch onChecked={onChecked}>
  This is the Switch's label.
</Switch>
`;

const SwitchFragment = () => {
  return (
    <Page>
      <Fragment title="Switch">
        <Paragraph>The Switch component</Paragraph>

        <Example>
          <Switch>This is a switch</Switch>
          <Switch defaultChecked={true}>This is also a switch</Switch>
          <Switch disabled={true}>This is a disabled switch</Switch>
        </Example>

        <PaddedHeading h={6}>Usage</PaddedHeading>
        <Code foregroundColor="#fff" code={USAGE} />

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
              <TableData label="Name">children</TableData>
              <TableData label="Type">string</TableData>
              <TableData label="Required">No</TableData>
              <TableData label="Default" />
              <TableData label="Description">The text to display alongside the Switch.</TableData>
            </TableRow>
            <TableRow>
              <TableData label="Name">onChecked</TableData>
              <TableData label="Type">(isOn: boolean) =&gt; void</TableData>
              <TableData label="Required">No</TableData>
              <TableData label="Default" />
              <TableData label="Description">The function handler that is called when the Switch is toggled.</TableData>
            </TableRow>
          </TableBody>
        </Table>
      </Fragment>
    </Page>
  );
};

export default SwitchFragment;
