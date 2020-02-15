import React from 'react';
import Fragment from './Fragment';
import { Code, Heading, Paragraph } from 'react-uix';

const InstallationFragment = () => {
    return (
        <Fragment title="Installation">
            <Paragraph>
                react-uix is available as an <a href="https://www.npmjs.com/package/react-uix" target="__blank">npm package</a>.
                You can install uix with npm:
                <Code text="npm install react-uix" />
                or with Yarn:
                <Code text="yarn add react-uix" />
            </Paragraph>

            <Heading h={6}>Material Icon Font</Heading>
            <Paragraph>
                In order to use the Material Icon font, you must include this css file in your HTML file:
                <Code text={`
                    <link href="https://fonts.googleapis.com/ icon?family=Material+Icons" rel="stylesheet" />
                `} />
            </Paragraph>
        </Fragment>
    );
}

export default InstallationFragment;
