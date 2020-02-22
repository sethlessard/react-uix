import React from 'react';
import Fragment from './Fragment';

import { Link } from "react-router-dom";

import {
  PaddedHeading,
  DropdownButton,
  DropdownButtonText,
  IconButton,
  DropdownButtonItem,
  DropdownButtonIcon,
  Table,
  TableHeader,
  HeaderCell,
  TableRow,
  TableBody,
  TableData,
  Code,
  List,
  ListItem,
  Paragraph
} from "react-uix";
import { Example } from "../component";

const DropdownButtonFragment = (props) => {
  return (
    <div>
      <Fragment title="Dropdown Button">
        <Example>
          <DropdownButton icon={<IconButton>more_vert</IconButton>}>
            <DropdownButtonItem>
              <DropdownButtonIcon>account_circle</DropdownButtonIcon>
              <DropdownButtonText>Account</DropdownButtonText>
            </DropdownButtonItem>
          </DropdownButton>
        </Example>

        <PaddedHeading h={6}>Usage</PaddedHeading>
        <Code foregroundColor="#fff" text={`import { DropdownButton } from "react-uix";`} />

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
              <TableData>children</TableData>
              <TableData>node</TableData>
              <TableData>No</TableData>
              <TableData></TableData>
              <TableData>The contents of the DropdownButton.</TableData>
            </TableRow>
            <TableRow>
              <TableData>icon</TableData>
              <TableData><Link to="/component/IconButton">IconButton</Link></TableData>
              <TableData>No</TableData>
              <TableData></TableData>
              <TableData>The contents of the DropdownButton.</TableData>
            </TableRow>
            <TableRow>
              <TableData>style</TableData>
              <TableData>object</TableData>
              <TableData>No</TableData>
              <TableData></TableData>
              <TableData>The style of the DropdownButton.</TableData>
            </TableRow>
          </TableBody>
        </Table>

        <PaddedHeading h={6}>Direct Subcomponents</PaddedHeading>
        <Paragraph>
          The DropdownButton components has the following direct subcomponents:
        </Paragraph>
        <List>
          <ListItem>DropdownItem</ListItem>
        </List>
      </Fragment>

      <Fragment style={{ margin: "1rem auto 0 auto" }} title="DropdownIcon">
        <Paragraph>
          The DropdownIcon component positions an Icon component within a DropdownItem.
        </Paragraph>

        <PaddedHeading h={6}>Usage</PaddedHeading>
        <Code foregroundColor="#fff" text={`import { DropdownIcon } from "react-uix";`} />

        <PaddedHeading h={6}>Props</PaddedHeading>
        <Paragraph>
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
                <TableData>children</TableData>
                <TableData>node</TableData>
                <TableData>No</TableData>
                <TableData></TableData>
                <TableData>The contents of the DropdownButton.</TableData>
              </TableRow>
              <TableRow>
                <TableData>icon</TableData>
                <TableData><Link to="/component/Icon">Icon</Link></TableData>
                <TableData>No</TableData>
                <TableData></TableData>
                <TableData>The contents of the DropdownButton.</TableData>
              </TableRow>
              <TableRow>
                <TableData>style</TableData>
                <TableData>object</TableData>
                <TableData>No</TableData>
                <TableData></TableData>
                <TableData>The style of the DropdownButton.</TableData>
              </TableRow>
            </TableBody>
          </Table>
        </Paragraph>
      </Fragment>

      <Fragment style={{ margin: "1rem auto 0 auto" }} title="DropdownItem">
        <Paragraph>
          DropdownItem.
        </Paragraph>

        <PaddedHeading h={6}>Usage</PaddedHeading>
        <Code foregroundColor="#fff" text={`import { DropdownItem } from "react-uix";`} />

        <PaddedHeading h={6}>Props</PaddedHeading>
        <Paragraph>
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
                <TableData>children</TableData>
                <TableData>node</TableData>
                <TableData>No</TableData>
                <TableData></TableData>
                <TableData>The contents of the DropdownItem. See Direct Subcomponents below.</TableData>
              </TableRow>
              <TableRow>
                <TableData>foregroundColor</TableData>
                <TableData>string</TableData>
                <TableData>No</TableData>
                <TableData></TableData>
                <TableData>The foreground color of the DropdownItem.</TableData>
              </TableRow>
            </TableBody>
          </Table>
        </Paragraph>

        <PaddedHeading h={6}>Direct Subcomponents</PaddedHeading>
        <Paragraph>The DropdownItem component has the following direct subcomponents:</Paragraph>
        <List>
          <ListItem>DropdownIcon</ListItem>
          <ListItem>DropdownText</ListItem>
        </List>
      </Fragment>

      <Fragment style={{ margin: "1rem auto 0 auto" }} title="DropdownText">
        <Paragraph>
          DropdownText.
        </Paragraph>

        <PaddedHeading h={6}>Usage</PaddedHeading>
        <Code foregroundColor="#fff" text={`import { DropdownText } from "react-uix";`} />

        <PaddedHeading h={6}>Props</PaddedHeading>
        <Paragraph>
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
                <TableData>children</TableData>
                <TableData>string</TableData>
                <TableData>No</TableData>
                <TableData></TableData>
                <TableData>The text displayed by the DropdownText.</TableData>
              </TableRow>
            </TableBody>
          </Table>
        </Paragraph>
      </Fragment>
    </div>
  );
}

export default DropdownButtonFragment;
