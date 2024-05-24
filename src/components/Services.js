
function Service(){
    return (
        <>
            <div className="container-fluid mt-5" id="servicepage">
                <div className="container">
                    <div className="row">
                    <h1 className="text-center " style={{color : "#154360 "}}>Services</h1>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="card" style={{"width" : "  16rem"}}>
                                <div className="card-body ">
                                <i className="fab fa-dribbble  " style={{fontSize : "38px",textAlign : "center",color : "#33F6FF "}}></i>
                                    <h5 className="card-title">Lorem Ipsum</h5>
                                    {/* <h6 className="card-subtitle mb-2 text-muted"></h6> */}
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="card" style={{"width" : "  16rem"}}>
                                <div className="card-body">
                                <i className="fa-light fa-file" style={{"color": "#3ad0ee;"}}></i>
                                    <h5 className="card-title">Sed ut perspici</h5>
                                    
                                    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="card" style={{"width" : "  16rem"}}>
                                <div className="card-body">
                                    <h5 className="card-title">Magni Dolores</h5>
                                    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                 
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="card" style={{"width" : "  16rem"}}>
                                <div className="card-body">
                                    <h5 className="card-title">Nemo Enim</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
           
        </>
    );
}

export default Service;
