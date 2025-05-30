<template>
    <div>
        <h1 class="section-title">School projects:</h1>

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

        <div class="container mt-4">
            <div class="row">
                <div class="col-lg-6 mb-4">
                    <p class="text">
                        For my end project in middle school, I made a website for a customer. Due to unfortunate
                        circumstances, this
                        website never went online. However, the website is functional in both the frontend and
                        backend.<br><br>
                        I used HTML, CSS, Bootstrap, JavaScript, and PHP. It has a working contact page that can send
                        emails to the
                        assigned email address. If the customer wanted to change anything on the site, such as images,
                        text, or cards
                        with certain information, it would automatically update on the site itself.
                    </p>
                </div>
                <div class="col-lg-6 mb-4">
                    <p>Contact page frontend</p>
                    <img src="/img/project1.png" alt="Contact page frontend" class="img-fluid mb-4" />
                    <p>Event page backend</p>
                    <img src="/img/project2.png" alt="Event page backend" class="img-fluid" />
                </div>
            </div>
        </div>

        <hr />

        <!-- Section 2 -->
        <div class="container mt-4">
            <div class="row">
                <div class="col-lg-6 mb-4">
                    <p class="text">
                        In middle school I made some smaller applications with Java. Such as making an arraylist and
                        keeping the
                        data, even if the application closes, or an application that can track the user's location and
                        give
                        time stamps on when the data was collected.<br><br>
                        I don’t have a lot of experience in Java yet but I’d like to learn more about it when the time
                        is right.
                    </p>
                </div>
                <div class="col-lg-6 mb-4">
                    <p>App with data from arraylist</p>
                    <img src="/img/project3.png" alt="App arraylist" class="img-fluid mb-4" />
                    <p>Location tracking app</p>
                    <img src="/img/project4.png" alt="Location tracking app" class="img-fluid" />
                </div>
            </div>
        </div>

        <hr />

        <!-- Section 3 -->
        <h1 class="section-title">Non-school projects:</h1>

        <div class="container mt-4 mb-5">
            <div class="row">
                <div class="col-lg-6 mb-4">
                    <p class="text">
                        I also made some minor sites or applications outside of school. Mainly with HTML, CSS, and PHP.
                        For a while I learned XML, CS and C#. But I learned quickly that those languages interest me way
                        less.<br><br>
                        But perhaps I might dig deeper into those languages too. The more languages I can work with, the
                        more
                        doors will open for me.
                    </p>
                </div>
                <div class="col-lg-6 mb-4">
                    <p>Xml page</p>
                    <img src="/img/project5.png" alt="Xml page" class="img-fluid mb-4" />
                    <p>Xaml.cs page</p>
                    <img src="/img/project6.png" alt="Xaml page" class="img-fluid" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.section-title {
    font-size: 36px;
    font-family: 'Times New Roman', Times, serif;
    font-weight: bold;
    text-align: left;
    margin-bottom: 10px;
}

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

.text {
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
    line-height: 1.8;
}

img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}
</style>