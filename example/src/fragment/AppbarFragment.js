import React from 'react';
import { Link } from "react-router-dom";
import {
    Heading,
    Paragraph,
    Appbar,
    AppTitleContainer,
    AppbarToggleButton,
    AppTitle,
    Code,
    IconButton,
    AppbarToolbar,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableData,
    HeaderCell,
    List,
    ListItem
} from "react-uix";


import Fragment from './Fragment';
import { Example } from "../component";

const AppbarFragment = (props) => {

    return (
        <div>
            <Fragment title="Appbar">
                <Paragraph>The Appbar component is used to create an Application Bar.</Paragraph>
                <Example>
                    <Appbar demo={true}>
                        <AppTitleContainer>
                            <AppbarToggleButton><IconButton color="#ffffff">menu</IconButton></AppbarToggleButton>
                            <AppTitle>Appbar</AppTitle>
                        </AppTitleContainer>
                        <AppbarToolbar>
                            <IconButton color="#ffffff">more_vert</IconButton>
                        </AppbarToolbar>
                    </Appbar>
                </Example>

                <Example>
                    <Appbar backgroundColor="#ffffff" foregroundColor="#000000" demo={true}>
                        <AppTitleContainer>
                            <AppTitle>Appbar</AppTitle>
                        </AppTitleContainer>
                        <AppbarToolbar>
                            <IconButton color="#000000">more_vert</IconButton>
                        </AppbarToolbar>
                    </Appbar>
                </Example>

                <Heading h={6}>Usage</Heading>
                <Paragraph>
                    <Code text={`import { Appbar } from "react-uix";`} />
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
                            <TableData>backgroundColor</TableData>
                            <TableData>string</TableData>
                            <TableData>false</TableData>
                            <TableData>"#000000"</TableData>
                            <TableData>The background color of the Appbar</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>children</TableData>
                            <TableData>node</TableData>
                            <TableData>false</TableData>
                            <TableData></TableData>
                            <TableData>The contents of the Appbar</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>foregroundColor</TableData>
                            <TableData>string</TableData>
                            <TableData>false</TableData>
                            <TableData>"#ffffff"</TableData>
                            <TableData>The foreground color of the Appbar</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>height</TableData>
                            <TableData>number</TableData>
                            <TableData>false</TableData>
                            <TableData></TableData>
                            <TableData>The contents of the Appbar</TableData>
                        </TableRow>
                    </TableBody>
                </Table>
                <Heading h={6}>Direct Subcomponents</Heading>
                <Paragraph>
                    Appbar has the following direct subcomponents used for styling:
                </Paragraph>
                <List>
                    <ListItem>AppTitle</ListItem>
                    <ListItem>AppTitleContainer</ListItem>
                    <ListItem>AppbarToggleButton</ListItem>
                    <ListItem>AppbarToolbar</ListItem>
                </List>
            </Fragment>

            <Fragment style={{margin: "1rem 0"}}>
                <Heading h={5}>AppTitle</Heading>
                <Paragraph>
                    The AppTitle component defines a title in the Appbar.
                </Paragraph>
                <Example>
                    <Appbar demo={true}>
                        <AppTitleContainer>
                            <AppTitle>Title</AppTitle>
                        </AppTitleContainer>
                    </Appbar>
                </Example>
                <Heading h={6}>Usage</Heading>
                <Code text={`import { AppTitle } from "react-uix";`} />
                <Heading h={6}>Props</Heading>
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
                                <TableData>false</TableData>
                                <TableData></TableData>
                                <TableData>The title.</TableData>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paragraph>
            </Fragment>

            <Fragment style={{margin: "1rem 0"}}>
                <Heading h={5}>AppTitleContainer</Heading>
                <Paragraph>
                    The AppTitleContainer component is used to position both the AppTitle and AppbarToggleButton components
                    in the Appbar.
                </Paragraph>
                <Heading h={6}>Usage</Heading>
                <Code text={`import { AppTitleContainer } from "react-uix";`} />
                <Heading h={6}>Props</Heading>
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
                                <TableData>false</TableData>
                                <TableData></TableData>
                                <TableData>The contents of the AppTitleContainer. See Direct Subcomponents below.</TableData>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paragraph>
                <Heading h={6}>Direct Subcomponents</Heading>
                <Paragraph>
                    AppTitleContainer has the following direct subcomponents used for styling:
                </Paragraph>
                <List>
                    <ListItem>AppTitle</ListItem>
                    <ListItem>AppbarToggleButton</ListItem>
                </List>
            </Fragment>

            <Fragment style={{margin: "1rem 0"}}>
                <Heading h={5}>AppbarToggleButton</Heading>
                <Paragraph>
                    The AppbarToggleButton component is used to position a toggle button within the Appbar.
                </Paragraph>
                <Example>
                    <Appbar demo={true}>
                        <AppTitleContainer>
                            <AppbarToggleButton><IconButton color="#ffffff">menu</IconButton></AppbarToggleButton>
                        </AppTitleContainer>
                    </Appbar>
                </Example>
                <Heading h={6}>Usage</Heading>
                <Code text={`import { AppbarToggleButton } from "react-uix";`} />
                <Heading h={6}>Props</Heading>
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
                                <TableData>false</TableData>
                                <TableData></TableData>
                                <TableData>The contents of the AppbarToggleButton. See Direct Subcomponents below.</TableData>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paragraph>
                <Heading h={6}>Direct Subcomponents</Heading>
                <Paragraph>
                    AppbarToggleButton has the following direct subcomponents used for styling:
                </Paragraph>
                <List>
                    <ListItem><Link to="/component/IconButton">IconButton</Link></ListItem>
                </List>
            </Fragment>

            <Fragment style={{margin: "1rem 0"}}>
                <Heading h={5}>AppbarToolbar</Heading>
                <Paragraph>
                    The AppbarToolbar component is used to position elements on the right side of the Appbar.
                </Paragraph>
                <Heading h={6}>Usage</Heading>
                <Code text={`import { AppbarToolbar } from "react-uix";`} />
                <Heading h={6}>Props</Heading>
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
                                <TableData>false</TableData>
                                <TableData></TableData>
                                <TableData>The contents of the AppbarToolbar. See Direct Subcomponents below.</TableData>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paragraph>
                <Heading h={6}>Direct Subcomponents</Heading>
                <Paragraph>
                    AppbarToolbar has the following direct subcomponents used for styling:
                </Paragraph>
                <List>
                    <ListItem><Link to="/component/IconButton">IconButton</Link></ListItem>
                    <ListItem><Link to="/component/DropdownButton">DropdownButton</Link></ListItem>
                </List>
            </Fragment>
        </div>
    );
}

export default AppbarFragment;
