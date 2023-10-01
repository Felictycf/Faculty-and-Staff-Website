<template>
  <div class="template">
    <h2 style="text-align: center; font-size: 30px">Academic Staff webpage</h2>
    <a-row :gutter="2">
      <a-col :span="8">
        <img :width="200" :src="userInfo.avatar" />

        <h1>
          <b style="font-size: 30px">{{ userInfo.firstName }} {{ userInfo.lastName }}</b>
        </h1>

        <div class="Departments">
          {{ userInfo.department }}
        </div>
        <a-row style="margin-top: 10px">
          <b>Bio: </b>
          <br />
          {{ userInfo.bio }}
        </a-row>

        <!-- <a-row>
          <div class="date">{{ userInfo.date }}</div>
        </a-row> -->

        <!-- <a-row style="margin-top: 10px">
          <h2 class="title">{{ userInfo.title }}</h2>
        </a-row> -->

        <a-row style="margin-top: 30px; font-weight: 600">
          <a-row>{{ userInfo.phone }}</a-row>
          <a-row>{{ userInfo.email }}</a-row>
        </a-row>

        <a-row>
          <p>Teaching</p>
          <ul>
            <li v-for="(item, index) in userInfo.teaching" :key="item.time" style="list">
              {{ index + 1 }}. {{ item.description }}
            </li>
          </ul>
        </a-row>

        <a-row>
          <a-col :span="12">Degtees: {{ userInfo.degtees }}</a-col>
        </a-row>
      </a-col>
      <a-col :span="8" style="background-color: white; padding: 20px">
        <div class="list">
          <h2>Degrees</h2>
          <a-row v-for="(item, index) in userInfo.degrees" :key="item.time">
            <a-row>
              <b>{{ index + 1 }}</b>
              {{ item.description }}
              {{ item.time }}
            </a-row>
          </a-row>
          <h2 style="margin-top: 100px">Academic Position</h2>
          <a-row v-for="(item, index) in userInfo.aacdimicPosition" :key="item.time">
            <a-row>
              <b>{{ index + 1 }}</b>
              {{ item.description }}
              {{ item.time }}
            </a-row>
          </a-row>
          <h2 style="margin-top: 100px">Publications</h2>
          <a-row v-for="(item, index) in userInfo.publications" :key="item.time">
            <b>{{ index + 1 }}</b>

            <img :src="item.img" alt="" width="100px" />
            {{ item.time }}
            {{ item.description }}
            <a :href="item.pdf" :download="item.pdf">pdf</a>
            {{ item.description }}
          </a-row>
        </div>
      </a-col>

      <a-col :span="8" style="padding: 0 20px">
        <h2>Recent Highlights</h2>
        <div class="list">
          <div class="item" style="margin-bottom: 30px" v-for="item in userInfo.highlights" :key="item.time">
            <h2>{{ item.time }}</h2>
            <b>{{ item.description }}</b>
          </div>
        </div>

        <h2>Fields of research</h2>

        <div>{{ userInfo.researchAreas }}</div>

        <h2>Availability</h2>

        <div>{{ userInfo.avibilitiy }}</div>

        <!-- <div class="list">
          <div class="item" style="margin-bottom: 30px" v-for="item in userInfo.highlights" :key="item.time">
            <h2>{{ item.time }}</h2>
            <b>{{ item.description }}</b>
          </div>
        </div> -->
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
}
</script>

<style lang="less" scoped>
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

.template {
  background-color: #608ba3b8;
  padding: 10px;
}
</style>