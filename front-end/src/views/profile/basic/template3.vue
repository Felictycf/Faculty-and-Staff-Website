<!-- 功能代码模版选择4-->
<template>
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
              <b>{{ index + 1 }}</b>
              {{ item.description }}
              {{ item.time }}
            </a-row>
          </a-row>
          <h2 style="margin-top: 30px;color: #000;"><a-icon type="book-open" /> Publications</h2>
          <a-row v-for="(item, index) in userInfo.publications" :key="item.time">
            <b>{{ index + 1 }}</b>

<!--            <img :src="item.img" alt="" width="100px" />-->
            {{ item.title }}
            {{ item.time }}
            <div class="limited-description">{{ item.description }}</div>
            <a :href="item.pdf" :download="item.pdf">pdf</a>

          </a-row>
        </div>
      </a-col>

      <a-col :span="8" style="padding: 0 20px">
        <h2 >Recent Highlights</h2>
        <div class="list">
          <div class="item" style="margin-bottom: 30px" v-for="item in userInfo.highlights" :key="item.time">
            <h2>{{ item.time }}</h2>
            <b style="color: #f5f5f5" >{{ item.description }}</b>
          </div>
        </div>

        <h2>Fields of research</h2>

        <div>{{ userInfo.researchAreas }}</div>

        <h2>Availability</h2>

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
</template>

<script>
export default {
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
/* ... 你现有的样式 ... */
.limited-description {
  .ell-3;

  // 可能需要一个固定的宽度或最大宽度来确保ellipsis正常工作
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
  background-color: #464d63;  // 更亮的背景
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

</style>