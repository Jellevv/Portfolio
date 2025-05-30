<template>
    <div class="container-fluid">
        <div class="container mx-auto p-2">
            <div class="row">
                <div class="col-md-6">
                    <h1>Privacy-terms</h1>
                </div>
                <div class="col-md-6">
                    <h1>Last updated: 10/01/2025</h1>
                </div>
            </div>

            <h5 class="pt-5">
                This Privacy Policy describes how this site collects, uses and protects personal information
                when you visit our website.
            </h5>
            <p>
                We use your Personal Information to provide and improve the Service. By using the Service, you agree to
                the
                collection and use of information in accordance with this policy. Unless otherwise defined in this
                Privacy
                Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions,
                accessible
                at Terms and Conditions.
            </p>

            <h3>Information Collection and Use</h3>
            <p>
                We collect several different types of information for various purposes to provide and improve our
                Service to
                you.
            </p>

            <h3>Types of Data Collected: Personal Data</h3>
            <p>
                While using our Service, we may ask you to provide us with certain personally identifiable information
                that can
                be used to contact or identify you ("Personal Data"). Personal Data may include, but is not limited to:
                <br>* Name
                <br>* Address, State, Zip/Postal Code, City
                <br>* Cookies and Usage Data
            </p>

            <h3>Use of Data</h3>
            <p>
                This site uses the collected data for various purposes:
                <br>* To provide and maintain the Service.
                <br>* To notify you about changes to our Service.
                <br>* To allow you to participate in interactive features of our Service when you choose to do so.
                <br>* To provide customer support.
                <br>* To gather analytics or valuable information so that we can improve our Service.
                <br>* To monitor the usage of the Service.
                <br>* To detect, prevent, and address technical issues.
            </p>

            <h3>Data Security</h3>
            <p>
                The security of your data is important to us, but remember that no method of transmission over the
                Internet,
                or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to
                protect your Personal Information, we cannot guarantee its absolute security.
            </p>

            <h3>Links to Other Websites</h3>
            <p>
                Our Service may contain links to other sites that are not operated by us. If you click on a third-party
                link, you will be directed to that third party's site. We strongly advise you to review the Privacy
                Policy
                of every site you visit.
            </p>
            <p>
                We have no control over, and assume no responsibility for, the content, privacy policies, or practices
                of
                any third-party sites or services.
            </p>

            <h3>Children's Privacy</h3>
            <p>
                Our Service does not address anyone under the age of 18 ("Children") without parental supervision. We do
                not
                knowingly collect personally identifiable information from anyone under the age of 18. If you are a
                parent
                or guardian and you learn that your Child has provided us with Personal Information, please contact us.
                If
                we become aware that we have collected Personal Information from children without verification of
                parental
                consent, we take steps to remove that information from our servers.
            </p>

            <h3>Contact</h3>
            <p>
                If you have any questions about this Privacy Policy, you may contact us:
                <br><br>* By Mail: jellevv2005@gmail.com
                <br>* By Phone number: +32 (0)468/46.06.66
            </p>

            <router-link to="/" class="btn-more">Back to the site</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "PrivacyPolicy"
}
</script>

<style scoped>
.container-fluid {
    margin-bottom: 60px;
}

.btn-more {
    display: inline-block;
    background-color: #EDA622;
    color: white;
    font-size: 18px;
    padding: 10px 20px;
    border-radius: 50px;
    margin-top: 30px;
    text-decoration: none;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-more:hover {
    background-color: #FF9800;
    transform: scale(1.05);
    text-decoration: none;
}
</style>