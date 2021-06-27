<template>
  <nav class="header-nav">
    <app-link v-for="item in navList" :to="item.to" tag="div"> {{ item.name }}</app-link>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'HeaderNav',

  setup() {
    const navList = [
      {
        name: 'Услуги',
        to: 'services'
      },
      {
        name: 'О нас',
        to: 'about'
      },
      {
        name: 'Контакты',
        to: 'contact-us'
      },
    ]

    return {
      navList
    }
  }
})
</script>

<style module>

</style>