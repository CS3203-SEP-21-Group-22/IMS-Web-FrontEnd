import React, { useState } from 'react'
import repairstat from '../../styles/images/repairstat.png'
import repaireq from '../../styles/images/repaireq.png'
import Card from '../Card';
import List from '../RepairList'





const LabTechnicianDashboard = () => {

  const[showListreq,setShowListreq] = useState(false);
  const[showListstat,setShowListstat] = useState(false);

  const[isVisible,setVisibility] = useState(false);

  const toggleViewreq = () =>{
    setShowListreq(!showListreq);
    setVisibility(!isVisible);
  };
  const toggleViewstat = () =>{
    setShowListstat(!showListstat);
    setVisibility(!isVisible);
  };
  return (
    <div className="h-[800px] w-full bg-gradient-to-b from-[#202652] to-[#E3EDF8] flex justify-center items-center relative flex-row">

      {!showListreq ? (
        <>
          {!isVisible &&
          <Card
          imgsrc={repaireq}
          alt='repair-req'
          Children='VIEW REPAIR REQUEST'
          onClick={toggleViewreq}
          />
          }
        </>
      ):(
        <List onClick={toggleViewreq}
        isVisible={isVisible}/>
      )
        
      }
      {!showListstat ? (
        <>
          {
            !isVisible &&
            <Card
            imgsrc={repairstat}
            alt='repair-stat'
            Children='VIEW REPAIR STATUS'
            onClick={toggleViewstat}
            />
          }
          
        </>
      ):(
        <List onClick={toggleViewstat}/>
      )
        
      }


      
      
    </div>
    
  )
}

export default LabTechnicianDashboard



