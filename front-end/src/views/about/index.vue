<template>
  <div class="about-container">

    <div class="image-container">
      <img src="@/assets/img.png"  style="width: 1000px ; height: 450px" alt="Photo of us" >
        <!-- Your text here -->
      <div class="header-section" style="background-color: #d9d9d9;">

        <h1 style="font-size: 40px">Survey of Academic Staff Webpages</h1>
        <p>by Ben Steele(ID:18046183), Haoxuan Duan(ID: 22176084), Ruichen Gou(ID:
          <br/>
          22169306).Yibo Yang(ID: 22185775)</p>
      </div>
    </div>
    <div class="text22" style="background-color: #d9d9d9;">
      This website is our Research and Development project. In thiswebsite the academic staff can create their own academicprofiles where they can choose the design of their profile fromfour design templates.
    </div>

    <div style="padding-bottom: 20px"></div>
    <div class="text22" style="background-color: #d9d9d9;">
       a small explanation of how the use the website. maybe in
      steps
    </div>
    <div class="header-section" >
    </div>

    <div class="instructions">
      <!-- Insert the step-by-step instructions here, if needed. -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.header-section {
  width: 800px;
  text-align: center;
  padding: 20px 0;
  position: relative;
  left: 100px;
  bottom: 80px;
}
.image-container{

}
.text22{
  position: relative;
  right: 400px;
  width: 500px;
  height: 103px;
  text-align: center;
  padding: 20px 0;
}

.about-image {
  width: 100%;
  height: auto;
  display: block;
}
.text-style{
  position: relative;
  bottom: 200px;
  text-align: center;
}
.overlay-text {
  color: #050003;
}
</style>
