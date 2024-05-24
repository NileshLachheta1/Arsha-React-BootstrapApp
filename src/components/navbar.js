
function NavbarComponent(){
    return (
        <>
          <nav className="navbar navbar-expand-lg text-uppercase fixed-top pt-2 pb-2" style={{fontFamily: "Montserrat", fontWeight: "700" , backgroundColor:"#21618C"}}>
            <div className="container">
                <a className="navbar-brand text-light fs-2" href="#page-top">ARSHA</a>
                <button className="navbar-toggler text-uppercase font-weight-bold text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    {/* Menu */}
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1 "><a className="nav-link py-3 px-0 px-lg-3 rounded text-light" href="#homepage">Home</a></li>
                        <li className="nav-item mx-0 mx-lg-1 "><a className="nav-link py-3 px-0 px-lg-3 rounded text-light" href="#aboutpage">About</a></li>
                        <li className="nav-item mx-0 mx-lg-1 "><a className="nav-link py-3 px-0 px-lg-3 rounded text-light" href="#servicepage">Service</a></li>
                        <li className="nav-item mx-0 mx-lg-1 "><a className="nav-link py-3 px-0 px-lg-3 rounded text-light" href="#skillspage">Skills</a></li>
                        <li className="nav-item mx-0 mx-lg-1 "><a className="nav-link py-3 px-0 px-lg-3 rounded text-light" href="#ourteam">Our Team</a></li>
                        <li className="nav-item mx-0 mx-lg-1 "><a className="nav-link py-3 px-0 px-lg-3 rounded text-light" href="#skillspage" data-bs-toggle="modal" data-bs-target="#SignInModal">SignIn</a></li>
                        <li className="nav-item mx-0 mx-lg-1 "><a className="nav-link py-3 px-0 px-lg-3 rounded text-light" href="#ourteam" data-bs-toggle="modal" data-bs-target="#SignUpModal">SignUp</a></li>
                    </ul>
                </div>
            </div>
          </nav> <br/><br/><br/>
          </>
    );
}

export default NavbarComponent;