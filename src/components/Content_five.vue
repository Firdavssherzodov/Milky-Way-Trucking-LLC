<template>
    <div class="diva mt-5">

        <!-- header section end -->
        <!-- contact section start -->
        <div class="contact_section layout_padding">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6 padding_0">
                        <div class="bg_7">
                            <div class="padding_left10">
                                <h1 class="contact_text">Contact Us</h1>
                                <p class="content_text">readable content of a page when looking at its layout. The point of
                                    using Lorem Ipsum is that it has a more-or-less</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 padding_0">
                        <div class="bg_6">
                            <div class="mail_section">
                                <input type="" class="mail_text" placeholder="Name" name="Name">
                                <input type="" class="mail_text" placeholder="Phone Number" name="Phone Number">
                                <input type="" class="mail_text" placeholder="Email" name="Name">
                                <textarea class="massage_text" placeholder="Email" rows="5" id="comment"
                                    name="Email"></textarea>
                                     <button class="btn btn-dark" style="background-color: #201f33;">SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- //// -->
        <!-- contact section end -->
        <!-- footer section start -->
        <div class="footer_section layout_padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <h1 class="footer_taital">Manu</h1>
                        <div class="footer_menu">
                            <ul>
                                <li class="active"><a href="#">Home</a></li>
                            <router-link to="/content1">   <li><a href="#">About</a></li> </router-link> 
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <h1 class="footer_taital">Location</h1>
                        <div class="map_text"><a href="#"><img src="images/map-icon.png"><span class="map_icon">104 loram
                                    ipusm</span></a></div>
                        <div class="map_text"><a href="#"><img src="images/map-icon.png"><span class="map_icon">( +98
                                    76543210 )</span></a></div>
                        <div class="map_text"><a href="#"><img src="images/mail-icon.png"><span
                                    class="map_icon">demo@gmail.com</span></a></div>
                    </div>
                    <div class="col-lg-3">
                        <h1 class="footer_taital">Social Link</h1>
                        <div class="social_icon">
                            <ul>
                                <li><a href="#"><img src="images/fb-icon.png"></a></li>
                                <li><a href="#"><img src="images/twitter-icon.png"></a></li>
                                <li><a href="#"><img src="images/instagram-icon.png"></a></li>
                                <li><a href="#"><img src="images/linkedin-icon.png"></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <h1 class="footer_taital">Newsletter</h1>
                        <input type="" class="email_text" placeholder="Enter Your Email" name="text">
                        <div class="Subscribe_text"><a href="#">SUBSCRIBE</a></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- footer section end -->
        <!-- copyright section start -->
        <div class="copyright_section">
            <div class="container">
                <div class="border"></div>
                <p class="copyright_text">2023 All Rights Reserved. <a href="https://html.design">Free html Templates</a>
                    Distributed By <a href="https://themewagon.com">ThemeWagon</a></p>
            </div>
        </div>
  
</template>

<script setup>

</script>

<style  scoped>


h1 {
    font-family: 'Mukta', sans-serif !important;
    font-family: 'Poppins', sans-serif !important;
    font-family: 'Rubik', sans-serif !important;
    font-family: 'Ubuntu', sans-serif !important;
    
}

p {
    font-family: 'Ubuntu', sans-serif !important;
    font-family: 'Mukta', sans-serif !important;
    
}
/* .diva{
    width: 142vh;
    margin-left: 29vh;
    border-top-left-radius: 2.5vh;
    border-bottom-right-radius: 2.5vh;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
     
} */


</style>