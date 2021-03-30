<template>
 <el-dialog title="收货地址" v-model="dialogTableVisible">
  <el-table :data="gridData">
    <el-table-column property="date" label="日期" width="150"></el-table-column>
    <el-table-column property="name" label="姓名" width="200"></el-table-column>
    <el-table-column property="address" label="地址"></el-table-column>
  </el-table>
</el-dialog>
</template>

<script setup>
import { defineProps, reactive,} from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })

// console.log(router)
</script>

<style scoped>
a {
  color: #42b983;
}
</style>