<template>
  <div class="header">
    <Nav />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Nav from './HeaderNav.vue'

export default defineComponent({
  name: 'Header',
  components: {
    Nav
  }
})
</script>

<style module>

</style>