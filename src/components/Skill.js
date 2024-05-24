import skill from "../images/skills.png"


function Skill(){
    return (
        <>
            <div className="container-fluid mt-5" id = "skillspage">
                <div className="container">
                    <h1 className="text-center " style={{color : "#154360 "}}>Our Progress</h1>
                    <div className="row mt-3">
                        <div className="col-md-6 mt-5">
                            <img src={skill} width="100%"/>
                        </div>
                        <div className="col-md-6 ">
                            <span className="fs-3 fw-bold" style={{color : "#154360 "}}>Voluptatem dignissimos provident quasi corporis voluptates</span>
                            
                            <div className="skills-content">
                                <small className="skill fw-bold" style={{color : "#2E86C1 "}}><i>HTML</i> </small>
                                <div class="progress mt-2">
                                    <div class="progress-bar-" role="progressbar" style={{width: "85%",backgroundColor : "#2874A6 "}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                                <small className="skill fw-bold" style={{color : "#2E86C1 "}}><i>CSS</i> </small>
                                <div class="progress mt-2">
                                    <div class="progress-bar" role="progressbar" style={{width: "25%",backgroundColor : "#2874A6 "}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                                <small className="skill fw-bold" style={{color : "#2E86C1 "}}><i>JAVASCRIPT</i> </small>
                                <div class="progress mt-2">
                                    <div class="progress-bar" role="progressbar" style={{width: "50%" ,backgroundColor : "#2874A6 "}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                                <small className="skill fw-bold" style={{color : "#2E86C1 "}}><i>PHOTOSHOP</i> </small>
                                <div class="progress mt-2">
                                    <div class="progress-bar" role="progressbar" style={{width: "75%",backgroundColor : "#2874A6 "}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                                <small className="skill fw-bold" style={{color : "#2E86C1 "}}><i>PAINTING</i> </small>
                                <div class="progress mt-2">
                                    <div class="progress-bar" role="progressbar" style={{width: "100%",backgroundColor : "#2874A6 "}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                       
                            </div>

                        </div>
                        
                    </div>
                 </div>
            </div>
           
        </>
    );
}

export default Skill;
