<template>
  <div class="slider">
    <swiper
      :slides-per-view="1"
      auto-play="true"
      :space-between="10"
      navigation
    >
      <swiper-slide>
        <div class="overlay"></div>
        <div class="caption">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, facilis.
          </p>
          <button class="start">Get Started</button>
        </div>
        <img src="../assets/images/slider1.jpeg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <div class="overlay"></div>
        <div class="caption">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, facilis.
          </p>
          <button class="start">Get Started</button>
        </div>
        <img src="../assets/images/slider2.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <div class="overlay"></div>
        <div class="caption">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, facilis.
          </p>
          <button class="start">Get Started</button>
        </div>
        <img src="../assets/images/slider3.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <div class="overlay"></div>
        <div class="caption">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, facilis.
          </p>
          <button class="start">Get Started</button>
        </div>
        <img src="../assets/images/slider4.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <div class="overlay"></div>
        <div class="caption">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, facilis.
          </p>
          <button class="start">Get Started</button>
        </div>
        <img src="../assets/images/slider5.jpg" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// import Swiper core and required modules
import SwiperCore, { Navigation, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper modules
SwiperCore.use([Navigation, A11y]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
.swiper-slide {
  position: relative;
  background: #ddd;
  height: 500px;
  position: relative;
  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  .caption {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    text-align: center;
    color: #fff;
    .start {
      padding: 8px 50px;
      background-color: $second-color;
      border: none;
      border-radius: 4px;
      text-transform: uppercase;
      margin-top: 20px;
    }
  }
  img {
    width: 100%;
    position: absolute;
    height: 100%;
    box-sizing: border-box;
  }
}
</style>
