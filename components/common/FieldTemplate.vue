<template>
  <div class="body">
    <div class="main">
      <div class="main-body">
        <h3>{{ field.title }}</h3>
        <p>
          {{ field.text }}
        </p>
      </div>

      <Grid :tiles="projects" project />
    </div>
    <div class="contact">
      <h3>Contact Us</h3>
      <div class="contact-card">
        <div>
          <img
            src="https://www.machinecurve.com/wp-content/uploads/2019/07/thispersondoesnotexist-1-1022x1024.jpg"
          />
        </div>
        <div class="text">
          <h4>Izhan Sohail</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Grid from './Grid.vue'
export default {
  components: { Grid },

  head: {
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
      },
    ],
  },
  computed: {
    field() {
      const id = this.$route.params.id

      const field = this.$store.state.data.filter((x) => x.title === id)
      if (field.length === 0) {
        return '404'
      }
      return field[0]
    },
    projects() {
      return this.field.projects
    },
  },
}
</script>
<style scoped>
* {
  font-family: 'Roboto';
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
.contact-card img {
  width: 60%;
  margin: auto;
  margin-bottom: 30px;
}
.contact h4 {
  font-weight: 400;
}
.contact .text {
  padding: 10px 0px;
}
.main-body {
  margin: 0px 0px 100px 0px;
  margin-right: 200px;
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
