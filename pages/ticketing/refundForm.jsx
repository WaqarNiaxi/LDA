import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Head from 'next/head'
import DatePicker from "react-datepicker";
import { useState } from "react";

const RefundForm = () => {
    const [startDate, setStartDate] = useState(new Date());



    return (<>
        <Head> <title>LDA::Refund Form</title></Head>
        <div className="contactbg">
            <div className="refundForm container mb-28">
                <div className='bggg'>
                    <Navbar />
                </div>

                <div className="refundForm-div  bg-white">
                    <h1>Return Refund</h1>
                    <hr />
                    <form action="" method="post" className="flex flex-col">
                        <div className="row">
                            <h2>Personal Details</h2>
                            <div className="col-12 col-md-4 flex flex-col">
                                <label for="roll">Name <span className="text-red-600">*</span></label>
                                <input
                                    type="text"
                                    required
                                    minlength="3"
                                    maxlength="30"
                                    placeholder="Please enter your name"
                                />
                            </div>
                            <div className="col-12 col-md-4 flex flex-col">
                                <label for="name">Email <span className="text-red-600">*</span></label>
                                <input type="Email" required
                                    placeholder="Please enter your Email"
                                />
                            </div>
                            <div className="col-12 col-md-4 flex flex-col">
                                <label for="name">Address <span className="text-red-600">*</span></label>
                                <input type="text" required
                                    placeholder="Please enter your Address"
                                />
                            </div>



                            <h2>Ticket Details</h2>
                            <div className="col-12 col-md-4 flex flex-col">

                                <label for="name">Transaction ID <span className="text-red-600">*</span></label>
                                <input type="Email" required
                                    placeholder="Please enter your Email"
                                />
                            </div>
                            <div className="col-12 col-md-4 flex flex-col">
                                <label for="name">Origin <span className="text-red-600">*</span></label>
                                <input type="text" required
                                    value="Labuan" readOnly={true}
                                    placeholder="Please enter your Subject" className="origin"
                                />
                            </div>
                            <div className="col-12 col-md-4 flex flex-col">
                                <label >Destination <span className="text-red-600">*</span></label>
                                <select id="destination">
                                    <option selected>Menumbok</option>
                                    <option>Kota Kinabalu</option>
                                    <option>Brunei</option>
                                    <option>Limbang</option>
                                </select>
                            </div>


                            <div className="col-12 col-md-4 flex flex-col">
                                <label >Destination <span className="text-red-600">*</span></label>

                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"
                                    className="w-full"
                                />

                            </div>

                            <div className="col-12 col-md-4 flex flex-col">
                                <label for="name">Upload File <span className="text-red-600">*</span></label>
                                <input type="File" required readOnly={true}
                                    placeholder="No File Choosen"
                                />
                            </div>



                            <h2>Bank Details <br/> <p className="text-slate-400">(Reimbursement will be issued to given bank details)</p></h2>

                            <div className="col-12 col-md-4 flex flex-col">

                                <label for="name">Name/Title<span className="text-red-600">*</span></label>
                                <input type="text" required
                                    placeholder="Please enter Place enter your name/title Email"
                                />
                            </div>
                            <div className="col-12 col-md-4 flex flex-col">
                                <label for="name">IC / Passport Number <span className="text-red-600">*</span></label>
                                <input type="Number" required
                                    placeholder="Please enter IC / Passport Number Subject" 
                                />
                            </div>

                            <div className="col-12 col-md-4 flex flex-col">
                                <label for="name">Bank Name <span className="text-red-600">*</span></label>
                                <input type="text" required 
                                    placeholder="Place enter Bank Name"
                                />
                            </div>

                            <div className="col-12 col-md-4 flex flex-col">
                                <label for="name">Bank Account  <span className="text-red-600">*</span></label>
                                <input type="text" required
                                    placeholder="Place enter Bank Account No" 
                                />
                            </div>
                            <div className="col-12 col-md-4 flex flex-col">
                                <label >Bank Country<span className="text-red-600">*</span></label>
                                <select id="destination">
                                    <option selected>MALAYSIA</option>
                                    <option>INDONESIA</option>
                                    <option>BRUNEI</option>
                                    <option>PHILIPPINES</option>
                                </select>
                            </div>

                        </div>
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>

    </>)
};
export default RefundForm;