import Checkbox from "./Checkbox";
import Plan from "./Plan";
import '../style/AddOns.css';
import React, {useState} from "react";


const AddOns = () => {


    return (
        <div className="app">
        <div className='Titre'>
                    <h1 className='TH1'>Select your plan</h1>
                    <p>Please provide your name, email adress, and phone number</p>
                    </div>
                    <div className="ST9">

            <div className="add">
            <Checkbox /> 
            <span>
            <h3>Online Service</h3>
            <p>Multiplayer free Service</p>
            </span>
            <h4>{<Plan prix1/>}</h4>
            </div>
            <br></br>
            <div className="add">
            <Checkbox /> 
            <span>
            <h3>Online Service</h3>
            <p>Multiplayer free Service</p>
            </span>
            <h4>/mo</h4>
            </div>
            <br></br>
            <div className="add">
            <Checkbox /> 
            <span>
            <h3>Online Service</h3>
            <p>Multiplayer free Service</p>
            </span>
            <h4></h4>
            </div>
                    </div>
        </div>
    );
};
export default AddOns;