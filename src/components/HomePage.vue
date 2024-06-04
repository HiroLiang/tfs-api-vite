<script setup lang="ts">
import { useRoute } from "vue-router";
import NavBarVue from './part/util/NavBar.vue';
import { useNotification } from "naive-ui";

const route = useRoute();
const notification = useNotification();

const params = route.query
if(params && params.JwtToken){
  const token = params.JwtToken;
  if (typeof token === "string") {
    if (token.startsWith("@")) {
      notification.error({
        content: token.replace("@", ""),
        duration: 6000,
        keepAliveOnHover: true
      })
    } else {
      localStorage.setItem('JwtToken', token);
      notification.success({
        content: '成功登入',
        duration: 3000,
        keepAliveOnHover: true
      })
    }
  }

}

</script>

<template>
  <nav-bar-vue />
  <router-view />
</template>

<style scoped>

</style>