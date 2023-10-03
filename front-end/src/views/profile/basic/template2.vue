<!--功能代码模版选择2-->
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
              <div class="teaching-circle">
                <h3 class="teaching-title">PHD and Master Supervision</h3>
                <div v-for="(item, index) in userInfo.teaching" :key="item.time" class="teaching-item">
                  <span class="teaching-description"><a-icon type="read" />      {{ item.description }} <span class="teaching-time">({{ item.time }})</span></span>
                </div>
              </div>
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
            <b>Office: {{ userInfo.location }}</b>
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

body {
  font-family: 'Arial', sans-serif;
  color: #333;
}

/* Teaching 样式优化 */
.teaching-circle {
  border-radius: 12px;
  border: 8px solid #6bc3df;
  width: 90%;
  max-width: 620px;
  padding: 25px 35px;
  margin: 25px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加轻微的阴影 */
}

.teaching-title {
  font-size: 26px;
  margin-bottom: 25px;
  color: #2b2b2b; /* 深色文本 */
}


.teaching-item {
  width: 100%;
  display: flex;
  justify-content: space-between;  // Places description and time at opposite ends

}

.teaching-description {
  //flex: 1;  // Takes up remaining space pushing time to the right
}

.teaching-time {
  //margin-left: 10px;  // Space between description and time
  font-weight: bold;  // Makes the time bold
}
/* Publications, Recent Highlights, Research 样式优化 */
a-card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加轻微的阴影 */
  transition: transform 0.2s; /* 添加过渡效果 */
}

a-card:hover {
  transform: translateY(-5px); /* 轻微上移效果 */
}

/* Research 样式 */
a-collapse-panel[key="4"] {
  background-color: #f8f9fa; /* 淡灰色背景 */
  border-radius: 8px; /* 圆角 */
  margin: 20px 0;
  padding: 20px;
}

/* Recent Highlights 样式 */
h2 {
  color: #2b2b2b;
  font-size: 22px;
  border-bottom: 2px solid #6bc3df; /* 颜色和 teaching-circle 一致的底部边框 */
  margin-bottom: 20px;
  padding-bottom: 10px;
}

.item {
  transition: background-color 0.2s; /* 添加背景颜色过渡效果 */
}

.item:hover {
  background-color: #e9f5f8; /* 悬停时的背景颜色 */
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
</style>