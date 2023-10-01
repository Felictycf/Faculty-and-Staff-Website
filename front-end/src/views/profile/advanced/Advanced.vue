<template>
  <div class="template-choose">
    <h2 style="text-align: center">choose template</h2>
    <div class="row">
      <div class="col" :class="{ active: template === 1 }" @click="setTemplate(1)">
        <img src="@/assets/template1.jpg" />
      </div>
      <div class="col" :class="{ active: template === 2 }" @click="setTemplate(2)">
        <img src="@/assets/template2.jpg" />
      </div>
      <div class="col" :class="{ active: template === 3 }" @click="setTemplate(3)">
        <img src="@/assets/template3.jpg" />
      </div>
      <div class="col" :class="{ active: template === 4 }" @click="setTemplate(4)">
        <img src="@/assets/template4.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import { login, getInfo, logout } from '@/api/login'

export default {
  data() {
    return {
      template: -1,
      userInfo: {},
    }
  },

  mounted() {
    getInfo().then((res) => {
      this.template = Number(res.userInfo.template)
      this.userInfo = res.userInfo
    })
  },

  methods: {
    setTemplate(index) {
      this.template = index
      this.$http.post('/api/users/edit', { template: this.template, id: this.userInfo.id }).then((response) => {
        this.$router.push('/profile/basic')
      })
    },
  },
}
</script>

<style lang="less" scoped>
.template-choose {
  .row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .col {
      &.active {
        border: 3px solid goldenrod;
      }
      cursor: pointer;
      border: 1px solid rebeccapurple;
      overflow: auto;
      margin-top: 1%;
      flex-basis: 49.5%;
      height: 40vh;
      &:nth-child(2n + 1) {
        margin-right: 1%;
      }
      img {
        width: 100%;
      }
    }
  }
}
</style>