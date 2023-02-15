import React from 'react';
import '../style/Plan.css';

const prixAnnéesArcade = '90/yr';
const prixAnnéesAdvanced = '120/yr';
const prixAnnéesPro = '150/yr';
const prixMoisArcade = '9/mt';
const prixMoisAdvanced = '12/mt';
const prixMoisPro = '15/mt';

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
  }

  render() {
    const prix1 = this.state.isOn ? prixAnnéesArcade : prixMoisArcade;
    const prix2 = this.state.isOn ? prixAnnéesAdvanced : prixMoisAdvanced;
    const prix3 = this.state.isOn ? prixAnnéesPro : prixMoisPro;
    const monthlyClass = this.state.isOn ? '' : 'active';
    const yearlyClass = this.state.isOn ? 'active' : '';

    return (
      <div>
        <div className='cont'>

          <div className="Plan">
            <div className='icon1'>
            <i class="fa-solid fa-jet-fighter"></i>

            </div>
            <span className='txt'>

            <h4>Arcade</h4>
            <p>
              $ {prix1}
            </p>
            </span>
          </div>
          <div className="Plan">
            <div className='icon2'>
            <i class="fa-solid fa-gamepad"></i>

            </div>
            <span className='txt'>

            <h4>Advanced</h4>
            <p>
              $ {prix2}
            </p>
            </span>
          </div>
          <div className="Plan">
            <div className='icon3'>
            <i class="fa-brands fa-simplybuilt"></i>

            </div>
            <span className='txt'>
            <h4>Pro</h4>
            <p>
              $ {prix3}
            </p>

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
