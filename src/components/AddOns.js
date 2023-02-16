import Checkbox from "./Checkbox";
import Plan from "./Plan";
import '../style/AddOns.css';
import React, {useState} from "react";


const AddOns = ({dataPlan , setDataAdd , dataAdd}) => {
    const handleChange = (e) => {
        if (e.target.checked) {
            if(dataAdd.includes(e.target.value) == false) {
                setDataAdd([...dataAdd, e.target.value])
            }
        } else {
            setDataAdd(dataAdd.filter((item)=> item !== e.target.value))
        }
    }

    return (
        <div className="app">
        <div className='Titre'>
                    <h1 className='TH1'>Select your plan</h1>
                    <p>Please provide your name, email adress, and phone number</p>
                    </div>
                    <div className="ST9">

            <div className="add">
            <label>
                <input type="checkbox" value={dataPlan.includes('mo')?  'Online Service*+$1/mo': 'Online Service*+$10/yr'} onChange={handleChange}/>
            </label>
            <span>
            <h3>Online Service</h3>
            <p>Multiplayer free Service</p>
            </span>
            <h4>
                {dataPlan.includes('mo')? '+$1/mo': '+$10/yr'}
            </h4>
            </div>
            <br></br>
            <div className="add">
            <label>
                <input type="checkbox" value={dataPlan.includes('mo')? 'Larger storage*+$2/mo': 'Larger storage*+$20/yr'} onChange={handleChange}/>
            </label>
            <span>
            <h3>Larger storage</h3>
            <p>Extra 1TB of cloud save</p>
            </span>
            <h4>
                {dataPlan.includes('mo')? '+$2/mo': '+$20/yr'}
            </h4>
            </div>
            <br></br>
            <div className="add">
            <label>
                <input type="checkbox" value={dataPlan.includes('mo')? 'Customizable Profile*+$2/mo': 'Customizable Profile*+$20/yr'} onChange={handleChange}/>
            </label> 
            <span>
            <h3>Customizable Profile</h3>
            <p>Custom theme on your profile</p>
            </span>
            <h4>
                {dataPlan.includes('mo')? '+$2/mo': '+$20/yr'}
            </h4>
            </div>
                    </div>
        </div>
    );
};
export default AddOns;