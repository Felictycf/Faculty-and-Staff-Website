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
              <div class="date">{{ userInfo.date }}</div>
            </a-row>
          </a-col>
          <a-col :span="12">
            <a-row>
              <a-icon type="phone" />
              Phone: {{ userInfo.phone }}
            </a-row>
            <a-row>
              <a-icon type="mail" />
              Email: {{ userInfo.email }}
            </a-row>
            <a-row>
              <p>Availability:{{ userInfo.avibilitiy }}</p>
            </a-row>
            <a-row>
              <p>Office:{{ userInfo.location }}</p>
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
          <a-col :span="12">Degtees: {{ userInfo.degtees }}</a-col>
          <a-col :span="12">Bio: {{ userInfo.bio }}</a-col>
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
        <h2><a-icon type="book-open" /> Publication</h2>
        <a-row v-for="(item, index) in userInfo.publications" :key="item.time">
          <b>{{ index + 1 }}</b>
          <img :src="item.img" alt="" width="100px" />

           {{item.title}}
         
          <br/>

          {{ item.time }}
          <div class="limited-description">{{ item.description }}</div>
          <a :href="item.pdf" :download="item.pdf">pdf</a>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
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
</style>
