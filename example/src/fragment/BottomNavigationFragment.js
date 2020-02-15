import React from 'react';
import Fragment from './Fragment';
import { Link } from "react-router-dom";
import { Heading, BottomNavigation, BottomNavItem, Code, Paragraph, Table, TableHeader, TableData, TableRow, HeaderCell, TableBody, List, ListItem } from 'react-uix';
import { Example } from '../component';

const BottomNavigationFragment = (props) => {
    return (
        <div>
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
                        <BottomNavItem color="#000000"icon="home">Home</BottomNavItem>
                        <BottomNavItem color="#000000" icon="account_circle">Account</BottomNavItem>
                        <BottomNavItem color="#000000" icon="settings">Settings</BottomNavItem>
                    </BottomNavigation>
                </Example>

                <Paragraph>The BottomNavigation component is populated with <Link to="/component/BottomNavItem">BottomNavItem</Link> objects.</Paragraph>

                <Heading h={6}>Usage</Heading>
                <Paragraph>
                    <Code text={`import { BottomNavigation } from "react-uix";`} />
                </Paragraph>

                <Heading h={6}>Props</Heading>
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
                            <TableData>false</TableData>
                            <TableData></TableData>
                            <TableData>The contents of the BottomNavigation component.</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>backgroundColor</TableData>
                            <TableData>string</TableData>
                            <TableData>false</TableData>
                            <TableData></TableData>
                            <TableData>The background color.</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>foregroundColor</TableData>
                            <TableData>string</TableData>
                            <TableData>false</TableData>
                            <TableData></TableData>
                            <TableData>The foreground color.</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>height</TableData>
                            <TableData>number</TableData>
                            <TableData>false</TableData>
                            <TableData>62</TableData>
                            <TableData>The height of the BottomNavigation component.</TableData>
                        </TableRow>
                    </TableBody>
                </Table>

                <Heading h={6}>Direct Subcomponents</Heading>
                <Paragraph>The BottomNavigation component has the following direct subcomponents:</Paragraph>
                <List>
                    <ListItem>BottomNavItem</ListItem>
                </List>
            </Fragment>

            <Fragment style={{margin: "1rem auto 0 auto"}}>
                <Heading h={5}>BottomNavItem</Heading>
                <Paragraph>The BottomNavItem component is used to implement a button within a BottomNavigation component.</Paragraph>

                <Heading h={6}>Usage</Heading>
                <Paragraph>
                    <Code text={`import { BottomNavItem } from "react-uix";`} />
                </Paragraph>

                <Heading h={6}>Props</Heading>
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
                            <TableData>false</TableData>
                            <TableData></TableData>
                            <TableData>The text to display in the BottomNavItem.</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>color</TableData>
                            <TableData>string</TableData>
                            <TableData>false</TableData>
                            <TableData></TableData>
                            <TableData>The foreground color.</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>icon</TableData>
                            <TableData>string</TableData>
                            <TableData>false</TableData>
                            <TableData></TableData>
                            <TableData>The icon.</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>onClick</TableData>
                            <TableData>function</TableData>
                            <TableData>false</TableData>
                            <TableData></TableData>
                            <TableData>The height of the BottomNavigation component.</TableData>
                        </TableRow>
                    </TableBody>
                </Table>
            </Fragment>
        </div>
    );
}

export default BottomNavigationFragment;
