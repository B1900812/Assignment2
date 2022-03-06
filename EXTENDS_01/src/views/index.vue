<template>
  <div style="height:700px">
    <Header style="border-bottom:1px solid black" />
    <router-view />
    <footer>
      <h1>@All rights by Aid Provider System 2022</h1>
    </footer>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import Header from "../components/Header.vue"
export default defineComponent({
  components:{
    Header
  },
  setup() {
    const logout=()=>{
      console.log("logout")
    }
    return {
      logout
    }
  },
})
</script>
<style scoped>
footer{
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top: 1px solid black;
}
h1{
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
