<template>
  <a
    class="social-link"
    target="_NEW"
    :class="type"
    :href="href">
    <i class="icon lab" :class="iconClass"></i>
    <span class="text">
    {{ this.name }}
    </span>
  </a>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "SocialLink",
  props: {
    href: String,
    name: String,
    type: String,
  },
  computed: {
    iconClass() {
      return `la-${this.type}`
    }
  }
});
</script>

<style lang="scss" scoped>
.social-link {
  background: #fbc117;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  max-width: fit-content;
  border-radius: 0.2em;
  transition: all 200ms ease-in-out;

  .icon {
    padding: 0.7em;
    font-size: 1.4em;
  }

  .text {
    display: none;
    font-weight: 400;
    padding-right: 1.2em;
  }

  &:hover {
    transition: all 200ms ease-in-out;
    .text { display: inline }
  }
}

.twitch:hover { background: #9147ff }
.github:hover { background: black; color: white; }
.medium:hover { background: black; color: white; }
.discord:hover { background: #3264EA; color: white; }

</style>
