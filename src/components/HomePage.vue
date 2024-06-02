<script setup lang="ts">
import { useRoute } from "vue-router";
import NavBarVue from './part/util/NavBar.vue';

const route = useRoute();

const params = route.query
if(params && params.JwtToken)
  localStorage.setItem('JwtToken', <string>params.JwtToken);

</script>

<template>
  <nav-bar-vue />
  <router-view />
</template>

<style scoped>

</style>