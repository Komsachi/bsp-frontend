<template>
  <component :is="tag" class="app-link">
    <router-link v-bind="$attrs">
      <slot/>
    </router-link>
  </component>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'AppLink',

  props: {
    tag: {
      type: String,
      default: "span",
      validator(value) {
        return ['div', 'span', 'li'].includes(value)
      }
    },
  },
})
</script>

<style module>

</style>