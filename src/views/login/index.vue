<template>
  <div id="login">
      <div class="login-box">
          <van-form @submit="onSubmit">
                <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="请输入用户名"
                    :rules="[{ required: true}]"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="请输入密码"
                    :rules="[{ required: true}]"
                />
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">
                    提交
                    </van-button>
                </div>
            </van-form>
      </div>
  </div>
</template>

<script>
import Vue from 'vue';

import { Form } from 'vant';

Vue.use(Form);
import { Field,button,cell } from 'vant';
Vue.use(Field);
Vue.use(button);
Vue.use(cell);
export default {
    name:'login',
    data(){
        return{
            username:'',
            password:'',
            sms:''
        }
    },
    methods:{
        onSubmit(){
            console.log('onSubmit')
        }
    }
}
</script>

<style scoped>
#login{
    margin-top:78px;
}
.van-cell{
    background-color:rgb(235, 189, 189);
     margin-top:20px;
}
</style>