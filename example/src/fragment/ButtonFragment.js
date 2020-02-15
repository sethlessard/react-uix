import React from 'react';
import Fragment from './Fragment';
import { Heading, Paragraph, Button, Code, Table, TableHeader, TableRow, HeaderCell, TableBody, TableData } from 'react-uix';
import { Example } from '../component';

const ButtonFragment = () => {
    return (
        <Fragment title="Button">
            <Paragraph>
                Button
            </Paragraph>
            <Example>
                <Button>Button</Button>
            </Example>
            <Example>
                <Button>Another Button</Button>
            </Example>
            <Example>
                <Button backgroundColor="#000000">Dark Button</Button>
            </Example>

            <Heading h={6}>Usage</Heading>
            <Code text={`import { Button } from "react-uix";`} />

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
                        <TableData></TableData>
                        <TableData>The background color.</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>children</TableData>
                        <TableData>string</TableData>
                        <TableData>false</TableData>
                        <TableData></TableData>
                        <TableData>The text of the Button.</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>foregroundColor</TableData>
                        <TableData>string</TableData>
                        <TableData>false</TableData>
                        <TableData></TableData>
                        <TableData>The text color.</TableData>
                    </TableRow>
                </TableBody>
            </Table>
        </Fragment>
    );
}

export default ButtonFragment;
