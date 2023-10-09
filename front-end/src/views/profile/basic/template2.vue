<!--功能代码模版选择2-->
<template>
  <div class="template"  :class="[currentStyle, currentFont, currentColor]">
    <div class="style-options">
      <label>Font Style:</label>
      <select v-model="currentStyle">
        <option v-for="font in fontList" :key="font.name" :value="font.className">{{ font.name }}</option>
      </select>
      <label>Font Size:</label>
      <select v-model="currentFont">
        <option v-for="size in fontSizeList" :key="size.name" :value="size.className">{{ size.name }}</option>
      </select>
      <label>Color:</label>
      <select v-model="currentColor">
        <option v-for="color in colorList" :key="color.name" :value="color.className">{{ color.name }}</option>
      </select>
    </div>
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
                <!-- Wrap the categories in a flex container -->
                <div class="teaching-categories-wrapper">

                  <!-- First, iterate over unique categories. -->
                  <div v-for="category in uniqueCategories" :key="category" class="teaching-category">

                    <!-- Display the category title -->
                    <h3 class="teaching-category-title">{{ category }}</h3>

                    <!-- Next, for each category, display its items. -->
                    <div v-for="(item, index) in filteredItems(category)" :key="item.time" class="teaching-item">
                      <span class="teaching-description"><a-icon type="read" /> {{ item.description }} <span class="teaching-time">({{ item.time }})</span></span>
                    </div>

                  </div>

                </div>
              </div>
            </a-collapse-panel>

            <a-collapse-panel key="2" header="About" >
    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">

      <!-- 第一列：时间轴1 -->
      <a-col :span="12">
        <a-timeline>
          <a-timeline-item >
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
              <p > Degrees</p>
