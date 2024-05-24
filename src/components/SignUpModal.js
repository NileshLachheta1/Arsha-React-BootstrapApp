
function SignUp() {
    return (
     <>
        <div className="container-fluid bg-white mt-5" id="contactussection">
            <div class="modal fade" id="SignUpModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg ">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">SignUp Form</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    
                        <div class="container ">
                        <div class="border bg-danger">
                            <h5 class="m-2 fw-bold text-center text-light">SignUp Form</h5>
                        </div>
                        </div>
                        <div class="container"><br/>
                            <div class="row">
                                <div class="mb-3 col-lg-6 form-field">
                                    <label for="user-name" class=" form-label fw-bold">Name</label>
                                    <input type="text" class="form-control w-75" placeholder="Enter Full Name" name="name" id="user-name" onkeyup="checkUsername3()" autocomplete="off"/>
                                    <small></small>
                                </div>
                                <div class="mb-3 col-lg-6"><br/>
                                    <label for="gender" class=" form-label fw-bold ">Gender</label>
                                    <input type="radio" class="border-dark fw-bold mx-3" value="Male" checked name="gender" id="male" aria-describedby="ride"/><label for="male" class="fw-bold">Male</label>
                                    <input type="radio" class="border-dark fw-bold mx-3" value="Female" name="gender" id="female" aria-describedby="ride"/><label for="female" class="fw-bold">Female</label>
                                    <input type="radio" class="border-dark fw-bold mx-3" value="Other" name="gender" id="other" aria-describedby="ride"/><label for="other" class="fw-bold">Other</label>
                                </div>
                            </div>
                            <div class=" row ">
                               
                                <div class="mb-3 col-lg-6 form-field">
                                    <label for="user-address" class="form-label fw-bold ">Address</label>
                                    <input type="text" class="form-control  w-75 " placeholder="Enter Address" id="" name="" aria-describedby="address" />
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
                            <div class=" row ">
                                <div class="mb-3 col-lg-6 form-field">
                                    <label for="pincode" class=" form-label fw-bold ">City</label>
                                    <input type="text" class="form-control w-75 " placeholder="Enter City" id="" name="" aria-describedby="ride"/>
                                    <small></small>
                                </div>
                                <div class="mb-3 col-lg-6 form-field">
                                    <label for="pincode" class=" form-label fw-bold ">State</label>
                                    <input type="text" class="form-control w-75 " placeholder="Enter State" id="" name="" aria-describedby="ride"/>
                                    <small></small>
                                </div>
                            </div>
                    </div>

                        <div class="row mt-2">
                            <div class="mb-3 col-lg-6 form-field">
                                <input type="button" class="btn btn-secondary w-75 ms-2" value="cancel" data-bs-dismiss="modal"/>
                            </div>
                            <div class="mb-3 col-lg-6 form-field">
                                <input type="submit" class="btn btn-success w-75" value="SignIn"/>
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
  
  export default SignUp;
  