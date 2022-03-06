<template>
  <div class="app-container" style="height:80%">
    <h1>Welcome to Provider System</h1>
    <el-carousel style="width:500px;" indicator-position="outside">
    <el-carousel-item>
      <img src="/img/p1.jpg"  alt="">
    </el-carousel-item>
    <el-carousel-item>
      <img src="/img/p2.jpg" alt="">
    </el-carousel-item>
  </el-carousel>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    
  },
})
</script>
<style scoped>
img{
  width: 100%;
  height: 100%;
}
.app-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>