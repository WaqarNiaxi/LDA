import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Head from 'next/head'

const Home = () => {
    return (<>
     <Head> <title>LDA::Contact Us</title></Head>
    <div className="contactbg">
        <div className="contact container mb-28">
            <div className='bggg'>
                <Navbar />
            </div>
            <h1>Contact</h1>
            <div className="flex justify-between">
                <div className="contact-left bg-white">
                    <h4>Office Hours</h4>
                    <p>Monday - Friday / 8:00am to 5:00pm</p>
                    <p>Saturday - Closed</p>
                    <p>Public Holiday - Closed</p>
                    <hr />
                    <h4>Contact Info</h4>
                    <p>Lot F1, First Floor, Labuan International Ferry Terminal,
                        Jalan Merdeka, 87000 W. P. Labuan</p>
                    <br />
                    <p>
                        <strong>Email: </strong> Info@labuanpay.my
                    </p>

                    <hr />
                    <h4>Tel & Fax</h4>
                    <p >
                        <strong>INQUIRY | </strong>087-581006 / 0138642117
                    </p>

                    <p >
                        <strong>MAIN OFFICE | </strong>087-410472
                    </p>

                    <p >
                        <strong>FAX | </strong>087-410475
                    </p>
                </div>



                <div className="contact-right bg-white">
                    <form action="" method="post" className="flex flex-col">
                        <label htmlFor="roll">Name <span className="text-red-600">*</span></label>
                        <input
                            type="text"
                            required
                            minLength="3"
                            maxLength="30"
                            placeholder="Please enter your name"
                        />
                        <label htmlFor="name">Email <span className="text-red-600">*</span></label>
                        <input type="Email" required
                            placeholder="Please enter your Email"
                        />

                        <label htmlFor="name">Subject <span className="text-red-600">*</span></label>
                        <input type="text" required
                            placeholder="Please enter your Subject"
                        />

                        <label htmlFor="name">Massage <span className="text-red-600">*</span></label>
                        <textarea type="Email" required rows="2"
                            placeholder="Please enter massage"
                        />
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div>

            </div>
        </div>
        <Footer />
    </div>
    </>)
};
export default Home;