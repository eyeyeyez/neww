import React from 'react';

import './login.css';

import { login, loginswu, userswu } from '../../Api'
import { Grid, Button, Message, Icon, Segment, Responsive } from 'semantic-ui-react'


class Login extends React.Component {
  state = {
    username: '',
    password: '',
    fail: ''
  }

  onTextChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({ [name]: value })
  }
  onSubmit = (event) => {
    event.preventDefault()
    login(this.state.username, this.state.password)
      .then(data => {
        if (data.status == 200) {
          localStorage.setItem('username', this.state.username)
          this.props.history.replace('/news')
        }
        else {
          loginswu(this.state.username, this.state.password)
            .then(data => {
              if (data.data.length < 6) {
                userswu(this.state.username).then(data => {
                  //console.log(data.data.z303['z303-name'])
                  localStorage.setItem('username', data.data.z303['z303-name'])
                  localStorage.setItem('Oauth', 'true')

                })
                this.props.history.replace('/news')
              }
              else {
                this.setState({ fail: 'fail' })
              }
            })
        }
      })
  }
  render() {
    return (
      <div>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Grid columns={3}>
            <Grid.Row>

              <Grid.Column width={5}>
              </Grid.Column>

              <Grid.Column width={6}>
                <div class="blog">


                  <div>
                    <h2 class="ui icon center aligned header">
                      <Icon aria-hidden="true" name="user circular "></Icon>
                      <div class="content">SIGN IN</div>
                    </h2>
                  </div>
                  <br />

                  <form className='ui large form' onSubmit={this.onSubmit}>
                    <div className='ui stacked segment'>
                      <div className='field'>
                        <div className='ui left icon input'>
                          <i className='user icon' />
                          <input
                            type='text'
                            name='username'
                            placeholder='Username'
                            value={this.state.username}
                            onChange={this.onTextChange} />
                        </div>
                      </div>

                      <div className='field'>
                        <div className='ui left icon input'>
                          <i className='lock icon' />
                          <input
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={this.state.password}
                            onChange={this.onTextChange} />
                        </div>
                      </div>

                      <div className='field'>
                        <div className='ui left icon input'>
                          <Button negative type='submit' className='ui  fluid button'>
                            Sign In
                  </Button>
                        </div>
                      </div>
                    </div>

                    {this.state.fail == 'fail' ?
                      (<Message size='tiny' negative>
                        <Message.Header>Username or Password is Incorrect !</Message.Header>
                        <p>Please double-check and try again.</p>
                      </Message>) : null}

                  </form>
                  {/* <Segment  vertical textAlign='center'><p >Sign Up with Buasri ID </p>  </Segment > */}
                  <Segment textAlign='right'>
                    New to us?    <a href='/register'>Sign Up</a>
                  </Segment>

                </div>
              </Grid.Column>

              <Grid.Column width={5}>
              </Grid.Column>

            </Grid.Row>
          </Grid>
        </Responsive>


        <Responsive {...Responsive.onlyMobile}>
         <Grid columns={1}>
            <Grid.Row centered relaxed > 

              <Grid.Column  width={10}>
                <div class="bmolog">


                  <div>
                    <h2 class="ui icon center aligned header">
                      <Icon aria-hidden="true" name="user circular "></Icon>
                      <div class="content">SIGN IN</div>
                    </h2>
                  </div>
                  <br />

                  <form className='ui large form' onSubmit={this.onSubmit}>
                    <div className='ui stacked segment'>
                      <div className='field'>
                        <div className='ui left icon input'>
                          <i className='user icon' />
                          <input
                            type='text'
                            name='username'
                            placeholder='Username'
                            value={this.state.username}
                            onChange={this.onTextChange} />
                        </div>
                      </div>

                      <div className='field'>
                        <div className='ui left icon input'>
                          <i className='lock icon' />
                          <input
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={this.state.password}
                            onChange={this.onTextChange} />
                        </div>
                      </div>

                      <div className='field'>
                        <div className='ui left icon input'>
                          <Button negative type='submit' className='ui  fluid button'>
                            Sign In
                  </Button>
                        </div>
                      </div>
                    </div>

                    {this.state.fail == 'fail' ?
                      (<Message size='tiny' negative>
                        <Message.Header>Username or Password is Incorrect !</Message.Header>
                        <p>Please double-check and try again.</p>
                      </Message>) : null}

                  </form>
                  {/* <Segment  vertical textAlign='center'><p >Sign Up with Buasri ID </p>  </Segment > */}
                  <Segment textAlign='right'>
                    New to us?    <a href='/register'>Sign Up</a>
                  </Segment>

                </div>
              </Grid.Column>


            </Grid.Row>
          </Grid>
        </Responsive>
      </div>
    )
  }
}

export default Login;