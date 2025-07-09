<template>
  <div class="max-w-3xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-center text-indigo-600 mb-8">
      🎟️ Tiket Saya
    </h1>

    <div v-if="loading" class="text-center text-gray-500">Memuat tiket...</div>
    <div v-else-if="tiketStore.daftarTiket.length === 0" class="text-center text-gray-400">
      Belum ada tiket yang dibeli.
    </div>

    <ul class="space-y-4">
      <li
        v-for="t in tiketStore.daftarTiket"
        :key="t.id"
        class="bg-white shadow-md rounded-xl p-5 flex items-center justify-between hover:shadow-lg transition"
      >
        <div>
          <h2 class="text-lg font-semibold text-gray-800">{{ t.judul }}</h2>
          <p class="text-sm text-gray-500">📅 {{ t.tanggal }}</p>
          <p class="text-sm text-green-600 font-medium">Rp{{ t.harga.toLocaleString() }}</p>
        </div>
        <button
          @click="hapusTiket(t.id)"
          class="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
        >
          ❌ Hapus
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useTiketStore } from '../stores/tiketStore'

const tiketStore = useTiketStore()
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3000/tiket')
    tiketStore.daftarTiket = res.data
  } catch (err) {
    console.error('Gagal ambil tiket:', err)
  } finally {
    loading.value = false
  }
})

const hapusTiket = async (id) => {
  try {
    await axios.delete(`http://localhost:3000/tiket/${id}`)
    tiketStore.daftarTiket = tiketStore.daftarTiket.filter(t => t.id !== id)
    alert('Tiket berhasil dihapus!')
  } catch (error) {
    console.error('Gagal hapus tiket:', error)
    alert('Gagal menghapus tiket')
  }
}
</script>
