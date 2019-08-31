<template>
  <div class="app-container">
    <el-table
      :key="tableKey"
      :data="planDetailInfos"
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
        width="50"
      />
      <el-table-column label="执行单号" width="180px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.orderNo }}</span>
        </template>
      </el-table-column>
      <el-table-column label="交易类型" align="center" width="80">
        <template slot-scope="scope">
          <span :style="'color:'+(scope.row.planType=='消费'?'#96E180':'#66B1FF') + ';'">{{ scope.row.planType }}</span>
        </template>
      </el-table-column>
      <el-table-column label="金额" align="center" width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.money }}</span>
        </template>
      </el-table-column>
      <el-table-column label="用户手续费" align="center" width="100">
        <template slot-scope="scope">
          <span >{{ scope.row.userRateFee }}</span>
        </template>
      </el-table-column>
      <el-table-column label="管卡手续费" align="center" width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.gkRateFee }}</span>
        </template>
      </el-table-column>
      <el-table-column label="通道手续费" align="center" width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.aisleRateFee }}</span>
        </template>
      </el-table-column>
      <el-table-column label="计划执行时间" align="center" width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.planDate }}</span>
        </template>
      </el-table-column>
      <el-table-column label="执行状态" align="center" width="100">
        <template slot-scope="scope">
          <span :style="'color:'+(scope.row.planStatus=='已消费' || scope.row.planStatus=='已还款'?'#96E180':'#FF0000') + ';'">{{ scope.row.planStatus }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="150" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button v-show="row.logString != null" type="primary" size="mini" @click="showResponse(row)">
            查看响应
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="响应报文"
      :visible.sync="dialogVisible"
      width="30%">
      <pre>{{ jsonStr }}</pre>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { planDetailInfoList } from '@/api/plan'

export default {
  name: 'Plandetail',
  data() {
    return {
      planDetailInfos: [],
      tableKey: 0,
      listQuery: {
        condition: {
          mobile: null
        }
      },
      jsonStr: '',
      dialogVisible: false
    }
  },
  mounted() {
    this.loadPlanInfos()
  },
  methods: {
    handleChange(val) {
    },
    loadPlanInfos() {
      const planNo = this.$route.params.planNo
      if(planNo !== null){
        planDetailInfoList(planNo).then(response => {
          this.planDetailInfos = response.data
        })
      }
    },
    showResponse(row){
      this.jsonStr = row.logString
      this.dialogVisible = true
    }
  }
}
</script>
