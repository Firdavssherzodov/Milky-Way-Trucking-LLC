<template>
  <div class="conterner">
    <div class="div1">
      <h1 class="p-4 h1">About us</h1>
      <p class="p1">
        For logistics to be efficient, they often require a combination of
        transport options, <br />
        known as intermodal transport. Inland transportation describes all
        logistics transport <br />
        activities that go over land. This includes:
      </p>

      <ul>
        <li>Road Freight</li>
        <li>Train Freight</li>
        <li>Inland Water Transport</li>
      </ul>
      <p class="p1 pp1">
        Covering truck, rail and barge, our Inland Transportation Services are
        designed to get <br />
        your goods to their destination in a shorter time – your goods will
        remain in the same <br />
        shipping container they were packed in at their origin.
      </p>
    </div>

    <div class="div2">
      <img
        src="../../images/inland-transportation-v2_720x405 content-image1.webp"
        alt=""
      />
    </div>
  </div>

  <div class="div3">
    <h1 class="h_1">
      The benefits of Maersk Inland Transportation <br />
      Services
    </h1>
    <p class="p_1">
      Shipping is not just about the ocean. Often, it means moving your goods
      inland and coordinating with multiple <br />
      suppliers. We offer a full-service solution with a single point of
      contact, with more flexibility and better insight. Our <br />
      landside transportation and teams of logistics experts create efficiencies
      and help you boost your supply chain’s <br />
      productivity.
    </p>
  </div>
</template>

<script setup></script>

<style scoped>
.conterner {
  width: 150vh;
  height: 40vh;
  margin: 5vh auto;
  display: flex;

  justify-content: space-around;
}
.div1 {
  width: 45%;
  height: 40vh;
}
.div2 {
  width: 49%;
  height: 40vh;
}
.div3 {
  margin: 10vh 27vh;
  width: 85vh;
  height: 30vh;
}
.h_1 {
  font-family: "Mukta", sans-serif !important;
  font-family: "Poppins", sans-serif !important;
  font-family: "Rubik", sans-serif !important;
  font-family: "Ubuntu", sans-serif !important;
  font-weight: 500;
  padding: 10px;
  padding-left: 3.89vh;
}
.h1 {
  margin-left: 2.7vh !important;
  font-size: 4vh !important;
}
.p_1 {
  font-family: "Ubuntu", sans-serif !important;
  font-family: "Mukta", sans-serif !important;
  font-size: 2vh;

  padding: 20px;
}

img {
  width: 100% !important;
  height: 40vh !important;
  margin-top: 2.5vh;
  border-top-left-radius: 2.5vh;
  border-bottom-right-radius: 2.5vh;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
}
.h1 {
  padding-left: 5vh !important;
  font-size: 3.2rem;
  font-family: "Mukta", sans-serif !important;
  font-family: "Poppins", sans-serif !important;
  font-family: "Rubik", sans-serif !important;
  font-family: "Ubuntu", sans-serif !important;
}
.p1 {
  padding-left: 5vh !important;
  font-size: 1.63vh !important;
  font-family: "Ubuntu", sans-serif !important;
  font-family: "Mukta", sans-serif !important;
}
ul {
  padding-left: 7vh;
  font-size: 1.63vh;
  font-family: "Ubuntu", sans-serif !important;
  font-family: "Mukta", sans-serif !important;
}

