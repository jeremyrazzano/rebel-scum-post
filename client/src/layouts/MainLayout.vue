<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-grey-10 text-orange">
        <q-toolbar-title>
          Rebel Scum Post
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view
        @connect="connect"
        @disconnect="disconnect"
        @send="send"
        :messages="messages"
      />
    </q-page-container>
  </q-layout>
</template>

<script>
import { uid } from 'quasar'
export default {
  name: 'MainLayout',
  data () {
    return {
      chatServer: null,
      messages: []
    }
  },
  methods: {
    connect ($event) {
      this.messages = []
      this.chatServer = window.io('http://localhost:3000')
      this.chatServer.emit('login', {
        user: $event,
        timestamp: Date.now()
      })
      // Add listener
      this.chatServer.on('message', (msg) => {
        this.messages.push(msg)
      })
    },
    disconnect ($event) {
      this.chatServer.close()
    },
    send ($message) {
      this.chatServer.emit('message', {
        ...$message,
        id: uid(),
        timestamp: Date.now()
      })
    }
  }
}
</script>
