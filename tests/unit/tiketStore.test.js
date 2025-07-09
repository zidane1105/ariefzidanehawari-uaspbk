import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useTiketStore } from '@/stores/tiketStore'

describe('Tiket Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('bisa nambah tiket', () => {
    const store = useTiketStore()
    const tiket = { judul: 'Konser Coldplay', harga: 500000 }
    store.tambahTiket(tiket)

    expect(store.daftarTiket[0]).toEqual(tiket)
  })

  it('bisa hapus semua tiket', () => {
    const store = useTiketStore()
    store.tambahTiket({ judul: 'Konser A', harga: 100000 })
    store.hapusSemua()

    expect(store.daftarTiket.length).toBe(0)
  })
})
