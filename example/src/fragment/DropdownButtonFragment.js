import React from 'react';
import Fragment from './Fragment';

import { Link } from "react-router-dom";

import {
  PaddedHeading,
  DropdownButton,
  DropdownButtonText,
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
  Paragraph,
  Text
} from "react-uix";
import { Example } from "../component";

const DropdownButtonFragment = (props) => {
  return (
    <div>
      <Fragment title="Dropdown Button">
        <Example>
          <DropdownButton icon="more_vert">
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
              <TableData label="Name">children</TableData>
              <TableData label="Type">node</TableData>
              <TableData label="Required">No</TableData>
              <TableData label="Default" />
              <TableData label="Description">The contents of the DropdownButton.</TableData>
            </TableRow>
            <TableRow>
              <TableData label="Name">icon</TableData>
              <TableData label="Type"><Link to="/component/IconButton">IconButton</Link></TableData>
              <TableData label="Required">No</TableData>
              <TableData label="Default" />
              <TableData label="Description">The contents of the DropdownButton.</TableData>
            </TableRow>
            <TableRow>
              <TableData label="Name">style</TableData>
              <TableData label="Type">object</TableData>
              <TableData label="Required">No</TableData>
              <TableData label="Default" />
              <TableData label="Description">The style of the DropdownButton.</TableData>
            </TableRow>
          </TableBody>
        </Table>

        <PaddedHeading h={6}>Child Components</PaddedHeading>
        <Paragraph>
          The DropdownButton components has the following child components:
        </Paragraph>
        <List>
          <ListItem><Text fontSize=".7rem">DropdownItem</Text></ListItem>
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
                <TableData label="Name">children</TableData>
                <TableData label="Type">node</TableData>
                <TableData label="Required">No</TableData>
                <TableData label="Default" />
                <TableData label="Description">The contents of the DropdownButton.</TableData>
              </TableRow>
              <TableRow>
                <TableData label="Name">icon</TableData>
                <TableData label="Type"><Link to="/component/Icon">Icon</Link></TableData>
                <TableData label="Required">No</TableData>
                <TableData label="Default" />
                <TableData label="Description">The contents of the DropdownButton.</TableData>
              </TableRow>
              <TableRow>
                <TableData label="Name">style</TableData>
                <TableData label="Type">object</TableData>
                <TableData label="Required">No</TableData>
                <TableData label="Default" />
                <TableData label="Description">The style of the DropdownButton.</TableData>
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
                <TableData label="Name">children</TableData>
                <TableData label="Type">node</TableData>
                <TableData label="Required">No</TableData>
                <TableData label="Default" />
                <TableData label="Description">The contents of the DropdownItem. See Child Components below.</TableData>
              </TableRow>
              <TableRow>
                <TableData label="Name">foregroundColor</TableData>
                <TableData label="Type">string</TableData>
                <TableData label="Required">No</TableData>
                <TableData label="Default" />
                <TableData label="Description">The foreground color of the DropdownItem.</TableData>
              </TableRow>
            </TableBody>
          </Table>
        </Paragraph>

        <PaddedHeading h={6}>Child Components</PaddedHeading>
        <Paragraph>The DropdownItem component has the following child components:</Paragraph>
        <List>
          <ListItem><Text fontSize=".7rem">DropdownIcon</Text></ListItem>
          <ListItem><Text fontSize=".7rem">DropdownText</Text></ListItem>
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
                <TableData label="Name">children</TableData>
                <TableData label="Type">string</TableData>
                <TableData label="Required">No</TableData>
                <TableData label="Default" />
                <TableData label="Description">The text displayed by the DropdownText.</TableData>
              </TableRow>
            </TableBody>
          </Table>
        </Paragraph>
      </Fragment>
    </div>
  );
};

export default DropdownButtonFragment;
