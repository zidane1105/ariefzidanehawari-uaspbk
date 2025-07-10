<template>
  <div class="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
    <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
      <h2 class="text-2xl font-bold text-center text-indigo-600 mb-6">🔐 Login</h2>

      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-1" for="username">Username</label>
          <input
            v-model="username"
            type="text"
            id="username"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Masukkan username"
            required
          />
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 font-medium mb-1" for="password">Password</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Masukkan password"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          🔓 Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

const login = () => {
  if (username.value === 'admin' && password.value === '123') {
    localStorage.setItem('login', 'true')
    router.push('/')
  } else {
    alert('Username atau password salah!')
  }
}
</script>
