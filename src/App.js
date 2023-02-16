import { useState } from "react";
import AddOns from "./components/AddOns";
import Info from "./components/Info";
import Plan from "./components/Plan";
import { SideBar } from "./components/sideBar";
import { Summary } from "./components/summary";
import { ThankYou } from "./components/thankYou";


import './style/app.css'


export default function App() {

  const [liTxt, setLiTxt] = useState("info");
  const liArr = ["info", "plan", "add", "summary", "thankYou"];

  //data from plan
  const [dataPlan, setDataPlan] = useState('');
  //data from add-ons
  const [dataAdd, setDataAdd] = useState([]);


  //change btn function in summary
  function change() {
    setLiTxt('plan');
    let activeStep = document.querySelector(".activeStep");
    let steps = document.querySelectorAll(".numStep");
    activeStep.classList.remove("activeStep");
    steps[liArr.indexOf('plan')].classList.add("activeStep");
  }


  //Next btn function
  function next(e) {
    //Use state for conditionnal dispaly    
    setLiTxt(
      liArr[liArr.indexOf(liTxt) + 1]
    )
    // Active manipulation
    let activeStep = document.querySelector(".activeStep");
    let steps = document.querySelectorAll(".numStep");
    activeStep.classList.remove("activeStep");
    // Add class active (if->lentgth verification)
    if (liArr.indexOf(liTxt) + 1 < 4) {
      steps[liArr.indexOf(liTxt) + 1].classList.add("activeStep");
    }
  }

  //Back btn function
  function back(e) {
    //Use state for conditionnal dispaly     
    setLiTxt(
      liArr[liArr.indexOf(liTxt) - 1]
    )
    // Active manipulation
    let activeStep = document.querySelector(".activeStep");
    let steps = document.querySelectorAll(".numStep");
    activeStep.classList.remove("activeStep");
    steps[liArr.indexOf(liTxt) - 1].classList.add("activeStep");
  }

  // oo.map((item)=>{
  //   setNb(
  //     [...nb, item]
  //   )
  // })

  return (
    <div className="contain">

      <div id="app" className="flex">
        <SideBar step={liTxt} />

        <div id="stepSect">

          {liTxt == "info" ? <Info /> : liTxt == "plan" ? <Plan setDataPlan={setDataPlan} dataPlan={dataPlan} /> : liTxt == "add" ? <AddOns dataPlan={dataPlan} dataAdd={dataAdd} setDataAdd={setDataAdd} /> : liTxt == "summary" ? <Summary change={change} dataPlan={dataPlan} dataAdd={dataAdd} /> : liTxt == "thankYou" ? <ThankYou /> : null}

          {liArr.indexOf(liTxt) == 4 ? null : liArr.indexOf(liTxt) > 2 ? <button className="btnNext" onClick={next}>Confirm</button> : <button className="btnNext" onClick={next}>Next Step</button>}

          {liArr.indexOf(liTxt) == 4 ? null : liArr.indexOf(liTxt) > 0 ? <button className="btnBack" onClick={back}>Go Back</button> : null}
        </div>
      </div>
    </div>
  )
}