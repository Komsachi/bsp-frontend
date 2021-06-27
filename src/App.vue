<template>
  <Header />
  <div class="main">
    <router-view />
  </div>
  <Footer/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Header from "@/components/layout/header"
import Footer from "@/components/layout/Footer.vue"

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer
  }
})
</script>

<style>
</style>
