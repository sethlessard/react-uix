import React from "react";
// import PropTypes from "prop-types";
import Fragment from "./Fragment";
import { PaddedHeading, Code, Paragraph, Switch, Table, TableHeader, TableBody, TableRow, HeaderCell, TableData } from "@react-uix/web";
import { Example } from "../component";

const SwitchFragment = ({ children, style: compStyle }) => {
  const style = {
    SwitchFragment: {}
  };
  Object.assign(style.SwitchFragment, compStyle);
  return (
    <Fragment title="Switch">
      <Paragraph>The Switch component</Paragraph>

      <Example>
        <Switch>This is a switch</Switch>
      </Example>

      <PaddedHeading h={6}>Usage</PaddedHeading>
      <Code foregroundColor="#fff" text={`import { Switch } from "@react-uix/web";`} />

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
            <TableData label="Type">(isOn: boolean) => void</TableData>
            <TableData label="Required">No</TableData>
            <TableData label="Default" />
            <TableData label="Description">The function handler that is called when the Switch is toggled.</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </Fragment>
  );
};

SwitchFragment.propTypes = {};

export default SwitchFragment;
