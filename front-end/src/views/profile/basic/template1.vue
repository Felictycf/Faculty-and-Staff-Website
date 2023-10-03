<!--功能代码模版选择1-->
<template>
  <div class="template">
    <a-row class="header">
      <img class="bg"  :src="userInfo.backgroundImage" alt="Background" />
      <h2>{{ userInfo.firstName }} {{ userInfo.lastName }}</h2>

      <div class="avatar-wrapper">
        <img :height="160" :src="userInfo.avatar" alt="User Avatar" />
      </div>
      <div class="user-info">
        <p ><b>Tel:</b> {{ userInfo.phone }}</p>
        <p><b>Email:</b> {{ userInfo.email }}</p>
        <p><b>Office:</b> {{ userInfo.location }}</p>
<!--        <p><b>Contribution:</b> {{ userInfo.contribution }}</p>-->
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
          <a-carousel ref="carousel">
          <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }" v-for="page in groupedPublications" :key="page[0].time" > <!-- Gutter to add spacing between grid columns -->
            <a-col v-for="(item, index) in page" :key="item.time" span="8">
              <div class="publication-item">
                <img :src="item.img" alt="" class="publication-img" />
                <div class="publication-data">
                  <h1>{{ item.title }}</h1>
                  <div class="time">time : {{ item.time }}</div>
                  <div class="description">{{ item.description }}</div>
                  <a class="pdf-link" :href="item.pdf" :download="item.pdf">Read the full article</a>
                </div>
              </div>
            </a-col>
          </a-row>
          </a-carousel>
<!--          <a-button @click="prevPublication" class="carousel-btn prev-btn">⬅️</a-button>-->
<!--          <a-button @click="nextPublication" class="carousel-btn next-btn">➡️</a-button>-->
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
  computed: {
    groupedPublications() {
      const groupSize = 3;
      const groups = [];
      for (let i = 0; i < this.userInfo.publications.length; i += groupSize) {
        groups.push(this.userInfo.publications.slice(i, i + groupSize));
      }
      return groups;
    },
  },
  methods: {
    nextPublication() {
      this.$refs.carousel.next();
    },
    prevPublication() {
      this.$refs.carousel.prev();
    },
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
                     height: 200px; // Adjust this value based on your needs

                     .time {
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
    color: #FFF;
    text-align: left;  // Change center alignment to left
    font-size: 20px;
    padding-left: 20px;  // Add some padding on the left for consistency
    p {
      margin-bottom: 15px;
      

    }
  }
  h2 {
    color: #FFF;
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
</style>