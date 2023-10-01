<template>
  <div class="template">
    <a-row class="header">
      <img class="bg" :src="userInfo.backgroundImage" alt="" />

      <a-row>
        <h2 style="padding-left: 100px">{{ userInfo.firstName }} {{ userInfo.lastName }}</h2>
      </a-row>

      <a-row style="text-align: center">
        <img :height="160" :src="userInfo.avatar" />
      </a-row>

      <a-row style="font-size: 20px">
        <a-row><b>Jobs:</b> {{ userInfo.faculty }}</a-row>
        <a-row><b>Tel:</b> {{ userInfo.phone }}</a-row>
        <a-row><b>Email:</b> {{ userInfo.email }}</a-row>
        <a-row><b>Office:</b> {{ userInfo.office }}</a-row>
        <a-row>
          <a-col :span="12"> <b>Contribution:</b> {{ userInfo.contribution }} </a-col>
        </a-row>
      </a-row>
    </a-row>

    <a-divider></a-divider>

    <a-row>
      <a-tabs default-active-key="2" type="card">
        <a-tab-pane key="1" tab="Teaching">
          <a-row v-for="(item, index) in userInfo.teaching" :key="item.time">
            <a-row>
              <b>{{ index + 1 }}</b>
              {{ item.description }}
              {{ item.time }}
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
  components: {},
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
  }
}
</style>