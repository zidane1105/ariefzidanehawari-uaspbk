<template>
  <div>
    <h1 class="text-4xl text-blue-500 font-bold text-center mt-8">
  Sistem Tiket Konser 🎫
</h1>

  <nav class="flex justify-end gap-4 mb-4 text-sm text-indigo-600">
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/konser">Konser</RouterLink>
  <RouterLink to="/tiket-saya">Tiket Saya</RouterLink>

  <template v-if="isLoggedIn()">
    <button @click="logout" class="text-red-600 hover:underline">🔓 Logout</button>
  </template>
  <template v-else>
    <RouterLink to="/login" class="hover:underline">🔐 Login</RouterLink>
  </template>
</nav>



    <hr />
    <router-view :key="$route.fullPath" />

  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()

const isLoggedIn = () => {
  return localStorage.getItem('login') === 'true'
}

const logout = () => {
  localStorage.removeItem('login')
  router.push('/login')
}
</script>


<style scoped>
nav {
  margin-bottom: 1rem;
}
button {
  margin-left: 1rem;
  background-color: crimson;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
