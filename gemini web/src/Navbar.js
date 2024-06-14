import React from 'react'
import "./css/navcss.css";
import { Avatar, colors } from '@mui/material';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

function App() {
  return (
    //         <div className="container-fluid p-0 nav-bar">
    //             <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3 px-3">
    //                 <div className="nav-link dropdown-toggle innernavbar">
    //                     <a href="#"><h2>Gemini</h2></a>
    //                     {/* <ArrowDropDownOutlinedIcon/> */}
    //                     <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
    //           <li><a class="dropdown-item" href="#">Action</a></li>
    //           <li><a class="dropdown-item" href="#">Another action</a></li>
    //             <li><a class="dropdown-item" href="#">Something else here</a></li>
    //          </ul>
    //                 </div>
    //                 <div className="contact">
    //                     <p className='container p-1'>Upgrade to gemini advance</p>
    //                     <Avatar />
    //                 </div>
    //             </nav>
    //         </div>


    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Gemini</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">

              </a>

              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
        {/* <p className=' '></p> */}
        <h6 className='p-3'>Upgrade to gemini advance</h6>
        {/* Upgrade to gemini advance */}
        <Avatar className='m-3'/>
       <div class="form-check form-switch pl-4">
       <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
       <label class="form-check-label" for="flexSwitchCheckChecked"></label>
        </div>
      </div>
    </nav>
  );
}
// import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

export default App;
