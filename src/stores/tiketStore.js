import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTiketStore = defineStore('tiket', () => {
  const daftarTiket = ref([])

  const tambahTiket = (tiketBaru) => {
    daftarTiket.value.push(tiketBaru)
  }

  const hapusSemua = () => {
    daftarTiket.value = []
  }

  return {
    daftarTiket,
    tambahTiket,
    hapusSemua
  }
})
