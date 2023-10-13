<!--功能代码模版选择1-->
<template >
  <div class="template" :class="[currentStyle, currentFont, currentColor]">
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

    <a-row class="header">
      <img class="bg"  :src="userInfo.backgroundImage" alt="Background" />
      <h2><a-icon type="idcard" />   {{ userInfo.firstName }} {{ userInfo.lastName }}</h2>

      <div class="avatar-wrapper">
        <img :height="160" :src="userInfo.avatar" alt="User Avatar" />
      </div>
      <div class="user-info">
        <p ><b> Tel <a-icon type="phone"  /> :</b> {{ userInfo.phone }}</p>
        <p><b>Email <a-icon type="message" />:</b> {{ userInfo.email }}</p>
        <p><b>Office:</b> {{ userInfo.location }}</p>
        <a-col :span="20">
        <p><b>Correspondence:</b> {{ userInfo.contribution }}</p>
        </a-col>
<!--        <p><b>Contribution:</b> {{ userInfo.contribution }}</p>-->
      </div>
    </a-row>

    <a-divider></a-divider>
    <a-row>
      <a-tabs default-active-key="2" type="card">

        <a-tab-pane key="1" tab="Teaching">
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
        </a-tab-pane>

        <a-tab-pane key="2" tab="About" force-render>
    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">

      <!-- 第一列：时间轴1 -->
      <a-col :span="12">
        <a-timeline mode="left">
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
  </a-tab-pane>


        <a-tab-pane key="3" tab="Publication">

          <!-- Iterate over unique publication categories -->
          <div v-for="category in uniqueCategoriesPublication" :key="category" class="publication-category">

            <!-- Display the category title -->
            <h3 class="publication-category-title">{{ category }}</h3>

            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">

              <!-- For each category, display its items (publications). -->
              <a-col v-for="(item, index) in filteredItemsDegreePublication(category)" :key="item.time" span="8">
                <div class="publication-item">
                  <img :src="item.img" alt="" class="publication-img" />
                  <div class="publication-data">
                    <h1 class="time1">{{ item.title }}</h1>
                    <div class="time">time : {{ item.time }}</div>
                    <div class="description">{{ item.description }}</div>
                    <!-- 如果item.pdf存在，显示这个链接 -->
                    <a class="pdf-link" v-if="item.pdf" :href="item.pdf" :download="item.pdf">Read the full article</a>

                    <!-- 如果item.pdf不存在，但item.url存在，显示这个链接 -->
                    <a class="pdf-link" v-else-if="item.url" :href="item.url">Read the full article</a>

                    <!-- 如果都不存在，显示一个按钮，并弹出提示 -->
                    <button class="pdf-link" v-else @click="showAlert">Read the full article</button>

                    <!-- 可以在此添加其他条件或默认的渲染内容，如果需要的话 -->
                  </div>
                </div>
              </a-col>

            </a-row>

            <!-- Navigation buttons for the publications -->
            <div class="button-container">
              <a-button @click="prevPublication">
                <a-icon type="left" />
              </a-button>
              <a-button @click="nextPublication">
                <a-icon type="right" />
              </a-button>
            </div>

          </div>

        </a-tab-pane>



        <a-tab-pane key="4" tab="Highlights">
          <a-row class="highlight-wrapper" v-for="(item, index) in userInfo.highlights" :key="item.time">
            <a-col span="2" class="highlight-icon-wrapper">

              <div class="highlight-icon">
                <a-icon type="pushpin" theme="twoTone" />
              </div>


            </a-col>
            <a-col span="22" class="highlight-content-wrapper">
              <div class="highlight-content">
                <b>{{ index + 1 }}</b> {{ item.description }} <span class="highlight-time">{{ item.time }}</span>
              </div>
            </a-col>
          </a-row>
        </a-tab-pane>

      </a-tabs>
    </a-row>
  </div>
</template>
<script>

export default {
  data() {
    return {
      currentIndex: 0,
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

    }
  },
  computed: {
    uniqueCategoriesPublication() {
      // Using a Set to only get unique category names and then converting it to an array.
      return [...new Set(this.userInfo.publications.map(item => item.category))];
    },
    filteredItemsDegreePublication() {
      return (category) => {
        return this.userInfo.publications.filter(item => item.category=== category);
      }
    },
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
    visiblePublications() {
      return this.userInfo.publications.slice(this.currentIndex, this.currentIndex + 3);
    },
    groupedPublications() {
      const groupSize = 3;
      const groups = [];
      console.log("userinfo")
      console.log(this.userInfo)
      for (let i = 0; i < this.userInfo.publications.length; i += groupSize) {
        console.log(this.userInfo)
        groups.push(this.userInfo.publications.slice(i, i + groupSize));
      }
      console.log("groups")
      console.log(groups)
      return groups;
    },
  },
  methods: {
    nextPublication() {
      if (this.currentIndex + 3 >= this.userInfo.publications.length) {
        this.currentIndex = 0;  // 回到开始
      } else {
        this.currentIndex += 3;
      }
    },
    prevPublication() {
      if (this.currentIndex - 3 < 0) {
        // 回到最后一组，保证它是3的倍数
        this.currentIndex = Math.floor((this.userInfo.publications.length - 1) / 3) * 3;
      } else {
        this.currentIndex -= 3;
      }
    }
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
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;  /* 这将为按钮添加20px的间隔 */
  margin-top: 20px; /* 如果需要，增加上部间隔 */
}

.highlight-wrapper {
  margin: 20px 0;
  background-color: #f7f8fa;  // 轻微的背景色，使其与背景形成对比
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); // 精致的阴影，使其具有深度感
  transition: transform 0.3s ease; // 平滑的过渡效果

  &:hover {
    transform: translateY(-5px);  // 当鼠标悬停时，轻微向上移动
  }
}

