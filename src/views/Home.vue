<template>
  <div class="home">
    <sidebar>
      <social-link
        type="twitch"
        name="twitch.tv/mjsdevs"
        href="https://www.twitch.tv/mjsdevs"
      />
      <social-link
        type="github"
        name="github.com/mjs-community"
        href="https://www.github.com/mjs-community"
      />
      <social-link
        type="discord"
        name="MJS Server"
        href="https://discord.gg/HnZE7ub"
      />
    </sidebar>
  </div>
</template>

<script lang="ts">
import SocialLink from "@/components/SocialLink.vue";
import Sidebar from '@/layouts/Sidebar.vue';

export default {
  name: "Home",
  components: {
    Sidebar,
    SocialLink,
  }
};
</script>
