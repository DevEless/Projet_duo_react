import '../style/Plan.css';
import React, { useState, useEffect } from 'react';

const Plan = ({setDataPlan}) => {
const [isOn, setIsOn] = useState(false);

const handleClick = () => {
setIsOn(prevIsOn => !prevIsOn);
};

const prixAnnéesArcade = '90/yr';
const prixAnnéesAdvanced = '120/yr';
const prixAnnéesPro = '150/yr';
const prixMoisArcade = '9/mo';
const prixMoisAdvanced = '12/mo';
const prixMoisPro = '15/mo';

const prix1 = isOn ? prixAnnéesArcade : prixMoisArcade;
const prix2 = isOn ? prixAnnéesAdvanced : prixMoisAdvanced;
const prix3 = isOn ? prixAnnéesPro : prixMoisPro;

const monthlyClass = isOn ? '' : 'active';
const yearlyClass = isOn ? 'active' : '';

return (
<div>
<div className='Titre'>
<h1 className='TH1'>Select your</h1>
<p>Please provide your name, email adress, and phone number</p>
</div>
<div className='cont'>
<div onClick={()=> setDataPlan('Arcade '+prix1)} className="Plan1" >
<div className='icon1'>
<i className="fa-solid fa-jet-fighter"></i>
</div>
<span className='txt'>
<h4>Arcade</h4>
<p>$ {prix1}</p>
</span>
</div>
<div onClick={()=> setDataPlan(prix1)} className="Plan2">
<div className='icon2'>
<i className="fa-solid fa-gamepad"></i>
</div>
<span className='txt'>
<h4>Advanced</h4>
<p>$ {prix2}</p>
</span>
</div>
<div onClick={()=> setDataPlan(prix1)} className="Plan3">
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
<input type="checkbox" checked={isOn} onChange={handleClick} />
<span className="slider round"></span>
</label>
<p className={yearlyClass}>Yearly</p>
</div>
</div>
);
}

export default Plan;