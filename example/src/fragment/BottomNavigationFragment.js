import React from 'react';
import Fragment from './Fragment';
import { Link } from "react-router-dom";
import { PaddedHeading, BottomNavigation, BottomNavItem, Code, Paragraph, Table, TableHeader, TableData, TableRow, HeaderCell, TableBody, List, ListItem, ScrollToTop, Text } from 'react-uix';
import { Example } from '../component';

const BottomNavigationFragment = (props) => {
  return (
    <div>
      <ScrollToTop>
        <Fragment title="Bottom Navigation">
          <Paragraph>The BottomNavigation component is used to implement a bottom navagation functionality within an app.</Paragraph>
          <Example>
            <BottomNavigation demo={true}>
              <BottomNavItem icon="home">Home</BottomNavItem>
              <BottomNavItem icon="account_circle">Account</BottomNavItem>
              <BottomNavItem icon="settings">Settings</BottomNavItem>
            </BottomNavigation>
          </Example>

          <Paragraph>The BottomNavigation component can be styled with the backgroundColor and color properties.</Paragraph>
          <Example>
            <BottomNavigation backgroundColor="#ffffff" demo={true}>
              <BottomNavItem color="#000000" icon="home">Home</BottomNavItem>
              <BottomNavItem color="#000000" icon="account_circle">Account</BottomNavItem>
              <BottomNavItem color="#000000" icon="settings">Settings</BottomNavItem>
            </BottomNavigation>
          </Example>

          <Paragraph>The BottomNavigation component is populated with <Link to="/component/BottomNavItem">BottomNavItem</Link> objects.</Paragraph>

          <PaddedHeading h={6}>Usage</PaddedHeading>
          <Paragraph>
            <Code foregroundColor="#fff" text={`import { BottomNavigation } from "react-uix";`} />
          </Paragraph>

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
                <TableData label="Description">The contents of the BottomNavigation component.</TableData>
              </TableRow>
              <TableRow>
                <TableData label="Name">backgroundColor</TableData>
                <TableData label="Type">string</TableData>
                <TableData label="Required">No</TableData>
                <TableData label="Default" />
                <TableData label="Description">The background color.</TableData>
              </TableRow>
              <TableRow>
                <TableData label="Name">foregroundColor</TableData>
                <TableData label="Type">string</TableData>
                <TableData label="Required">No</TableData>
                <TableData label="Default" />
                <TableData label="Description">The foreground color.</TableData>
              </TableRow>
              <TableRow>
                <TableData label="Name">height</TableData>
                <TableData label="Type">number</TableData>
                <TableData label="Required">No</TableData>
                <TableData label="Default">62</TableData>
                <TableData label="Description">The height of the BottomNavigation component.</TableData>
              </TableRow>
            </TableBody>
          </Table>

          <PaddedHeading h={6}>Child Components</PaddedHeading>
          <Paragraph>The BottomNavigation component has the following child components:</Paragraph>
          <List>
            <ListItem><Text fontSize=".7rem">BottomNavItem</Text></ListItem>
          </List>
        </Fragment>

        <Fragment style={{ margin: "1rem auto 0 auto" }}>
          <PaddedHeading h={5}>BottomNavItem</PaddedHeading>
          <Paragraph>The BottomNavItem component is used to implement a button within a BottomNavigation component.</Paragraph>

          <PaddedHeading h={6}>Usage</PaddedHeading>
          <Paragraph>
            <Code foregroundColor="#fff" text={`import { BottomNavItem } from "react-uix";`} />
          </Paragraph>

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
                <TableData label="Description">The text to display in the BottomNavItem.</TableData>
              </TableRow>
              <TableRow>
                <TableData label="Name">color</TableData>
                <TableData label="Type">string</TableData>
                <TableData label="Required">No</TableData>
                <TableData label="Default" />
                <TableData label="Description">The foreground color.</TableData>
              </TableRow>
              <TableRow>
                <TableData label="Name">icon</TableData>
                <TableData label="Type">string</TableData>
                <TableData label="Required">No</TableData>
                <TableData label="Default" />
                <TableData label="Description">The icon.</TableData>
              </TableRow>
              <TableRow>
                <TableData label="Name">onClick</TableData>
                <TableData label="Type">function</TableData>
                <TableData label="Required">No</TableData>
                <TableData label="Default" />
                <TableData label="Description">The height of the BottomNavigation component.</TableData>
              </TableRow>
            </TableBody>
          </Table>
        </Fragment>
      </ScrollToTop>
    </div>
  );
};

export default BottomNavigationFragment;
