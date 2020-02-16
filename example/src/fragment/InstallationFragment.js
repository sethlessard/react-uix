import React from 'react';
import Fragment from './Fragment';
import { Code, Grid, Heading, Paragraph, Card, CardHeader, Row, CardBody } from 'react-uix';

const MATERIAL_ICON = `<link href="https://fonts.googleapis.com/ icon?family=Material+Icons" rel="stylesheet" />`;
const ROBOTO = `<link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet">`;

const InstallationFragment = () => {
    return (
        <div>
            <Fragment title="Installation">
                <Paragraph>react-uix is available as an <a href="https://www.npmjs.com/package/react-uix" target="__blank">npm package</a>.</Paragraph>
                <Grid columns={2}>
                    <div>
                        <Paragraph>You can install react-uix with npm:</Paragraph>
                        <Code text="npm install -E react-uix" />
                    </div>
                    <div>
                        <Paragraph>Or with Yarn:</Paragraph>
                        <Code text="yarn add -E react-uix" />
                    </div>
                </Grid>
            </Fragment>
            <Row style={{padding: "2em 0 0 0"}}>
                <Card>
                    <CardHeader>
                        <Heading h={6}>Material Icon Font</Heading>
                    </CardHeader>
                    <CardBody>
                        <Paragraph>In order to use the Material Icon font, you must include this css file in your HTML file:</Paragraph>
                        <Code text={MATERIAL_ICON} />
                    </CardBody>
                </Card>
            </Row>
            <Row style={{padding: "2em 0 0 0"}}>
                <Card>
                    <CardHeader>
                        <Heading h={6}>Roboto Font</Heading>
                    </CardHeader>
                    <CardBody>
                        <Paragraph>It is recommended to use the Roboto font supplied by Google Fonts with react-uix.</Paragraph>
                        <Code text={ROBOTO} />
                    </CardBody>
                </Card>
            </Row>
        </div>
    );
}

export default InstallationFragment;
