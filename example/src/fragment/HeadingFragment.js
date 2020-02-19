import React from 'react';
import Fragment from './Fragment';
import { Heading, Paragraph, Code, Table, TableHeader, TableRow, TableBody, TableData, HeaderCell } from 'react-uix';
import { Example } from "../component";

const HeadingFragment = () => {
    return (
        <Fragment title="Heading">
            <Paragraph>
                The Heading component is used to implement a Heading. The size of the heading can be changed with the 'h' property.
            </Paragraph>
            <Example>
                <Heading h={1}>Heading 1</Heading>
            </Example>
            <Example>
                <Heading h={2}>Heading 2</Heading>
            </Example>
            <Example>
                <Heading h={3}>Heading 3</Heading>
            </Example>
            <Example>
                <Heading h={4}>Heading 4</Heading>
            </Example>
            <Example>
                <Heading h={5}>Heading 5</Heading>
            </Example>
            <Example>
                <Heading h={6}>Heading 6</Heading>
            </Example>

            <Heading h={6}>Usage</Heading>
            <Code foregroundColor="#fff" text={`import { Heading } from "react-uix";`} />

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
                        <TableData>No</TableData>
                        <TableData />
                        <TableData>The contents of the Heading.</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>h</TableData>
                        <TableData>number</TableData>
                        <TableData>Yes</TableData>
                        <TableData />
                        <TableData>The Heading level.</TableData>
                    </TableRow>
                </TableBody>
            </Table>
        </Fragment>
    );
}

export default HeadingFragment;