@media (min-width: 320px) and (max-width: 576px) {
  .conterner {
    width: 59.5vh !important;
    height: 35vh;
    margin-top: 8vh;
    margin-left: -1px;
  }
  .div1 {
    width: 45%;
    height: 20vh;
  }
  .div2 {
    width: 100%;
    height: 30vh;
    margin-top: 35vh;
    margin-left: -26.5vh;
  }
  .div3 {
    margin: 10vh 27vh;
    width: 85vh;
    height: 30vh;
    display: none;
  }
  .h_1 {
    font-family: "Mukta", sans-serif !important;
    font-family: "Poppins", sans-serif !important;
    font-family: "Rubik", sans-serif !important;
    font-family: "Ubuntu", sans-serif !important;
    font-weight: 500;
    padding: 10px;
    padding-left: 3.89vh;
    display: none;
  }
  .h1 {
    margin-left: -3vh !important;
    font-size: 1.55rem !important;
    font-weight: 300 !important;
    color: black;
  }
  .p_1 {
    font-family: "Ubuntu", sans-serif !important;
    font-family: "Mukta", sans-serif !important;
    font-size: 2vh;
    display: none;
    padding: 20px;
  }

  img {
    width: 100% !important;
    height: 30vh !important;
    margin-top: -0.1vh;
    border: none;
  }
  .h1 {
    margin-top: -2vh;
    padding-left: 6vh !important;
    font-weight: 700;
    font-family: "Mukta", sans-serif !important;
    font-family: "Poppins", sans-serif !important;
    font-family: "Rubik", sans-serif !important;
    font-family: "Ubuntu", sans-serif !important;
  }
  .p1 {
    margin-left: -2.5vh;
    margin-top: -3vh;
    font-size: 0.7rem !important;
    font-family: "Ubuntu", sans-serif !important;
    font-family: "Mukta", sans-serif !important;
    width: 60vh;
  }
  br {
    display: none;
  }
  ul {
    margin-left: -4vh;
    margin-top: -1vh;
    font-size: 0.7rem;

    font-family: "Ubuntu", sans-serif !important;
    font-family: "Mukta", sans-serif !important;
  }
  .pp1 {
    margin-top: 2vh;
  }
}

@media (min-width: 576px) and (max-width: 768px) {
  .conterner {
    width: 176vh !important;
    height: 50vh;
    margin-top: 3vh;
    margin-left: -1px;
  }
  .div1 {
    width: 100%;
    height: auto;
  }
  .div2 {
    width: 100vh;
    height: 50vh;
    margin-top: 2vh;
    margin-left: -30vh;
  }
  .div3 {
    margin: 10vh 27vh;
    width: 85vh;
    height: 30vh;
    display: none  ;
  }
  .h_1 {
    font-family: "Mukta", sans-serif !important;
    font-family: "Poppins", sans-serif !important;
    font-family: "Rubik", sans-serif !important;
    font-family: "Ubuntu", sans-serif !important;
    font-weight: 500;
    padding: 10px;
    padding-left: 3.89vh;
    display: none;
  }
  .h1 {
    margin-left: -3vh !important;
    font-size: 2.9rem !important;
    font-weight: 600 !important;
    color: black;
  }
  .p_1 {
    font-family: "Ubuntu", sans-serif !important;
    font-family: "Mukta", sans-serif !important;
    font-size: 2vh;
    display: none;
    padding: 20px;
  }

  img {
    width: 100% !important;
    height: auto !important;
    margin-top: -0.1vh;
    margin-left: -2vh;
  }
  .h1 {
    margin-top: -2vh;
    padding-left: 6vh !important;
    font-weight: 700;
    font-family: "Mukta", sans-serif !important;
    font-family: "Poppins", sans-serif !important;
    font-family: "Rubik", sans-serif !important;
    font-family: "Ubuntu", sans-serif !important;
  }
  .p1 {
    margin-left: -2.5vh;
    margin-top: -0.5vh;
    font-size: 1.1rem !important;
    font-family: "Ubuntu", sans-serif !important;
    font-family: "Mukta", sans-serif !important;
    width: 90vh;
  }
  br {
    display: none;
  }
  ul {
    margin-left: -4vh;
    margin-top: -1vh;
    font-size: 1.1rem;
    font-family: "Ubuntu", sans-serif !important;
    font-family: "Mukta", sans-serif !important;
  }
  .pp1 {
    margin-top: 2vh;
  }
}
</style>
