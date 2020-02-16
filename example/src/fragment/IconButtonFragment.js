import React from 'react';
import Fragment from './Fragment';
import { PaddedHeading, Paragraph, Table, TableHeader, TableRow, HeaderCell, TableBody, TableData, IconButton, Code } from 'react-uix';
import { Example } from '../component';

const IconButtonFragment = () => {
    return (
        <Fragment title="Icon Button">
            <Paragraph>The IconButton component can be used to implement a clickable Icon.</Paragraph>
            <Example>
                <IconButton color="#000000">home</IconButton>
                <IconButton color="#000000">menu</IconButton>
                <IconButton color="#000000">more_vert</IconButton>
                <IconButton color="#000000">settings</IconButton>
                <IconButton color="#000000">account_circle</IconButton>
            </Example>

            <PaddedHeading h={6}>Usage</PaddedHeading>
            <Code text={`import { IconButton } from "react-uix";`} />

            <PaddedHeading h={6}>Props</PaddedHeading>
            <Table>
                <TableHeader>
                    <TableRow>
                        <HeaderCell>Name</HeaderCell>
                        <HeaderCell>Type</HeaderCell>
                        <HeaderCell>Default</HeaderCell>
                        <HeaderCell>Description</HeaderCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableData>children</TableData>
                        <TableData>string</TableData>
                        <TableData></TableData>
                        <TableData>The material icons icon name.</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>onClick</TableData>
                        <TableData>function</TableData>
                        <TableData></TableData>
                        <TableData>A function to call whenever the IconButton is clicked</TableData>
                    </TableRow>
                </TableBody>
            </Table>
        </Fragment>
    );
}

export default IconButtonFragment;
