<template>
  <div>
    <div class="body">
      <div class="main">
        <div class="main-body">
          <slot></slot>
        </div>
      </div>
      <div class="contact"><contact></contact></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './Footer.vue'
import Contact from './ContactCard.vue'
export default {
  components: { Footer, Contact },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
      },
    ],
  },
}
</script>
<style scoped>
* {
  font-family: 'Roboto';
}
.main-body {
  margin: 0px 0px 100px 0px;
  margin-right: 200px;
}
.body {
  display: grid;
  margin: auto;
  width: 80%;
  padding: 80px 0px;
  grid-template-columns: 1fr 300px;
}
.contact {
  padding: 0px 10px;
}
h3 {
  font-weight: 300;
}
.main-body h3 {
  letter-spacing: 0.025em;
  opacity: 0.95;
  margin: 0px 0px 50px 0px;
}

.main-body p {
  font-size: 0.95em;
  opacity: 0.6;
}

@media (max-width: 1000px) {
  .body {
    width: 95%;
  }
  .main-body {
    margin-right: 50px;
  }
}
</style>
