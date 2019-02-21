<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script>
// _c 是 /src/components 的备注名
import HelloWorld from '_c/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
