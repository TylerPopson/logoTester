import type { Session } from 'inspector'
import { defineStore } from 'pinia'

export const userSessionStore = defineStore({
  id: 'userSession',
  state: () => ({
    session: null as Session | null,
  })
})