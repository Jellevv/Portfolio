<template>
    <div>
        <div class="pdf-links">
            <a href="/externe bestanden/Alle wpl1 opdrachten.pdf" target="_blank">
                <i class="fa-regular fa-file-pdf"></i> Wpl1 opdrachten
            </a>
            <a href="/externe bestanden/Eindreflectie.pdf" target="_blank">
                <i class="fa-regular fa-file-pdf"></i> Wpl1 Eindreflectie
            </a>
            <a href="/externe bestanden/WPL2 Case.pdf" target="_blank">
                <i class="fa-regular fa-file-pdf"></i> Wpl2 Case
            </a>
            <a href="/externe bestanden/Individuele Eindreflectie WPL2.pdf" target="_blank">
                <i class="fa-regular fa-file-pdf"></i> Wpl2 Eindreflectie
            </a>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
.pdf-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
}

.pdf-links a {
    color: white;
    font-size: 20px;
    text-decoration: none;
}

.pdf-links a i {
    margin-right: 8px;
    color: #ff0000;
}

.pdf-links a:hover {
    color: #aaaaaa;
    text-decoration: underline;
}
</style>