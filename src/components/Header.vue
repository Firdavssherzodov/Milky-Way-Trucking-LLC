<template>
    <div class="navgtion" id="scrol">
        <nav class="nav m-auto">
            <div class="d-flex">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9iYo-IQstMGJb1ufD_LvMgSngdQ-8cP-ozHllSMI9lvRO4WL-SfIYfDAYjAzZbQyClI&usqp=CAU"
                    alt="" class="img">
                <h1 class="h1">Trucking</h1>
            </div>
            <a class="a" href="#">Prices</a>

            <li class="nav-item dropdown ">
                <a class="nav-link dropdown-toggle a" href="#" id="navbarDropdown" role="" data-mdb-toggle="dropdown"
                    aria-expanded="false">
                    Book
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
    <div class="diva">
<h1 class="heading3">Propelled by ambition
    <br>
<span class="span1">and green methanol</span>
</h1>
<p class="fs-5 text-light">Learn more about our journey towards net zero by 2040.</p>
<button type="button" class="btn btn-light btn1">Learn more</button>

    </div>
</template>

<script setup>
import { ref,onMounted } from 'vue';
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
}

.dropdown-menu,.dropdown-item {
    font-size: 18px;
}
.diva {
    margin-top: 4vh;
    width: 100%;
    height: 60vh;
    background-image: url(https://www.alhaya-medical.com/wp-content/uploads/2017/12/logistics.gif);
    background-size: cover;
    position: relative;
}
.heading3, span{
    color: #fff;
    font-family: 'Mukta', sans-serif !important;
font-family: 'Poppins', sans-serif !important;
font-family: 'Rubik', sans-serif !important;
font-family: 'Ubuntu', sans-serif !important;
width: 60vh;
font-size: 5vh;
}
.heading3{
    position: absolute;
    top: 20vh;
    left: 50vh;
}
.span1{
padding-left: 11.5vh;
}
.text-light{
    font-family: 'Mukta', sans-serif !important;
font-family: 'Poppins', sans-serif !important;
font-family: 'Rubik', sans-serif !important;
font-family: 'Ubuntu', sans-serif !important;
font-size: 27px !important;
position: absolute;
top: 34.5vh;
left: 50vh;
}
.btn1{
    width: 12vh;
    height: 4vh;
font-size: 15px;
font-weight: 500;
font-family: 'Roboto', sans-serif !important;
position: absolute;
top: 40vh;
left: 50vh;
}
 
</style>