import React from 'react';

import Heading from "../Heading";
import HasStyle from '../../types/HasStyle';

export interface NavSubheaderProps extends HasStyle {
  children: string;
}

const NavSubheader = (props: NavSubheaderProps) => {
  const style = {
    navSubheader: {
      padding: ".25em 1em"
    }
  };
  return (
    <div style={style.navSubheader}>
      <Heading h={6} style={{ margin: 0, padding: 0 }}>{props.children}</Heading>
    </div>
  );
};

export default NavSubheader;
