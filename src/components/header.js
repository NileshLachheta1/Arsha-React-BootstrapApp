import banner from '../images/banner.png'
import client1 from '../images/client-1.png'
import client2 from '../images/client-2.png'
import client3 from '../images/client-3.png'
import client4 from '../images/client-4.png'
import client5 from '../images/client-5.png'
import client6 from '../images/client-6.png'
function HeaderComponent(){
    return (
        <>
        
            <div className="container-fluid" id="homepage" style={{backgroundColor:"#2471A3"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 "><br/><br/>
                            <h1 className="text-light mt-5">Better Solutions For Your Business</h1>
                            <h5 style={{"color": "lightgray"}}>We are team of talented designers making websites with Bootstrap</h5><br/>
                            <button className="btn text-light btn-outline-light btn-lg"  style ={{"border-radius":"50px", backgroundColor : "#2E86C1"}}>Get Started</button>
                          <i className = "fa-regular fa-circle-play fs-2 ms-5" style={{"color": "white",marginTop : "20px"}}></i>
                                <span className = "fs-4 text-light"> Watch Video</span>
                        </div>
                        <div className="col-md-6">
                            <img src={banner} width="100%"/>
                        </div>
                    </div>
                 </div>
            </div>
                    <div className='container-fluid bg-light'>
                        <div className="container">
                            <div className='row'>
                                <div className='col-lg-2 col-md-2 col-sm-4 col-xs-6 mt-4'><img src={client1} width="60%"/></div>
                                <div className='col-lg-2 col-md-2 col-sm-4 col-xs-6 mt-4'><img src={client2} width="60%"/></div>
                                <div className='col-lg-2 col-md-2 col-sm-4 col-xs-6 mt-4'><img src={client3} width="60%"/></div>
                                <div className='col-lg-2 col-md-2 col-sm-4 col-xs-6 mt-4'><img src={client4} width="60%"/></div>
                                <div className='col-lg-2 col-md-2 col-sm-4 col-xs-6 mt-4'><img src={client5} width="60%"/></div>
                                <div className='col-lg-2 col-md-2 col-sm-4 col-xs-6 mt-4'><img src={client6} width="60%"/></div>
                                                    
                            </div>
                        </div>
                    </div>
        </>
    );
}

export default HeaderComponent;
