import React from 'react';
import Fragment from './Fragment';

import { Link } from "react-router-dom";

import {
    Heading,
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

                <Heading h={6}>Usage</Heading>
                <Code text={`import { DropdownButton } from "react-uix";`} />

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
                            <TableData>The contents of the DropdownButton.</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>icon</TableData>
                            <TableData><Link to="/component/IconButton">IconButton</Link></TableData>
                            <TableData>false</TableData>
                            <TableData></TableData>
                            <TableData>The contents of the DropdownButton.</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>style</TableData>
                            <TableData>object</TableData>
                            <TableData>false</TableData>
                            <TableData></TableData>
                            <TableData>The style of the DropdownButton.</TableData>
                        </TableRow>
                    </TableBody>
                </Table>

                <Heading h={6}>Direct Subcomponents</Heading>
                <Paragraph>
                    The DropdownButton components has the following direct subcomponents:
                </Paragraph>
                <List>
                    <ListItem>DropdownItem</ListItem>
                </List>
            </Fragment>

            <Fragment style={{margin: "1rem auto 0 auto"}}>
                <Heading h={5}>DropdownIcon</Heading>
                <Paragraph>
                    The DropdownIcon component positions an Icon component within a DropdownItem.
                </Paragraph>

                <Heading h={6}>Usage</Heading>
                <Code text={`import { DropdownIcon } from "react-uix";`} />

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
                                <TableData>The contents of the DropdownButton.</TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>icon</TableData>
                                <TableData><Link to="/component/Icon">Icon</Link></TableData>
                                <TableData>false</TableData>
                                <TableData></TableData>
                                <TableData>The contents of the DropdownButton.</TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>style</TableData>
                                <TableData>object</TableData>
                                <TableData>false</TableData>
                                <TableData></TableData>
                                <TableData>The style of the DropdownButton.</TableData>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paragraph>
            </Fragment>

            <Fragment style={{margin: "1rem auto 0 auto"}}>
                <Heading h={5}>DropdownItem</Heading>
                <Paragraph>
                    DropdownItem.
                </Paragraph>

                <Heading h={6}>Usage</Heading>
                <Code text={`import { DropdownItem } from "react-uix";`} />

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
                                <TableData>The contents of the DropdownItem. See Direct Subcomponents below.</TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>foregroundColor</TableData>
                                <TableData>string</TableData>
                                <TableData>false</TableData>
                                <TableData></TableData>
                                <TableData>The foreground color of the DropdownItem.</TableData>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paragraph>

                <Heading h={6}>Direct Subcomponents</Heading>
                <Paragraph>The DropdownItem component has the following direct subcomponents:</Paragraph>
                <List>
                    <ListItem>DropdownIcon</ListItem>
                    <ListItem>DropdownText</ListItem>
                </List>
            </Fragment>

            <Fragment style={{margin: "1rem auto 0 auto"}}>
                <Heading h={5}>DropdownText</Heading>
                <Paragraph>
                    DropdownText.
                </Paragraph>

                <Heading h={6}>Usage</Heading>
                <Code text={`import { DropdownText } from "react-uix";`} />

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
