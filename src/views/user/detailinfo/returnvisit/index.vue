<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      height="450">
      <el-table-column
        fixed
        prop="visitDate"
        label="回访时间"
        width="150">
      </el-table-column>
      <el-table-column
        prop="visitType"
        label="回访类型"
        width="120">
      </el-table-column>
      <el-table-column
        prop="visitContent"
        label="回访记录"
        width="450">
      </el-table-column>
      <el-table-column
        prop="visitor"
        label="回访人"
        width="120">
      </el-table-column>
    </el-table>
    <el-form ref="form" :model="form" label-width="80px" style="margin-top:20px;">
      <el-form-item label="记录描述">
        <el-input 
          type="textarea" 
          v-model="form.desc"
          :rows="5"
          style="width: 500px;"
        />
      </el-form-item>
      <el-form-item label="回访方式" style="display: inline-block;">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="客服回访" value="shanghai"></el-option>
          <el-option label="减免" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item style="display: inline-block;">
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'Returnvisit',
    data() {
      return {
        tableData: [{
          visitDate: '2016-05-03',
          visitType: '减免',
          visitContent: '放不放！--不放',
          visitor: '运营管理员'
        }, {
          visitDate: '2016-05-02',
          visitType: '审核回访',
          visitContent: '放不放！--不放',
          visitor: '运营管理员'
        }, {
          visitDate: '2016-05-04',
          visitType: '审核回访',
          visitContent: '放不放！--不放',
          visitor: '运营管理员'
        }, {
          visitDate: '2016-05-01',
          visitType: '减免',
          visitContent: '放不放！--不放',
          visitor: '运营管理员'
        }, {
          visitDate: '2016-05-08',
          visitType: '审核回访',
          visitContent: '放不放！--不放',
          visitor: '运营管理员'
        }, {
          visitDate: '2016-05-06',
          visitType: '减免',
          visitContent: '放不放！--不放',
          visitor: '运营管理员'
        }, {
          visitDate: '2016-05-07',
          visitType: '审核回访',
          visitContent: '放不放！--不放',
          visitor: '运营管理员'
        }],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
      }
    }
  }
</script>