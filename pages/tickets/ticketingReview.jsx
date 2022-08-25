import Image from 'next/image'
import { useEffect } from 'react'
import Head from 'next/head'
import { BsCheckLg } from 'react-icons/bs'
import { BiTransferAlt } from 'react-icons/bi'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Link from 'next/dist/client/link'
import { useState } from "react";
import DatePicker from 'react-datepicker'
import { subYears, addDays } from "date-fns";
import { useRouter } from 'next/router';

const TicketingReview = () => {
    // window.addEventListener('scroll' , changeBackground);
    const [startDate, setStartDate] = useState(null);
    const [showModal, setShowModal] = useState(true);


    

    const router = useRouter();
    const fun = () => {
        // const a=document.getElementById('acpt');
        const a = document.querySelector(".acpt");
        if (a.classList.contains('d-none')) {
            a.classList.remove('d-none')
        }
        else {
            a.classList.add('d-none')
        }

    }



    useEffect(function mount() {
        const element = document.getElementById("navvbar");
        element.classList.remove("navbg");
        element.classList.remove("indexHeadH1");


        const onScroll = () => {

            if (window.scrollY >= 100) {
                element.classList.add("navbg");
                element.classList.add("indexHeadH1");
            }

            else {
                element.classList.remove("navbg");
                element.classList.remove("indexHeadH1");
            }
        }

        window.addEventListener("scroll", onScroll);

        return function unMount() {
            window.removeEventListener("scroll", onScroll);
        };
    });


   const seatfocus=(e)=>{
        e.target.style.background="green";
        console.log("click");
   }
   const seatBlur=(e)=>{
    e.target.style.background="pink";
    console.log("blur");
   }
    
    
    return (<>
        <style jsx>{`
        .review{
            margin:50px 0;
        }
   .background{
  height: 500px;
  width: 100%;

  background:url('/img/homebg.jpeg');
  background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
   
}
.left{
   
}
.left .rt{
    font-weight: 700;
    margin-bottom: 20px;
    font-size: 25px;
    font-family: Poppins,sans-serifs;
    color: #000;
}
.nice-div{
    color: #555;
    padding: 30px;
    border: medium none;
    margin-bottom: 1rem;
    background:rgb(218, 214, 252);
    box-shadow: 0 4px 20px 0 rgb(46 70 198 / 20%);
}
.nice{
    font-weight: 600;
    font-size: 22px;
    font-family: Poppins,sans-serifs;
    color: #000;
}
.nice2{
    color: #555;
    font-family: Lato,sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
}
.update{
    margin:40px 0;
}
.update .div1{
    padding:25px 30px;
    background-image:linear-gradient(90deg,#496cfe 0,#4950f8 29%,#4933f1 55%,#7133f3 83%,#9932f5 100%);
}
.update .div1 h1{
    font-size: 18px;
    font-weight: 700;
    margin-right: 15px;
    text-transform: uppercase;
    color: #fff;
}
.update .div1 p
{
    font-size: 14px;
    color: #d0d9ff;
    margin-bottom:1rem;
    }
    .update .div1 a{
        font-size: 14px;
    padding: 10px 35px;    border-radius: 999px;color: #fff;
    border: none;background-image: linear-gradient(0deg,#ffaa57 0,#fe5c76 100%);font-family: Lato,sans-serif;font-weight: 600;
    line-height: 24px;
    }
    .update .div1 a:hover{
        background-image: linear-gradient(180deg,#ffaa57 0,#fe5c76 100%);
    }

    .update .div2{
        padding: 20px;
        border: 1px solid rgba(13,21,75,.15);
    background-color: #fff;
    box-shadow: 0 3px 7px 0 rgb(55 94 246 / 20%);
    }
    .update .div2 h1{
        padding-right:10px;
        font-weight:600;
        font-size:20px;
    }


    .P-info{
        
        padding: 30px;
        border: 1px solid rgba(13,21,75,.15);
        box-shadow: 0 3px 7px 0 rgb(55 94 246 / 20%);
        margin-bottom: 30px;
        transition:.5s;
    }
    .P-info:hover{
        border: 1px solid blue;

    }
     .P-info h1{
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 20px;
        font-family: Poppins,sans-serifs;
    color: #000;
     }
     .P-info p{
        font-weight: 500;
        color: #333;
        font-size: 16px;
        margin-bottom: 2rem;
     }
     .P-info p span{
        color: red;
        
     }
     .P-info label{
        padding:10px 10px;
        font-weight:500;
     }
     .P-info label span{
        color:red;
        padding-left:4px;
     }
     .P-info input,.P-info .date{
        padding:10px;
        border-bottom: 1px solid rgba(90,90,90,.5);
        margin-bottom: 30px;
        cursor:pointer;
        transition:.5s;
        
} 
.P-info input:focus{
    layout:none;
    border:none;
}
.P-info input:hover{
    border-bottom: 1px solid blue;
}
.P-info select{
    padding:10px;
    margin-bottom:30px;
}
.P-info button{
    width:max-content;
    font-size: 14px;
    padding: 14px 25px;
    border-radius: 999px;
    background: linear-gradient(35deg,#9932f5 0,#4933f1 53%,#4950f8 70%,#496cfe 100%);
    font-weight: 600;
}

.datee{
    width:100%;
    background:red;
}


.review .right{
    height:max-content;
    margin-bottom: 30px;
    padding: 30px;
    border: 1px solid rgba(42,56,76,.15);
    border-radius: 5px;
    background-color: #fff;
    -webkit-box-shadow: 0 10px 30px 0 rgb(55 94 246 / 20%);
    box-shadow: 0 10px 30px 0 rgb(55 94 246 / 20%);
}

.review .right p{
    font-size: 16px;
    color: #000;
}
.review .right hr{
    color:rgba(0,0,0,.902);
    height:2px;
}
.review .right h1{
    margin-top: 7px;
    padding-top: 15px;
    padding-bottom: 30px;
    color:black;
    font-weight:600;
    font-size:18px;
    }
    .review .right h2{
        margin-top: 7px;
    padding-top: 15px;
    padding-bottom: 30px;
    font-size: 22px;
    font-weight: 600;
    color: #496cfe;
    }
    .review .right .comp{
        font-size: 14px;
    padding: 14px 25px;
    border-radius: 999px;
    background: linear-gradient(35deg,#9932f5 0,#4933f1 53%,#4950f8 70%,#496cfe 100%);
    font-weight: 600;
    line-height: 24px;
    color:white;
}
.review .right .acpt{
    color: red;
    font-size: 13px;
    text-align: center;
}
.review .right label{
    font-size: 14px;
}
.review .p-method{
    font-weight: 700;
    font-family: Lato,sans-serif;
    font-size: 16px;
    line-height: 26px;
    text-align:center;
}

.choose-seat .modal-header{
    height:50px;
}
.choose-seat .modal-footer button{
    font-size: 14px;
    padding: 14px 25px;
    border-radius: 999px;
    background: linear-gradient(35deg,#9932f5 0,#4933f1 53%,#4950f8 70%,#496cfe 100%);
    color: #fff!important;
}

.choose-seat .modal-body .rt-btn button{
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.5rem;
    padding: 4px 0;
    color: white;
    border-radius: 5px;
    margin:0 10px;
}
.choose-seat .modal-body .rt-btn .eco{
    background: #f55bd4;
}
.choose-seat .modal-body .rt-btn .seatTaken{
    background: #d10000
}
.choose-seat .modal-body .rt-btn .disabled{
    background: #dddddd;
}
.choose-seat .modal-body .rt-btn .business{
    background: #1100ff;
}

.choose-seat .modal-body .cockpit{
    height: 127px;
    position: relative;
    overflow: hidden;
    text-align: center;
    border-bottom: 5px solid #d8d8d8;
}
.choose-seat .modal-body .cockpit:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 264px;
    width: 100%;
    border-radius: 50%;
    border-right: 5px solid #d8d8d8;
    border-left: 5px solid #d8d8d8;
}
.choose-seat .modal-body .fuselage {
    border-right: 5px solid #d8d8d8;
    border-left: 5px solid #d8d8d8;
    list-style: none;
    padding: 0;
    margin: 0;
}
.choose-seat .modal-body .seats {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
}
.choose-seat .modal-body .seat {
    width: 100%;
    padding: 5px;
    position: relative;
    min-width: 45px;
}
.choose-seat .modal-body .seat label {
    display: block;
    position: relative;
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.5rem;
    padding: 4px 0;
    background: #F42536;
    color: white;
    border-radius: 5px;
    animation-duration: 300ms;
    animation-fill-mode: both;
    background: #f55bd4;
    margin-bottom: 0.5rem;
    cursor:pointer;
}
.choose-seat .modal-body .seat input{
    {/* opacity: 0; */}
}
.choose-seat .modal-body .seat label:hover{
    cursor:pointer;
}
.choose-seat .modal-body .seat label:before {
    content: "";
    position: absolute;
    width: 75%;
    height: 75%;
    top: 1px;
    left: 50%;
    transform: translate(-50%, 0%);
    background: rgba(255, 255, 255, 0.4);
    border-radius: 3px;
}

      `}</style>
      
        <div className='Home row p-0'>
            <div className='fixed-top transition-all navbg' id="navvbar">
                <Navbar />
            </div>
            <Head>
                <title>LDA::eTicketing Review</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />

            </Head>

            <div className="p-0 background"></div>



            <form onSubmit={(e) => { e.preventDefault(); router.push("/") }}>
                <div className='review row flex gap-6 justify-center'>

                    <div className='col-11 col-lg-8 left flex flex-col'>
                        <div>
                            <h1 className='rt'> Review your trip </h1>
                            <div className='nice-div d-flex'>
                                <BsCheckLg className='text-black m-1' />
                                <div className='flex flex-col'>
                                    <h2 className='flex nice'> Nice Job! You picked one of our best value
                                        tickets.</h2>
                                    <h2 className='nice2'>
                                        Book now so you don't miss out on this price!
                                    </h2></div>
                            </div>
                        </div>

                        {/* update box */}
                        <div className='update left flex flex-col'>
                            <div className='div1 flex items-center justify-between'>
                                <div className='flex flex-col'>
                                    <div className='flex items-center justify-center'><h1 className='pr-2'>LABUAN </h1><BiTransferAlt className='text-white' /> <h1 className='pl-4'>LAWAS</h1></div>
                                    <div>
                                        <p>FRI,05 AUG 2022 | 3 adult</p>
                                    </div>
                                </div>
                                <Link href="/"><a className='btn btn-danger'>UPDATE</a></Link>
                            </div>
                            <div className='div2 flex justify-between '>
                                <div className='flex items-center'><h1 className='text-blue-600'>OPEN</h1><p>12:30</p></div>
                                <div className='flex items-center'><h1 className='text-blue-600'>Boarding</h1><p>12:00</p></div>
                                <div className='flex items-center'><h1 className='text-blue-600'>MYR</h1>36.5<p></p></div>
                            </div>
                        </div>

                        <div className="P-info">
                            <h1>Passenger info</h1>
                            <p>Passenger 1 Details <span>(Ticket Type :Economy Class Adult)</span></p>


                            <div className="row flex justify-around">

                                <div className="col-12 col-lg-6 px-3 flex flex-col">
                                    <label>Passenger Name <span>*</span></label>
                                    <input type="text" required placeholder="Enter Passenger Name " />
                                </div>
                                <div className="col-12 col-lg-6 px-3 flex flex-col">
                                    <label>Contact <span>*</span></label>
                                    <input type="number" required placeholder="Enter your Mobile number " />
                                </div>
                                <div className="col-12 col-lg-6 px-3 flex flex-col">
                                    <label>Email<span>*</span></label>
                                    <input type="email" required placeholder="Enter your Email " />
                                </div>
                                <div className="col-12 col-lg-6 px-3 flex flex-col">
                                    <label>NID/ Passpord No <span>*</span></label>
                                    <input type="number" required placeholder="Enter you Passport Number " />
                                </div>
                                <div className="col-12 col-lg-6 px-3 flex flex-col">
                                    <label>Nationality <span>*</span></label>
                                    <select disabled className="text-gray-400"><option select >Malaysian</option></select>
                                </div>
                                <div className="col-12 col-lg-6 px-3 flex flex-col">
                                    <label>Gender <span>*</span></label>
                                    <select required className="text-gray-400">
                                        <option >Select One</option>
                                        <option select >Male</option>
                                        <option select >Female</option>
                                        <option select >Other</option>
                                    </select>

                                </div>

                                <div className="col-12 col-lg-6 px-3 flex flex-col">
                                    <label>BirthDate <span>*</span></label>
                                    <div className="date">
                                        <DatePicker required ClassName="datee"
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            includeDateIntervals={[
                                                { start: subYears(new Date(), 5), end: addDays(new Date(), 0) },
                                            ]}
                                            placeholderText="Enter your Birth Date"
                                        /></div>
                                </div>

                                <div className="col-12 col-lg-6 px-3 flex flex-col">
                                    <label>Seat No <span>*</span></label>
                                    <div className="seat-no"><h1></h1></div>
                                </div>




                                <button className="btn btn-danger" type="button" data-toggle="modal" data-target="#choose-seat"> Choose the Passenger Seat</button>
                                
                                
                            </div>


                        </div>

                    </div>
                    <div className="col-10 col-lg-3 mt-5">
                        <div className='right ' >
                            <div className='flex justify-between'>
                                <p>Fare</p>
                                <p>MYR 7.50</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Terminal Fee</p>
                                <p>MYR 5.3</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Insurance Fee</p>
                                <p>MYR 0.00</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Process Fee</p>
                                <p>MYR 0.70</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Service Fee</p>
                                <p>MYR 3.90</p>
                            </div>


                            <hr />
                            <div className='flex justify-between'>
                                <h1>Total</h1>
                                <h2>MYR 13.90</h2>
                            </div>

                            <div className='mb-5 mt-2 flex justify-center'>
                                <button className='comp' type='submit'>Complete Booking</button>
                            </div>

                            <p className='acpt' id="acpt" > Please accept our Terms and Condition to Proceed</p>

                            <div className='flex items-start'>
                                <input type="checkbox" id="check-terms" className='mt-2 mr-2 ' required onChange={fun} />
                                <label> By proceeding, I acknowledge that I have read and agree to LDA<Link href="/termsOfUse"><a className='text-blue-600'>Terms Of Use</a></Link> and <Link href="/privacyStatement"><a className='text-blue-600'>Privacy Statement</a></Link></label>
                            </div>

                        </div>
                        <h3 className='p-method mt-5'>Payment Method</h3>
                        <div className='flex justify-center'>
                            <Image src="/img/visa.svg" height={100} width={100} className="px-2" />
                            <Image src="/img/mastercard.svg" height={100} width={100} className="px-2" />
                            <Image src="/img/fpx-01.svg" height={100} width={100} className="px-2" />
                        </div>
                    </div>

                </div>
            </form>


            {/* Modal Start */}

            <div className="choose-seat modal modal-lg fade" id="choose-seat" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
        {/* modal header */}
      <div className="modal-header p-0 pe-3">
        <button type="button" className="close  ms-auto" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" className='text-3xl hover:text-blue-600 hover:text-4xl'>&times;</span>
        </button>
      </div>

      {/* Modal Body */}
      <div className="modal-body">
        <div className='rt-btn flex items-center justify-center'>
            <button className='eco'>ECO</button>
            <button className='business'>BUSINESS</button>
            <button className='disabled'>Disabled</button>
            <button className='seatTaken'>Seat Taken</button>
        </div>
        <div className='cockpit'></div>
        <form id="seat-choose">
        <ol className='fuselage'>
            <li>
                <ol className='seats'>
                    <li className='seat' > 
                      <input type="checkbox" id="1" />
                      <label for="1" onClick={seatfocus} onBlur={seatBlur}>1</label>
                    </li>
                    <li className='seat'> 
                      <input type="checkbox" id="2"/>
                      <label for="2" onClick={seatfocus} onBlur={seatBlur}>2</label>
                    </li>
                    <li className='seat'> 
                      
                    </li>
                    <li className='seat'> 
                      <input type="checkbox" id="3"/>
                      <label for="3" onClick={seatfocus} onblur={seatBlur}>3</label>
                    </li>
                    <li className='seat'> 
                      <input type="checkbox" id="4"/>
                      <label for="4" onClick={seatfocus} onBlur={seatBlur}>4</label>
                    </li>
                </ol>
            </li>
        </ol>
        </form>
      </div>
      {/* Modal Footer */}
      <div className="modal-footer">
        <button type="button" className="" data-dismiss="modal">Submit</button>
      </div>
    </div>
  </div>
</div>

            {/* Modal End */}
        </div>
        <Footer />

    </>)
}

export default TicketingReview;