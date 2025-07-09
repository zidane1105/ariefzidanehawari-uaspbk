<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 text-white flex flex-col items-center justify-center px-4 py-20">
    <div class="text-center max-w-2xl">
      <h1 class="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
        🎵 Selamat Datang di Sistem Tiket Konser
      </h1>
      <p class="text-lg md:text-xl mb-8 text-indigo-100">
        Pesan tiket konser favoritmu dengan mudah dan cepat. Nikmati pengalaman menonton konser terbaik!
      </p>

<RouterLink
  to="/konser"
class="inline-block bg-red-600 text-white font-bold text-lg px-8 py-3 rounded-full shadow-md border-2 border-white hover:bg-red-700 transition-all duration-300">
   Lihat Daftar Konser →
</RouterLink>
   </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
