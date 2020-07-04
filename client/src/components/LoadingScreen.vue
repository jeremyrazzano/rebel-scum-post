<template>
  <q-dialog :value="loading">
    <q-card>
      <div v-show="l[0]" class="text-weight-bolder">Loading...</div>
      <div v-show="l[1]" class="text-weight-bold">Loading...</div>
      <div v-show="l[2]" class="text-weight-medium">Loading...</div>
      <div v-show="l[3]" class="text-weight-regular">Loading...</div>
      <div v-show="l[4]" class="text-weight-light">Loading...</div>
      <div v-show="l[5]" class="text-weight-thin">Loading...</div>
    </q-card>
  </q-dialog>
</template>

<script>
let interval = null
let counter = 0

export default {
  props: {
    loading: Boolean
  },
  data () {
    return {
      l: [false, false, false, false, false, false]
    }
  },
  watch: {
    loading (val) {
      if (val) {
        if (interval) clearInterval(interval)
        counter = 0
        interval = setInterval(() => {
          this.$set(this.l, counter, true)
          if (counter === 5) {
            for (let i = 0; i < 6; i++) {
              this.$set(this.l, i, false)
            }
            counter = 0
          } else counter++
        }, 100)
      } else {
        for (let i = 0; i < 6; i++) {
          this.$set(this.l, i, false)
        }
        clearInterval(interval)
        counter = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
