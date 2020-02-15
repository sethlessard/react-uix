import React from 'react';

import Fragment from "./Fragment";
import { Example } from "../component";
import { Checkbox, Heading, Paragraph, Code, Table, TableHeader, TableRow, HeaderCell, TableBody, TableData } from "react-uix";

const CheckboxFragment = (props) => {
    return (
        <Fragment title="Checkbox">
            <Paragraph>
                The Checkbox component is used to implement a checkbox.
            </Paragraph>
            <Example>
                <Checkbox>Checkbox</Checkbox>
                <Checkbox>Another checkbox</Checkbox>
            </Example>

            <Heading h={6}>Usage</Heading>
            <Code text={`import { Checkbox } from "react-uix";`} />

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
                        <TableData>The text to display alongside the Checkbox.</TableData>
                    </TableRow>
                </TableBody>
            </Table>
        </Fragment>
    );
}

export default CheckboxFragment;
