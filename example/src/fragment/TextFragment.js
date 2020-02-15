import React from 'react';
import Fragment from './Fragment';
import { Heading, Paragraph, Text, Code, Table, TableHeader, TableRow, TableBody, TableData, HeaderCell } from 'react-uix';
import { Example } from '../component';

const TextFragment = (props) => {
    return (
        <Fragment title="Text">
            <Paragraph>
                The Text component is used to implement text.
            </Paragraph>
            <Example>
                <Text>This is an example of some text</Text>
            </Example>

            <Heading h={6}>Usage</Heading>
            <Code text={`import { Text } from "react-uix";`} />

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
                        <TableData />
                        <TableData>The text.</TableData>
                    </TableRow>
                </TableBody>
            </Table>
        </Fragment>
    );
}

export default TextFragment;
