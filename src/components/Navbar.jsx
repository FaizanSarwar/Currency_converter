import React from 'react';
const Navbar = ()=>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <div className='left'>
    <a class="navbar-brand nv" href="#"> Personal</a>
    <div class="vl"></div>
    {/* <div class="collapse navbar-collapse" id="navbarSupportedContent"> */}

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    
        <li class="nav-item">
          
          <a class="nav-link active nv" aria-current="page" href="#">Business</a>
        </li>
      
      </ul>
      </div>
      
    {/* </div> */}
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">


    <li class="nav-item itm">
          
          <a class="nav-link active nv " aria-current="page" href="#">Send Money</a>
        </li>

    </div>
    
    
   
  </div>
</nav>
    )
}
export default Navbar;