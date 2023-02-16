
import '../style/Plan.css';
import React, { useState, useEffect } from 'react';


class Plan extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }));
    const duration = this.state.isOn ? 'yearly' : 'monthly';

  }

  
  
  render() {

    const prixAnnéesArcade = '90/yr';
    const prixAnnéesAdvanced = '120/yr';
    const prixAnnéesPro = '150/yr';
    const prixMoisArcade = '9/mo';
    const prixMoisAdvanced = '12/mo';
    const prixMoisPro = '15/mo';
    const prix1 = this.state.isOn ? prixAnnéesArcade : prixMoisArcade;
    const prix2 = this.state.isOn ? prixAnnéesAdvanced : prixMoisAdvanced;
    const prix3 = this.state.isOn ? prixAnnéesPro : prixMoisPro;
    const monthlyClass = this.state.isOn ? '' : 'active';
    const yearlyClass = this.state.isOn ? 'active' : '';

    return (
      <div>
                      <div className='Titre'>
                    <h1 className='TH1'>Select your</h1>
                    <p>Please provide your name, email adress, and phone number</p>
                    </div>
        <div className='cont'>
          <div className="Plan1" >
            <div className='icon1'>
              <i className="fa-solid fa-jet-fighter"></i>
            </div>
            <span className='txt'>
              <h4>Arcade</h4>
              <p>$ {prix1}</p>
            </span>
          </div>
          <div className="Plan2">
            <div className='icon2'>
              <i className="fa-solid fa-gamepad"></i>
            </div>
            <span className='txt'>
              <h4>Advanced</h4>
              <p>$ {prix2}</p>
            </span>
          </div>
          <div className="Plan3">


            
            <div className='icon3'>
              <i className="fa-brands fa-simplybuilt"></i>
            </div>
            <span className='txt'>
              <h4>Pro</h4>
              <p>$ {prix3}</p>
            </span>
          </div>
        </div>
        <div className='container'>
          <p className={monthlyClass}>Monthly</p>
          <label className="switch">
            <input type="checkbox" checked={this.state.isOn} onChange={this.handleClick} />
            <span className="slider round"></span>
          </label>
          <p className={yearlyClass}>Yearly</p>
        </div>
      </div>
    );
  }
}

export default Plan;
