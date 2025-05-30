<template>
    <div class="center-container">
        <div class="section coding-languages">
            <h3 class="section-title">Coding languages</h3>
            <div class="icons">
                <i class="fa-brands fa-html5 fa-4x icon"></i>
                <i class="fa-brands fa-css3-alt fa-4x icon"></i>
                <i class="fa-brands fa-js fa-4x icon"></i>
                <i class="fa-brands fa-vuejs fa-4x icon"></i>
                <i class="fa-brands fa-sass fa-4x icon"></i>
                <i class="fa-brands fa-bootstrap fa-4x icon"></i>
            </div>
        </div>

        <div class="section still-learning">
            <h3 class="section-title">Still learning</h3>
            <div class="learning-items">
                <i class="fa-solid fa-c fa-3x icon">#</i>
                <i class="fa-brands fa-java fa-4x icon"></i>
                <i class="fa-brands fa-php fa-4x icon"></i>
            </div>
        </div>

        <div class="section other-interests">
            <h3 class="section-title">Other interests</h3>
            <div class="icons">
                <i class="fa-solid fa-music fa-4x icon"></i>
                <!-- <img src="/img/harmonica (2).png" alt="Harmonica" class="icon-image"> -->
                <i class="fa-solid fa-guitar fa-4x icon"></i>
                <i class="fa-solid fa-gamepad fa-4x icon"></i>
            </div>
            <div class="interest-texts">
            </div>
        </div>
    </div>

    <div class="summary-wrapper">
        <h2>Summary</h2>

        <h3>Technical Skills:</h3>
        <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>Vue, Pinia</li>
            <li>SASS, SCSS, Bootstrap</li>
            <li>Basic knowledge of PHP, Java, SQL, C#</li>
        </ul>

        <h3>Design:</h3>
        <ul>
            <li>UI/UX design principles</li>
        </ul>

        <h3>Personal Interests:</h3>
        <ul>
            <li>Listening to music</li>
            <li>Gaming</li>
            <li>Learning harmonica and guitar</li>
        </ul>

        <h3>Goal:</h3>
        <ul>
            <li>Continuously improve my skills and take on new challenges in web development</li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.summary-wrapper {
    display: flex;
    flex-direction: column;
    background-color: #1E3A8A;
    border-radius: 20px;
    gap: 2rem;
    padding: 4rem 4rem;
    max-width: 600px;
    margin: 0 auto;
}

.center-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
}

.section {
    background-color: #1E3A8A;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    width: 100%;
    margin: 2rem;
    max-width: 550px;
}

.section-title {
    font-family: 'Arial', sans-serif;
    font-weight: bold;
    font-size: 24px;
    color: #F3F4F6;
    padding-bottom: 40px;
}

.icons {
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
    margin-bottom: 20px;
}

.icon {
    color: #F3F4F6;
    transition: color 0.3s ease;
}

.icon:hover {
    color: #321053;
}

.icon-image {
    max-width: 80px;
    max-height: 80px;
    margin-top: 10px;
}

.learning-items {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 20px;
}

@media (max-width: 768px) {
    .center-container {
        gap: 20px;
    }

    .section {
        max-width: 100%;
        margin-bottom: 30px;
        max-width: 90%;
    }

    .icons {
        flex-wrap: wrap;
        justify-content: center;
    }

    .learning-items{
        display: block;
    }

    .summary-wrapper{
        padding: 1rem;
        gap: 0.5rem;
    }
}
</style>