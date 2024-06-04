<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";
import {NInput} from 'naive-ui'
import {reqStartGoogleOauth} from "../api/auth-api.ts";

const router = useRouter();

const email = ref('')
const password = ref('')

const startGoogolOAuth = async () => {
  // 向 google 取得認證頁面
  window.location.href = (await reqStartGoogleOauth()).data
}
</script>

<template>
  <div class="login-page">
    <div class="login-contain">
      <div class="login-list">
        <p>Email :</p>
        <n-input round v-model="email"></n-input>
        <p>Password :</p>
        <n-input round v-model="password"></n-input>
        <div class="login-button">
          <div style="margin-right: 20px">
            <n-button strong secondary type="primary">登入</n-button>
          </div>
          <div style="margin-left: 20px">
            <n-button strong secondary @click="router.push({name:'home'})">取消</n-button>
          </div>
        </div>
        <hr>
        <div class="google-button" @click="startGoogolOAuth">
          <img src="../assets/icons8-google-48.png" alt="google-icon">
          <p>login with google</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
hr {
  border: none;
  height: 2px;
  background-color: #577a7a;
  width: 80%;
  margin: 20px auto;
}

.login-page {
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("../assets/login-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.7;
  z-index: -1;
}

.login-contain {
  width: 400px;
  height: 400px;
  border-radius: 10px;

  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-contain::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: #cdd6cd;
  opacity: 0.7;
}

.login-list {
  height: 100%;
  width: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 2;
}

.login-list > p {
  width: 80%;
  color: #274747;
  font-size: 1rem;
  text-align: left;
}

.login-button {
  width: 100%;
  margin-top: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.google-button {
  border-radius: 10px;
  padding: 5px 10px;

  display: flex;
  align-items: center;
  cursor: pointer;
}

.google-button:hover {
  background-color: #cdd6cd;
}
</style>