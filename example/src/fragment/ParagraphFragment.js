import React from 'react';
import Fragment from './Fragment';
import { PaddedHeading, Paragraph, Code, Table, TableHeader, TableRow, HeaderCell, TableBody, TableData } from 'react-uix';

const ParagraphFragment = () => {
    return (
        <Fragment title="Paragraph">
            <Paragraph>
                The Paragraph component is used to implement a Paragraph.
            </Paragraph>

            <PaddedHeading h={6}>Usage</PaddedHeading>
            <Code foregroundColor="#fff" text={`import { Paragraph } from "react-uix";`} />

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
                        <TableData>No</TableData>
                        <TableData />
                        <TableData>The contents of the Paragraph.</TableData>
                    </TableRow>
                </TableBody>
            </Table>
        </Fragment>
    );
}

export default ParagraphFragment;
