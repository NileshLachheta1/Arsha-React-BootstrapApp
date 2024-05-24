
function SignIn() {
    return (
     <>
        <div className="container-fluid bg-white mt-5" id="contactussection">
            <div class="modal fade" id="SignInModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg ">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">SignIn Form</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    
                        <div class="container ">
                        <div class="border bg-danger">
                            <h5 class="m-2 fw-bold text-center text-light">SignIn Form</h5>
                        </div>
                        </div>
                        <div class="container"><br/>
                            <div class="row">
                                <div class="mb-3 col-lg-6 form-field">
                                    <label for="user-name" class=" form-label fw-bold">Name</label>
                                    <input type="text" class="form-control w-75" placeholder="Enter Full Name" name="name" id="user-name" onkeyup="checkUsername3()" autocomplete="off"/>
                                    <small></small>
                                </div>
                                <div class="mb-3 col-lg-6 form-field">
                                    <label for="user-address" class="form-label fw-bold ">Contact</label>
                                    <input type="email" class="form-control  w-75 " placeholder="Enter Contact" id="" name="" aria-describedby="address" />
                                    <small></small>
                                </div>
                            </div>
                            <div class=" row ">
                            <div class="mb-3 col-lg-6 form-field">
                                    <label for="user-address" class="form-label fw-bold ">Email</label>
                                    <input type="email" class="form-control  w-75 " placeholder="Enter Email" id="" name="" aria-describedby="address" />
                                    <small></small>
                                </div>
                                <div class="mb-3 col-lg-6 form-field">
                                    <label for="user-address" class="form-label fw-bold ">Password</label>
                                    <input type="password" class="form-control  w-75 " placeholder="Enter password" id="" name="" aria-describedby="address" />
                                    <small></small>
                                </div>
                            </div>
                    </div>

                        <div class="row mt-2">
                        <div class="mb-3 col-lg-6 form-field">
                            <input type="button" class="btn btn-warning w-75 ms-2" value="cancel" data-bs-dismiss="modal"/>
                        </div>
                        <div class="mb-3 col-lg-6 form-field">
                            <input type="submit" class="btn btn-danger w-75" value="SignIn"/>
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
  
  export default SignIn;
  