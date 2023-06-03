<template>

  <div class="wrap">
    <el-row >
      <h4 style="float: left">CollabEdge无人超市库存管理</h4>
      <el-input class="el-input"></el-input><el-button round class="el-button"><el-icon><Search/></el-icon>搜索</el-button>
      <el-button class="add" round type="info"><el-icon><Plus/></el-icon>新增商品</el-button>
    </el-row>

    <el-menu default-active="1"
             class="el-menu-demo"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b"
             mode="horizontal">
      <el-menu-item index="1" >全部库存</el-menu-item>
      <el-menu-item index="2">饮品</el-menu-item>
      <el-menu-item index="3">办公</el-menu-item>
      <el-menu-item index="4">食品</el-menu-item>
      <el-menu-item index="5">服装</el-menu-item>
      <el-menu-item index="6">水果</el-menu-item>
      <el-menu-item index="7">卫生</el-menu-item>
    </el-menu>
    <el-table :stripe="true" :data="this.list" class="el-table" :key="this.flushTable" table-layout="fixed">
      <el-table-column prop="name" label="商品" ></el-table-column>
      <el-table-column prop="stock_number" label="库存" ></el-table-column>
      <el-table-column prop="price" label="单价(元）" ></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="info" size="small" @click="addTest(scope.row)">补货</el-button>
        </template>

      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {Plus, Search} from "@element-plus/icons-vue";
import {edgeAxios} from "@/axios";
import Data from "@/views/Data";

export default {
  name: 'HomeView',
  components: {
    Plus,
    Search

  },
  mounted() {
    this.timer = setInterval(this.getList, 2500)
    // this.initOffline()
  },
  data() {
    return {
      list: [],
      timer: "",
      flushTable: 0,
    }
  },
  beforeUnmount() {
    window.clearInterval(this.timer.value);
  },
  methods: {
    initOffline(){
      this.list = Data.data
    },
    getList(){
      edgeAxios.post('list-item-stock', {}).then(res => {
        console.log("收到列表", res.data)
        this.list = res.data.item_stock_set
        this.flushTable++;
      })
    },
    addTest(row){
      console.log(row)
    }
  }
}
</script>

<style>
.wrap{
  margin-right: auto;
  margin-left: auto;
  margin-top: 3%;
  width: 100%;
  height: 100%;
}
.el-table{
  margin-top: 1%;
  width: 100%;
}
.el-input{
  margin-left: 3%;
  margin-top: auto;
  margin-bottom: auto;
  height: 3%;
  width: 20%;
  float: left;
}
.el-button {
  margin-bottom: auto;
  margin-top: auto;
  margin-left: 1%
}
.add {
  float: right;
  margin-bottom: auto;
  margin-top: auto;
}
</style>
