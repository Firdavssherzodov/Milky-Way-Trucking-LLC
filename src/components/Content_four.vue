<template>
  <divv
    class="diva"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-easing="linear"
  >
    <div class="border">
      <img
        src="https://www.maersk.com/~/media_sc9/maersk/solutions/supply-chain-and-logistics/maersk-customs-services/mcs_720x405.jpg?w=1000&hash=647D9BFF61435B98B1635FA105F6373F"
        alt=""
      />
      <h2>Maersk Customs Services</h2>
      <p>
        Our local teams specialise in clearing cargo and <br />
        getting quicker customs clearances for your <br />
        perishable goods.
      </p>
    </div>


    <!-- client section start -->
    <div class="about_section layout_padding">
     
    <div class="border">
      <img
        src="https://www.maersk.com/~/media_sc9/maersk/solutions/supply-chain-and-logistics/supply-chain-management/supply-chain-management-signpost-720x405.jpg?w=1000&hash=154F2D7A147D330137F9681779895E50"
        alt=""
      />
      <h2>Maersk Customs Services</h2>
      <p>
        Our local teams specialise in clearing cargo and <br />
        getting quicker customs clearances for your <br />
        perishable goods.
      </p>
    </div>
        <!-- client section start -->
<!-- // -->
  </div>
</template>

<script setup></script>

<style scoped>
.diva {
  width: 149vh;
  height: 85vh;
  margin-left: 27vh;
  margin-top: 10vh;
  display: flex;
  flex-wrap: wrap;
}

.border {
  width: 45vh;
  height: 40vh;
  margin-left: 39px;
  margin-top: 10px;
  border-top-left-radius: 2.5vh;
  border-bottom-right-radius: 2.5vh;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
}

.border:hover {
  box-shadow: 0 5 15px rgba(0, 0, 0, 0.25);
  margin-top: -5px;
  transform: skew(-1.5deg);
  transition: 0.7s;
}

img {
  width: 100%;
  height: 60%;
  border-top-left-radius: 2.5vh;
  border-bottom-right-radius: 2.5vh;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
}

h2 {
  padding-left: 2vh !important;
  padding-top: 1vh;
  font-size: 2.2vh;

  font-family: "Mukta", sans-serif !important;
  font-family: "Poppins", sans-serif !important;
  font-family: "Rubik", sans-serif !important;
  font-family: "Ubuntu", sans-serif !important;
}

p {
  font-size: 1.55vh !important;
  font-family: "Ubuntu", sans-serif !important;
  font-family: "Mukta", sans-serif !important;
}

@media (min-width: 320px) and (max-width: 576px) {
  .diva {
    width: 60vh;
    height: 85vh;
    margin-left: 0vh;
    margin-top: 5vh;
  }

  .border {
    width: 100%;
    height: 38.5vh;
    margin-left: 0px;
    margin-top: 15px;
    border-radius: 2px;
  }

  img {
    width: 100%;
    height: 60%;
    border-radius: 2px;
  }

  h2 {
    padding-left: 2vh !important;
    padding-top: 1.6vh;
    font-size: 1.3rem;
    font-family: "Mukta", sans-serif !important;
    font-family: "Poppins", sans-serif !important;
    font-family: "Rubik", sans-serif !important;
    font-family: "Ubuntu", sans-serif !important;
  }
  br {
    display: none;
  }
  p {
    margin-top: 0.8vh;
    font-size: 0.8rem !important;
    font-family: "Ubuntu", sans-serif !important;
    font-family: "Mukta", sans-serif !important;
    width: 55vh !important;
  }
}

@media (min-width: 576px) and (max-width: 768px) {
  .diva {
    width: 174vh;
    height: 85vh;
    margin-left: -0.7vh;
    margin-top: 2vh;
    display: flex;
    flex-wrap: wrap;
   
  }

  .border {
    width: 53vh;
    height: 38.5vh;
    margin-top: 15px;
    border-radius: 2px;
    border-top-left-radius: 2.5vh;
    border-bottom-right-radius: 2.5vh;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }

</style>