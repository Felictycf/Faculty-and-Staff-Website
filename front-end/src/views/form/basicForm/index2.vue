<template>
  <div class="container">
    <div class="left-pane-wrapper">
      <a-avatar size="large" icon="user" style="margin-bottom: 200px"></a-avatar>
      <div class="left-pane">
        <div class="input-section">

          <label>Title</label>
          <a-input placeholder="Title"></a-input>
        </div>

        <div class="input-section">
          <label>First Name</label>
          <a-input placeholder="First Name"></a-input>
        </div>

        <div class="input-section">
          <label>Last Name</label>
          <a-input placeholder="Last Name"></a-input>
        </div>

        <div class="input-section">
          <label>Email</label>
          <a-input placeholder="Email"></a-input>
        </div>

        <div class="input-section">
          <label>Department</label>
          <a-input placeholder="Department"></a-input>
        </div>

        <div class="input-section">
          <label>Office</label>
          <a-select style="width: 200px">
            <a-select-option value="Epsom">Epsom</a-select-option>
            <a-select-option value="New market">New market</a-select-option>
            <a-select-option value="City">City</a-select-option>
            <a-select-option value="Avondale">Avondale</a-select-option>
            <a-select-option value="Newlynn">Newlynn</a-select-option>
            <a-select-option value="Mount eden">Mount eden</a-select-option>
            <a-select-option value="Remuera">Remuera</a-select-option>
            <a-select-option value="Ellerslie">Ellerslie</a-select-option>
            <a-select-option value="Albany">Albany</a-select-option>
          </a-select>
        </div>
      </div>
    </div>



    <div class="middle-pane">


          <label>Faculty</label>
          <a-select placeholder="Select Faculty" style="width: 200px">
            <a-select-option value="Science">Science</a-select-option>
            <a-select-option value="Arts">Arts</a-select-option>
          </a-select>

      <div class="input-section">
        <label>Contact</label>
        <a-input placeholder="Contact"></a-input>
      </div>

      <div class="input-section">

  <label>Teaching</label>
  <a-input placeholder="Teaching"></a-input>
</div>

      <div class="input-section">
          <label>Contribute</label>
          <a-input placeholder="Contribute"></a-input>
      </div>
      <div class="input-section">
          <label>Bio</label>
          <a-input placeholder="Bio"></a-input>
      </div>
      <div class="input-section">
          <label>Academic Position</label>
          <a-input placeholder="Academic Position"></a-input>
      </div>
      <div class="input-section">
          <label>Degrees</label>
          <a-input placeholder="Degrees"></a-input>
      </div>
      <div class="input-section">
          <label>Availability</label>
          <a-input placeholder="Availability"></a-input>
      </div>
      <div class="input-section">
          <label>Fields of Research</label>
          <a-input placeholder="Fields of Research"></a-input>
      </div>
    </div>

    <div class="right-pane">
      <div class="image-upload" v-for="n in 5" :key="n">
        <input type="file" accept="image/*">
      </div>
      <a-input placeholder="文字输入框"></a-input>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  height: 100vh;
}

.left-pane-wrapper {
  flex: 1;
  padding: 20px;
  position: relative;
}

.left-pane {
  border: 2px dashed purple;
  padding: 20px;
  margin: 10px 0;
}

a-avatar {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.middle-pane, .right-pane {
  flex: 1;
  padding: 10px;
  border: 2px dashed purple;
  margin: 30px;
}

a-input, .image-upload {
  margin-bottom: 10px;
}
.input-section {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}
</style>
<script setup>
</script>