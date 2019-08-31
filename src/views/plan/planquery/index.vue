<template>
  <div class="app-container">
    <div class="filter-container">
      <el-form ref="form" :inline="true" label-width="90px">
        <el-form-item label="手机号：" label-width="80px">
          <el-input v-model="listQuery.condition.mobile" size="small" style="width: 115px;" class="filter-item" @keyup.enter.native="handleFilter" />
          <el-button size="small" type="success" plain icon="el-icon-search" @click="loadPlanInfos">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
      :key="tableKey"
      :data="planInfos"
      border
      fit
      highlight-current-row
      size="small"
      style="width: 100%;"
    >
      <el-table-column
        type="index"
        label="序号"
        prop="index"
        sortable="custom"
        align="center"
        width="80"
      />
      <el-table-column label="计划编号" width="180px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.planNo }}</span>
        </template>
      </el-table-column>
      <el-table-column label="银行卡" align="center" width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.cardNo }}</span>
        </template>
      </el-table-column>
      <el-table-column label="银行" align="center" width="160">
        <template slot-scope="scope">
          <span>{{ scope.row.bankName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="还款总金额" align="center" width="100">
        <template slot-scope="scope">
          <span >{{ scope.row.totalAmount }}</span>
        </template>
      </el-table-column>
      <el-table-column label="总花费金额" align="center" width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.tionAmount }}</span>
        </template>
      </el-table-column>
      <el-table-column label="手续费" align="center" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.totalFee }}</span>
        </template>
      </el-table-column>
      <el-table-column label="执行天数" align="center" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.planDays }}</span>
        </template>
      </el-table-column>
      <el-table-column label="执行次数" align="center" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.planCurrentNum }}</span>
        </template>
      </el-table-column>
      <el-table-column label="计划状态" align="center" width="100">
        <template slot-scope="scope">
          <span :style="'color:'+(scope.row.planStatus=='已完成'?'#96E180':'#FF0000') + ';'">{{ scope.row.planStatus }}</span>
        </template>
      </el-table-column>
      <el-table-column label="添加日期" align="center" width="160">
        <template slot-scope="scope">
          <span>{{ scope.row.addTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="150" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button type="primary" size="mini" @click="showDetailInfo(row)">
            详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { planInfoList } from '@/api/plan'

export default {
  name: 'Planquery',
  data() {
    return {
      planInfos: [],
      tableKey: 0,
      listQuery: {
        condition: {
          mobile: null
        }
      }
    }
  },
  mounted() {
  },
  methods: {
    handleChange(val) {
    },
    loadPlanInfos() {
      const mobile = this.listQuery.condition.mobile
      if(mobile !== null){
        planInfoList(this.listQuery.condition).then(response => {
          this.planInfos = response.data
        })
      }
    },
    showDetailInfo(row){
      const planNo = row.planNo
      this.$router.push({
        name: 'Plandetail',
        params: {
          planNo: planNo
        }
      })
    }
  }
}
</script>
