<script setup lang="ts">
import {RouterView} from 'vue-router';
import {NNotificationProvider} from "naive-ui";
</script>

<template>
  <n-notification-provider :placement="'top-right'" :max="8">
    <RouterView/>
  </n-notification-provider>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
