<template>
  <div class="dashboard-container">
    <panel-group ref="panelgroup1" @handleSetLineChartData="handleSetLineChartData" />
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { parseTime } from '@/utils/index'

import LineChart from './components/LineChart'
import PanelGroup from './components/PanelGroup'
const lineChartData = {
  dayMoneyData: {
    custNameArr: [],
    timeArr: [],
    lineStackSeries: []
  },
  dayNumData: {
    custNameArr: [],
    timeArr: [],
    lineStackSeries: []
  },
  monthMoneyData: {
    custNameArr: [],
    timeArr: [],
    lineStackSeries: []
  },
  monthNumData: {
    custNameArr: [],
    timeArr: [],
    lineStackSeries: []
  }
}

export default {
  name: 'Dashboard',
  components: {
    PanelGroup,
    LineChart
  },
  data() {
    return {
      lineChartData: lineChartData.monthNumData
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles',
      'managerId'
    ])
  },
  created() {
    this.convert()
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    },
    convert() {
      var now = new Date()
      var transMonth = parseTime(now, '{y}{m}')
      var transDay = parseTime(now, '{y}{m}{d}')
    },
    loadMonthLineStackOption(numData, moneyData) {
      lineChartData.monthNumData = numData.lineStackData
      lineChartData.monthMoneyData = moneyData.lineStackData
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
