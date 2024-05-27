import tem1 from '../images/team-1.jpg'
import tem2 from '../images/team-2.jpg'
import tem3 from '../images/team-3.jpg'
import tem4 from '../images/team-4.jpg'


function OurTeam(){
    return (
        <>
            <div className="container-fluid mt-5" id="ourteam">
                <div className="container">
                    <div className="row">
                        <h1 className="text-center " style={{color : "#154360 "}}>Our Team</h1>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div class="card mb-3" style={{ maxWidth: "540px"}}>
                                <div class="row g-0">
                                    <div class="col-md-4">
                                    <img src={tem1} class="img-fluid rounded-start" alt="..."/>
                                    </div>
                                    <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Walter White</h5>
                                        <p class="">Chief Executive Officer</p> <hr/>
                                        <p class="card-text">Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                                        <i class="fa-brands fa-twitter ms-3 " style={{color : "#154360",fontSize : "24px"}}></i>
                                        <i class="fa-brands fa-facebook ms-3 " style={{color : "#154360",fontSize : "24px"}}></i>
                                        <i class="fa-brands fa-instagram ms-3 " style={{color : "#154360",fontSize : "24px"}}></i>
                                        <i class="fa-brands fa-linkedin ms-3 " style={{color : "#154360",fontSize : "24px"}}></i>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div class="card mb-3" style={{ maxWidth: "540px"}}>
                                <div class="row g-0">
                                    <div class="col-md-4">
                                    <img src={tem2} class="img-fluid rounded-start" alt="..."/>
                                    </div>
                                    <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Sarah Jhonson</h5>
                                        <p class="">Chief Executive Officer</p> <hr/>
                                        <p class="card-text">Aut maiores voluptates amet et quis praesentium qui senda para. </p>
                                        <i class="fa-brands fa-twitter ms-3 " style={{color : "#154360",fontSize : "24px"}}></i>
                                        <i class="fa-brands fa-facebook ms-3 " style={{color : "#154360",fontSize : "24px"}}></i>
                                        <i class="fa-brands fa-instagram ms-3 " style={{color : "#154360",fontSize : "24px"}}></i>
                                        <i class="fa-brands fa-linkedin ms-3 " style={{color : "#154360",fontSize : "24px"}}></i>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div class="card mb-3" style={{ maxWidth: "540px"}}>
                                <div class="row g-0">
                                    <div class="col-md-4">
                                    <img src={tem3} class="img-fluid rounded-start" alt="..."/>
                                    </div>
                                    <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">William Anderson</h5>
                                        <p class="">Chief Executive Officer</p> <hr/>
                                        <p class="card-text">Quisquam facilis cum velit laborum corrupti fuga rerum quia. </p>
                                        <i class="fa-brands fa-twitter ms-3 " style={{color : "#154360",fontSize : "24px"}}></i>
                                        <i class="fa-brands fa-facebook ms-3 " style={{color : "#154360",fontSize : "24px"}}></i>
                                        <i class="fa-brands fa-instagram ms-3 " style={{color : "#154360",fontSize : "24px"}}></i>
                                        <i class="fa-brands fa-linkedin ms-3 " style={{color : "#154360",fontSize : "24px"}}></i>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div class="card mb-3" style={{ maxWidth: "540px"}}>
                                <div class="row g-0">
                                    <div class="col-md-4">
                                    <img src={tem4} class="img-fluid rounded-start" alt="..."/>
                                    </div>
                                    <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Amanda Jepson</h5>
                                        <p class="">Chief Executive Officer</p> <hr/>
                                        <p class="card-text">Dolorum tempora officiis odit laborum officiis et et accusamus. </p>
                                        <i class="fa-brands fa-twitter ms-3 " style={{color : "#154360",fontSize : "24px"}}></i>
                                        <i class="fa-brands fa-facebook ms-3 " style={{color : "#154360",fontSize : "24px"}}></i>
                                        <i class="fa-brands fa-instagram ms-3 " style={{color : "#154360",fontSize : "24px"}}></i>
                                        <i class="fa-brands fa-linkedin ms-3 " style={{color : "#154360",fontSize : "24px"}}></i>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
            {/* <!-- Newsletter Start --> */}
    <div class="container-fluid newsletter py-5" style={{backgroundColor:"#2471A3"}}>
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-md-5 ps-lg-0 pt-5 pt-md-0 text-start wow fadeIn" data-wow-delay="0.3s">
                    <img class="img-fluid" src="http://127.0.0.1:55871/img/newsletter.png" alt=""/>
                </div>
                <div class="col-md-7 py-5 newsletter-text wow fadeIn" data-wow-delay="0.5s">
                    <div class="btn btn-sm border rounded-pill text-white px-3 mb-3">Newsletter</div>
                    <h1 class="text-white mb-4">Let's subscribe the newsletter</h1>
                    <div class="position-relative w-100 mt-3 mb-2">
                        <input class="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text"
                            placeholder="Enter Your Email" style={{height: "48px"}} />
                        <button type="button" class="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i
                                class="fa fa-paper-plane fs-4" style={{color:"#2471A3"}}></i></button>
                    </div>
                    <small class="text-white fst-italic fw-medium">Diam sed sed dolor stet amet eirmod</small>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Newsletter End --> */}
        </>
    );
}

export default OurTeam;
