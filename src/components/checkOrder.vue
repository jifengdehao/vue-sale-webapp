<template>
  <div>
    <v-dialog :isShow="isShowCheck" @closeDialog="checkStatus">
      请检查你的支付状态
      <div class="button" @click="checkStatus">支付成功</div>
      <div class="button" @click="checkStatus">支付失败</div>
    </v-dialog>
    <v-dialog :isShow="isShowSuccess" @closeDialog="close">购买成功</v-dialog>
    <v-dialog :isShow="isShowFail" @closeDialog="close">购买失败</v-dialog>
  </div>
</template>

<script>
  import vDialog from './dialog'
  export default {
    props: {
      isShowCheck: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        isShowSuccess: false,
        isShowFail: false
      }
    },
    components: {
      vDialog
    },
    methods: {
      close () {
        this.$router.push({path: '/orderlist'})
      },
      checkStatus () {
        this.isShowSuccess = true
        // this.isShowFail = true
        this.$emit('closeCheck')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"></style>
