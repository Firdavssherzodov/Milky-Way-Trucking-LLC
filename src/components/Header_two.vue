<template>
  <div>
    <div class="diva">
      <div class="Registration" data-aos="flip-down">
        <h1 class="heading3 h1">
          GET A FREE INSTANT QUOTE OR
          <br />
          <span class="span1">CALL NOW (929) 566-5040</span>
        </h1>

        <form>
          <label for="name">
            <h4>Your Name</h4>
            <input type="text" id="name" placeholder="Your Name" />
          </label>
          <br />
          <label for="number">
            <h4>Phone Number</h4>
            <input type="email" id="number" placeholder="+998" />
          </label>
          <br />
          <button type="submit" class="btn btn-info fs-6">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mukta&family=Poppins:wght@400;500;600;700&family=Rubik&family=Ubuntu:wght@300&display=swap");
.diva {
  margin-top: 3vh;
  width: 100% !important;
  height: 60vh;
  background-image: url(https://www.alhaya-medical.com/wp-content/uploads/2017/12/logistics.gif);
  background-size: cover;
  border: solid rgb(255, 255, 255) 0.1px;
}
.heading3,
span {
  color: #fff;

  width: 60vh;
  color: rgba(0, 0, 0, 0.799);
  font-size: 2.5vh;
}
.heading3 {
  padding-top: 5vh;
  padding-left: 5.5vh;
  font-size: 2.5vh;
  color: rgba(0, 0, 0, 0.799);
}
.Registration {
  width: 50vh;
  height: 45vh;
  backdrop-filter: blur(10px);
  margin-left: 30.5vh;
  margin-top: 7.5vh;
  border-radius: 1.5vh;
}

.btn-info {
  width: 35vh;
  height: 5.5vh;
  margin-top: 2vh;
}
h4 {
  color: rgba(0, 0, 0, 0.799);
  font-size: 1.6vh;
  font-weight: 600;
  padding-left: 5px;
}
form {
  margin-left: 5vh;
}
input {
  width: 35vh;
  height: 5.5vh;
  border-radius: 10px;
  border: solid 1px;
  font-size: 1.4vh;
  font-weight: 500;
  padding-left: 10px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: none;
}

@media (min-width: 320px) and (max-width: 576px) {

    .diva {
  margin-top: 3vh;
  width: 100% !important;
  height: 25vh;
  background-image: url(https://www.alhaya-medical.com/wp-content/uploads/2017/12/logistics.gif);
  background-size: cover;
  border: solid rgb(255, 255, 255) 0.1px;
}
.heading3,
span {
  color: #fff;
  width: 60vh;
  color: rgba(0, 0, 0, 0.799);
  font-size: 1rem;
}
.heading3 {
  padding-top: 1vh;
  padding-left: 17vh;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.799);
}
.Registration {
  width: 60vh;
  height: 30vh;
  backdrop-filter: blur(10px);
  margin-left: 0.01vh;
  margin-top: 0.01vh;
 
 
}

.btn-info {
  width: 44.5vh;
  height: 4.5vh;
  margin-top: 1vh;
}
h4 {
  color: rgba(0, 0, 0, 0.799);
  font-size: 0.7rem;
  font-weight: 600;
  padding-left: 5px;
}
form {
  margin-left:7.5vh;
  margin-top: -1vh;
}
input {
  width: 45vh;
  height: 4.5vh;
  border-radius: 10px;
  border: solid 1px;
  font-size: 0.8rem;
  font-weight: 500;
  padding-left: 15px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: none;
}

}
</style>
