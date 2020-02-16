import React from 'react';

import Fragment from "./Fragment";
import { Example } from "../component";
import { Checkbox, PaddedHeading, Paragraph, Code, Table, TableHeader, TableRow, HeaderCell, TableBody, TableData } from "react-uix";

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

            <PaddedHeading h={6}>Usage</PaddedHeading>
            <Code text={`import { Checkbox } from "react-uix";`} />

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
