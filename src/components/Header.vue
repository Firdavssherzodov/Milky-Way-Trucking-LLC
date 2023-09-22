<template>
    <div class="navgtion">
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
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <br>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <br>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    <li>
                        <hr class="dropdown-divider" />
                    </li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    <li>
                        <hr class="dropdown-divider" />
                    </li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
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

</script>

<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Mukta&family=Poppins:wght@400;500;600;700&family=Rubik&family=Ubuntu:wght@300&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Mukta', sans-serif;
    font-family: 'Poppins', sans-seri f;
    font-family: 'Rubik', sans-serif !important;
}

.navgtion {
    width: 100%;
    height: 10vh;
    background-color:rgb(255, 255, 255);
position: sticky;
bottom: 100px;
}

.nav {
    width: 100vh !important;
    height: 10vh !important;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
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

.dropdown-menu li {
    padding: 5px;
    font-size: 18px;
}
.diva {
    width: 100%;
    height: 70vh;
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