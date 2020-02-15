import React from 'react';
import Fragment from './Fragment';
import { Heading, Paragraph, Icon, Code, Table, TableHeader, TableRow, HeaderCell, TableBody, TableData } from 'react-uix';
import { Example } from "../component";

const IconFragment = () => {
    return (
        <Fragment title="Icon">
            <Paragraph>
                Icon. Icon names can be found <a href="https://material.io/tools/icons/" target="__blank">here.</a>
            </Paragraph>
            <Example>
                <Icon>home</Icon>
                <Icon>account_circle</Icon>
                <Icon>settings</Icon>
                <Icon color="#ffffff">share</Icon>
            </Example>

            <Heading h={6}>Usage</Heading>
            <Code text={`import { Icon } from "react-uix";`} />

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
                        <TableData></TableData>
                        <TableData>The icon name.</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>color</TableData>
                        <TableData>string</TableData>
                        <TableData>false</TableData>
                        <TableData></TableData>
                        <TableData>The color of the Icon.</TableData>
                    </TableRow>
                </TableBody>
            </Table>
        </Fragment>
    );
}

export default IconFragment;
