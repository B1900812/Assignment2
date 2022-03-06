<template>
  <div class="app-container" style="height: 80%;">
    <el-form>
      <el-form-item>
        <h1>Add New Aid Applicant</h1>
      </el-form-item>
      <el-form-item>
        <el-input type="text" v-model="useless.fn" placeholder="FULL NAME"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="text" v-model="useless.icp" placeholder="IC/Password Number"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="text" v-model="useless.fulla" placeholder="FULL Address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="text" v-model="useless.hhi" placeholder="House Hold Income"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="text" v-model="useless.ai" placeholder="Addition Information"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { defineComponent, reactive,toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state=reactive({
      useless:{}
    })

    return {
      ...toRefs(state)
    }
  },
})
</script>

<style scoped>
.app-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.item-card{
  width: 200px;
  height: 230px;
  align-items: center;
  border: 1px solid black;
}
.card-cover{
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background: linear-gradient(40deg, transparent 49.5%, black 48.5%, black 50.5%, transparent 51.5%);
  background: linear-gradient(80deg, transparent 49.5%, black 48.5%, black 50.5%, transparent 51.5%);
}
.card-desc{
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid black;
}
</style>