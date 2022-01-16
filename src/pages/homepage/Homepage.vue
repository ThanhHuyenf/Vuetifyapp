<template>
<div>
  <Header :title="title">

  </Header>
</div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "Homepage",
  components: {Header},
  data() {
    return {
      title: "Trang chủ"
    }
  }
}
</script>

<style scoped>

</style>
