import React, { Component } from 'react';

import Footer from '../../Component/Footer/footer';
import Navbar from '../../Component/Navbar/navbar';


import 'semantic-ui-css/semantic.min.css';
import './news.css';
import { Label, Menu, Tab, Input, Button, Icon, Image as ImageComponent, Item, TextArea, Responsive } from 'semantic-ui-react'

import { getall, apiupload, apisearch, getalls, apisearchs } from '../../Api'



class News extends Component {

  constructor() {
    super();
    this.state = {
      search: '',
      i: 1,
      post: [],
      send: []
    };
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {

    this.setState({ search: e.target.value })
    console.log(this.state.search);

  }

  componentDidMount() {
    getall().then((post) => this.setState({ post }));
    getalls().then((send) => this.setState({ send }));
  }

  componentWillUpdate() {
    apisearch(this.state.search).then((post) => this.setState({ post }));
    apisearchs(this.state.search).then((send) => this.setState({ send }));
  }

  render() {

    const panes = [
      {
        menuItem: <Menu.Item ><Icon name='talk outline' />Donee</Menu.Item>,
        render: () => <Tab.Pane><Item.Group divided>


          {this.state.post.length >= 0 ?
            this.state.post.map(list =>

              <Item>
                <Item.Image src={list.img} />

                <Item.Content>
                  <Item.Header as='a'>{list.title}</Item.Header><br /><br />
                  <p>Description</p>
                  <Item.Description>
                  <div class="field">
                      <TextArea autoHeight rows={5}  readonly='true'>{list.content}</TextArea>
                    </div></Item.Description>
                  <Item.Extra>
                  
                    <Label size="mini">{list.category}</Label>
                   
                  </Item.Extra>
                  <Item.Meta>
                    <span className='cinema'>Contact: {list.contact}</span>
                  </Item.Meta>
                </Item.Content>
              </Item>
            ) : null
          }
        </Item.Group>
        </Tab.Pane>,
      },
      {
        menuItem: <Menu.Item ><Icon name='talk' />Donor</Menu.Item>,
        render: () => <Tab.Pane><Item.Group divided>


          {this.state.send.length >= 0 ?
            this.state.send.map(list =>

              <Item>
                <Item.Image src={list.img} />

                <Item.Content>
                  <Item.Header as='a'>{list.title}</Item.Header><br /><br />
                  <p>Description</p>
                  <Item.Description>
                  <div class="field">
                      <TextArea  rows={5} cols={10} readonly='true'>{list.content}</TextArea>
                    </div></Item.Description>
                  <Item.Extra>
                    <Label size="mini">{list.category}</Label>
                  </Item.Extra>

                  <Item.Meta>
                    <span className='cinema'>Contact: {list.contact}</span>
                  </Item.Meta>
                </Item.Content>
              </Item>
            ) : null
          }
        </Item.Group>
        </Tab.Pane>,
      },
      // {
      //   menuItem: <Menu.Menu position='right'>
      //     <Menu.Item>
      //       <Input type="text" icon={{ name: 'search', link: true }} placeholder='Search...' onChange={this.onChange} />
      //     </Menu.Item></Menu.Menu >
      // },

    ]

      // ********************* แก้VIEWโดยการสร้างตัวแปรคล้ายๆ panes ***********************
      const panesmo = [
        {
          menuItem: <Menu.Item ><Icon name='talk outline' />Donee</Menu.Item>,
          render: () => <Tab.Pane><Item.Group divided>
  
  
            {this.state.post.length >= 0 ?
              this.state.post.map(list =>
  
                <Item>
                  <Item.Image size='tiny' src={list.img} />
  
                  <Item.Content>
                    <Item.Header as='a'>{list.title}</Item.Header><br /><br />
                    <p>Description</p>
                    <Item.Description>
                    <div class="field">
                      <TextArea  rows={3}  readonly='true'>{list.content}</TextArea>
                      </div>
                    </Item.Description>
                    <Item.Extra>
                      <Label>{list.category}</Label>
                    </Item.Extra>
                    <Item.Meta>
                      <span className='cinema'>Contact: {list.contact}</span>
                    </Item.Meta>
                  </Item.Content>
                </Item>
              ) : null
            }
          </Item.Group>
          </Tab.Pane>,
        },
        {
          menuItem: <Menu.Item ><Icon name='talk' />Donor</Menu.Item>,
          render: () => <Tab.Pane><Item.Group divided>
  
  
            {this.state.send.length >= 0 ?
              this.state.send.map(list =>
  
                <Item>
                  <Item.Image src={list.img} />
  
                  <Item.Content>
                    <Item.Header as='a'>{list.title}</Item.Header><br /><br />
                    <p>Description</p>
                    <Item.Description>
                    <div class="field">
                      <TextArea  rows={3}  readonly='true'>{list.content}</TextArea>
                      </div>
                    </Item.Description>
                    <Item.Extra>
                      <Label>{list.category}</Label>
                    </Item.Extra>
  
                    <Item.Meta>
                      <span className='cinema'>Contact: {list.contact}</span>
                    </Item.Meta>
                  </Item.Content>
                </Item>
              ) : null
            }
          </Item.Group>
          </Tab.Pane>,
        },
        // {
        //   menuItem: <Menu.Menu position='right'>
        //     <Menu.Item>
        //       <Input type="text" icon={{ name: 'search', link: true }} placeholder='Search...' onChange={this.onChange} />
        //     </Menu.Item></Menu.Menu >
        // },
  
      ]
    return (
      <div className="News">
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Navbar />
          <br />
          <div class="postn">
            <Tab panes={panes} />
          </div >
          <br />
          <Footer />
        </Responsive>

        <Responsive {...Responsive.onlyMobile}>
          <Navbar />
          <br />
          <div class="postnmo">
            <Tab panes={panesmo} /> 
          </div >
          <br />
          <Footer />
        </Responsive>

      </div>
    );
  }
}

export default News;