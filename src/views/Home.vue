<template>
  <div class="home">
    <sidebar class="sidebar">
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
    <main>
      <h1 class="welcome">
        <img :src="logo" alt="mjs-logo">
        Bem Vind@!
      </h1>

      <p class="content">
        Você acaba de achar a melhor comunidade de software em linha reta de
        Pernambuco. Entra no nosso 
        <a
          class="link"
          href="https://discord.gg/HnZE7ub"
          target="_NEW">
          Discord
        </a> e bora trocar uma ideia massa :)
      </p>
    </main>
  </div>
</template>

<script lang="ts">
import SocialLink from "@/components/SocialLink.vue";
import Sidebar from "@/layouts/Sidebar.vue";
import LogoClassic from "@/assets/mjs-black-classic.svg";

export default {
  name: "Home",
  data() {
    return {
      logo: LogoClassic,
    }
  },
  components: {
    Sidebar,
    SocialLink,
  }
};
</script>

<style lang="scss">
  .home {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: url('../assets/recife.jpg') center/cover no-repeat;
    padding: 0 2rem;
  }

  .sidebar {
    position: absolute;
    left: 2rem;
    @media (max-width: 700px) {
      display: none !important;
    }
  }
  
  .welcome {
    color: #fbc117;
    display: flex;
    font-size: 2.5rem;
    align-items: center;
    font-weight: 500;
    margin-bottom: 0;
    @media (max-width: 500px) {
      flex-direction: column;
    }
  }

  .welcome img {
    margin-right: 1em;
  }

  .content {
    max-width: 37rem;
    color: white;
    font-size: 1.1rem;
    text-align: center;

    .link {
      color: #fbc117;
      font-weight: 500;
      text-decoration: none;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>
