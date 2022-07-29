import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Link from "next/link";
import Head from "next/head";

const TermsAndCondition = () => {
	return (<>
		<Head><title>LDA::Terms And Conditions</title></Head>
		<style jsx>{`.termsandconstio-ol{
        list-style-type: lower-alpha;
        padding-left:33px;
        padding-top:15px;
        text-align:justify;
    }`}</style>
		<div className="container">
			<div className="bggg">
				<Navbar />
			</div>
			<div className="privacyStatement">
				<h1>Terms And Conditions</h1>
				<hr />

				<h5>
					<strong>1. Definitions

					</strong>

				</h5>
				<ol className="termsandconstio-ol">
					<li>"We", "our", "ourselves", "us" , "ferries and boats" means <strong>LDA Labuan (Holdings) Sdn Bhd 274370-W.</strong></li>
					<li>"Website" means the internet site <a href="/ticketing/search">www.labuanpay.my</a> provided by us for the purpose of passengers making online bookings and to access information about us.</li>
					<li>"Terms and condition" means these Terms and conditions of ferry.</li>
					<li> "Tickets", "Ticket" means the itinerary and includes the Electronic Ticket and Electronic Coupon issued by us or on our behalf and including the Conditions of Contract and notices contained in it.</li>
					<li>"Fare" means our fares and charges published electronically or on paper printed from our websites.</li>
					<li> "Seat" means a seat on our ferry</li>
					<li>"Destination" means the ferry from the jetty or port at the point of origin to the jetty or port at the point of destination.</li>
					<li>"Itinerary" or "Travel itinerary" means the document we issue to passenger that includes the Passenger's name, ferry information, booking number, Conditions of contract and notices.</li>
					<li> "Guest", "passengers", "you" and "yourself" means any person, except members of the crew, carried in a ferry with our consent.</li>
					<li> "Electronic Ticket" means the Itinerary issued by us or on behalf, the Electronic Coupon and if applicable, a boarding document.</li>
					<li> "Electronic Coupon" means an electronic ferry coupon or other value document held in our database.</li>
					<li> "Damages" or "Damage" includes death, bodily injury to a passenger, delay, loss, partial loss other damage, arising out of or in connection with ferry or other services incidental thereto performed by us.</li>
					<li> "Conditions of Contract" means those statements contained in or delivered with the Itinerary, identified as such and which incorporate by reference, these Terms and Conditions and notices available at our offices and sales ticket counters.</li>
					<li> "Conditions of Contract" means those statements contained in or delivered with the Itinerary, identified as such and which incorporate by reference, these Terms and Conditions and notices available at our offices and sales ticket counters.</li>



				</ol>


				<hr />
				<h5>
					<strong>2. Applicability

					</strong>

				</h5>
				<ol className="termsandconstio-ol"  >
					<li><strong>General:</strong> These Terms and Conditions apply to the carriage by sea or by other means of transportation including surface transportation of Passengers and baggage performed by us on our behalf and to any liability we may have in relation to that carriage and transportation.</li>
					<li><strong>Terms and Conditions Prevail:</strong> Except as provided in these Terms & Conditions, in the event of inconsistency between these Terms and Conditions and our Conditions of Contract or any other regulations we may have dealing with particular subjects, these Terms & Conditions shall prevail.</li>
					<li><strong>Language:</strong> The language of these Terms and Conditions is English and even though there may be translations of these Terms and Conditions in other languages, English shall be in the sole language used in the interpretation of these Terms and Conditions.</li>


				</ol>




				<hr />
				<h5>
					<strong>3. Tickets / Itinerary

					</strong>

				</h5>
				<ol className="termsandconstio-ol" >

					<li><strong>Validity:</strong>The Itinerary is only valid for the Passenger named and the ferry specified therein.</li>
					<li><strong>Identity:</strong>We will provide carriage only to the Passenger named in the Itinerary or Electronic Ticket. You will be required to produce appropriate identification before boarding.</li>


				</ol>




				<hr />
				<h5>
					<strong>4. Booking of Seat

					</strong>

				</h5>
				<ol className="termsandconstio-ol">
					<li><strong>Confirmation of Booking:</strong> The booking of a seat is confirmed after full payment of the fare is made and after we issue you a booking number and/or the itinerary. </li>
					<li><strong>Payment:</strong> Fares must be paid full when a booking is made. In the event that the fare has not been paid in full for any reason whatsoever, we reserve the right to cancel the booking prior to check-in and/or to disallow you to board the ferry.</li>
					<li><strong>Personal Data:</strong> You hereby acknowledge and agree that your personal data has been given to us for the purposes of making bookings for the carriage and providing you with confirmation of that booking, providing and developing ancillary services and facilities, facilitating immigration and marine authority entry procedures, accounting, billing and auditing, checking credit or other payment cards, security, administrative and legal purposes, credit card issuance, systems testing, maintenance and development, statistical analysis, and helping us in any future dealings with you. For these purposes, by entering into a contract of carriage with us you authorize us to retain and use your personal data and to transmit it to our own offices, authorized agents and third party business associates, government agencies, other carriers or the providers of the services mentioned above.</li>



				</ol>

			</div>
		</div>
		<Footer />
	</>)
};
export default TermsAndCondition;