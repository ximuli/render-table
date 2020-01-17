<template>
  <div id="app">
    <render-table style="max-width: 800px; margin: 200px auto 0;" :tableSource="tableSource" :data="tableData"
      :columns="columns" :total="total" :current-page.sync="tableParams.pageIndex" :page-size="tableParams.pageSize" />
    <!-- @current-change="handleCurrentChange" @size-change="handleSizeChange" @selection-change="handleSelectionChange" -->
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        tableSource: {
          border: true
        },
        tableParams: {
          pageSize: 10,
          pageIndex: 1
        },
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        columns: [{
          label: '日期',
          prop: 'date'
        }, {
          label: '姓名',
          prop: 'name'
        }, {
          label: '地址',
          prop: 'address'
        }],
        total: 4
      }
    },
    methods: {
      handleCurrentChange(val) {
        this.tableParams.pageIndex = val
      }
    },
  }
</script>

<style lang="scss">
</style>