import Checkbox from "./Checkbox";
import '../style/AddOns.css';


const AddOns = () => {
    return (
        <div className="app">
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
            <h4>/mo</h4>
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
        </div>
    );
};
export default AddOns;