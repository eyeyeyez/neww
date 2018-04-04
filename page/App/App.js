import React, { Component } from 'react';
import './App.css';
import { Image, Icon, Header, Responsive } from 'semantic-ui-react';
import BackgroundSlideshow from 'react-background-slideshow'
import image1 from '../../styles/mood1430x800.jpg'


class App extends Component {

  render() {
    return (

      <div>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <div class='img'><BackgroundSlideshow images={[image1, image1, image1]} /></div>
          <div class='mid' >
            <a href='/news' >
              <Header color='red' size="huge" >
                Sharing Our Heart
              </Header>
            </a>
          </div>
        </Responsive>
        <Responsive {...Responsive.onlyMobile}>
          <div class='img'><BackgroundSlideshow images={[image1, image1, image1]} /></div>
          <div class='mid' >
            <a href='/news' >
              <Header color='red' size="huge" >
                Sharing Our Heart
              </Header>
            </a>
          </div>
        </Responsive>


      </div>


    );
  }
}

export default App;