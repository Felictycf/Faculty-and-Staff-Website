<template>
  <div class="template" :class="[currentStyle, currentFont, currentColor]">
    <!-- 接下来是自定义样式的选项 -->
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
          <a-col :span="12">
            <div>{{ researchLeft }}</div>
          </a-col>
          <a-col :span="13">
            <div>{{ researchRight }}</div>
          </a-col>
        </a-row>

        <br />

        <a-row>
          <h2><a-icon type="read" /> Teaching</h2>
          <div v-for="category in uniqueCategories" :key="category">
            <h3>{{ category }}</h3>
            <ul>
              <li v-for="(item, index) in filteredItems(category)" :key="index">
                {{ index + 1 }}. {{ item.description }} ({{ item.time }})
              </li>
            </ul>
          </div>
          <h2 style=" color: #000;"><a-icon type="graduation-cap" /> Degrees</h2>
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
<br/>
          <div style="display: flex; align-items: center; justify-content: flex-start; font-size: 18px;">
            <!-- 使用Ant Design的信封图标作为对应项的标识 -->
            <a-icon type="mail" style="margin-right: 10px; font-size: 20px; color: #1890ff;"></a-icon>
            <p style="margin: 0;">Correspondence: {{userInfo.contribution}}</p>
          </div>

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
            <ol>
              <li v-for="time in userInfo.avibilitiy.split(',')" :key="time">{{ time.trim() }}</li>
            </ol>
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
      ],
      fontSizeList: [
        { name: 'Small', className: 'small-font' },
        { name: 'Medium', className: 'medium-font' },
        { name: 'Large', className: 'large-font' },
        //... 其他大小
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
      return [...new Set(this.userInfo.teaching.map(item => item.university))];
    },

    filteredItems() {
      return (category) => {
        return this.userInfo.teaching.filter(item => item.university === category);
      }
    },
    researchLeft() {
      const splits = this.userInfo.researchAreas.split('and');
      return splits[0] ? splits[0].trim() : '';
    },
    researchRight() {
      const splits = this.userInfo.researchAreas.split('and');
      return splits[1] ? splits[1].trim() : '';
    },
    availabilityLeft() {
      console.log("data")
      console.log(this.userInfo)
      const splits = this.userInfo.avibilitiy.split(',');
      return splits.slice(0, Math.ceil(splits.length / 2)).join(' ');
    },
    availabilityRight() {
      const splits = this.userInfo.avibilitiy.split(',');
      return splits.slice(Math.ceil(splits.length / 2)).join(' ');
    },
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

.availability-box ol {
  list-style-type: none;  /* 移除默认的数字 */

  li {
    position: relative;
    padding-left: 25px;   /* 留出空间给圆点 */

    &:before {
      content: "";        /* 创建一个实心圆 */
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 10px;
      height: 10px;
      background-color: black;
      border-radius: 50%;
    }
  }
}
// 新增的自定义样式部分
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

.green-color {
  color: green;
}
//... 其他样式
.style-options {
  margin-top: 20px;
  select {
    margin-left: 10px;
    margin-right: 20px;
  }
}
</style>
