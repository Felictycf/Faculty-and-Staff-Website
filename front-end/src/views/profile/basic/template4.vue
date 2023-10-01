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
              <a-col :span="12">Phone: {{ userInfo.phone }}</a-col>
              <a-col :span="12">Email: {{ userInfo.email }}</a-col>
            </a-row>
            <br />
            <a-row>
              <p>Availability:{{ userInfo.avibilitiy }}</p>
            </a-row>
            <a-row>
              <p>Office:{{ userInfo.office }}</p>
            </a-row>
          </a-col>
        </a-row>

        <a-row>
          <!-- <h2 class="title">{{ userInfo.title }}</h2> -->
          <h2>Recent Highlights</h2>
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
          <h2>Fields of research</h2>
          <div>{{ userInfo.researchAreas }}</div>
        </a-row>
        <br />

        <a-row>
          <h2>Teaching</h2>
          <ul>
            <li v-for="(item, index) in userInfo.teaching" :key="item.time" style="list">
              {{ index + 1 }}. {{ item.description }}
            </li>
          </ul>
        </a-row>
      </a-col>

      <a-col :span="11" :offset="1">
        <h2>Publication</h2>

        <a-row v-for="(item, index) in userInfo.publications" :key="item.time">
          <a-row>
            <b>{{ index + 1 }}</b>

            <img :src="item.img" alt="" width="100px" />
            {{ item.time }}
            {{ item.description }}
            <a :href="item.pdf" :download="item.pdf">pdf</a>
            {{ item.description }}
          </a-row>
        </a-row>
        <!-- 
        <div class="list">
          <a-card
            style="width: 100%; margin-top: 10px"
            v-for="item in userList.filter((item) => userInfo.contributions.includes(item.id))"
            :title="`${item.firstName}${item.lastName}`"
          >
            <template #extra
              ><span style="color: blue; cursor: pointer" @click="toDetail(item.id)">learn more</span></template
            >
            <a-row>
              <a-col :span="6">
                <img :src="item.avatar" alt="" width="100px" />
              </a-col>
              <a-col :span="18">
                <p>{{ item.date }}</p>
                <h2 class="ell-1">{{ item.title }}</h2>
                <p class="ell-2">{{ item.contribution }}</p>
              </a-col>
            </a-row>
          </a-card>
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
</style>