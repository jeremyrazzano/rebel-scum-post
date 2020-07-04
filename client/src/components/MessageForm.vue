<template>
  <q-card style="width: 100%;">
    <div class="row">
      <div class="col">
        <q-input oulined type="text" v-model="message" />
      </div>
      <div class="col-auto">
        <q-btn @click="send" label="send" />
      </div>
    </div>
  </q-card>
</template>

<script>
export default {
  name: 'MessageForm',
  data () {
    return {
      message: ''
    }
  },
  methods: {
    send () {
      this.$emit('send', this.message)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
