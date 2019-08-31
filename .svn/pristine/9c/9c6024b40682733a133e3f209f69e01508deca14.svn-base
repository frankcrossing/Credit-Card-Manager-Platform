<template>
  <div class="app-container">
    <div class="filter-container">
      <el-form ref="form" :inline="true" label-width="90px">
        <el-form-item label="反馈日期：">
        <el-date-picker
            v-model="dateRange"
            size="small"
            type="daterange"
            :picker-options="pickerOptions"
            style="width: 255px;"
          />
          <el-button size="small" type="success" plain icon="el-icon-search" @click="getList">搜索</el-button>
        </el-form-item>
      </el-form>
      <el-row>
        <el-button
          v-waves
          class="filter-item"
          type="primary"
          @click="handleDelete"
        >
          删除
        </el-button>
      </el-row>
    </div>
    <el-table
      :key="tableKey"
      :data="list"
      border
      fit
      highlight-current-row
      @selection-change="addRow"
    >
      <el-table-column
        type="selection"
        prop="index"
        width="30"
        align="center"
      >
      </el-table-column>
      <el-table-column type="index" label="序号" align="center" width="80">
        <template scope="scope">
          <span>{{ (listQuery.pageNum - 1) * listQuery.pageSize + scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="用户手机" width="120px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.mobile }}</span>
        </template>
      </el-table-column>
      <el-table-column label="反馈内容" width="650px" align="left">
        <template slot-scope="scope">
          <span>{{ scope.row.memo }}</span>
        </template>
      </el-table-column>
      <el-table-column label="添加时间" width="200px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime }}</span>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.pageNum" :limit.sync="listQuery.pageSize" @pagination="getList" />
  </div>
</template>
<script>
import { pagedUserFeedback, deleteUserFeedback } from '@/api/user'
import { mapGetters } from 'vuex'
import waves from '@/directive/waves'
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination'
import { MessageBox } from 'element-ui'

export default {
  name: 'Feedback',
  components: { Pagination },
  directives: { waves },
  data() {
    return {
      dateRange: [],
      selected: [],
      selectedId: [],
      checked: [],
      tableKey: 0,
      list: null,
      total: 0,
      listQuery: {
        pageNum: 1,
        pageSize: 20,
        condition: {
          manageuserId: 0,
          startDate: '',
          endDate: ''
        }
      },
      temp: {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        type: '',
        status: 'published'
      },
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
    }
  },
  computed: {
    ...mapGetters([
      'managerId'
    ])
  },
  created() {
    this.initData()
    this.getList()
  },
  methods: {
    addRow(val) {
      this.selectedId = []
      for(var i =0; i< val.length ; i ++) {
        this.selectedId.push(val[i].id);
      }
    },
    initData() {
      var now = new Date()
      this.dateRange[0] = now
      this.dateRange[1] = now
    },
    checkBoundaryStart() {
      if (this.dateRange['startTime'] > this.dateRange['endTime']) {
        this.dateRange['startTime'] = this.dateRange['endTime']
      }
    },
    checkBoundaryEnd() {
      if (this.dateRange['endTime'] < this.dateRange['startTime']) {
        this.dateRange['endTime'] = this.dateRange['startTime']
      }
    },
    getList() {
      this.listQuery.condition.manageuserId = this.managerId
      this.listQuery.condition.startDate = parseTime(this.dateRange[0], '{y}{m}{d}')
      var endDate = new Date(this.dateRange[1])
      var tomorrow = new Date(endDate.setDate(endDate.getDate() + 1))
      this.listQuery.condition.endDate = parseTime(tomorrow, '{y}{m}{d}')
      pagedUserFeedback(this.listQuery).then(response => {
        if (response.code == 20000) {
          this.list = response.data.list
          this.total = response.data.total
        }
      })
    },
    handleDelete() {
      if (this.selectedId.length == 0) {
        MessageBox.alert('请选择数据删除', '错误')
      } else {
        MessageBox.confirm('是否删除选中的反馈信息？', '确认删除').then(() => {
          this.delete()
        })
      }
    },
    delete() {
      deleteUserFeedback(this.selectedId)
      var temp = this.list;
      
      this.getList()
      
      if (temp != this.list) {
        MessageBox.alert('成功删除', '成功')
        this.selected = []
        this.selectedId = []
      }

    }
  }
}
</script>
