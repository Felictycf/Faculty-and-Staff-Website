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

            <!-- Publications -->
            <a-collapse-panel key="3" header="Publications">
              <a-row v-for="(item, index) in currentPublications" :key="item.time">
                <a-col :span="4">
                  <img :src="item.img" alt="Publication Image" width="120px" height="100px " class="pub-image" />
                </a-col>
                <a-col :span="16">
                  <h3>{{item.title}}</h3>
<!--                  <b>{{ item.time }}</b>-->
                  <p class="publication-description">{{ item.description }}</p>
                </a-col>
                <a-col :span="4" class="pdf-button-col">
                  <a :href="item.pdf" :download="item.pdf" class="pdf-button">View PDF</a>
                </a-col>
              </a-row>
              <div class="button-container">
                <a-button @click="prevPublication">
                  <a-icon type="left" />
                </a-button>
                <a-button @click="nextPublication">
                  <a-icon type="right" />
                </a-button>
              </div>
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
        <a-row style="background: linear-gradient(145deg, #608ba3b8, #7daac2); padding: 20px 30px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
          <a-col :span="11">
            <div class="office-info">
              <b>Office:</b>
              <span>{{ userInfo.location }}</span>
            </div>
          </a-col>
          <a-col :span="2">
            <a-divider type="vertical" style="height: 70px; border-color: #444" />
          </a-col>
          <a-col :span="11">
            <div class="contact-info">
              <b>Contact:</b>
              <div><a-icon type="phone" /> Phone: {{ userInfo.phone }}</div>
              <div><a-icon type="mail" /> Email: {{ userInfo.email }}</div>
            </div>
          </a-col>
        </a-row>
<br/>
        <a-row style="background: linear-gradient(145deg, #608ba3b8, #7daac2); padding: 10px 30px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
          <a-col :span="20">
            <div class="contact-info">
              <b>Correspondence:</b>
              <div> {{ userInfo.contribution }}</div>
            </div>
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
      <a-col :span="8">
        <h2>Personal Link</h2>
        <div class="link-container">
          <a :href="userInfo.googleScholarLink" target="_blank" class="link-button">
            <a-icon type="google" style="color: purple;"></a-icon>
            Google Scholar
          </a>
          <a :href="userInfo.linkedinProfile" target="_blank" class="link-button">
            <a-icon type="linkedin" theme="filled" style="color: purple;"></a-icon>
            LinkedIn Profile
          </a>
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
      currentIndex: 0,
    }
  },
  computed: {
    currentPublications() {
      return this.userInfo.publications.slice(this.currentIndex, this.currentIndex + 3);
    },
    // ...其他计算属性...
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
.link-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.link-button {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #f5f5f5;
  padding: 8px 15px;
  border-radius: 5px;
  color: #555;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e5e5e5;
  }

  a-icon {
    font-size: 20px;
  }
}

.office-info, .contact-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  font-size: 16px;
}
.office-info > b, .contact-info > b {
  font-size: 18px;
  color: #fff;
  margin-bottom: 10px;
}

.contact-info > div {
  display: flex;
  align-items: center;
  margin-top: 5px;
}

a-icon {
  margin-right: 8px;
  color: #fff;
  font-size: 18px;
}

.pub-image {
  object-fit: cover; // 保持原图的纵横比并裁切多余部分
  padding-right: 10px;
}

/* Publications 样式 */
.publication-description {
  display: -webkit-box;
  -webkit-line-clamp: 3; // 只显示三行内容
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 10px 0;
  font-size: 14px;
}

.pdf-button-col {
  display: flex;
  align-items: center; // 垂直居中对齐按钮
}

.pdf-button {
  display: inline-block;
  background-color: #6bc3df; // 使用之前的颜色进行一致性设计
  color: white;
  padding: 5px 15px;
  border-radius: 4px;
  transition: background-color 0.2s; // 轻微过渡效果
  text-decoration: none; // 去除默认的下划线
  text-align: center;
}

.pdf-button:hover {
  background-color: #549cae; // 悬停时稍微深色
}


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