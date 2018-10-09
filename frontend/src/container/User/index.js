import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuUser from './components/menuUser';
import ProfileForm from './components/profileForm';
import OrderHistory from './components/orderHistory';
import { TAB_PROFILE } from './constants';

class ProfileUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: TAB_PROFILE,
    };
  }

  changeTab = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    let mainContent;
    if (this.state.activeTab === TAB_PROFILE) {
      mainContent = (
        <ProfileForm/>
      )
    } 
    else mainContent = (
      <OrderHistory/>
    );
    return (
      <div className='main-body'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <MenuUser changeTab={this.changeTab}/>
            </div>
            <div className='col-md-9'>
              {mainContent}
            </div>
          </div>
        </div>        
      </div>
    );
  }
};

const mapStateToProp = (state) => ({
});

const mapDispatchToProp = (dispatch) => ({
});

export default connect(mapStateToProp, mapDispatchToProp)(ProfileUser);

