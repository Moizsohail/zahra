<template>
  <div>
    <Main></Main> <Carousel></Carousel>
    <BodyT>
      <nuxt-content :document="doc" />
    </BodyT>
  </div>
</template>

<script>
import Main from '~/components/common/MainTemplate'
import Carousel from '~/components/common/Carousel'
import BodyT from '~/components/common/BodyTemplate'
export default {
  async asyncData({ $content, params }) {
    const doc = await $content('/projects/' + (params.slug || 'index')).fetch()
    return { doc }
  },
  components: {
    BodyT,
    Carousel,
    Main,
  },
}
</script>
