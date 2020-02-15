import React from 'react';

import {
    Heading, Paragraph, TextArea, Code, Table, TableHeader, TableRow, HeaderCell, TableBody, TableData
} from "react-uix";
import Fragment from "./Fragment";
import { Example } from "../component";

const TextAreaFragment = (props) => {
    return (
        <Fragment title="Text Area">
            <Paragraph>
                The TextArea component is used to implement a multi-line text input field.
            </Paragraph>
            <Example>
                <TextArea>This is an example TextArea. You can edit this text.</TextArea>
            </Example>

            <Heading h={6}>Usage</Heading>
            <Code text={`import { TextArea } from "react-uix";`} />

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
                        <TableData>true</TableData>
                        <TableData />
                        <TableData>The placeholder for the TextArea.</TableData>
                    </TableRow>
                </TableBody>
            </Table>
         </Fragment>
    );
}

export default TextAreaFragment;
