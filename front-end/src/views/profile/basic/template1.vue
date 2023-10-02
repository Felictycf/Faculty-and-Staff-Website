<!--功能代码模版选择1-->
<template>
  <div class="template">
    <a-row class="header">
      <img class="bg" :src="userInfo.backgroundImage" alt="Background" />
      <h2>{{ userInfo.firstName }} {{ userInfo.lastName }}</h2>
      <div class="avatar-wrapper">
        <img :height="160" :src="userInfo.avatar" alt="User Avatar" />
      </div>
      <div class="user-info">
        <p><b>Tel:</b> {{ userInfo.phone }}</p>
        <p><b>Email:</b> {{ userInfo.email }}</p>
        <p><b>Office:</b> {{ userInfo.location }}</p>
        <p><b>Contribution:</b> {{ userInfo.contribution }}</p>
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
          <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"> <!-- Gutter to add spacing between grid columns -->
            <a-col v-for="(item, index) in userInfo.publications" :key="item.time" span="8">
              <div class="publication-item">
                <img :src="item.img" alt="" class="publication-img" />
                <div class="publication-data">
                  <div class="time">{{ item.time }}</div>
                  <div class="description">{{ item.description }}</div>
                  <a class="pdf-link" :href="item.pdf" :download="item.pdf">View PDF</a>
                </div>
              </div>
            </a-col>
          </a-row>
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
                     padding: 50px;
                     display: flex;
                     flex-direction: column; // Ensures vertical layout of content
                     justify-content: space-between; // Distributes the space evenly between the contents
                     height: 200px; // Adjust this value based on your needs

                     .time {
                       font-weight: bold; // Makes the title stand out
                       margin-bottom: 10px; // Add some space between title and description
                     }

                     .description {
                       flex: 1; // Allows it to take up remaining space
                       margin-bottom: 10px; // Add some space between description and link
                     }

                     .pdf-link {
                       align-self: center; // Centers the link
                       background-color: #333; // Dark background for the link
                       color: #fff; // White text
                       padding: 5px 10px; // Some padding to make it look nice
                       text-decoration: none; // Remove underline
                       border-radius: 4px; // Rounded corners
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
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    max-height: 100%;
    z-index: -1;
  }

  h2 {
    text-align: center;
    padding-top: 10px;
  }

  .avatar-wrapper {
    display: flex;
    justify-content: center;
    padding: 20px 0;
  }

  .user-info {
    text-align: center;
    font-size: 20px;
    p {
      margin-bottom: 15px;
    }
  }
}
</style>