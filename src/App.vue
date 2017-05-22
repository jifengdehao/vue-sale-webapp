<template>
  <div id="app" @click="closeSelection">
    <v-header @openDialog="showDialog" @logout="logout" :username="name"></v-header>
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <v-footer></v-footer>
    <v-dialog :isShow="isShowLogin" @closeDialog="closeDialog('isShowLogin')">
      <login @login="loginSuccess"></login>
    </v-dialog>
    <v-dialog :isShow="isShowSignup" @closeDialog="closeDialog('isShowSignup')">
      <signup></signup>
    </v-dialog>
    <v-dialog :isShow="isShowAbout" @closeDialog="closeDialog('isShowAbout')">
      about
    </v-dialog>
  </div>
</template>

<script>
import vHeader from './components/head'
import vFooter from './components/foot'
import vDialog from './components/dialog'
import Login from './components/login'
import Signup from './components/signup'
import {eventHub} from './eventHub'
export default {
  name: 'app',
  components: {
    vHeader,
    vFooter,
    vDialog,
    Login,
    Signup
  },
  data () {
    return {
      isShowLogin: false,
      isShowSignup: false,
      isShowAbout: false,
      name: ''
    }
  },
  methods: {
    showDialog (attr) {
      this[attr] = true
    },
    closeDialog (attr) {
      this[attr] = false
    },
    loginSuccess (user) {
      this.name = user.name
      this.closeDialog('isShowLogin')
    },
    logout () {
      this.name = ''
    },
    closeSelection () {
      eventHub.$emit('closeList')
    }
  }
}
</script>

<style>
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-size: 14px;
  color: #444;
}
.hr {
  height: 1px;
  width: 100%;
  background: #ddd;
}
.button {
  display: inline-block;
  padding: 10px 20px;
  background: #4fc08d;
  color: #fff;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  display: inline-block;
  width: 100px;
  font-size: 16px;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  padding: 0 10px;
  width: 200px;
  height: 30px;
  line-height: 30px;
  vertical-align: middle;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  padding-left: 15px;
  color: red;
}
</style>
