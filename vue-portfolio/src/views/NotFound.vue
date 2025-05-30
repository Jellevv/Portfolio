<template>
    <div class="not-found-container">
        <h2>{{ notFoundTitel }}</h2>
        <p>{{ notFoundText }}</p>
        <router-link id="redirect" to="/">Home</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            notFoundTitel: "404 Not Found",
            notFoundText: "The page you tried to reach does not exist."
        }
    }
}
</script>
<style scoped>
h2 {
    text-align: center;
    margin-top: 80px;
    font-size: 2rem;
    color: #ffffff;
}

p {
    text-align: center;
    margin-top: 3rem;
}

.not-found-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

#redirect {
    margin-top: 3rem;
    text-decoration: none;
    color: white;
    background-color: #1E3A8A;
    font-size: 1.5rem;
    border-radius: 20px;
    padding: 10px 20px;
}
</style>
