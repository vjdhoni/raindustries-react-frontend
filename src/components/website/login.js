import React from 'react';
import axios from 'axios';
import URL from '../config/url';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      EmployeeId: '',
      Password: '',
    };
  }

  clickingHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  loginEmployee = (event) => {
    this.setState({ password: false });
    if ((this.state.EmployeeId.length > 0) && (this.state.Password.length > 3)) {
      this.setState({ isLoad: false });
      axios.patch(`${URL}/admin/login`, this.state)
        .then(res => {
          this.setState({ isLoad: true })
          var data = res.data;
          if (data.success) {
            var info = data.data;
            localStorage.setItem('role', data.authentication);
            localStorage.setItem('acc', info.EmployeeId);
            localStorage.setItem('name', info.Name);
            localStorage.setItem('identy', info.Role);
            this.props.history.push({
              pathname: '/invoice',
              state: { info }
            });
          } else {

          }
        })
        .catch(err => {
          console.log(err);
        })
    }
    event.preventDefault();
  }

  routingRegisterPage = () => {
    this.props.history.push('/');
  }


  render() {
    const { EmployeeId, Password } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row" style={{ position: 'relative', top: '50px' }}>
            <div className="col-md-4"></div>
            <div className="col-md-4 well">
              <form onSubmit={this.loginEmployee}>
                <div className="form-group">
                  <label>EmployeeId:</label>
                  <input className="form-control" type="text" autoComplete="off" value={EmployeeId} onChange={this.clickingHandler} name="EmployeeId" placeholder="Enter your EployeeId" />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input className="form-control" type="password" autoComplete="off" value={Password} onChange={this.clickingHandler} name="Password" placeholder="Enter your Password" />
                </div>
                <div className='.row'>
                  <div className='col-md-3'><button type="submit" className="btn btn-success">Login</button></div>
                  <div className='col-md-3'></div>
                  <div className='col-md-3'></div>
                  <div className='col-md-3'><button onClick={this.routingRegisterPage} className="btn btn-danger">Go Back</button></div>
                </div>
              </form>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;