<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="会员信息" name="first"><Userinfo :user-id="userId" /></el-tab-pane>
    <el-tab-pane label="计划信息" name="second"><Planinfo :user-id="userId" /></el-tab-pane>
    <!--<el-tab-pane label="回访记录" name="third"><ReturnVisit :user-id="userId" /></el-tab-pane>-->
  </el-tabs>
</template>
<script>
import userinfo from './userinfo/index.vue'
// import returnvisit from './returnvisit/index.vue'
import planinfo from './planinfo/index.vue'
export default {
  name: 'Detailinfo',
  components: {
    'Userinfo': userinfo,
    'Planinfo': planinfo
  },
  data() {
    return {
      activeName: 'first',
      userId: 0
    }
  },
  created() {
    this.userId = this.$route.params.userId
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
