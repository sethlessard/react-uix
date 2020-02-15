import React from 'react';
import Fragment from './Fragment';
import { Example } from '../component';
import { Paragraph, Card, Code, Heading, Table, TableHeader, TableRow, HeaderCell, TableBody, TableData } from 'react-uix';

const CardFragment = () => {
    return (
        <Fragment title="Card">
            <Paragraph>
                The Card component is used to define an elevated surface.
            </Paragraph>
            <Example>
                <Card z={4} style={{width: 100, height: 100}}/>
            </Example>

            <Heading h={6}>Usage</Heading>
            <Code text={`import { Card } from "react-ui";`} />

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
                    <TableRow>
                        <TableData>z</TableData>
                        <TableData>number</TableData>
                        <TableData>false</TableData>
                        <TableData>1</TableData>
                        <TableData>The elevation level of the Card. 1-5 are permissiable options.</TableData>
                    </TableRow>
                </TableBody>
            </Table>
        </Fragment>
    );
}

export default CardFragment;
