import { useState } from "react";
import { AddOns } from "./components/addOns";
import { Info } from "./components/info";
import { NextBtn } from "./components/nextBtn";
import { Plan } from "./components/plan";
import { SideBar } from "./components/sideBar";
import { Summary } from "./components/summary";
import { ThankYou } from "./components/thankYou";


export default function App() {

  const [liTxt , setLiTxt] = useState("info");
  const liArr = ["info", "plan", "add", "summary", "thankYou"];

  function next() {     
    setLiTxt(     
      liArr[liArr.indexOf(liTxt) + 1]
    )
  }

  function back() {    
    setLiTxt(     
      liArr[liArr.indexOf(liTxt) - 1]
    )
  } 

  return (
    <div>
      <SideBar />
     
      {liTxt == "info" ? <Info/> : liTxt == "plan" ? <Plan/> : liTxt == "add" ? <AddOns/> : liTxt == "summary" ? <Summary/> : liTxt == "thankYou" ? <ThankYou/> : null}

      {liArr.indexOf(liTxt) == 4 ? null : liArr.indexOf(liTxt) > 2 ? <button onClick={next}>Confirm</button> : <button onClick={next}>Next Step</button>}

      {liArr.indexOf(liTxt) == 4 ? null : liArr.indexOf(liTxt) > 0 ? <button onClick={back}>Go Back</button> : null}
    </div>
  )
}