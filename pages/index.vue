<template>
  <div>
    <Main></Main> <Carousel></Carousel>
    <BodyT
      ><h3>Mathlab and Computing</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo incidunt
        dicta porro nostrum mollitia aut aliquid fugiat! Dolorem natus, cum
        labore, iusto deserunt quod deleniti magni animi quasi reiciendis error.
      </p>
      <Grid :tiles="fields" />
    </BodyT>
  </div>
</template>

<script>
import Main from '~/components/common/MainTemplate'
import Carousel from '~/components/common/Carousel'
import BodyT from '~/components/common/BodyTemplate'
import Grid from '~/components/common/Grid'
export default {
  components: {
    Main,
    Carousel,
    BodyT,
    Grid,
  },
  computed: {
    fields() {
      return this.$store.state.data
    },
  },
}
</script>
