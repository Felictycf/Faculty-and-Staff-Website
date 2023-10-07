<!-- 功能代码模版选择4-->
<template >
  <div :class="[currentStyle, currentFont, currentTitleColor, currentTitleSize,currentColor]">
    <div :class="currentFont">


      <select v-model="currentStyle">
        <option v-for="font in fontList" :key="font.name" :value="font.className">{{ font.name }}</option>
      </select>
      <div>
        <label>Background Color:</label>
        <select v-model="currentBG" >
          <option v-for="bg in bgList" :key="bg.name" :value="bg.className">{{ bg.name }}</option>
        </select>
      </div>

      <div>
        <label>Font Size:</label>
        <select v-model="currentFont" >
          <option v-for="size in fontSizeList" :key="size.name" :value="size.className">{{ size.name }}</option>
        </select>
      </div>

      <div>
        <label>Title Color:</label>
        <select v-model="currentTitleColor">
          <option v-for="color in titleColorList" :key="color.name" :value="color.className">{{ color.name }}</option>
        </select>
      </div>
      <div>
        <label>Title Font Size:</label>
        <select v-model="currentTitleSize">
          <option v-for="size in titleSizeList" :key="size.name" :value="size.className">{{ size.name }}</option>
        </select>
      </div>
      <div>
        <label>Color:</label>
        <select v-model="currentColor">
          <option v-for="color in colorList" :key="color.name" :value="color.className">{{ color.name }}</option>
        </select>
      </div>




      <div :class="currentBG">
  <div class="template">
    <h2 style="text-align: center; font-size: 30px">Academic Staff webpage</h2>

    <a-row :gutter="2">
      <a-col :span="8">
        <img :width="200" :src="userInfo.avatar" />

        <h1>
          <b style="font-size: 30px;color: #f5f5f5">{{ userInfo.firstName }} {{ userInfo.lastName }}</b>
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
          <a-row><a-icon type="phone" /> {{ userInfo.phone }}</a-row>
          <a-row><a-icon type="mail" /> {{ userInfo.email }}</a-row>
        </a-row>

        <a-row>
          <p><a-icon type="book" /> Teaching : </p>
          <ul>
            <li v-for="(item, index) in userInfo.teaching" :key="item.time"  >
              {{ index + 1 }}. {{ item.description }} ({{item.time}})
            </li>
          </ul>
        </a-row>
      </a-col>
      <a-col :span="8" style="background-color: white; padding: 20px">
        <div class="list">
          <h2 style=" color: #000;"><a-icon type="graduation-cap" /> Degrees</h2>
          <a-row v-for="(item, index) in userInfo.degrees" :key="item.time">
            <a-row>
              <b>{{ index + 1 }}</b>
              {{ item.description }}
              {{ item.time }}
            </a-row>
          </a-row>
          <h2 style="margin-top: 30px ;color: #000;"><a-icon type="idcard" /> Academic Position</h2>
          <a-row v-for="(item, index) in userInfo.aacdimicPosition" :key="item.time">
            <a-row>
              <b>{{  index + 1 }}</b>
              {{ item.description }}
              <b>{{ item.time }}</b>
            </a-row>
          </a-row>
          <h2 style="margin-top: 30px;color: #000;"><a-icon type="book-open" /> Publications</h2>
          <a-row v-for="(item, index) in currentPublications" :key="item.time">
            <b>{{ currentIndex+index + 1 }}</b>
            {{ item.title }}
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
        </div>
      </a-col>

      <a-col :span="8" style="padding: 0 20px">
        <h2 style="font-family: 'Arial', sans-serif; color: #fdfdfd; font-size: 28px; text-shadow: 1px 1px 2px rgba(0,0,0,0.2); margin-bottom: 10px; border-bottom: 2px solid #ECECEC; padding-bottom: 8px;">Recent Highlights</h2>

        <div class="list">
          <div class="item" style="margin-bottom: 30px" v-for="item in userInfo.highlights" :key="item.time">
            <h2>{{ item.time }}</h2>
            <b style="color: #f5f5f5" >{{ item.description }}</b>
          </div>
        </div>

        <h2 style="font-family: 'Arial', sans-serif; color: #eeeff1; font-size: 28px; text-shadow: 1px 1px 2px rgba(0,0,0,0.2); margin-bottom: 10px; border-bottom: 2px solid #ECECEC; padding-bottom: 8px;">  Fields of research</h2>


        <div>{{ userInfo.researchAreas }}</div>

        <h2 style="font-family: 'Arial', sans-serif; color: #ffffff; font-size: 28px; text-shadow: 1px 1px 2px rgba(0,0,0,0.2); margin-bottom: 10px; border-bottom: 2px solid #ECECEC; padding-bottom: 8px;">Availability</h2>

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
  </div>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      currentTitleColor: 'default-color',
      currentTitleSize: 'default-size',
      currentColor: 'default-color',
      colorList: [
        { name: 'Default', className: 'default-color' },
        { name: 'Green', className: 'green-color' },
        //... 其他颜色
      ],
      titleColorList: [
        { name: 'Default', className: 'default-color' },
        { name: 'Red', className: 'red-color' },
        { name: 'Blue', className: 'blue-color' },
        //... 其他颜色
      ],
      titleSizeList: [
        { name: 'Default', className: 'default-size' },
        { name: 'Large', className: 'large-title' },
        { name: 'Extra Large', className: 'xlarge-title' },
        //... 其他大小
      ],
      currentBG:'blue-bg',
      currentFont:'small-font',
      bgColor: '#ffffff', // 默认为白色
      fontSize: '16px',     // 默认为16px，注意这里是字符串格式
      currentIndex: 0,
      currentStyle: 'arial-style',
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
      bgList: [
            { name: 'White', className: 'white-bg' },
            { name: 'Black', className: 'black-bg' },
        { name: 'Blue', className: 'blue-bg' },
            //... 其他颜色
        ],
        fontSizeList: [
            { name: '12px', className: 'small-font' },
            { name: '16px', className: 'medium-font' },
            { name: '20px', className: 'large-font' },
            //... 其他大小
        ]
    }
  },
  computed: {
    currentPublications() {
      return this.userInfo.publications.slice(this.currentIndex, this.currentIndex + 3);
    },
    // ...其他计算属性...
  },
  mounted() {
    this.changeFont();  // 默认设置
  },
  methods: {
    changeBackground() {
      document.body.className = this.bgColor;
    },
    changeFontSize() {
      document.documentElement.className = this.fontSize;
    },
    changeStyle() {
      // 方法内容...
    },
    changeFont() {
      document.documentElement.style.fontFamily = this.selectedFont;
    },
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
    // ...其他方法...
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
.white-bg {
  background-color: #ffffff;
}
.blue-bg {
  background-color: #464d63;  // 更亮的背景

}

.black-bg {
  background-color: #000000;
}

// ...其他颜色样式

.small-font {
  font-size: 12px;
}

.medium-font {
  font-size: 16px;
}

.large-font {
  font-size: 20px;
}

// ...其他字体大小样式



.limited-description {
  .ell-3;

  max-width: 80%;  // 或根据你的需要调整
}

/* 为图标添加基本的样式和间距 */
a-icon {
  margin-right: 8px;
}

/* 使用ellipsis来限制显示的描述长度 */
.ell-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
}

