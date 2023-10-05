<template>
  <div>
    <!-- // -->
    <!-- header section start -->
    <div class="header_section">
      <nav class="destop_header navbar navbar-expand-lg navbar-light bg-light">
   
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
            <router-link to="/"> <a class="nav-link" href="#">Home</a></router-link> 
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="logo_main" href=" # ">
            <router-link to="/">   <img class="img" src="../../images/Logo-55.png"> </router-link> 
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
                        
          </ul>
        </div>
      </nav>
      
      <nav class="mobile_header navbar navbar-expand-lg navbar-light bg-light">
         
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent2">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link " href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="about.html">About</a>
            </li>
            <li class="nav-item">
              <a class="logo_main" href="index.html"><img src="images/logo.png"></a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="Blog.html">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact</a>
            </li>
                     
          </ul>
        </div>
      </nav>
    </div>
 <!-- header section start -->
    <!-- // -->
  </div>
</template>

<script setup>

</script>

<style  scoped>
.img{
  width: 150px;
  height: 40px;
  margin-top: 0.4rem;
}
 .nav:hover{
 color: black !important;
}
.header_section{
  width: 105rem;
  margin-left: -0vh;
}
 
  
 

</style>