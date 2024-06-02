<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import {NButton} from 'naive-ui'

const router = useRouter()

const isLogin = ref(false)

const logout = () => {
  isLogin.value = false
  localStorage.removeItem("JwtToken")
  router.replace({name:'home'})
}

onMounted(() => {
  const token = localStorage.getItem("JwtToken")
  isLogin.value = !!token;
})

</script>

<template>
  <div class="nav-bar-contain">
    <div class="nav-bar">
      <div class="nav-bar-item">
        <ul>
          <li @click="router.push('some')">
            Some page
          </li>
        </ul>
      </div>
      <div class="nav-bar-item">
        <n-button round type="success" v-if="!isLogin" @click="router.push('login')">Login</n-button>
        <n-button round type="info" v-if="isLogin" @click="logout()">Logout</n-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-bar-contain {
  top: 0;
  height: 54px;
  width: 100vw;
  display: flex;
}

.nav-bar {
  height: 54px;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;

  background-color: #2c4a41;
}

.nav-bar-item {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-bar-item>ul {
  list-style: none;
}
.nav-bar-item>ul>li {
  height: 54px;
  line-height: 54px;
  padding: 0 12px;

  display: inline-block;
  cursor: pointer;

  color: #cdd6cd;
}
.nav-bar-item>ul>li:hover {
  background-color: #3c6e60;
}
</style>