/* 在需要的地方应用这个样式，例如 */
.red-color h1, .red-color h2 {
  color: red;
}
.blue-color h1, .blue-color h2 {
  color: blue;
}
//... 其他颜色样式

.large-title h1, .large-title h2 {
  font-size: 150%; // 调整大小
}
.xlarge-title h1 {
  font-size: 200%;
}
.xlarge-title h2 {
  font-size: 175%;
}
//... 其他字体大小样式


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

/* 基本样式设置 */
body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
}

.template {
  //font-family: "Hack Nerd Font Mono";
  //background-color: #464d63;  // 更亮的背景
  padding: 30px;
  border-radius: 10px;
  color: #f5f5f5;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1, h2 {
  margin-top: 20px;
  margin-bottom: 20px;
}

h1 {
  font-size: 32px;
}

h2 {
  font-size: 24px;
  color: #f5f5f5;
  border-bottom: 2px solid #608ba3b8;
  padding-bottom: 5px;
}

/* 头像和个人信息 */
img {
  //border-radius: 100px;
  width: 300px;
  height: 200px;
  object-fit: cover;

  margin-bottom: 20px;
  border: 4px solid #608ba3b8;
}

.Departments {
  font-size: 20px;
  color: #777;
  margin-bottom: 20px;
}

/* 电话和邮箱 */
a-row {
  margin-top: 15px;
  font-size: 18px;
}
.green-color h1,
.green-color h2,
.green-color div,
.green-color p {
  color: green;
}
//... 其他颜色样式

/* Teaching, Degrees, and Academic Position sections */
.list {
  //background-color: #ffffff;
  color: #000;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.link-button {
  display: inline-block;
  background-color: #4a4a4a;
  color: white;
  padding: 5px 15px;
  margin: 5px;
  border-radius: 5px;
  text-decoration: none;
}

.link-button:hover {
  background-color: #333333;
}

/* Publications section */
.publication-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.publication-item img {
  margin-right: 20px;
  border-radius: 8px;
  object-fit: cover;
}

.publication-description {
  flex: 1;
  // 将其应用到出版物描述上
  .ell-3;
}

.pdf-link {
  background-color: #608ba3b8;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 14px;
  margin-left: 10px;
}

.pdf-link:hover {
  background-color: #4a6d8c;
}
.arial-style div, .arial-style p, .arial-style h1, .arial-style h2 {
  font-family: 'Arial', sans-serif;
}

</style>