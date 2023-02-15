import { useState } from "react";
import { AddOns } from "./components/addOns";
import { Info } from "./components/info";
import { Plan } from "./components/plan";
import { SideBar } from "./components/sideBar";
import { Summary } from "./components/summary";
import { ThankYou } from "./components/thankYou";

import './style/app.css'


export default function App() {

  const [liTxt , setLiTxt] = useState("info");
  const liArr = ["info", "plan", "add", "summary", "thankYou"];

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
    steps[liArr.indexOf(liTxt)- 1].classList.add("activeStep");
  } 

  return (
    <div id="app" className="flex">
      <SideBar step={liTxt}/>

      <div id="stepSect">
        {liTxt == "info" ? <Info/> : liTxt == "plan" ? <Plan/> : liTxt == "add" ? <AddOns/> : liTxt == "summary" ? <Summary/> : liTxt == "thankYou" ? <ThankYou/> : null} 

        {liArr.indexOf(liTxt) == 4 ? null : liArr.indexOf(liTxt) > 2 ? <button className="btnNext" onClick={next}>Confirm</button> : <button className="btnNext" onClick={next}>Next Step</button>}

        {liArr.indexOf(liTxt) == 4 ? null : liArr.indexOf(liTxt) > 0 ? <button className="btnBack" onClick={back}>Go Back</button> : null}
      </div>
    </div>
  )
}