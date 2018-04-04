import React, { Component } from 'react';
import { Menu, Image, Button, Segment, Icon, Responsive,Grid } from 'semantic-ui-react'

import './navbar.css';
//import '../../styles/semantic.min.css'

class Navbar extends Component {
    state = { activeItem: 'news' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    signout = event => {
        localStorage.clear();
        console.log(this.props);
        window.location.assign('/news')
    }

    render() {
        return (
            <div class='bar'>

                <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                    <Menu  >
                        <Menu.Item href="/news" name='news' onClick={this.handleItemClick}><Icon name='newspaper' />NEWS</Menu.Item>
                        <Menu.Item href='/receiver' name='receiver' onClick={this.handleItemClick} ><Icon name='empty heart' />NEED</Menu.Item>
                        <Menu.Item href='/sender' name='sender' onClick={this.handleItemClick} ><Icon name='heart' />GIVE</Menu.Item>

                        {!localStorage.getItem('username') ? (<Menu.Menu position='right'>
                            <Menu.Item href='/register' name='sign up' onClick={this.handleItemClick} />
                            <Menu.Item href='/login' name='Sign In ' onClick={this.handleItemClick}><Button color='red'>Sign In</Button></Menu.Item>
                        </Menu.Menu>
                        ) : (<Menu.Menu position='right'>
                            {localStorage.getItem('username') == 'admin' || localStorage.getItem('username') == 'mint' ?
                                (<Menu.Item href='/manage' name='manage' onClick={this.handleItemClick} ><Icon name='configure' />MANAGE</Menu.Item>) : null}
                            {localStorage.getItem('Oauth') == 'true' ?
                                <Menu.Item active ><Icon name='user' />{localStorage.getItem('username')}</Menu.Item>
                                :
                                <Menu.Item href='/profile'  ><Icon name='user' />{localStorage.getItem('username')}</Menu.Item>
                            }

                            <Menu.Item name='Sign out' onClick={this.signout} > <Button color='red'>Sign Out</Button></Menu.Item>
                        </Menu.Menu>
                            )}
                    </Menu>
                </Responsive>
                <Responsive {...Responsive.onlyMobile}>
                
                    <Menu fluid widths={8} icon='labeled'size='mini'  >
                      
                        <Menu.Item href="/news" name='news' onClick={this.handleItemClick}><Icon name='newspaper' size='mini' />NEWS</Menu.Item>
                        <Menu.Item href='/receiver' name='receiver' onClick={this.handleItemClick} ><Icon name='empty heart' size='mini' />NEED</Menu.Item>
                        <Menu.Item href='/sender' name='sender' onClick={this.handleItemClick} ><Icon name='heart' size='mini' />GIVE</Menu.Item>
                      
                        {!localStorage.getItem('username') ? (<Menu.Menu position='right'>
                            <Menu.Item href='/register' name='sign up' onClick={this.handleItemClick} />
                            <Menu.Item href='/login' name='Sign In ' onClick={this.handleItemClick}><Button color='red'>Sign In</Button></Menu.Item>
                        </Menu.Menu>
                        ) : (<Menu.Menu position='right'>
                            {localStorage.getItem('username') == 'admin' || localStorage.getItem('username') == 'mint' ?
                                (<Menu.Item href='/manage' name='manage' onClick={this.handleItemClick} ><Icon name='configure' size='mini' />MANAGE</Menu.Item>) : null}
                            {localStorage.getItem('Oauth') == 'true' ?
                                <Menu.Item active ><Icon name='user' />{localStorage.getItem('username')}</Menu.Item>
                                :
                                <Menu.Item href='/profile'  ><Icon name='user'size='mini' />{localStorage.getItem('username')}</Menu.Item>
                            }

                            <Menu.Item  name='Sign out' onClick={this.signout} ><Icon name='log out' size='mini'/>Sign Out</Menu.Item>
                        </Menu.Menu>
                            )}
                    </Menu>
                   
                </Responsive>

            </div>
        )
    }
}

export default Navbar;