import React from "react";
import PropTypes from "prop-types";
import Fragment from "./Fragment";
import { PaddedHeading, Code, Paragraph, Switch, Table } from "react-uix";
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
        <Switch />
      </Example>

      <PaddedHeading h={6}>Usage</PaddedHeading>
      <Code text={`import { Switch } from "react-uix";`} />

      <PaddedHeading h={6}>Props</PaddedHeading>
      <Table />
    </Fragment>
  );
};

SwitchFragment.propTypes = {};

export default SwitchFragment;
