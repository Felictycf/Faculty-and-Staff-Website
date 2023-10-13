<template>
  <div class="centered-container">
    <a-button type="primary" @click="navigateToLogin" style="margin-bottom: 20px;">Login</a-button> <h1 style="text-align: center;font-size: 30px">List of Academic Staff Profiles</h1>
    <a-row :gutter="16">
      <a-col :span="5" style="padding: 20px" v-for="user in userList" :key="user.id">
        <a-card :cover="coverImage(user.avatar)" @click="navigateToRecover(user.id)">
          <img width="200" height="200" :src="user.avatar" alt="Avatar" />
          <a-card-meta
            :avatar="avatarImage(user.avatar)"
            :title="user.firstName + ' ' + user.lastName"
            :description="user.title"
          />
          <template slot="actions">
            <a-button @click.stop="navigateToRecover(user.id)">View Details</a-button>
          </template>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { Row, Col, Card, Avatar } from 'ant-design-vue';

export default {
  components: {
    'a-row': Row,
    'a-col': Col,
    'a-card': Card,
    'a-avatar': Avatar,
  },
  data() {
    return {
      userList: [], // Your fetched user list will be stored here
    };
  },
  created() {
    this.getUserList();
  },
  methods: {
    navigateToLogin() {
      this.$router.push({ name: 'login' });
    },
    navigateToRecover(userId) {
      this.$router.push({ path: `/user/recover/${userId}` });
    },
    getUserList() {
      this.$http.get('/api/users/list', {}).then((res) => {
        console.log(res.list);
        this.userList = res.list || [];
        // this.userList = this.userList.filter((item) => item.id !== storage.get(ACCESS_TOKEN));
      });
    },
    coverImage(avatarUrl) {
      return <img alt="user" src={avatarUrl} />;
    },
    avatarImage(avatarUrl) {
      console.log('Avatar URL:', avatarUrl); // 打印URL来检查
      return <a-avatar size="large" src={avatarUrl} />;
    }

  },
};
</script>

<style scoped>
.centered-container {
  padding: 30px;
}
a-button {
  margin-bottom: 20px;
}
/* Add any additional styling if needed */
</style>
