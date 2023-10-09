<template>
  <div class="about-container">

    <div class="image-container">
      <img src="@/assets/img.png"  style="width: 1000px ; height: 450px" alt="Photo of us" >
        <!-- Your text here -->
      <div class="header-section" style="background-color: #fff;">

        <h1 style="font-size: 40px">Survey of Academic Staff Webpages</h1>
        <p> <strong>Team members:</strong>
          <br/>
          Ben Steele (ID: 18046183),
          Haoxuan Duan (ID: 22176084),
          <br>
          Ruichen Gou (ID: 22169306)
          Yibo Yang (ID: 22185775)</p>
      </div>
    </div>
<!--    here view 4 image-->

    <div class="images-row">
      <img src="@/assets/person/Guo.png" alt="Image 3" class="about-image">
      <img src="@/assets/person/Ben.png" alt="Image 1" class="about-image">
      <img   src="@/assets/person/Duan.jpg" alt="Image 2" class="about-image">
      <img src="@/assets/person/Yibo yang.png" alt="Image 4" class="about-image">
    </div>

    <div class="highlighted-text">
      <h2>The website highlights the features</h2>
      <ul>
        <li>You can choose your favourite design for information display.</li>
        <li>You can make customised changes to the font style etc. of each design.</li>
      </ul>
    </div>

    <div class="workflow-text">
      <h2>Workflow</h2>
      <p>Detailed browsing of each design layout - Selecting the design - Replacing the content on the design with your own - Effect display.</p>
    </div>

    <div class="text223" style="background-color: #fff;">
      <h1 style="font-size: 40px">Four design modelling introduction</h1>
      <!-- Starting the content modules -->
      <div class="module">
        <img src="@/assets/template1.jpg" alt="Design 1" class="module-image">
        <p> <strong style="text-align: center">Haoxuan Duan's Academic Profile</strong> <br>
          The layout uses a muted color palette with accent colors to emphasize selected sections. A flexbox-based grid structures the content, ensuring responsive design across devices. Hover transitions on clickable elements, like articles and links, enhance user interaction. The elegant serif font for headers contrasts with a clean sans-serif for body text, highlighting the academic nature of the content.
          .</p>
      </div>
      <div class="module">
        <img src="@/assets/template2.jpg" alt="Design 2" class="module-image">
        <p>
          <strong style="text-align: center" >Ruichen Guo's Research Page</strong><br/>
          A minimalist design employing a monochrome color scheme with occasional red accents for emphasis. CSS Grid is used for structured alignment, ensuring a clean look. The interactive elements, like 'Recent Highlights', feature subtle hover effects. The choice of a modern sans-serif font streamlines the readability and aligns with the innovative feel of the page.
          .</p>
      </div>
      <div class="module">
        <img src="@/assets/template3.jpg" alt="Design 3" class="module-image">
        <p> <strong style="text-align: center">Ben Steele's Academic Staff Webpage</strong> <br/>
          The site adopts a classic academic style, using a harmonious blend of pastel shades. CSS columns divide the content efficiently. The consistent use of rounded rectangle cards with box shadows adds depth, separating each section gracefully. A combination of serif for titles and sans-serif for content exudes a professional yet approachable vibe.
          .</p>
      </div>
      <div class="module">
        <img src="@/assets/template4.jpg" alt="Design 4" class="module-image">
        <p> <strong style="text-align: center">Yibo Yang's Personal Page</strong><br/>
          The design stands out with its dark theme, using a palette of charcoal greys contrasted with white and occasional electric blue highlights. A fixed sidebar employs flexbox for vertical centering, while the main content uses CSS Grid for a modular approach. Parallax scrolling effects add a layer of sophistication. Modern fonts, with a mix of bold and regular weights, enhance the dynamic feel of the page..</p>
      </div>
      <!-- End of the content modules -->
    </div>
    <div class="header-section" >
    </div>

<!--/*    <img src="@/assets/img.png"  style="position: relative;left: 200px;bottom: 320px"  width="600" height="300" >*/-->
<!--    <div class="overlay-text">Photo of us</div>-->


  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.highlighted-text, .workflow-text {
  width: 1000px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
}
.intro-flex-wrapper {
  display: flex;
  align-items: flex-start;
}

.images-column {
  display: flex;
  flex-direction: column;
  gap: 10px; /* space between images */
  margin-right: 20px; /* space between images and text */
}

.inline-image {
  width: 100px; /* Adjust the image width as needed */
  height: 100px; /* Adjust the image height as needed */
}


.images-row {
  display: flex;
  justify-content: space-between;  /* Distributes space between the images */
  align-items: center;
  padding: 20px 0;  /* To give some space above and below the row */
  width: 1000px;   /* Based on your other elements' widths */
  margin: 0 auto;  /* Center the row */
  gap: 20px;       /* Gap between images */
}
.image-size{
  width: 300px;
  height: 300px;
}
.module {
  display: flex;           /* Use Flexbox for the layout */
  align-items: flex-start; /* Vertically align at the top */
  margin-bottom: 20px;    /* Add some space below each module */
}

.module-image {
  width: 200px;          /* Adjust width as needed */
  height: 100px;         /* Adjust height as needed */
  margin-right: 20px;    /* Space between the image and text */
}

.about-image {
  width: 400px; /* Fixed width for all images */
  height: 300px; /* Fixed height for all images */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Optional shadow for aesthetics */
  transition: transform 0.3s ease; /* Optional hover effect */
}


.about-image:hover {
  transform: scale(1.05); /* Optional hover effect to slightly enlarge images */
}

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
  right: 350px;
  width: 500px;
  height: 130px;
  text-align: center;
  padding: 20px 0;
}
.text223{
  position: relative;
  /*left:200px;*/
  /*bottom: 80px;*/
  width: 1200px;
  height: 750px;
  text-align: center;
  padding: 20px 0;
  font-size: 18px;
}
.text-style{
  position: relative;
  bottom: 200px;
  text-align: center;
}
.overlay-text {
  position: relative;
  left: 200px;
  bottom: 600px;
  z-index: 1;
  color: #050003;
  font-size: 60px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

</style>
