<template>
  <div class="msgshow">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'FormTest',
  data () {
    return {
      message: 'Here is form message'
    }
  }
}
</script>

<style scoped>
.msgshow {
  background-color: coral;
}
</style>
