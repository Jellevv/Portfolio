<template>
  <div>
    <nav class="navbar navbar-expand-md fixed-top">
      <div class="container-fluid">
        <div class="navbar-brand">
          <h1 class="naam">
            <span>Jelle</span> Van Vlasselaer
          </h1>
        </div>

        <button class="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsToets"
          aria-controls="navbarsToets" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarsToets">
          <ul class="navbar-nav">
            <li>
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li>
              <router-link to="/about" class="nav-link">About me</router-link>
            </li>
            <li>
              <router-link to="/projects" class="nav-link">Projects</router-link>
            </li>
            <li>
              <router-link to="/contact" class="nav-link">Contact me</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  background-color: #1E3A8A;
  padding: 10px 0;
  border-bottom: 2px solid white;
}

.naam {
  color: #fff;
  font-family: "Times New Roman", serif;
  font-weight: 700;
  margin-left: 30px;
}

.navbar-toggler {
  border: none;
  background-color: white;
}

.navbar-nav .nav-link {
  color: gray;
  font-size: 25px;
  font-weight: 600;
  padding: 10px 20px;
  text-transform: uppercase;
}

.navbar-nav .nav-link:hover {
  text-decoration: underline;
  color: white;
}

.navbar-nav .nav-link.active {
  color: white;
  font-weight: bold;
}


@media (max-width: 1200px) {
  .navbar-nav .nav-link {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .naam {
    font-size: 24px;
    margin-left: 10px;
  }
}
</style>