<!--              <a-icon type="graduation-cap" />-->
              <a-row>
                <div v-for="category in uniqueCategoriesDegree" :key="category">
                  <h3>{{ category }}</h3>
                  <ul>
                    <li v-for="(item, index) in filteredItemsDegree(category)" :key="index">
                      {{ index + 1 }}. {{ item.description }} ({{ item.time }})
                    </li>
                  </ul>
                </div>
              </a-row>
            </div>
          </a-timeline-item>
        </a-timeline>
      </a-col>

      <!-- 第二列：时间轴2 -->
      <a-col :span="12"  >
        <a-timeline mode="right">
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
      </a-col>
    </a-row>
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
                <a-col :class="[currentColor,currentFont]" :span="16">
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
              <p :class="[currentColor,currentFont]">{{ userInfo.researchAreas }}</p>
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
        <div class="list" :class="[currentColor,currentFont]">
          <div class="item" v-for="item in userInfo.highlights" :key="item.time">
            <a-card style="margin-bottom: 10px" :class="[currentColor,currentFont]">
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
      currentStyle: 'arial-style',
      currentFont: 'medium-font',
      currentColor: 'default-color',
      fontList: [
      { name: 'Arial', className: 'arial-style' },
      { name: 'Verdana', className: 'verdana-style' },
      { name: 'Georgia', className: 'georgia-style' },
      { name: 'Courier New', className: 'courier-style' },
      { name: 'Comic Sans MS', className: 'comicSansMS-style' },
      { name: 'Times New Roman', className: 'timesNewRoman-style' },
      { name: 'Trebuchet MS', className: 'trebuchetMS-style' },
      { name: 'Tahoma', className: 'tahoma-style' },
      { name: 'Lucida Sans Unicode', className: 'lucidaSans-style' },
      { name: 'Impact', className: 'impact-style' },
      { name: 'Helvetica', className: 'helvetica-style' },
      { name: 'Gill Sans', className: 'gillSans-style' },
      { name: 'Franklin Gothic', className: 'franklinGothic-style' },
      { name: 'Calibri', className: 'calibri-style' },
      { name: 'Cambria', className: 'cambria-style' },
      { name: 'Baskerville', className: 'baskerville-style' },
      { name: 'Avant Garde', className: 'avantGarde-style' },
      { name: 'Arial Narrow', className: 'arialNarrow-style' },
      { name: 'Arial Black', className: 'arialBlack-style' },
      { name: 'Anton', className: 'anton-style' }
        // ... 其他字体可以加在此处
      ],
      fontSizeList: [
        { name: 'Small', className: 'small-font' },
        { name: 'Medium', className: 'medium-font' },
        { name: 'Large', className: 'large-font' },
        // ... 其他大小可以加在此处
      ],
      colorList: [
        { name: 'Default', className: 'default-color' },
        { name: 'Green', className: 'green-color' },
        { name: 'Blue', className: 'blue-color' },
        { name: 'Red', className: 'red-color' },
        { name: 'Yellow', className: 'yellow-color' },
        { name: 'Purple', className: 'purple-color' },
        { name: 'Orange', className: 'orange-color' },
        { name: 'Black', className: 'black-color' },
        { name: 'Gray', className: 'gray-color' },
      ],
      text: 'sdfsdfsd',
      currentIndex: 0,
    }
  },
  computed: {
    uniqueCategoriesDegree() {
      // Using a Set to only get unique category names and then converting it to an array.
      return [...new Set(this.userInfo.degrees.map(item => item.category))];
    },

    filteredItemsDegree() {
      return (category) => {
        return this.userInfo.degrees.filter(item => item.category=== category);
      }
    },

    uniqueCategories() {
      // Using a Set to only get unique category names and then converting it to an array.
      console.log("category")
      console.log(this.userInfo)
      console.log(...new Set(this.userInfo.teaching.map(item => item.university)))
      return [...new Set(this.userInfo.teaching.map(item => item.university))];
    },

    filteredItems() {
      return (category) => {
        return this.userInfo.teaching.filter(item => item.university === category);
      }
    },
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

.teaching-categories-wrapper {
  display: flex;  // Use Flexbox to create columns
  justify-content: space-between;  // Distribute the space between columns
  gap: 20px;  // Space between categories if necessary
}

.teaching-category-title {
  font-size: 22px;  // Adjust based on your desired size
  text-align: left;  // Align to the left
  background-color: #f7f8fa;  // A light background for contrast
  padding: 5px 10px;  // Some padding for aesthetics
  border-top: 1px solid #e3e5e5;  // A subtle top border
  border-bottom: 1px solid #e3e5e5;  // A subtle bottom border
}

.teaching-category {
  display: flex;  // Use Flexbox
  flex-direction: column;  // Arrange children vertically
  align-items: flex-start;  // Align children to the left
  gap: 10px;  // Space between category title and items
  width: 45%;  // Set a width to make sure categories take up only half the space
}

.teaching-item {
  padding-left: 20px;  // Indent items for a better visual hierarchy
}
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
  max-width: 1000px;
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
.style-options {
  margin-top: 20px;
  select {
    margin-left: 10px;
    margin-right: 20px;
  }
}

.arial-style {
  font-family: 'Arial', sans-serif;
}

.small-font {
  font-size: 12px;
}

.medium-font {
  font-size: 16px;
}

.large-font {
  font-size: 20px;
}

.default-color {
  color: #555;
}

.green-color {
  color: green;
}

.blue-color {
  color: blue;
}

.red-color {
  color: red;
}

.yellow-color {
  color: yellow;
}

.purple-color {
  color: purple;
}

.orange-color {
  color: orange;
}

.black-color {
  color: black;
}

.gray-color {
  color: gray;
}
.arial-style {
  font-family: 'Arial', sans-serif;
  /* 其他与Arial字体相关的样式 */
}

.verdana-style {
  font-family: 'Verdana', sans-serif;
  /* 其他与Verdana字体相关的样式 */
}
.georgia-style {
  font-family: 'Georgia', serif;
}
.courier-style {
  font-family: 'Courier New', monospace;
}
.comicSansMS-style {
  font-family: 'Comic Sans MS', sans-serif;
}
.timesNewRoman-style {
  font-family: 'Times New Roman', serif;
}
.trebuchetMS-style {
  font-family: 'Trebuchet MS', sans-serif;
}
.tahoma-style {
  font-family: 'Tahoma', sans-serif;
}
.lucidaSans-style {
  font-family: 'Lucida Sans Unicode', sans-serif;
}
.impact-style {
  font-family: 'Impact', sans-serif;
}
.helvetica-style {
  font-family: 'Helvetica', sans-serif;
}
.gillSans-style {
  font-family: 'Gill Sans', sans-serif;
}
.franklinGothic-style {
  font-family: 'Franklin Gothic', sans-serif;
}
.calibri-style {
  font-family: 'Calibri', sans-serif;
}
.cambria-style {
  font-family: 'Cambria', serif;
}
.baskerville-style {
  font-family: 'Baskerville', serif;
}
.avantGarde-style {
  font-family: 'Avant Garde', sans-serif;
}
.arialNarrow-style {
  font-family: 'Arial Narrow', sans-serif;
}
.arialBlack-style {
  font-family: 'Arial Black', sans-serif;
}
.anton-style {
  font-family: 'Anton', sans-serif;
}


</style>