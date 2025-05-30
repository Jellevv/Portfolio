<template>
  <div>
    <div class="container-fluid d-flex justify-content-center align-items-center">
      <div class="content-wrapper d-flex">
        <img src="/img/Jelle.home.png" alt="Profile Photo" class="ImgJelle" />

        <div class="header-content">
          <h2 class="fw-bold">Hello World!</h2>
          <p class="mt-3">
            Hi! I'm a passionate web development student with a strong interest in front-end technologies. Throughout my
            studies, I've built a solid foundation in HTML, CSS, and JavaScript, and I've gained
            experience working with frameworks and tools like Vue, SASS, SCSS, Bootstrap, and Pinia.
          </p>
          <p>In addition to coding, my education includes UI/UX design principles, which help me focus on creating
            intuitive and engaging user experiences.</p>


          <p>While my main focus is front-end development, I've also been introduced to some back-end technologies. I
            have basic knowledge of PHP, Java, SQL, and C#, which helps me understand the full web development stack.
          </p>

          <router-link to="/about" class="btn-more">More about me!</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.content-wrapper {
  justify-content: center;
  overflow: hidden;
  gap: 5px;
  margin-top: 5rem;
}

.ImgJelle {
  width: 20%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px 0px 0px 10px;
}

.header-content {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  border-radius: 0px 10px 10px 0px;
  background-color: #1E3A8A;
  color: white;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 700px;
  text-align: left;
}

.btn-more {
  background-color: #EDA622;
  color: white;
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.2s ease;
  text-decoration: none;
  margin-top: 20px;
  max-width: 300px;
  text-align: center;
}

.btn-more:hover {
  background-color: #FF9800;
  transform: scale(1.05);
  text-decoration: none;
}

@media (max-width: 1100px) {
  .ImgJelle {
    display: none;
  }
}

@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
    align-items: center;
    margin: 0;
  }

  .ImgJelle {
    display: none;
  }

  .header-content {
    padding: 30px;
    text-align: center;
    max-width: 100%;
  }
}
</style>