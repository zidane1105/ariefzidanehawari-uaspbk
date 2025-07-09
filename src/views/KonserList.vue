<template>
<div class="max-w-6xl mx-auto px-4 py-8 bg-gray-100 min-h-screen">
  <h1 class="text-4xl font-bold text-center text-indigo-600 mb-10">
    🎤 Pilih Konser Favoritmu
  </h1>

  <div v-if="loading" class="text-center text-gray-500">Memuat konser...</div>

  <div v-else class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="k in konser"
      :key="k.id"
      class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
    >
      <img
        :src="k.gambar"
        :alt="k.judul"
        class="w-full h-48 object-cover sm:h-52 md:h-56"
      />
      <div class="p-5">
        <h2 class="text-xl font-bold text-gray-800 mb-2">{{ k.judul }}</h2>
        <p class="text-gray-600">📅 {{ k.tanggal }}</p>
        <p class="text-green-600 font-semibold">💸 Rp{{ k.harga.toLocaleString() }}</p>
        <button
          @click="pesanTiket(k)"
          class="mt-6 w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-2.5 rounded-xl font-semibold tracking-wide shadow-md hover:shadow-xl hover:brightness-110 hover:scale-105 transition-all duration-300"
        >
          🎫 Pesan Tiket
        </button>
      </div>
    </div>
  </div>
</div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const konser = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3000/konser')
    konser.value = res.data
  } catch (err) {
    console.error('Gagal ambil data konser:', err)
  } finally {
    loading.value = false
  }
})

// Fungsi pesan tiket
const pesanTiket = async (konser) => {
  try {
    const tiketBaru = {
      id: crypto.randomUUID(), // Biar unik
      konserId: konser.id,
      judul: konser.judul,
      tanggal: konser.tanggal,
      harga: konser.harga,
      waktuBeli: new Date().toISOString()
    }

    await axios.post('http://localhost:3000/tiket', tiketBaru)
    alert('Tiket berhasil dipesan!')
  } catch (err) {
    console.error('Gagal pesan tiket:', err)
    alert('Gagal memesan tiket')
  }
}
</script>
