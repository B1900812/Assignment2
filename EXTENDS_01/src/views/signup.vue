<template>
  <div class="app-container">
    <div class="content">
      <el-card style="margin-left: 20px">
        <template #header>
          <h2>Welcome to Aid provider System</h2>
        </template>
        <el-form :inline="false">
            <el-form-item label="USERNAME">
              <el-input v-model="rightForm.username" type="text"></el-input>
            </el-form-item>
            <el-form-item label="PASSWORD">
              <el-input v-model="rightForm.password" type="text"></el-input>
            </el-form-item>
          </el-form>
      </el-card>
    </div>
    <div style="margin:auto">
      <el-button size="large" @click="handleLogin" type="primary">Log In</el-button>
    </div>
      
  </div>
</template>
<script>
import { ElMessage } from 'element-plus'
import { defineComponent, onMounted, reactive,toRefs } from 'vue'
import router from '../router'
import { localGet, localSet } from '../utils'

export default defineComponent({
  setup() {
    const state=reactive({
      leftForm:{},
      rightForm:{},
      userArr: []
    })
    onMounted(()=>{
      state.userArr=localGet('userList')
    })
    const handleLogin=()=>{
      let isPass=false;
      let tmp=''
      state.userArr.forEach((element)=>{
        if(element.username===state.rightForm.username&&element.password===state.rightForm.password){
          tmp=element
          isPass=true
        }
      })
      if(isPass){
        localSet("isLogin",true)
        localSet("userInfo",tmp)
        router.push("/home")
      }else{
        ElMessage.info("please input your username and password!")
      }
      
    }
    return {
      ...toRefs(state),
      handleLogin
    }
  },
})
</script>

<style scoped>
.app-container {
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
}
.content {
  margin: auto;
  display: flex;
  flex-direction: row;
}
</style>
