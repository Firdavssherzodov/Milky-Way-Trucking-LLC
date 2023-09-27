<template>
    
    <div class="navgtion " id="scrol">
        <nav class="nav m-auto">
            <router-link to="/">
            <div class="d-flex ">
             
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9iYo-IQstMGJb1ufD_LvMgSngdQ-8cP-ozHllSMI9lvRO4WL-SfIYfDAYjAzZbQyClI&usqp=CAU"
                    alt="" class="img"><h1 class="h1">Trucking</h1>
           
            </div>
        </router-link> 
         <router-link to="content1">  <a class="a" href="#">Home</a> </router-link> 

          
               
               
              <router-link to="content2"><a class="a" href=""> About us </a>  </router-link>   
       
              
                 
            <a class="a" href="#">Contact us</a>
            <a class="a" href="#"> Schedules</a>
           
        </nav>

    </div>



 
</template>

<script setup>


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
    font-family: 'Poppins', 'sans-seri';
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
    transition: 4s !important;
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

@media (min-width:320px) and (max-width:  576px) {
    .navgtion {
    width: 100%;
    height: 3vh;
}
 

.nav {
    width: 50vh !important;
    height: 5vh !important;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-left: auto;
}

.nav .a {
    color: black;
    font-size: 0.7rem;
    font-family: 'Mukta', sans-serif;
    font-family: 'Poppins', sans-serif;
    font-family: 'Rubik', sans-serif;
}

.nav .a:active {
    border-bottom: 3px solid black;
    transition: 4s !important;
}

.img {
    width: 50px;
    height: 50px;
}

.d-flex {
    align-items: center;
    margin-left: -8vh;
    width: 10vh;
    justify-content: space-around;
}

.h1 {
    font-weight: 500;
    color: rgb(52, 52, 52);
 display: none;
}
}
@media (min-width: 576px) and (max-width: 768px){
    
}
 




 
 
</style>