.highlight-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.highlight-icon {
  width: 40px;
  height: 40px;
  background-color: #6bc3df;
  border-radius: 50%;  // 创建一个完美的圆形
  display: flex;
  align-items: center;
  justify-content: center;
  //color: white;  // 图标的颜色
  font-size: 24px;
}

.highlight-content-wrapper {
  display: flex;
  align-items: center;
}

.highlight-content {
  padding: 15px 20px;
  font-size: 18px;  // 使字体稍微大一些
  //color: #333;  // 深色字体
}

.highlight-time {
  font-size: 16px;
  //color: #888;  // 灰色的时间
  margin-left: 10px;
}


.teaching-circle {
  //background-color: #6bc3df;
  border-radius: 10px;  // Slightly rounded corners
  border: 10px solid #6bc3df;  // Border around the rectangle
  width: 90%;  // Adjust based on your desired width
  max-width: 800px;  // Adjust based on your desired maximum width
  padding: 20px 30px;  // Inner spacing for the rectangle
  margin: 20px auto;  // Centers the rectangle and gives it a vertical space
  display: flex;
  flex-direction: column;
  align-items: center;  // Aligns items to the center of the rectangle

}

.teaching-title {
  font-size: 24px;  // Adjust based on your desired size
  margin-bottom: 20px;  // Space below the title
  text-align: center;
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


.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
}

.prev-btn {
  left: 0;
}

.next-btn {
  right: 0;
}
/* ... your existing styles ... */
                     .publication-item {
                       display: flex;
                       flex-direction: column;
                       align-items: center;
                       border: 1px solid #e3e5e5; // Add a border
                       border-radius: 4px; // Rounded corners
                       padding: 10px; // Inner spacing
                       margin: 10px 0; // Space between cards
                       box-shadow: 0 2px 5px rgba(0,0,0,0.1); // A subtle shadow for the card
                       height: 600px;

                       .publication-img {
                         height: 200px;
                         width: 100%;
                         object-fit: cover;
                         object-position: center;
                         margin-bottom: 10px;
                       }
                     }
                   .publication-data {
                     background-color: #e3e5e5;
                     padding: 20px;
                     display: flex;
                     flex-direction: column; // Ensures vertical layout of content
                     justify-content: space-between; // Distributes the space evenly between the contents
                     height: 400px; // Adjust this value based on your needs

                     .time {
                       font-weight: bold; // Makes the title stand out
                       margin-bottom: 2px; // Add some space between title and description
                     }

                     .time1 {
                       max-height: 100px;  /* 为描述设置一个最大高度 */
                       overflow: hidden;  /* 隐藏溢出的内容 */
                       font-weight: bold; // Makes the title stand out
                       margin-bottom: 2px; // Add some space between title and description
                     }
                     .description {
                       //flex: 1; // Allows it to take up remaining space
                       //margin-bottom: 10px; // Add some space between description and link
                       max-height: 150px;  /* 为描述设置一个最大高度 */
                       overflow: hidden;  /* 隐藏溢出的内容 */
                       position: relative; /* 需要定位其伪类 */
                       padding-bottom: 25px;  /* 为 "View PDF" 按钮预留空间 */
                     }
                     .description::after {
                       content: "..."; /* 添加省略号 */
                       position: absolute;  /* 绝对定位 */
                       bottom: 0;
                       right: 0;
                       background-color: #e3e5e5;  /* 与卡片背景相同的颜色 */
                       padding-left: 5px;  /* 确保省略号与文本有些许间隔 */
                     }

                     .pdf-link {
                       position: absolute;  /* 绝对定位按钮确保它始终在底部 */
                       bottom: 10px;  /* 与底部有10px的间隔 */
                       left: 50%;  /* 中心对齐按钮 */
                       transform: translateX(-50%);  /* 使用变换来完美居中 */
                       align-self: center; // Centers the link
                       background-color: #333; // Dark background for the link
                       color: #fff; // White text
                       padding: 5px 10px; // Some padding to make it look nice
                       text-decoration: none; // Remove underline
                       border-radius: 4px; // Rounded corners


                       //background-image: url('../../../assets/jiuantou.png'); /* 请替换为您的图片路径 */
                       //background-repeat: no-repeat; /* 确保图片不重复 */
                       //background-position: left center; /* 图片居左居中对齐 */
                       //padding-left: 10px; /* 如果箭头宽度约为20px，这会为图片提供空间并避免文本与图片重叠 */
                       &:hover {
                         background-color: #555; // Change background on hover
                       }
                     }
                   }
.template {
  font-family: 'Arial', sans-serif;
}

.header {
  position: relative;
  padding: 20px;

  .bg {
    position: absolute;
    width: 1100px;
    height: 400px;
    object-fit: cover;
    object-position: center;
    //left: 0;
    //right: 0;
    //top: 0;
    //bottom: 0;
    //width: 100%;
    //height: 100%;
    //z-index: -1; /* Ensure it's below the content */
    //object-fit: cover; /* Make sure the image covers the entire space */
    //object-position: center;
  }
  h2, .avatar-wrapper, .user-info {
    position: relative; /* 确保它们在背景图片之上 */
    z-index: 1;
  }
  .user-info{
    //color: #FFF;
    text-align: left;  // Change center alignment to left
    font-size: 20px;
    padding-left: 20px;  // Add some padding on the left for consistency
    p {
      margin-bottom: 5px;
      font-size: 15px;

    }
  }
  h2 {
    //color: #FFF;
    text-align: left;  // Change center alignment to left
    padding-top: 10px;
    padding-left: 20px;  // Add some padding on the left to keep it tidy
  }

  .avatar-wrapper {
    display: flex;
    justify-content: center;
    padding: 20px 0;
  }


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