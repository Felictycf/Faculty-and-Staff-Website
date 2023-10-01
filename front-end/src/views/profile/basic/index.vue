<template>
  <!-- <page-header-wrapper> -->
  <a-card :bordered="false">
    <template1 v-if="template == '1'" :userInfo="userInfo" :userList="userList" />
    <template2 v-if="template == '2'" :userInfo="userInfo" :userList="userList" />
    <template3 v-if="template == '3'" :userInfo="userInfo" :userList="userList" />
    <template4 v-if="template == '4'" :userInfo="userInfo" :userList="userList" />

    <!-- <a-descriptions title="退款申请">
      <a-descriptions-item label="取货单号">1000000000</a-descriptions-item>
      <a-descriptions-item label="状态">已取货</a-descriptions-item>
      <a-descriptions-item label="销售单号">1234123421</a-descriptions-item>
      <a-descriptions-item label="子订单">3214321432</a-descriptions-item>
    </a-descriptions>
    <a-divider style="margin-bottom: 32px" />
    <a-descriptions title="用户信息">
      <a-descriptions-item label="用户姓名">付小小</a-descriptions-item>
      <a-descriptions-item label="联系电话">18100000000</a-descriptions-item>
      <a-descriptions-item label="常用快递">菜鸟仓储</a-descriptions-item>
      <a-descriptions-item label="取货地址">浙江省杭州市西湖区万塘路18号</a-descriptions-item>
      <a-descriptions-item label="备注"> 无</a-descriptions-item>
    </a-descriptions>
    <a-divider style="margin-bottom: 32px" />

    <div class="title">退货商品</div>
    <s-table style="margin-bottom: 24px" row-key="id" :columns="goodsColumns" :data="loadGoodsData"> </s-table>

    <div class="title">退货进度</div>
    <s-table style="margin-bottom: 24px" row-key="key" :columns="scheduleColumns" :data="loadScheduleData">
      <template slot="status" slot-scope="status">
        <a-badge :status="status" :text="status | statusFilter" />
      </template>
    </s-table> -->
  </a-card>
  <!-- </page-header-wrapper> -->
</template>

<script>
import { STable } from '@/components'
import template1 from './template1.vue'
import template2 from './template2.vue'
import template3 from './template3.vue'
import template4 from './template4.vue'
import { login, getInfo, logout } from '@/api/login'
import storage from 'store'
import { ACCESS_TOKEN } from '@/store/mutation-types'

export default {
  components: {
    STable,
    template1,
    template2,
    template3,
    template4,
  },
  data() {
    return {
      template: '1',
      userInfo: {
        title: 'title',
      },
      userList: [],

      loadScheduleData: () => {
        return new Promise((resolve) => {
          resolve({
            data: [
              {
                key: '1',
                time: '2017-10-01 14:10',
                rate: '联系客户',
                status: 'processing',
                operator: '取货员 ID1234',
                cost: '5mins',
              },
              {
                key: '2',
                time: '2017-10-01 14:05',
                rate: '取货员出发',
                status: 'success',
                operator: '取货员 ID1234',
                cost: '1h',
              },
              {
                key: '3',
                time: '2017-10-01 13:05',
                rate: '取货员接单',
                status: 'success',
                operator: '取货员 ID1234',
                cost: '5mins',
              },
              {
                key: '4',
                time: '2017-10-01 13:00',
                rate: '申请审批通过',
                status: 'success',
                operator: '系统',
                cost: '1h',
              },
              {
                key: '5',
                time: '2017-10-01 12:00',
                rate: '发起退货申请',
                status: 'success',
                operator: '用户',
                cost: '5mins',
              },
            ],
            pageSize: 10,
            pageNo: 1,
            totalPage: 1,
            totalCount: 10,
          })
        }).then((res) => {
          return res
        })
      },
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        processing: '进行中',
        success: '完成',
        failed: '失败',
      }
      return statusMap[status]
    },
  },
  computed: {
    title() {
      // return this.$route.meta.title
      return '首页'
    },
  },

  mounted() {
    const query = this.$route.query
    // if (query.template) {
    //   this.template = query.template
    // }

    getInfo(query.id).then((res) => {
      this.userInfo = res.userInfo
      this.template = res.userInfo.template
    })

    this.getUserList()
  },

  methods: {
    getUserList() {
      this.$http.get('/api/users/list', {}).then((res) => {
        this.userList = res.list || []
        // this.userList = this.userList.filter((item) => item.id !== storage.get(ACCESS_TOKEN))
      })
    },
  },
}
</script>

<style lang="less" scoped>
.title {
  color: rgba(0, 0, 0, 0.85);
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
}
</style>
