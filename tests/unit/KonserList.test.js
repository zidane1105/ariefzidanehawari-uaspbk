import { mount } from '@vue/test-utils'
import KonserList from '@/views/KonserList.vue'
import { describe, it, expect } from 'vitest'

describe('KonserList.vue', () => {
  it('nampilin judul halaman', () => {
    const wrapper = mount(KonserList, {
      global: {
        stubs: ['router-link']
      }
    })

    expect(wrapper.text()).toContain('Daftar Konser')
  })
})
