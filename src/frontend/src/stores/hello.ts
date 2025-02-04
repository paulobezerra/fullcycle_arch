import { getHelloResource } from '@/services/HelloResources'
import { defineStore } from 'pinia'

export const useHelloStore = defineStore('hello', {
  state: () => ({ message: '' }),
  actions: {
    async fetchHello() {
      const result = await getHelloResource()
      this.message = result.message
    }
  },
  getters: {
    getMessage: (state) => {
      return state.message
    }
  }
})
