import React from 'react';
import Navbar from './Navbar';

const Faq = () => {
    return (
            <div className="container">
               <nav class="navbar navbar-expand-lg fixed-top bg-dark" data-bs-theme="dark">
          <div class="container-fluid">
            <a class="navbar-brand"> <font style={{ color: 'aquamarine' }} >
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/Delhi_Metro_logo.svg"style={{marginRight:17}} alt="Bootstrap" width="40" height="40" />
              HORIZON</font> <font style={{ color: 'aquamarine' }}>M</font>ETRO <font style={{ color: 'aquamarine' }}>S</font>TATION
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/About">About US</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Services">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contact">Contact US</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/faq">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
                <br />
                <div className="row justify-content-center" style={{marginTop:'80px'}}>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                 <h3 style={{ color: 'aquamarine' }}>These are the most frequently asked questions:</h3>
                        <div className="accordion" id="faqAccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        1. What are the train station's operating hours?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                    Most train stations are open 24/7, but the services and amenities available may vary. It's best to check the specific station's schedule for detailed information.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        2. How can I purchase a train ticket?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                    Train tickets can be purchased at ticket counters, self-service kiosks, online through the train company’s website, or via their mobile app. Many stations also accept cash, credit/debit cards, and mobile payments.

                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        3. How do I find my platform?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                    Platforms are usually indicated on your ticket. You can also check the electronic display boards and station maps or ask at the information desk for assistance.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        4. Is there parking available at the station?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                    Most train stations offer parking facilities. The availability and cost of parking can vary, so it is advisable to check the station’s website or contact customer service for details.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        5. Can I access Wi-Fi at the Station?
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Yes, complimentary Wi-Fi is available throughout Horizon Metro Station. Passengers can connect to the network by selecting "Horizon_WiFi" and following the on-screen instructions.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        6.Are there facilities for passengers with disabilities?
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                    Yes, most train stations are equipped with facilities to assist passengers with disabilities, including ramps, elevators, accessible restrooms, and dedicated assistance services. It’s recommended to notify the station in advance if you require special assistance.

                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSeven">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                        7. What happens if my Train is delayed or canceled?
                                    </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        In the event of a Train delay or cancellation, passengers should contact their Platform for assistance with rebooking or accommodations. Our Metro staff are available to provide support and guidance as needed.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingEight">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                        8. What should I do if I lose something at the station?
                                    </button>
                                </h2>
                                <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                    If you lose an item, visit the station’s lost and found office or contact customer service. Many stations also have online forms where you can report lost items.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingNine">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                        9. Are there currency exchange services at the Station?
                                    </button>
                                </h2>
                                <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Yes, currency exchange counters and ATMs are available at Horizon Metro Station for passengers needing to convert currency or withdraw cash.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTen">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                        10. Are there food and beverage options available at the station?
                                    </button>
                                </h2>
                                <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                    Yes, Horizon Metro Station  have a variety of food and beverage options, including cafes, restaurants, and vending machines.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Faq;