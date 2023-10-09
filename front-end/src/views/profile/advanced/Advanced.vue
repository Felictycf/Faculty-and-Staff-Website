<!--第三个模板选择页面-->
<template>
  <div class="template-choose">
    <h2 style="text-align: center">choose Design</h2>
    <div class="row">
      <div class="col" :class="{ active: template === 1 }">
        <div class="header-container">
          <h3>Design 1</h3>
          <a href="#" @click.prevent="setTemplate(1)">More Detail</a>
        </div>

        <img src="@/assets/template1.jpg" @click="setTemplate(1)" />
      </div>
      <div class="col" :class="{ active: template === 2 }">
        <div class="header-container">
          <h3>Design 2</h3>
          <a href="#" @click.prevent="setTemplate(2)">More Detail</a>
        </div>
        <img src="@/assets/template2.jpg" @click="setTemplate(2)" />
      </div>
      <div class="col" :class="{ active: template === 3 }">
        <div class="header-container">
        <h3>Design 3</h3>
        <a href="#" @click.prevent="setTemplate(3)">More Detail</a>
        </div>
        <img src="@/assets/template3.jpg" @click="setTemplate(3)" />
      </div>
      <div class="col" :class="{ active: template === 4 }">

        <div class="header-container">
        <h3>Design 4</h3>
        <a href="#" @click.prevent="setTemplate(4)">More Detail</a>
        </div>
        <img src="@/assets/template4.jpg" @click="setTemplate(4)" />
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
.header-container {
  display: flex;
  align-items: center;  /* Vertically centers the text of both elements if they have different font sizes */
  justify-content: space-between; /* Adds space between the elements, ensuring they spread out */
}

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