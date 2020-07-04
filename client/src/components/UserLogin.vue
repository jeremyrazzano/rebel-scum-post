<template>
  <q-dialog :value="show" persistent>
    <q-card style="width: 50%; max-width: 300px;">
      <q-bar>Log In</q-bar>
      <q-card-section>
        <q-input type="text" stack-label label="Enter Name" v-model="name" outlined>
          <template v-slot:after>
            <q-btn round flat icon="las la-grin-stars" @click="signIn" />
          </template>
        </q-input>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'UserLogin',
  props: {
    show: Boolean
  },
  data () {
    return {
      name: ''
    }
  },
  methods: {
    signIn () {
      console.log('hello')
      if (this.name !== '') this.$emit('login', this.name)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
