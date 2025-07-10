<template>
  <div class="max-w-7xl mx-auto px-4 py-8 bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-bold text-center text-indigo-700 mb-10">
       Pilih Konser Favoritmu
    </h1>

    <div v-if="loading" class="text-center text-gray-500">Memuat konser...</div>

    <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <div
        v-for="k in konser"
        :key="k.id"
        class="bg-white rounded-lg border border-gray-200 shadow-sm p-4 hover:shadow-md transition-all duration-200 flex flex-col items-center text-center"
      >
        <div class="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-3xl mb-3">
          
        </div>
        <h2 class="text-sm font-semibold text-gray-800 mb-1">{{ k.judul }}</h2>
        <p class="text-xs text-gray-500 mb-1">📅 {{ k.tanggal }}</p>
        <p class="text-xs text-green-600 font-semibold mb-3">Rp{{ k.harga.toLocaleString() }}</p>
        <button
          @click="pesanTiket(k)"
          class="text-xs bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded-full transition-all"
        >
          Pesan
        </button>
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
    const res = await axios.get('https://686f23d791e85fac429fe12e.mockapi.io/konser')
    konser.value = res.data
  } catch (err) {
    console.error('Gagal ambil data konser:', err)
  } finally {
    loading.value = false
  }
})

const pesanTiket = async (konser) => {
  try {
    const tiketBaru = {
      id: crypto.randomUUID(),
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
