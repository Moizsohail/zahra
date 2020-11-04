<template>
  <div>
    <Main></Main> <Carousel></Carousel>
    <FieldT></FieldT>
  </div>
</template>

<script>
import Main from '~/components/common/MainTemplate'
import Carousel from '~/components/common/Carousel'
import FieldT from '~/components/common/FieldTemplate'
export default {
  components: {
    FieldT,
    Carousel,
    Main,
  },
}
</script>
