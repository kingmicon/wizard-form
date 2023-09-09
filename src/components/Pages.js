import {
    Routes,
    Route,
    Link,
    useLocation,
    
  } from "react-router-dom";
  import {createStore } from "little-state-machine";
  import Pageone from "./Pageone";
  import Pagetwo from "./Pagetwo";
  import Pagethree from "./Pagethree";
  import Pagefour from "./Pagefour";
  import Pagefive from "./Pagefive";
  import Result from "./Result";
import { Box, Step, StepDescription, StepIcon, StepNumber, StepStatus, StepTitle, Stepper, useSteps, StepIndicator, StepSeparator } from "@chakra-ui/react";
import "./Style.css"
  
createStore({
  yourDetails: {
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    address: "",
    cityLocation: "",
    country: "",
  }
});
  
  
  const Pages = () => {
    const location = useLocation();
    const {activeStep, setActiveStep} = useSteps({
      index: 1,
      count: Step.length,
    })
    return (
      <div className="body">
        <Stepper key={activeStep}
        orientation="vertical"
        height="400px" gap="0" className="fill1" >
              <Step key={1}
            onClick={() =>setActiveStep(1)}  className={location.pathname === "/" ? "active" : ""} >
              <Box  className="box">
                <StepTitle className="steptitle">Your Name</StepTitle>
                <StepDescription className="stepdescription">First and Lastname</StepDescription>
              </Box>
            </Step>
            
              <Step key={2}
            onClick={() =>setActiveStep(2)} className={location.pathname === "/pagetwo" ? "active" : ""} >
              <Box className="box">
                <StepTitle className="steptitle">Email</StepTitle>
                <StepDescription className="stepdescription">Email Address</StepDescription>
              </Box>
            </Step>
        
              <Step key={3}
            onClick={() =>setActiveStep(3)} className={location.pathname === "/pagethree" ? "active" : ""} >
              <Box className="box">
                <StepTitle className="steptitle">Telephone Number</StepTitle>
                <StepDescription className="stepdescription">Telephone Number</StepDescription>
              </Box>
            </Step>
            
              <Step key={4}
            onClick={() =>setActiveStep(4)} className={location.pathname === "/pagefour" ? "active" : ""}>
              <Box className="box">
                <StepTitle className="steptitle">House Address</StepTitle>
                <StepDescription>Contac Information</StepDescription>
              </Box>
            </Step>
            
              <Step key={5}
            onClick={() =>setActiveStep(5)} className={location.pathname === "/pagefive" ? "active" : ""} >
              <Box className="box" >
                <StepTitle className="steptitle">City Location</StepTitle>
                <StepDescription className="stepdescription"> contact Information</StepDescription>
              </Box>
            </Step>

              <Step key={6}
            onClick={() =>setActiveStep(6)}className={location.pathname === "/result" ? "active" : ""} >
              <Box className="box">
                <StepTitle className="steptitle">Country of residents</StepTitle>
                <StepDescription className="stepdescription">Contac Information</StepDescription>
              </Box>
            </Step>
        </Stepper>

        <Stepper index={activeStep}
        orientation="vertical"
        height="400px" gap="0" size="lg" className="fill2" >
              <Step key={1}
            onClick={() =>setActiveStep(1)}  className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">
              <StepIndicator className="stepindicator">
                <StepStatus
                complete={<StepIcon/>}
                incomplete={<StepNumber/>}
                active={<StepNumber/>}/>
              </StepIndicator>
            </Link>
            <StepSeparator className="stepseparator" />
            </Step>
              <Step key={2}
            onClick={() =>setActiveStep(2)} className={location.pathname === "/pagetwo" ? "active" : ""} >
              <Link to="/pagetwo">
              <StepIndicator className="stepindicator">
                <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber/>}
                active={<StepNumber />}/>
              </StepIndicator >
            </Link>
            <StepSeparator className="stepseparator" />
            </Step>
        
              <Step key={3}
            onClick={() =>setActiveStep(3)} className={location.pathname === "/pagethree" ? "active" : ""} >
              <Link to="/pagethree">
              <StepIndicator className="stepindicator">
                <StepStatus
                complete={<StepIcon/>}
                incomplete={<StepNumber/>}
                active={<StepNumber/>}/>
              </StepIndicator>
            </Link>
            <StepSeparator className="stepseparator"/>
            </Step>
            
              <Step key={4}
            onClick={() =>setActiveStep(4)} className={location.pathname === "/pagefour" ? "active" : ""}>
              <Link to="/pagefour">
              <StepIndicator className="stepindicator">
                <StepStatus 
                complete={<StepIcon/>}
                incomplete={<StepNumber/>}
                active={<StepNumber/>}/>
              </StepIndicator>
            </Link>
            <StepSeparator className="stepseparator" />
            </Step>
            
              <Step key={5}
            onClick={() =>setActiveStep(5)} className={location.pathname === "/pagefive" ? "active" : ""} >
              <Link to="/pagefive">
              
              <StepIndicator className="stepindicator">
                <StepStatus 
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber/>}/>
              </StepIndicator>
            </Link>
            <StepSeparator className="stepseparator"/>
            </Step>

            
              <Step key={6}
            onClick={() =>setActiveStep(6)}className={location.pathname === "/result" ? "active" : ""} >
              <Link to="/result">
              <StepIndicator className="stepindicator">
                <StepStatus
                complete={<StepIcon/>}
                incomplete={<StepNumber/>}
                active={<StepNumber />}/>
              </StepIndicator>
            </Link>
            <StepSeparator className="stepseparator" />
            </Step>
        </Stepper>
        <Stepper index={activeStep}
        orientation="vertical"
        height="400px" gap="0" size="sm" className="fill3">
              <Step key={1}
            onClick={() =>setActiveStep(1)}  className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">
              <StepIndicator className="stepindicator">
                <StepStatus className="stepstatus"
                complete={<StepIcon/>}
                incomplete={<StepIcon/>}
                active={<StepIcon/>}/>
              </StepIndicator>
            </Link>
            <StepSeparator />
            </Step>
              <Step key={2}
            onClick={() =>setActiveStep(2)} className={location.pathname === "/pagetwo" ? "active" : ""} >
              <Link to="/pagetwo">
              <StepIndicator className="stepindicator">
                <StepStatus
                complete={<StepIcon/>}
                incomplete={<StepIcon/>}
                active={<StepIcon/>}/>
              </StepIndicator>
            </Link>
            <StepSeparator />
            </Step>
        
              <Step key={3}
            onClick={() =>setActiveStep(3)} className={location.pathname === "/pagethree" ? "active" : ""} >
              <Link to="/pagethree">
              <StepIndicator className="stepindicator">
                <StepStatus
                complete={<StepIcon/>}
                incomplete={<StepIcon/>}
                active={<StepIcon/>}/>
              </StepIndicator>
            </Link>
            <StepSeparator />
            </Step>
            
              <Step key={4}
            onClick={() =>setActiveStep(4)} className={location.pathname === "/pagefour" ? "active" : ""}>
              <Link to="/pagefour">
              <StepIndicator className="stepindicator">
                <StepStatus
                complete={<StepIcon/>}
                incomplete={<StepIcon/>}
                active={<StepIcon/>}/>
              </StepIndicator>
            </Link>
            <StepSeparator />
            </Step>
            
              <Step key={5}
            onClick={() =>setActiveStep(5)} className={location.pathname === "/pagefive" ? "active" : ""} >
              <Link to="/pagefive">
              
              <StepIndicator className="stepindicator">
                <StepStatus
                complete={<StepIcon/>}
                incomplete={<StepIcon/>}
                active={<StepIcon/>}/>
              </StepIndicator>
            </Link>
            <StepSeparator />
            </Step>

            
              <Step key={6}
            onClick={() =>setActiveStep(6)}className={location.pathname === "/result" ? "active" : ""} >
              <Link to="/result">
              <StepIndicator className="stepindicator">
                <StepStatus
                complete={<StepIcon/>}
                incomplete={<StepIcon/>}
                active={<StepIcon/>}/>
              </StepIndicator>
            </Link>
            <StepSeparator />
            </Step>
        </Stepper>
        <Stepper index={activeStep}
        orientation="vertical"
        height="400px" gap="0" size="xsm" className="fill4" >
              <Step key={1}
            onClick={() =>setActiveStep(1)}  className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">
              <StepIndicator className="stepindicator">
                <StepStatus
                complete={<StepIcon/>}
                incomplete={<StepIcon/>}
                active={<StepIcon/>}/>
              </StepIndicator>
            </Link>
            <StepSeparator className="stepseparator" />
            </Step>
              <Step key={2}
            onClick={() =>setActiveStep(2)} className={location.pathname === "/pagetwo" ? "active" : ""} >
              <Link to="/pagetwo">
              <StepIndicator className="stepindicator">
                <StepStatus
                complete={<StepIcon />}
                incomplete={<StepIcon/>}
                active={<StepIcon />}/>
              </StepIndicator >
            </Link>
            <StepSeparator className="stepseparator" />
            </Step>
        
              <Step key={3}
            onClick={() =>setActiveStep(3)} className={location.pathname === "/pagethree" ? "active" : ""} >
              <Link to="/pagethree">
              <StepIndicator className="stepindicator">
                <StepStatus
                complete={<StepIcon/>}
                incomplete={<StepIcon/>}
                active={<StepIcon/>}/>
              </StepIndicator>
            </Link>
            <StepSeparator className="stepseparator"/>
            </Step>
            
              <Step key={4}
            onClick={() =>setActiveStep(4)} className={location.pathname === "/pagefour" ? "active" : ""}>
              <Link to="/pagefour">
              <StepIndicator className="stepindicator">
                <StepStatus 
                complete={<StepIcon/>}
                incomplete={<StepIcon/>}
                active={<StepIcon/>}/>
              </StepIndicator>
            </Link>
            <StepSeparator className="stepseparator" />
            </Step>
            
              <Step key={5}
            onClick={() =>setActiveStep(5)} className={location.pathname === "/pagefive" ? "active" : ""} >
              <Link to="/pagefive">
              
              <StepIndicator className="stepindicator">
                <StepStatus 
                complete={<StepIcon />}
                incomplete={<StepIcon />}
                active={<StepIcon/>}/>
              </StepIndicator>
            </Link>
            <StepSeparator className="stepseparator"/>
            </Step>

            
              <Step key={6}
            onClick={() =>setActiveStep(6)}className={location.pathname === "/result" ? "active" : ""} >
              <Link to="/result">
              <StepIndicator className="stepindicator">
                <StepStatus
                complete={<StepIcon/>}
                incomplete={<StepIcon/>}
                active={<StepIcon/>}/>
              </StepIndicator>
            </Link>
            <StepSeparator className="stepseparator" />
            </Step>
        </Stepper>

        <Routes>
        <Route exact path="/" element={<Pageone/>} />
        <Route path="/pagetwo" element={<Pagetwo/>} />
        <Route path="/pagethree" element={<Pagethree/>} />
        <Route path="/pagefour" element={<Pagefour/>} />
        <Route path="/pagefive" element={<Pagefive/>} />
        <Route path="/result" element={<Result/>} />
        </Routes>
      </div>
    );
  }

  export default Pages;