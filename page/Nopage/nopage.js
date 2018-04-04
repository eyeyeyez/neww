import React, { Component } from 'react';

import Footer from '../../Component/Footer/footer';
import Navbar from '../../Component/Navbar/navbar';
import { Header, Responsive } from 'semantic-ui-react'
class Nopage extends Component {
  render() {

    return (

      <div className="nopage">
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Navbar />
          <div class="rebody">
            <br />
            <Header textAlign='center'>Page not found<i aria-hidden="true" ></i> </Header>
          </div>
          <br />
          <Footer />
        </Responsive>
        <Responsive {...Responsive.onlyMobile}>
          <Navbar />
          <div class="rebody">
            <br />
            <Header textAlign='center'>Page not found<i aria-hidden="true" ></i> </Header>
          </div>
          <br />
          <Footer />
        </Responsive>
      </div>
    );
  }
}

export default Nopage;