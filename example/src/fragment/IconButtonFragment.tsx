import React from 'react';
import Fragment from './Fragment';
import { PaddedHeading, Paragraph, Table, TableHeader, TableRow, HeaderCell, TableBody, TableData, IconButton, Code, Page } from '@react-uix/web';
import { Example } from '../component';

const IconButtonFragment = () => {
  return (
    <Page>
      <Fragment title="Icon Button">
        <Paragraph>The IconButton component can be used to implement a clickable Icon.</Paragraph>
        <Example>
          <IconButton foregroundColor="#000000">home</IconButton>
          <IconButton foregroundColor="#000000">menu</IconButton>
          <IconButton foregroundColor="#000000">more_vert</IconButton>
          <IconButton foregroundColor="#000000">settings</IconButton>
          <IconButton foregroundColor="#000000">account_circle</IconButton>
        </Example>

        <PaddedHeading h={6}>Usage</PaddedHeading>
        <Code foregroundColor="#fff" code={`import { IconButton } from "@react-uix/web";`} />

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
              <TableData label="Name">children</TableData>
              <TableData label="Type">string</TableData>
              <TableData label="Default" />
              <TableData label="Description">The material icons icon name.</TableData>
            </TableRow>
            <TableRow>
              <TableData label="Name">onClick</TableData>
              <TableData label="Type">function</TableData>
              <TableData label="Default" />
              <TableData label="Description">A function to call whenever the IconButton is clicked</TableData>
            </TableRow>
          </TableBody>
        </Table>
      </Fragment>
    </Page>
  );
};

export default IconButtonFragment;
