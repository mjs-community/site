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
    margin: 0.2em 0;
  }

  @media (max-width: 700px) {
    flex-direction: row;
    > * {
      margin: 0 0.2em;
    }
  }
}
</style>
