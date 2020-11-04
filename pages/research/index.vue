<template>
  <div>
    <Main></Main> <Carousel></Carousel>
    <BodyT>
      <h2 class="main-header">Research</h2>
      <p>
        My research areas lie in numerical analysis, scientific computing and
        modeling, in particular, with focus on finite volume methods,
        semiconductor problems and meshfree methods.
      </p>
      <h5>Finite volume schemes</h5>
      <ul class="mb-5">
        <li>Nonlinear advection-diffusion equations</li>
        <li>
          Complete flux and Scharfetter-Gummel schemes for nonlinear diffusion
        </li>
        <li>Physics preserving methods</li>
      </ul>
      <h2 class="mt-5">Publications</h2>
      <p>
        My research areas lie in numerical analysis, scientific computing and
        modeling, in particular, with focus on finite volume methods,
        semiconductor problems and meshfree methods.
      </p>
      <h5>Finite volume schemes</h5>
      <ul>
        <li v-for="x in pubs" :key="x">{{ x }}</li>
      </ul>
    </BodyT>
  </div>
</template>

<script>
import Main from '~/components/common/MainTemplate'
import Carousel from '~/components/common/Carousel'
import BodyT from '~/components/common/BodyTemplate'
export default {
  components: {
    Main,
    Carousel,
    BodyT,
  },
  computed: {
    pubs() {
      return this.$store.state.publications
    },
  },
}
</script>
