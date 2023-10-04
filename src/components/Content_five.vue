<template>
  <div>

    
    <!-- contact section start -->
    <div class="contact_section layout_padding">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 padding_0">
            <div class="bg_7" data-aos="fade-right">
              <div class="padding_left10">
                <h1 class="contact_text">Contact Us</h1>
                <p class="content_text">
                  readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more-or-less
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 padding_0">
            <div class="bg_6" data-aos="fade-left">
              <div class="mail_section" data-aos="fade-left">
             <form>  
              <input
                  type="text"
                  class="mail_text"
                  placeholder="Name"
                  name="Name"
                />
                <input
                  type=""
                  class="mail_text"
                  placeholder="Phone Number"
                  name="Phone Number"
                />
            
               <input type="email"
               class="mail_text"
               name="Email Address"
               placeholder="Email Address"
               >
               <button class="btn btn-primary my-4 px-5 rounded-pill" type="submit"> Submit </button>
              </form> 
              <p class="text-white">By proceeding with the above form, you accept our <a href="">Terms</a> and <a href="">Privacy Policy </a> you are agreed to receive SMS messages from our company. We are committed to safeguarding your privacy and personal information.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- contact section end -->
  </div>
</template>

<script setup></script>

<style scoped>
a{
  color: #EF5051;
  font-weight: 500;
}

a:hover{
  color: rgb(255, 0, 208);
}
.text-white{
  margin-left: -0.5px;
  font-size: 1.0.5rem;
}
</style>
