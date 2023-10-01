<template>
  <div class="template">
    <a-row :gutter="1">
      <a-col :span="6">
        <img :height="160" :src="userInfo.avatar" />
      </a-col>
      <a-col :span="18">
        <div class="desc" style="background-color: #a33131d9; padding: 10px; min-height: 160px">
          {{ userInfo.contribution }}
        </div>
      </a-col>
    </a-row>
    <a-divider></a-divider>
    <a-row :gutter="10">
      <a-col :span="16">
        <a-row>
          <a-collapse accordion>
            <a-collapse-panel key="1" header="Teaching">
              <a-row v-for="(item, index) in userInfo.teaching" :key="item.time">
                <a-row>
                  <b>{{ index + 1 }}</b>
                  {{ item.description }}
                  {{ item.time }}
                </a-row>
              </a-row>
            </a-collapse-panel>

            <a-collapse-panel key="2" header="About">
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
            </a-collapse-panel>

            <!-- <a-collapse-panel key="2" header="Degrees" :disabled="false">
              <a-row v-for="(item, index) in userInfo.degrees" :key="item.time">
                <a-row>
                  <b>{{ index + 1 }}</b>
                  {{ item.description }}
                  {{ item.time }}
                </a-row>
              </a-row>
            </a-collapse-panel> -->

            <a-collapse-panel key="3" header="Publications">
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
            </a-collapse-panel>
            <!-- <a-collapse-panel key="4" header="Academic Position">
              <a-row v-for="(item, index) in userInfo.aacdimicPosition" :key="item.time">
                <a-row>
                  <b>{{ index + 1 }}</b>
                  {{ item.description }}
                  {{ item.time }}
                </a-row>
              </a-row>
            </a-collapse-panel> -->

            <a-collapse-panel key="4" header="Research">
              <p>{{ userInfo.researchAreas }}</p>
              <!-- <a-row v-for="(item, index) in userInfo.aacdimicPosition" :key="item.time">
                <a-row>
                  <b>{{ index + 1 }}</b>
                  {{ item.description }}
                  {{ item.time }}
                </a-row>
              </a-row> -->
            </a-collapse-panel>
          </a-collapse>
        </a-row>
        <a-row style="background: #608ba3b8; padding: 10px">
          <a-col :span="11">
            <b>Location: {{ userInfo.location }}</b>
          </a-col>
          <a-col :span="2">
            <a-divider type="vertical" style="height: 60px; border-color: black" />
          </a-col>
          <a-col :span="11">
            <b>Contact:</b>
            <a-row :span="12">Phone: {{ userInfo.phone }}</a-row>
            <a-row :span="12">Email: {{ userInfo.email }}</a-row>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="8">
        <h2>Recent Highlights</h2>
        <div class="list">
          <div class="item" v-for="item in userInfo.highlights" :key="item.time">
            <a-card style="margin-bottom: 10px">
              <h3>{{ item.time }}</h3>
              <b>{{ item.description }}</b>
            </a-card>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: 'sdfsdfsd',
    }
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