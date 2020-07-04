<template>
  <q-card style="width: 100%;">
    <q-card-section>
      <q-chat-message
        v-for="message in messages"
        :key="message.id"
        :name="message.name"
        :sent="message.name === name"
      >
        {{ message.message }}
      </q-chat-message>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'ChatRoom',
  props: {
    messages: Array,
    name: String
  }
}
</script>

<style lang="scss" scoped>
</style>
