<template>
  <div class="app-container" style="height: 80%">
    <div class="sectionOne">
      <el-radio-group v-model="selectTwo" @change="handleRadioChange">
        <el-col :span="12">
          <el-radio label="1" size="large">As Organization</el-radio>
        </el-col>
        <el-col :span="12">
          <el-radio label="2" size="large">As Aid Application</el-radio>
        </el-col>
      </el-radio-group>

      <el-radio-group v-model="selectItem" >
        <el-col :span="12">
          <el-radio label="3" style="margin-right:50px" size="large">Exsiting Centre</el-radio>
        </el-col>
        <el-col :span="12">
          <el-radio label="4" size="large">New Centre</el-radio>
        </el-col>
      </el-radio-group>

      <el-row>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            {{ text }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                :command="item"
                v-for="(item, index) in textList"
                :key="index"
                >{{ item }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-row>
    </div>
    <div class="sectionTwo">
      <el-form>
        <el-form-item>
          <el-row>
            <el-col :span="12">
              <el-input
                placeholder="Centre Name"
                v-model="useless.cn"
                type="text"
              ></el-input>
            </el-col>
            <el-col :span="12">
              <el-input
                placeholder="Password"
                v-model="password"
                type="text"
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-col :span="12">
              <el-input
                placeholder="Centre Address"
                v-model="useless.ca"
                type="text"
              ></el-input>
            </el-col>
            <el-col :span="12">
              <el-input
                placeholder="Full Name"
                v-model="useless.fn"
                type="text"
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-col :span="12">
              <el-input
                placeholder="Staff ID"
                v-model="useless.si"
                type="text"
              ></el-input>
            </el-col>
            <el-col :span="12">
              <el-input
                placeholder="Email"
                v-model="useless.email"
                type="text"
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-col :span="12">
              <el-input
                placeholder="Username"
                v-model="username"
                type="text"
              ></el-input>
            </el-col>
            <el-col :span="12">
              <el-input
                placeholder="Job Title"
                v-model="useless.jt"
                type="text"
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-col :span="12">
              <el-input
                placeholder="Centre Name"
                v-model="useless.cn2"
                type="text"
              ></el-input>
            </el-col>
            <el-col :span="12">
              <el-input
                placeholder="Good Name"
                v-model="useless.gn"
                type="text"
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <div
          style="display: flex; flex-direction: row; justify-content: center"
        >
          <el-button @click="submit" style="width: 100%" type="primary"
            >Submit</el-button
          >
        </div>
        <div style="text-align: center">
          Already have an account? <span @click="login">Log in here</span>
        </div>
      </el-form>
    </div>
    <div class="sectionThree"></div>
  </div>
</template>
<script>
import { ElMessage } from "element-plus";
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import router from "../router";
import { localSet, localGet } from "../utils";
export default defineComponent({
  setup() {
    const state = reactive({
      selectItem: "",
      selectTwo:"",
      text: "ammy help aid organization",
      textList: [
        "ammy help aid organization",
        "benn aid organization",
        "tanny help aid organization",
      ],
      useless: {},
      username: "",
      password: "",
      userArr: [],
    });
    onMounted(() => {
      state.userArr = localGet("userList");
    });
    const login = () => {
      router.push("/signup");
    };
    const handleRadioChange = (label) => {
      console.log(label);
      if (label == 2) {
        router.push("/registerNew");
      }
    };
    const handleCommand = (command) => {
      state.text = command;
    };
    const submit = () => {
      let arr = localGet("userList");
      arr.push({ username: state.username, password: state.password });
      localSet("userList", arr);
      ElMessage.success("submit good please login");
      router.push("/signup");
    };
    return {
      login,
      submit,
      ...toRefs(state),
      handleCommand,
      handleRadioChange,
    };
  },
});
</script>

<style scoped>
.sectionOne {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sectionTwo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
