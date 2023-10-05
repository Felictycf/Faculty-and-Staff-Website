<template>
  <div class="template">
    <a-row :gutter="2">
      <a-col :span="12">
        <h1>
          <b style="font-size: 30px">{{ userInfo.firstName }} {{ userInfo.lastName }}</b>
        </h1>

        <a-row>
          <a-col :span="12">
            <img :width="200" :src="userInfo.avatar" />

            <a-row>
<!--              <div class="date">{{ userInfo.date }}</div>-->
            </a-row>
          </a-col>
          <a-col :span="12">
            <a-row class="contact-info">
              <a-icon type="phone" />
              Phone: {{ userInfo.phone }}
            </a-row>
            <a-row class="contact-info">
              <a-icon type="mail" />
              Email: {{ userInfo.email }}
            </a-row>
            <a-row class="contact-info">
              <p>Office: {{ userInfo.location }}</p>
            </a-row>
          </a-col>

        </a-row>

        <a-row>
          <h2><a-icon type="book" /> Recent Highlights</h2>
          <div class="list">
            <div class="item" v-for="item in userInfo.highlights" :key="item.time">
              <div style="margin-bottom: 10px">
                <h3>{{ item.time }}</h3>
                <b>{{ item.description }}</b>
              </div>
            </div>
          </div>
        </a-row>
        <a-row>
          <h2><a-icon type="menu-unfold" /> Bio</h2>
<!--          <a-col :span="12">Degtees: {{ userInfo.degtees }}</a-col>-->
          <a-col :span="20">{{ userInfo.bio }}</a-col>
        </a-row>
        <br />
        <a-row>
          <h2><a-icon type="experiment" /> Fields of research</h2>
          <div>{{ userInfo.researchAreas }}</div>
        </a-row>
        <br />

        <a-row>
          <h2><a-icon type="read" /> Teaching</h2>
          <ul>
            <li v-for="(item, index) in userInfo.teaching" :key="item.time">
              {{ index + 1 }}. {{ item.description }}
            </li>
          </ul>
        </a-row>
      </a-col>

      <a-col :span="11" :offset="1">
        <h2><a-icon type="file-text" /> Publication</h2>
        <a-row v-for="(item, index) in currentPublications" :key="item.time">
          <b>{{ currentIndex +index + 1 }}</b>
          <img :src="item.img" alt="" width="100px" />

           {{item.title}}

          <br/>

          <b>{{ item.time }}</b>
          <div class="limited-description">{{ item.description }}</div>
          <a :href="item.pdf" :download="item.pdf">pdf</a>
        </a-row>
        <div class="button-container">
          <a-button @click="prevPublication" >
            <a-icon type="left" />
          </a-button>
          <a-button @click="nextPublication" >
            <a-icon type="right" />
          </a-button>
        </div>
        <a-row>
          <h2> <a-icon type="calendar" />Availability:</h2>
          <div class="availability-box">
            <p>{{ userInfo.avibilitiy }}</p>
          </div>
        </a-row>

      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
      currentIndex: 0,
    }
  },
  computed: {
    currentPublications() {
      return this.userInfo.publications.slice(this.currentIndex, this.currentIndex + 3);
    },
    // ...其他计算属性...
  },

  props: {
    userInfo: {
      type: Object,
      default: () => ({}),
    },
    userList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    nextPublication() {
      if (this.currentIndex + 3 < this.userInfo.publications.length) {
        this.currentIndex += 3;
      } else {
        this.currentIndex = 0; // 从头开始
      }
    },
    prevPublication() {
      if (this.currentIndex > 0) {
        this.currentIndex -= 3;
      } else {
        this.currentIndex = Math.floor((this.userInfo.publications.length - 1) / 3) * 3; // 跳转到最后一个组
      }
    },
    toDetail(id) {
      this.$router.push({
        path: '/profile/basic',
        query: {
          id: id,
        },
      })
      setTimeout(() => {
        location.reload()
      }, 20)
    },
  },
}
</script>

<style lang="less" scoped>
.contact-info {
  font-size: 20px;      /* 调大字体大小 */
  margin-bottom: 15px; /* 增加间隔 */
}

.contact-info a-icon {
  margin-right: 8px;   /* 图标和文本之间的间隔 */
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
}

.template {
  background-color: #f6f8fa;
  padding: 20px;
  border-radius: 8px;
}

h1, h2, h3 {
  color: #333;
}

h1 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 34px;
}

h2 {
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: 28px;
  border-bottom: 2px solid #e7e7e7;
  padding-bottom: 5px;
}

h3 {
  font-size: 20px;
}

.limited-description {
  .ell-3;
  max-width: 90%;
}

a-icon {
  margin-right: 8px;
}

.list, a-row, a-col {
  color: #555;
}

.ell-1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.ell-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.ell-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.availability-box {
  border: 2px solid #e7e7e7;
  border-radius: 8px;
  padding: 10px;
  margin-top: 10px;
  overflow: auto;
  //max-height: 150px; // 根据需要可以更改这个值
}

</style>
