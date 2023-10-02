<!--功能代码模版选择1-->
<template>
  <div class="template">
    <a-row class="header">
      <img class="bg" :src="userInfo.backgroundImage" alt="Background" />
      <h2>{{ userInfo.firstName }} {{ userInfo.lastName }}</h2>
      <div class="avatar-wrapper">
        <img :height="160" :src="userInfo.avatar" alt="User Avatar" />
      </div>
      <div class="user-info">
        <p><b>Tel:</b> {{ userInfo.phone }}</p>
        <p><b>Email:</b> {{ userInfo.email }}</p>
        <p><b>Office:</b> {{ userInfo.location }}</p>
        <p><b>Contribution:</b> {{ userInfo.contribution }}</p>
      </div>
    </a-row>

    <a-divider></a-divider>

    <a-row>
      <a-tabs default-active-key="2" type="card">
        <a-tab-pane key="1" tab="Teaching">
          <a-row v-for="(item, index) in userInfo.teaching" :key="item.time">
            <a-row>
              <b>{{ index + 1 }}</b> {{ item.description }} {{ item.time }}
            </a-row>
          </a-row>
        </a-tab-pane>

        <a-tab-pane key="2" tab="About" force-render>
          <a-timeline mode="alternate">
            <a-timeline-item>
              <div>
                <b>BIO</b>
                <div>{{ userInfo.bio }}</div>
              </div>
            </a-timeline-item>

            <a-timeline-item>
              <div>
                <b>ACADEMIC POSITIONS</b>
                <a-row v-for="(item, index) in userInfo.aacdimicPosition" :key="item.time">
                  <a-row>
                    <b>{{ index + 1 }}</b>
                    {{ item.description }}
                    {{ item.time }}
                  </a-row>
                </a-row>
              </div>
            </a-timeline-item>

            <a-timeline-item>
              <div>
                <b>DEGREES</b>
                <a-row v-for="(item, index) in userInfo.degrees" :key="item.time">
                  <a-row>
                    <b>{{ index + 1 }}</b>
                    {{ item.description }}
                    {{ item.time }}
                  </a-row>
                </a-row>
              </div>
            </a-timeline-item>

            <a-timeline-item>
              <div>
                <b>AVAILABILITY</b>
                <div>{{ userInfo.avibilitiy }}</div>
              </div>
            </a-timeline-item>

            <a-timeline-item>
              <div>
                <b>FIELDS OF RESEARCH</b>
                <div>{{ userInfo.researchAreas }}</div>
              </div>
            </a-timeline-item>
          </a-timeline>
        </a-tab-pane>
        <a-tab-pane key="3" tab="Publication">
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
        </a-tab-pane>
        <a-tab-pane key="4" tab="Highlights">
          <a-row v-for="(item, index) in userInfo.highlights" :key="item.time">
            <a-row>
              <b>{{ index + 1 }}</b>
              {{ item.description }}
              {{ item.time }}
            </a-row>
          </a-row>
        </a-tab-pane>
      </a-tabs>
    </a-row>
  </div>
</template>
<script>
export default {
  data() {
    return {}
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
}
</script>

<style lang="less" scoped>
.template {
  font-family: 'Arial', sans-serif;
}

.header {
  position: relative;
  padding: 20px;

  .bg {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    max-height: 100%;
    z-index: -1;
  }

  h2 {
    text-align: center;
    padding-top: 10px;
  }

  .avatar-wrapper {
    display: flex;
    justify-content: center;
    padding: 20px 0;
  }

  .user-info {
    text-align: center;
    font-size: 20px;
    p {
      margin-bottom: 15px;
    }
  }
}
</style>