
<template>
    <div>
      <div>
        <form>
        <fieldset class="DivForm">
        <legend class="LoginInfo">登入資訊</legend>
          <div class='InputOpt'>
          帳號:<input type="text" name="name" v-model="loginname"><br/>
          密碼:<input type="password" v-model="loginpass">
          </div>
          <div class="btn">
            <input type="submit" value="登入" v-on:click="dologin">
            <input type="reset" value="重置" v-on:click="doreset">
          </div>
        </fieldset>
      </form>
      </div>
      <div>
        <p v-bind:class="{'textS':style1,'backS':style2}" v-on:click="changestyle" v-html="webmsg"></p>

      </div>
    </div>

</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      loginname: '',
      loginpass: '',
      webmsg: 'login page',
      style1: false,
      style2: true
    }
  },
  // created: function () {
  // },
  methods: {
    dologin: function () {
      if (this.loginname === '' || this.loginpass === '') {
        this.webmsg = '<p style="background-color:yellow;color:red;width:15%;height:5%;margin: 20px auto">內容不得為空</p>'
      } else {
        this.webmsg = '使用者帳號:' + this.loginname + '</br>' + '使用者密碼:' + this.loginpass
      }
    },
    doreset: function () {
      this.loginname = 'your-name'
      this.loginpass = 'your-password'
      this.webmsg = '------reset your data------'
    },
    changestyle: function () {
      this.style1 = !this.style1
      this.style2 = !this.style2
    }
  }
}
</script>

<style>
.DivForm{
  margin:50px auto;
  padding: 0px;
  color:black;
  font-size: larger;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  width: 40%;
  height: 60%;
  background:gainsboro;
  opacity: 0.7;
  border: solid 3px grey
}
.btn{
  margin:20px auto;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  font-size:larger
}
.LoginInfo{
  background-color: whitesmoke;
  border:solid 1px;
  border-radius: 20px;
  width:100px;
  height:30px;
}
.InputOpt{
  margin: 20px auto;
  line-height: 2;
}
.textS{
  color:darkviolet;
  text-decoration: underline darkcyan;
}
.backS{
  margin: 10px auto;
  border: dotted 0.5px cornflowerblue;
  background-color: lightblue;
  transform: scale(2.0);
  transition: .4s;
}

</style>
