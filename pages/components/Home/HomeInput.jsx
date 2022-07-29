import Style from './HomeInput.module.css';
import { useState } from 'react';
import {BsSearch} from 'react-icons/bs'

import DatePicker from 'react-datepicker'
import { subDays,addDays } from "date-fns";
import {AiOutlineCalendar} from 'react-icons/ai'

const HomeInput = () => {
  const [startDate, setStartDate] = useState(null);
  const [SeatNum, SetSeatNum]=useState(0);


   
  // increase seat
  const incseat=()=>{
    SetSeatNum(SeatNum+1);
  }
  //  decrease seat

  const decseat=()=>{
    if(SeatNum>0)
    SetSeatNum(SeatNum-1);
  }
  // Seat tag toogle
  const seattype=()=>{
    const target=document.getElementById("seattype");
    
    if(target.classList.contains('hidden')){
      target.classList.remove("hidden");
    }
    else{
      target.classList.add("hidden");
    }
  }



  return (<>
 

 
    <div className={`  ${Style.main}`}>
      
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 relative`}>
        <select className={` form-select cursor-pointer ${Style.formSelect}`}>
          <option defaultValue="" selected>From</option>
          <option defaultValue="Labuan">Labuan</option>
        </select>

        <select className={` form-select cursor-pointer ${Style.formSelect}`}>
          
         <option selected  defaultValue="">To</option>
          <option defaultValue="Mernumhok">Mernumhok</option>
          <option defaultValue="Sipitang">Sipitang</option>
          <option defaultValue="Limbang">Limbang</option>
          <option defaultValue="Lawas">Lawas</option>
          <option defaultValue="Kota Kinabalu">Kota Kinabalu</option>
          
        </select>

        <div className='relative'>
        <AiOutlineCalendar className='absolute top-5 left-6'/>
        <DatePicker
     selected={startDate}
      onChange={(date) => setStartDate(date)}
      includeDateIntervals={[
        { start: subDays(new Date(),1), end: addDays(new Date(), 1000) },
      ]}
      placeholderText={` Depart`}
      className={` cursor-pointer m-0 form-select absolute top-0 ${Style.formSelect}`}
    /> </div>
        

        <select className={` form-select cursor-pointer ${Style.formSelect}`}>
          <option selected>Nationality</option>
          <option defaultValue="Mernumhok">Malaysian</option>
          <option defaultValue="Sipitang">Non-Malaysian</option>

        </select>
        <select className={` form-select cursor-pointer mt-2 ${Style.formSelect} `}>
          <option selected >Payment</option>
          <option defaultValue="Mernumhok">Card</option>
          <option defaultValue="Sipitang">Online Banking</option>

        </select>


        <div className='col-span-2 md:col-span-3 mt-2 flex' onClick={seattype} >
        
          <div className={`form-select cursor-pointer ${Style.formSelect}`} >Please Select the Seat Type </div>


         

          
         <button className={`mx-3 bsSearch ${Style.book}`}> <BsSearch className={`${Style.Searchbs}`}/></button>
        </div>

        <div className={`hidden ${Style.bk}`} id="seattype">
           
           
            <div className='flex flex-col'>
            <strong>Adults & Children 3 Years Old and above</strong>
            <div className={ `d-flex ${Style.inner}`}>
              <button className='btn btn-danger ' onClick={decseat}>-</button>
              <p>{SeatNum}</p>
              <button  className='btn btn-primary' onClick={incseat}>+</button>
            </div>
            </div>

            
          </div>
        
      </div>
      <p className={Style.max}>Max 10 pax per transaction</p>
     
    </div>
  
    

  





  </>)
}
export default HomeInput;