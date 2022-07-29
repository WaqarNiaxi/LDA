import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const ReturnPolicy = () => {
    return (
        <>
       <Head><title>LDA::Return Policy</title></Head>
            <div className="returnPolicy container">
                <div className='bggg'>
                    <Navbar />
                </div>

                <div className="RefundPolicy">
                  <h1>Refund Policy</h1>
                  <hr/>
                   <h2>The amount of the refund is subject to the following criteria:</h2>
                  <div className=" refundRequest">
                  <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td><strong>Refund Request</strong></td>
                            <td><strong>Ticket Fare</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>24 hours before departure</td>
                            <td>RM5 Penalty</td>
                        </tr>
                        <tr>
                            <td>Within 24 hours before departure</td>
                            <td>Non-Refundable</td>
                        </tr>
                    </tbody>
                  </table>
                   <div className="p-2"> <Link href="/ticketing/refundForm" ><a className="text-blue-500 ">Refund request Form</a></Link>
                   </div>
                  </div>
                  
                </div>
                <h4>Here's a look at how our settlement process
			flow</h4>

            <div className="
            lg:px-20 ">
                <Image src="/img/refund.png" height={700} width={1000}/>
            </div>

            </div>
            <Footer />
        </>

    )
};
export default ReturnPolicy;
