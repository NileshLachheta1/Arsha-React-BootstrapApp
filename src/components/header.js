import banner from '../images/banner.png'
import client1 from '../images/client-1.png'
import client2 from '../images/client-2.png'
import client3 from '../images/client-3.png'
import client4 from '../images/client-4.png'
import client5 from '../images/client-5.png'
import client6 from '../images/client-6.png'
function HeaderComponent() {
    return (
        <>

            <div className="container-fluid " id="homepage" style={{ backgroundColor: "#2471A3" }}>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-between ">
                        <div className="col-md-6  ">
                            <i className="text-light display-4 d-block fw-bold">Better Solutions For Your Business</i>
                            <i style={{ "color": "lightgray" }}>We are team of talented designers making websites with Bootstrap</i><br />
                            <div className='d-flex mt-5 align-items-center bg-wrning gap-5 '>
                                <div>
                                    <button className="btn text-light btn-outline-light btn-lg rounded-pill " style={{  backgroundColor: "#2E86C1" }}>Get Started</button>
                                </div>
                                <div className='d-flex align-items-center justify-content-center gap-1 btn'>
                                    <i className="fa-regular fa-circle-play fs-3 text-white " ></i>
                                    <span className="fs-6 text-light"> Watch Video</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={banner} width="100%" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid bg-light'>
                <div className="container">
                    <div className='row d-flex align-items-center justify-content-between '>
                        <div className='col-6 col-lg-2 col-md-2 col-sm-4 my-2'><img className='w-75' src={client1} /></div>
                        <div className='col-6 col-lg-2 col-md-2 col-sm-4 my-2'><img className='w-75' src={client2} /></div>
                        <div className='col-6 col-lg-2 col-md-2 col-sm-4 my-2'><img className='w-75' src={client3} /></div>
                        <div className='col-6 col-lg-2 col-md-2 col-sm-4 my-2'><img className='w-75' src={client4} /></div>
                        <div className='col-6 col-lg-2 col-md-2 col-sm-4 my-2'><img className='w-75' src={client5} /></div>
                        <div className='col-6 col-lg-2 col-md-2 col-sm-4 my-2'><img className='w-75' src={client6} /></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderComponent;
