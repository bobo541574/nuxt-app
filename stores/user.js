import { defineStore } from 'pinia'

export const useAuth = defineStore('user', {
  state: () => {
    return { 
        user: null,
        token: "Bearer 14000|qrdUP0I2N6ri6leFTy4vNOfHDAaJ1TJVvw9kGSEj",
        apiKey: '2412671913148938913489',
        count: 0, 
    }
  },
  getters: {
    getUser: state => state.user,
    getToken: state => state.token,
  },

  actions: {
    increment() {
      this.count++
    },
  },
})