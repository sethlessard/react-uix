import React from 'react';
import Fragment from './Fragment';
import {
    Code,
    Heading,
    Paragraph,
    Paper,
    Table,
    TableHeader,
    TableRow,
    HeaderCell,
    TableBody,
    TableData
} from 'react-uix';
import { Example } from "../component";

const PaperFragment = () => {
    return (
        <Fragment title="Paper">
            <Paragraph>
                The Paper component is used to define a surface.
            </Paragraph>
            <Example>
                <Paper style={{width: 100, height: 100}}/>
            </Example>

            <Heading h={4}>Usage</Heading>
            <Code text={`import { Paper } from "react-ui";`} />

            <Heading h={4}>Props</Heading>
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
                        <TableData />
                        <TableData>The content of the Paper</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>style</TableData>
                        <TableData>object</TableData>
                        <TableData>false</TableData>
                        <TableData />
                        <TableData>CSS styles for the Paper</TableData>
                    </TableRow>
                </TableBody>
            </Table>
        </Fragment>
    );
}

export default PaperFragment;
