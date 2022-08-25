import Link from "next/link";
import {FaAngleDoubleRight} from 'react-icons/fa';
import Image from "next/image";



const Footer=()=>{
    return(<>
 <section className='footer' >
           <div className="shape-4">

           </div>
           <div className='heading row'>
                <div className='col-6 flex flex-col mx-auto text-center'>
                  <p className='news mb-0'>NEWSLETTER</p>
                  <p className="news2 pt-0 mt-0">Get The Latest News</p>
                  <p className="news3">Get the latest travel inspirations and deals from LDA semimonthly with your email. You can unsubscribe at any time. Your privacy & personal information will be treated.</p>
                </div>
           </div>
           <div className='row m-0 p-0 flex justify-evenly'>

            <div className='left col-6 col-md-4 flex flex-col'>
                
                <ul className='flex flex-col z-50'>
                <h1>Company info</h1>
                <li><Link href="/aboutUs"><a><FaAngleDoubleRight/> About Us</a></Link></li>
                <li><Link href="/contact"><a><FaAngleDoubleRight/> Contact Us</a></Link></li>
                <li><Link href="/returnPolicy"><a><FaAngleDoubleRight/> Refund Policy</a></Link></li>
                <li><Link href="/privacyStatement"><a><FaAngleDoubleRight/> Privacy Statement</a></Link></li>
                <li><Link href="/termsOfUse"><a><FaAngleDoubleRight/> Terms of Use</a></Link></li>
                <li><Link href="/termsAndCondition"><a><FaAngleDoubleRight/> Terms and Conditions</a></Link></li>
                </ul>
            </div>
            <div className='right col-6 col-md-4 flex flex-col '>
                  <Image src="/img/logo.svg" height={100} width={100}/>
                  <div className='flex flex-col pt-5'></div>
                  <p><span>ADDRESS:</span> LOT F1, FIRST FLOOR, LABUAN INTERNATIONAL FERRY TERMINAL, JALAN MERDEKA, 87000 W. P. LABUAN</p>
                  <p><span>INQUIRY |</span> 087-581006 / 0138642117</p>
                  <p><span>MAIN OFFICE |</span> 087-410472</p>
                  <p><span>FAX |</span> 087-410475</p>
                  <p><span>Email:</span> Info@labuanpay.my</p>


            </div>
           
           </div>
           
        </section>
        <div className='allRights w-100'>
           "All Rights Reserved By= " <Link href='/'><a>MobilityOne</a></Link>
        </div>
    </>)
};
export default Footer;