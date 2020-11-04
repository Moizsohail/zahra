<template>
  <div class="carousel-container" id="main">
    <b-carousel
      id="carousel"
      v-model="slide"
      :interval="30500"
      controls
      indicators
      img-width="1024"
      img-height="520"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <div>
        <b-carousel-slide>
          <template #img>
            <img
              class="carousel-content"
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            />
          </template>
        </b-carousel-slide>

        <b-carousel-slide>
          <template #img>
            <img
              class="carousel-content"
              src="https://c0.wallpaperflare.com/preview/455/998/352/academic-business-computer-education.jpg"
            />
          </template>
        </b-carousel-slide>

        <!-- <b-carousel-slide>
          <template #img>
            <img
              class="carousel-content"
              style="width: 100vw; height: 100vh;"
              src="../../assets/carousel/d1.gif"
            />
          </template>
        </b-carousel-slide> -->
      </div>
    </b-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>

<style scoped>
.carousel-container {
  /*margin: auto;*/
  width: 100%;
  height: 500px;
  position: relative;
  margin: 0;
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
}
#carousel {
  height: 100%;
}
.mycarousel {
  max-width: none;
  height: 100%;
  max-height: none;
}
.carousel-content {
  background-position: center;
  /* background-image: url('../../assets/caraosual/img1.jpg'); */
  width: 100vw;
  background-size: cover;
}
</style>
<style>
#main .carousel-inner > div,
#main .carousel-item,
#main .carousel-item > div {
  height: 100%;
}
#main .carousel-inner {
  height: 100%;
}
#main .carousel-bg {
  width: 100vw;
  height: 100%;
  /* max-height: none; */
}

/* @media screen and (max-width: 600px) {
  .mycarousel,
  #main .carousel-inner > div,
  #main .carousel-item,
  #main .carousel-item > div {
    height: 80%;
  }
  #main .carousel-inner {
    height: 80%;
  }
  #main .carousel-bg {
    width: 80vw;
    height: 80%;
    max-height: none;
  }
} */
</style>
