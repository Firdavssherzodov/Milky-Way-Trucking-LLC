<template>
    
    <div class="navgtion" id="scrol">
        <nav class="nav m-auto">
            <router-link to="/">
            <div class="d-flex">
             
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9iYo-IQstMGJb1ufD_LvMgSngdQ-8cP-ozHllSMI9lvRO4WL-SfIYfDAYjAzZbQyClI&usqp=CAU"
                    alt="" class="img"><h1 class="h1">Trucking</h1>
           
            </div>
        </router-link> 
         <router-link to="content1">  <a class="a" href="#">Prices</a> </router-link> 

            <li class="nav-item dropdown ">
                <a class="nav-link dropdown-toggle a" href="#" id="navbarDropdown" role="" data-mdb-toggle="dropdown"
                    aria-expanded="false">
              <router-link to="content2">   Book  </router-link>   
                </a>
                <!-- Dropdown menu -->
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item py-3 ps-2" href="#">Action</a></li>
                    <hr class="dropdown-divider dark" />
                    <li><a class="dropdown-item py-3 ps-2" href="#">Another action</a></li>
                    <hr class="dropdown-divider" />
                    <li><a class="dropdown-item py-3" href="#">Something else here</a></li>
                    <li>
                        <hr class="dropdown-divider" />
                    </li>
                    <li><a class="dropdown-item py-3" href="#">Something else here</a></li>
                    <li>
                        <hr class="dropdown-divider" />
                    </li>
                    <li><a class="dropdown-item py-3" href="#">Something else here</a></li>
                </ul>
            </li>
            <a class="a" href="#">Tracking</a>
            <a class="a" href="#"> Schedules</a>
            <a class="a" href="#">Logistics solutions</a>
        </nav>

    </div>



 
</template>

<script setup>

import Header from '../components/Header.vue';
// import { ref,onMounted } from 'vue';
// let num = ref(1000)
 
// function scrolll(){
//     const scrol1 = document.querySelector('#scrol')
    
// if (window.scrollY < num) {
//     console.log(window.scroll,' inkas');
// } else {
//     console.log(window.scrollY);
// }

// //   window.addEventListener('scroll',(colback) => {

// //     var scr = colback.timeStamp;
// //     console.log(scr);
// //     if (scr > num.value) {
// //     scrol1.classList.add('navgtionjs')
// //    }
// //     })

// }
// scrolll()




//     onMounted(() => {
//       window.addEventListener('scroll', handleScroll);
//     });

//     const handleScroll = () => {
//       // Access the window.scrollY value here and perform any desired actions
//      let scrol1 = document.querySelector('#scrol')
//    if (window.scrollY < 10) {
//     scrol1.classList.add('navgtionjs');
//    };
//    if (window.scrollY > 10) {
//     scrol1.classList.add('navgtion');
//    }
//     };

  
  

</script>

<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Mukta&family=Poppins:wght@400;500;600;700&family=Rubik&family=Ubuntu:wght@300&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Mukta', sans-serif;
    font-family: 'Poppins', sans-seri;
    font-family: 'Rubik', sans-serif !important;
}

.navgtion {
    width: 100%;
    height: 10vh;
}
.navgtionjs{
background-color:rgb(255, 255, 255);
position: sticky !important;
top: 0.1px !important;
bottom: 50vh;
z-index: 3;
transition: 2s !important;
}

.nav {
    width: 100vh !important;
    height: 10vh !important;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-left: auto;
}

.nav .a {
    color: black;
    font-size: 19px;
    font-family: 'Mukta', sans-serif;
    font-family: 'Poppins', sans-serif;
    font-family: 'Rubik', sans-serif;
}

.nav .a:hover {
    border-bottom: 3px solid black;
    transition: 40s !important;
}

.img {
    width: 100px;
    height: 100px;
}

.d-flex {
    align-items: center;
    margin-left: -6vh;
    width: 25vh;
    justify-content: space-around;
}

.h1 {
    font-weight: 700;
    color: rgb(52, 52, 52);

}

.dropdown-menu,.dropdown-item {
    font-size: 18px;
}




 
 
</style>