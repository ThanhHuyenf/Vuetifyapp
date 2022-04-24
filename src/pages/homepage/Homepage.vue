<template>
  <div>
    <Header :title="title">
      <div slot="data">
        <Counter></Counter>
      </div>
    </Header>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Counter from "@/components/Counter";

export default {
  name: "Homepage",
  components: {Counter, Header},
  data() {
    return {
      title: "Trang chủ"
    }
  }
}
</script>

<style scoped>

</style>
