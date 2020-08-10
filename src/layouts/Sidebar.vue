<template>
<aside>
  <slot/>
</aside>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "sidebar"
})
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;

  >* {
    margin-top: 0.2em;
    margin-bottom: 0.2em;
  }
}
</style>
