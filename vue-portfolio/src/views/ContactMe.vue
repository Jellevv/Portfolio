<template>
    <div class="contact-wrapper">
        <div class="contact-info">
            <p><strong>Mail:</strong> Jellevv2005@gmail.com</p>
            <p><strong>Tel:</strong> +32 0468 46 06 66</p>
        </div>

        <a href="https://www.linkedin.com/in/jelle-van-vlasselaer-4b876b366/" target="_blank" class="link">
            <i class="fa-brands fa-linkedin"></i>
        </a>

        <router-link to="/privacy" class="privacy-link">
            <i class="fa-solid fa-user-lock"></i> Privacy Policy
        </router-link>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contact-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1E3A8A;
    border-radius: 20px;
    gap: 2rem;
    padding: 3rem 2rem;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
    margin-top: 2rem;
}

.contact-info {
    background-color: #3a62e8;
    font-size: 1.5rem;
    font-family: "Times New Roman", serif;
    padding: 1.5rem 2rem;
    border-radius: 20px;
    border: 2px solid black;
    width: 100%;
}

.link i {
    font-size: 4rem;
    color: #F3F4F6;
    transition: transform 0.3s ease;
}

.link:hover i {
    transform: scale(1.1);
    color: #aaaaaa;
}

.privacy-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #F3F4F6;
    font-size: 1.2rem;
    text-decoration: none;
    transition: transform 0.3s ease;
}

.privacy-link:hover {
    transform: scale(1.1);
    color: #aaaaaa;
}

@media (max-width: 768px) {
    .contact-info {
        font-size: 1.2rem;
        padding: 1rem;
    }

    .instagram-link i {
        font-size: 3rem;
    }

    .privacy-link {
        font-size: 1rem;
    }
}
</style>
