<template>
  <q-page class="q-pa-lg">
    <div class="row justify-center">
      <div class="col-auto">
        <div class="typewriter" style="white-space: pre;">
          {{ logo }}
        </div>
      </div>
    </div>
    <div class="row justify-center">
      <div v-if="!userName" class="col-auto">
        <div ref="console">
          <div class="delay typewriter">
            Waiting for user...
          </div>
        </div>
      </div>
      <div v-else class="col-auto">
        <div ref="chatWindow" style="width: 80vw; max-width: 500px;">
          <chat-room :messages="messages" :name="userName" />
          <message-form @send="send" />
        </div>
        <div class="col-auto">
          <q-space />
          <q-btn outlined @click="signOut">Sign Out</q-btn>
        </div>
      </div>
    </div>
    <!-- dialogs -->
    <user-login @login="login" :show="!userName" />
    <loading-screen :loading="loading" />
  </q-page>
</template>

<script>
import asciiArt from '../assets/ascii'
import loadingScreen from '../components/LoadingScreen'
import userLogin from '../components/UserLogin'
import chatRoom from '../components/ChatRoom'
import messageForm from '../components/MessageForm'

export default {
  name: 'PageIndex',
  components: {
    loadingScreen,
    userLogin,
    chatRoom,
    messageForm
  },
  props: {
    messages: Array
  },
  data () {
    const r = Math.floor(Math.random() * asciiArt.length)
    return {
      logo: asciiArt[r],
      loading: false,
      userName: '',
      userChatId: ''
    }
  },
  methods: {
    login (user) {
      this.userName = user
      this.$emit('connect', user)
    },
    send (msg) {
      this.$emit('send', {
        name: this.userName,
        message: msg
      })
    },
    logout () {
      this.$emit('disconncet')
      this.userName = ''
    }
  }
}
</script>

<style lang="sass" scoped>
.typewriter
  overflow: hidden
  white-space: nowrap
  margin: 0 auto
  animation: typing 1.0s steps(40, end)

@keyframes typing
  from { width: 0 }
  to { width: 100% }

.delay
  animation-delay: 1.0s

</style>
