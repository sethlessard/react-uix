import React from 'react';
import Fragment from './Fragment';
import { Paragraph } from 'react-uix';

const ExamplesFragment = () => {
    return (
        <Fragment title="Examples">
            <Paragraph>
                This documentation is built upon the React UiX library. The source code for this library can be found here:&nbsp;
                <a href="https://github.com/sethlessard/react-uix/tree/master/example" target="__blank">https://github.com/sethlessard/react-uix/tree/master/example</a>
            </Paragraph>
        </Fragment>
    );
}

export default ExamplesFragment;
