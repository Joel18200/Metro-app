import React from 'react'
import Navbar from './Navbar'

const About = () => {
    return (
        <div>
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
                                    <a class="nav-link active" href="/About">About US</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/Services">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/contact">Contact US</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/faq">FAQ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <br />
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3" style={{ marginTop: '80px' }}>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div className="row g-3">
                                    <div class="card p-0">
                                        <div class="card-body p-0">
                                            <img src="https://c8.alamy.com/comp/JEK3A5/interior-of-beijing-railway-station-south-citys-largest-station-and-JEK3A5.jpg" alt="" style={{ height: '400px', width: '100%', objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="row g-3">
                                    <div class="card p-0">
                                        <div class="card-body p-0">
                                            <img src="https://wander-lush.org/wp-content/uploads/2019/11/03-Moscow.jpg" alt="" style={{ height: '400px', width: '100%', objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br /><br />
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <h1 style={{ color: 'aquamarine' }}><b>What Makes HORIZON Unique?</b></h1>
                                <h4>
                                    <li>SKY served 10 million international passengers in 2024</li>
                                    <br />
                                    <li>SKY serves 1000+ nonstop destinations</li>
                                    <br />
                                    <li>Average daily passengers: 500000+ (2024)</li>
                                    <br />
                                    <li>Prioritizing passenger safety and robust security measures a vigilant presence to ensure a secure commuting environment.</li>
                                    <br />
                                    <li>The Amsterdam Terminal features 5.1 million square feet of space</li>
                                    <br />
                                    <li>The approximately 240,000 square-foot tent roof is held up by 34 masts and is large enough to cover more than four football fields</li>
                                    <br />
                                    <li>SKY has approximately 800 lane miles of roads (more than the distance from SKYver to the Utah border)</li>
                                    <br />
                                    <li>The airport has more than 25000 public parking spaces</li>
                                    <br />
                                    <li>HORIZON is the largest Metro site in Europe and the second-largest in the world</li>
                                    <br />
                                </h4>
                            </div>
                        </div>
                        <br /><br />
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div className="row g-3">
                                    <div class="card p-0">
                                        <div class="card-body p-0">
                                            <img src="http://media.cntraveler.com/photos/57d2cde8b77fe35639ae19e2/master/pass/atlanta-airport-terminal-GettyImages-506237798.jpg" alt="" style={{ height: '400px', width: '100%', objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                </div>
                                <br />
                            </div>
                            <br /><br />
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <h1 style={{ color: 'aquamarine' }}><b>The Horizon Metro Station (HMS) Master Plan</b></h1>
                                <h4>
                                    <p>
                                    Enhance integration with other forms of public transport, such as buses, trams, and bike-sharing programs, to create a seamless and efficient multi-modal transport hub.
                                    </p>
                                    <p>
                                    Implement strategies to manage peak-time congestion, such as staggered train schedules, additional staffing, and advanced crowd control measures.
                                    </p>
                                </h4>
                            </div>
                        </div>
                        <br /><br />
                        <div className="row g-3">
                            <h1 style={{ color: 'aquamarine', textAlign: 'center' }}>About the Master Plan</h1>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div class="card">
                                    <img src="https://img.freepik.com/premium-photo/shenzhen-metro-station-subway-train-high-quality-photo_928709-13890.jpg" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h3 class="card-title" style={{ color: 'aquamarine' }}>Master Plan Purpose</h3>
                                        <p class="card-text">The master plan for Horizon Metro Station aims to enhance passenger experience, manage high volumes, integrate multi-modal transport, promote sustainability, adopt technological advancements, ensure safety and security, engage the community, and future-proof the infrastructure to create a world-class, efficient, and sustainable transportation hub.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div class="card">
                                    <img src="https://assets-news.housing.com/news/wp-content/uploads/2021/07/02182432/Delhi-Metro-Magenta-Line-All-you-need-to-know-FB-1200x700-compressed.jpg  " class="card-img-top" alt="..." height={357} />
                                    <div class="card-body">
                                        <h3 class="card-title" style={{ color: 'aquamarine' }}>Metro Layout Plan</h3>
                                        <p class="card-text">The layout plan for Horizon Metro Station focuses on optimizing passenger flow with clear signage and spacious concourses, integrating multiple metro lines and other transport modes for seamless connectivity, incorporating eco-friendly design elements, ensuring accessibility for all, and providing ample amenities such as retail shops, dining options, and restrooms to create a modern, efficient, and user-friendly transportation hub.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br /><br />
                        <div className="row g-3">
                            <h1 style={{ color: 'aquamarine' }}>A brief history</h1>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h4>
                                    <p>Horizon Metro Station, located in the bustling heart of Frankfurt, is renowned as the second busiest metro station in the world. Its development and growth reflect the rapid urbanization and increasing demand for efficient public transportation in the region.</p>
                                    <p>Construction began in 2005, with the goal of integrating multiple metro lines and providing seamless connectivity to other forms of public transportation. The station's design prioritized both functionality and aesthetic appeal, incorporating modern architectural elements and sustainable building practices.</p>
                                    <p>Horizon Metro Station officially opened its doors to the public in 2010. The grand opening was a significant event, attended by city officials, dignitaries, and the local community. The station quickly became a central part of daily life for thousands of commuters, thanks to its strategic location and comprehensive facilities.</p>
                                    <p>By 2015, it had become the second busiest metro station in the world, serving millions of passengers annually. To manage this high volume, the station underwent several upgrades, including the addition of new platforms, enhanced security measures, and improved passenger amenities.</p>
                                    <p>Beyond its role as a transportation hub, Horizon Metro Station has become a cultural landmark in Frankfurt. The station often hosts public art installations, community events, and performances, fostering a sense of community and enriching the cultural fabric of the area.</p>
                                </h4>
                            </div>
                        </div>
<br />
                        <div className="row g-3">
                            <h1 style={{ color: 'aquamarine' }}>Meet Our Creators:</h1>
                            <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <img src="https://miro.medium.com/v2/resize:fit:1400/1*xKjI198FwVjvSrSVDYPTmQ.jpeg" class="card-img-top" alt="..." height={'250'} />
                                    <div class="card-body">
                                        <h5 class="card-title">Jade </h5>
                                        <p class="card-text">Chief Executive Officer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <img src="https://c.pxhere.com/photos/76/4e/business_people_meeting_office_work_corporate_job_male-1079382.jpg!d" class="card-img-top" alt="..." height={'250'} />
                                    <div class="card-body">
                                        <h5 class="card-title">Steve Jaquite</h5>
                                        <p class="card-text">Chief Operating Officer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/RK_-_Learning_pic.jpg" class="card-img-top" alt="..." height={'250'} />
                                    <div class="card-body">
                                        <h5 class="card-title">Adam</h5>
                                        <p class="card-text">Chief Financial Officer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <img src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2023/01/1200/675/GettyImages-1354118412.jpg?ve=1&tl=1" class="card-img-top" alt="..." height={'250'} />
                                    <div class="card-body">
                                        <h5 class="card-title">Kevin Hart</h5>
                                        <p class="card-text">Chief Commercial Officer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About