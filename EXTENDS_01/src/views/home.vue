<template>
    <main style="height:600px">
      <section class="main-item">
        <section class="item-section">
          Hi,Administrator {{name}},you are now managing,Help Aid Organization
        </section>
      </section>
      <section class="main-item">
        <section class="item-card">
          <section class="card-cover">
            <div style="width:100%;height:80%;"></div>
          </section>
          <section class="card-desc">Edit Existing Aid Application</section>
        </section>
        <section class="item-card" @click="toNewApplication">
          <section class="card-cover">
            <img style="width:100%;height:100%;" src="/icons/plus.jpg" alt="">
          </section>
          <section class="card-desc">Add New Aid Application</section>
        </section>
        <section class="item-card">
          <section class="card-cover">
            <div style="width:100%;height:100%;"></div>
          </section>
          <section class="card-desc">Edit Profile</section>
        </section>
      </section>
    </main>
</template>
<script>
import { defineComponent, onMounted, reactive,toRefs } from 'vue'
import router from '../router'
import { localGet } from '../utils'

export default defineComponent({
  setup() {
    const state=reactive({
      name: ''
    })
    onMounted(()=>{
      state.name=localGet("userInfo").username
    })
    const toNewApplication=()=>{
      // window.localStorage.setItem("isLogin",false)
      router.push('/registerNew')
    }
    return {
      toNewApplication,
      ...toRefs(state)
    }
    
  },
})
</script>

<style scoped>
.item-card{
  width: 100%;
  height: 100%;
  align-items: center;
  border: 1px solid black;
}
.item-section{
  border: 1px solid black;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.item-tips{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.card-cover{
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-image: url('/icons/pain.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
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
main{
  width: 100%;
  height: 80%;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
}

.main-item{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

</style>
