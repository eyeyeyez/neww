import React, { Component } from 'react';

import './footer.css';
import { Label, Icon, Image, Responsive } from 'semantic-ui-react'
import logo from '../../styles/logo.png'

class Footer extends Component {
  render() {
    return (

      <div className="Footer">

        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Image src={logo} spaced='right' size='mini'></Image>
          <span><Icon name='copyright' /> 2017 by Sharing Our Heart</span>
        </Responsive>
        
        <Responsive {...Responsive.onlyMobile}>
          <Image src={logo} spaced='right' size='mini'></Image>
          <span><Icon name='copyright' /> 2017 by Sharing Our Heart</span>
        </Responsive>

      </div>
    );
  }
}

export default Footer;