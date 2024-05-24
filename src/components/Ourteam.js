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
           
        </>
    );
}

export default OurTeam;
