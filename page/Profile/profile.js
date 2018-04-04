import React, { Component } from 'react';

import Footer from '../../Component/Footer/footer';
import Navbar from '../../Component/Navbar/navbar';

import 'semantic-ui-css/semantic.min.css';
import './profile.css';
import { Button, Label, Card, Image, Checkbox, Icon, Table, Menu, Tab, Input, Image as ImageComponent, Item, Header, Message, Responsive } from 'semantic-ui-react'
import { getuser, updateuser } from '../../Api'

const colors = ['red']

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            user: [],
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            email: '',
            phone: ''

        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        const name = e.target.name
        const value = e.target.value
        this.setState({ [name]: value })
    }

    onSubmit(e) {

        updateuser(this.state.username, this.state.firstName, this.state.lastName, this.state.address, this.state.email, this.state.phone)
            .then(data => {
                if (data.status === 200) {
                    this.componentWillMount()
                }
            })
    }

    componentWillMount() {
        getuser(localStorage.getItem('username'))
            .then(data => {
                this.setState({ username: data.username }),
                    //this.setState({ password: data.password }),
                    this.setState({ firstName: data.firstName }),
                    this.setState({ lastName: data.lastName }),
                    this.setState({ address: data.address }),
                    this.setState({ email: data.email }),
                    this.setState({ phone: data.phone })
            });
    }


    render() {
        const user = this.state.user.username
        return (
            <div className="Profile"> 
                <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                    <Navbar />
                    <br />
                    <div class='pro'>
                        <div>
                            <Header as='h2' icon textAlign='center'>
                                <Icon name='id card outline' circular />
                                <Header.Content>
                                    YOUR PROFILE
            </Header.Content>
                            </Header>
                        </div>
                        <br />

                        <div class="ui grid centered">
                            
                            <div class="ten wide column">
                                <form class="ui form ">
                                    <div class="unstackable two fields">
                                        <div class="field">
                                            <label>Username</label>
                                            <div class="ui input">
                                                <input type="text" value={this.state.username} name='username' onChange={this.onChange} />
                                            </div>
                                        </div>
                                        {/* <div class="field">
                                    <label>Password</label>
                                    <div class="ui input">
                                        <input type="text" value={this.state.password}   name='password' onChange={this.onChange}/>
                                    </div>
                                </div> */}
                                    </div>
                                    <div class="unstackable two fields">
                                        <div class="field">
                                            <label>First Name</label>
                                            <div class="ui input">
                                                <input type="text" value={this.state.firstName} name='firstName' onChange={this.onChange} />
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label>Last Name</label>
                                            <div class="ui input">
                                                <input type="text" value={this.state.lastName} name='lastName' onChange={this.onChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label>Address</label>
                                        <div class="ui input">
                                            <input type="text" value={this.state.address} name='address' onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div class="two fields">
                                        <div class="field">
                                            <label>Email</label>
                                            <div class="ui input">
                                                <input type="text" value={this.state.email} name='email' onChange={this.onChange} />
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label>Phone</label>
                                            <div class="ui input">
                                                <input type="text" value={this.state.phone} name='phone' onChange={this.onChange} />
                                            </div>
                                        </div>
                                    </div>



                                    <Button negative floated='right' class="ui button" onClick={this.onSubmit}>Submit</Button>
                                </form>
                            </div>
                        </div>
                        <br />
                    </div>
                    <Footer />
                </Responsive>

                <Responsive {...Responsive.onlyMobile}>
                    <Navbar />
                    <br />
                    <div class='promo'>
                        <div>
                            <Header as='h2' icon textAlign='center'>
                                <Icon name='id card outline' circular />
                                <Header.Content>
                                    YOUR PROFILE
                                </Header.Content>
                            </Header>
                        </div>
                        <br />

                        <div class="ui grid centered">
            
                            <div class="fourteen wide column">
                                <form class="ui form ">
                               <div class="unstackable two fields">
                                        <div class="field">
                                            <label>Username</label>
                                            <div class="ui input">
                                                <input type="text" value={this.state.username} name='username' onChange={this.onChange} />
                                            </div>
                                        </div>
                                        {/* <div class="field">
                                    <label>Password</label>
                                    <div class="ui input">
                                        <input type="text" value={this.state.password}   name='password' onChange={this.onChange}/>
                                    </div>
                                </div> */}
                                    </div>
                                    <div class="unstackable two fields">
                                        <div class="field">
                                            <label>First Name</label>
                                            <div class="ui input">
                                                <input type="text" value={this.state.firstName} name='firstName' onChange={this.onChange} />
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label>Last Name</label>
                                            <div class="ui input">
                                                <input type="text" value={this.state.lastName} name='lastName' onChange={this.onChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label>Address</label>
                                        <div class="ui input">
                                            <input type="text" value={this.state.address} name='address' onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div class="two fields">
                                        <div class="field">
                                            <label>Email</label>
                                            <div class="ui input">
                                                <input type="text" value={this.state.email} name='email' onChange={this.onChange} />
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label>Phone</label>
                                            <div class="ui input">
                                                <input type="text" value={this.state.phone} name='phone' onChange={this.onChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <Button negative floated='right' class="ui button" onClick={this.onSubmit}>Submit</Button>
                                </form>
                            </div>
                        </div>
                        <br />
                    </div>
                    <Footer />
                </Responsive>

            </div>


        );
    }
}
export default Profile;