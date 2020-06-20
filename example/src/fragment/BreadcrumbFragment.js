import React from 'react';
import Fragment from './Fragment';
import { PaddedHeading, Paragraph, Breadcrumb, Code, Table, TableHeader, TableRow, HeaderCell, TableBody, TableData, ScrollToTop, Page } from '@react-uix/web';
import { Example } from '../component';

const BreadcrumbFragment = () => {
  return (
    <Page>
      <ScrollToTop>
        <Fragment title="Breadcrumb">
          <Paragraph>
            Breadcrumb. 
          </Paragraph>
          <Example>
            <Breadcrumb>
              <div>Item 1</div>
              <div>Item 2</div>
              <div>Item 3</div>
            </Breadcrumb>
          </Example>

          <PaddedHeading h={6}>Usage</PaddedHeading>
          <Code foregroundColor="#fff" text={`import { Breadcrumb } from "@react-uix/web";`} />

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
                <TableData label="Name">children</TableData>
                <TableData label="Type">node</TableData>
                <TableData label="Required">No</TableData>
                <TableData label="Default" />
                <TableData label="Description">The breadcrumb items to display.</TableData>
              </TableRow>
            </TableBody>
          </Table>
        </Fragment>
      </ScrollToTop>
    </Page>
  );
};

export default BreadcrumbFragment;
