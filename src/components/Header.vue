<template>
    <div>
        <nav class="nav border m-auto">
            <div class="d-flex">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9iYo-IQstMGJb1ufD_LvMgSngdQ-8cP-ozHllSMI9lvRO4WL-SfIYfDAYjAzZbQyClI&usqp=CAU"
                    alt="" class="img">
                <h1 class="h1">Trucking</h1>
            </div>
            <a href="#">Prices</a>
            <a href="#">Book</a>
            <a href="#">Tracking</a>
            <a href="#"> Schedules</a>
            <a href="#">Logistics solutions</a>

        </nav>
    </div>
</template>

<script setup>

</script>

<style  scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Mukta', sans-serif;
font-family: 'Poppins', sans-seri   f;
font-family: 'Rubik', sans-serif !important;
}

.nav {
    width: 100vh !important;
    height: 10vh !important;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.nav a {
    color: black;
    font-size: 19px;
    font-family: 'Mukta', sans-serif;
font-family: 'Poppins', sans-serif;
font-family: 'Rubik', sans-serif;

}
.nav a:hover{
   
 
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
}</style>