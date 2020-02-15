import React from 'react';
import Fragment from './Fragment';
import { Heading, Paragraph, Table, TableHeader, TableBody, TableRow, HeaderCell, TableData, Code } from 'react-uix';

const AppFragment = () => {
    return (
        <div>
            <Fragment title="App">
                <Paragraph>
                    The App component is used to provide initial layout as well as global themeing for your application.
                </Paragraph>
                <Heading h={6}>Usage</Heading>
                <Code text={`import { App } from "react-uix";`} />
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
                            <TableData>node || [node]</TableData>
                            <TableData>false</TableData>
                            <TableData></TableData>
                            <TableData>The contents of the App.</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>foregroundColor</TableData>
                            <TableData>string</TableData>
                            <TableData>false</TableData>
                            <TableData>#000000</TableData>
                            <TableData>The foreground color for the application. This is used for themeing.</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>primaryColor</TableData>
                            <TableData>string</TableData>
                            <TableData>false</TableData>
                            <TableData>#000000</TableData>
                            <TableData>The primary color for the application. This is used for themeing.</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>secondaryColor</TableData>
                            <TableData>string</TableData>
                            <TableData>false</TableData>
                            <TableData>#000000</TableData>
                            <TableData>The secondary color for the application. This is used for themeing.</TableData>
                        </TableRow>
                    </TableBody>
                </Table>
            </Fragment>
        </div>
    );
}

export default AppFragment;
