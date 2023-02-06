<template>
    <h1><a href="/">Retour</a></h1>
    <h1>Exercice Sécurité 1 : niveau facile</h1>
    <div>
        <form>
            <div>
                <p>
                    1/Quel est l'objectif principal de la cybersécurité ?
                </p>
                <div>
                    <input type="radio" id="a" value="a" v-model="reponse1">
                    <label for="a">Protéger les informations confidentielles en ligne.</label>
                </div>
                <div>
                    <input type="radio" id="b" value="b" v-model="reponse1">
                    <label for="b">Empêcher les utilisateurs d'accéder à internet.</label>
                </div>
                <div>
                    <input type="radio" id="c" value="c" v-model="reponse1">
                    <label for="c">Augmenter les coûts des services en ligne.</label>
                </div>
            </div>

            <div>
                <p>
                    3/Qu'est-ce qu'un logiciel de sécurité ?
                </p>
                <div>
                    <input type="radio" id="a" value="a" v-model="reponse3">
                    <label for="a">a. Un programme qui protège votre ordinateur contre les virus et les logiciels
                        malveillants.</label>
                </div>
                <div>
                    <input type="radio" id="b" value="b" v-model="reponse3">
                    <label for="b">b. Un logiciel qui rend votre ordinateur plus lent.</label>
                </div>
            </div>

            <div>
                <p>
                    4/Pourquoi est-il important de mettre à jour vos logiciels ?
                </p>
                <div>
                    <input type="radio" id="a" value="a" v-model="reponse4">
                    <label for="a">a. Les mises à jour apportent des améliorations de sécurité et corrigent des failles
                        potentielles.</label>
                </div>
                <div>
                    <input type="radio" id="b" value="b" v-model="reponse4">
                    <label for="b">b. Les mises à jour sont inutiles et ralentissent votre ordinateur.</label>
                </div>
            </div>

            <div>
                <p>
                    5/Qu'est-ce qu'un phishing ?
                </p>
                <div>
                    <input type="radio" id="a" value="a" v-model="reponse5">
                    <label for="a">a. Une technique utilisée pour voler des informations personnelles en se faisant
                        passer pour une entreprise de confiance.</label>
                </div>
                <div>
                    <input type="radio" id="b" value="b" v-model="reponse5">
                    <label for="b">b. Une forme de publicité en ligne.</label>
                </div>
            </div>

            <div>
                <p>
                    6/Comment pouvez-vous vous protéger contre le phishing ?
                </p>
                <div>
                    <input type="radio" id="a" value="a" v-model="reponse6">
                    <label for="a">a. En ne cliquant jamais sur les liens dans les e-mails douteux.</label>
                </div>
                <div>
                    <input type="radio" id="b" value="b" v-model="reponse6">
                    <label for="b">b. En partageant toutes vos informations personnelles avec n'importe qui en
                        ligne.</label>
                </div>
            </div>

            <div>

                <p>7/Qu'est-ce qu'un pare-feu ?</p>
                <div>
                    <input type="radio" id="a" value="a" v-model="reponse7">
                    <label for="a">a. Un système qui contrôle l'accès à internet pour votre ordinateur ou votre
                        réseau.</label>
                </div>
                <div>
                    <input type="radio" id="b" value="b" v-model="reponse7">
                    <label for="b">b. Un système qui augmente la vitesse de votre connexion internet.</label>
                </div>
            </div>

            <div>
                <p>8/Pourquoi est-il important de sauvegarder vos données ?</p>
                <div>
                    <input type="radio" id="a" value="a" v-model="reponse8">
                    <label for="a">a. Pour les protéger en cas de perte ou de dommages à votre ordinateur.</label>
                </div>
                <div>
                    <input type="radio" id="b" value="b" v-model="reponse8">
                    <label for="b">b. Pour les rendre plus difficiles à retrouver.</label>
                </div>
            </div>

            <div>
                <p>9/Qu'est-ce qu'un virus informatique ?</p>
                <div>
                    <input type="radio" id="a" value="a" v-model="reponse9">
                    <label for="a">a. Un logiciel malveillant qui peut endommager votre ordinateur et voler vos
                        informations.</label>
                </div>
                <div>
                    <input type="radio" id="b" value="b" v-model="reponse9">
                    <label for="b">b. Un logiciel utile pour améliorer la vitesse de votre ordinateur.</label>
                </div>
            </div>

            <div>
                <p>10/Comment pouvez-vous vous protéger contre les virus informatiques ?</p>
                <div>
                    <input type="radio" id="a" value="a" v-model="reponse10">
                    <label for="a">a. En installant un logiciel antivirus sur votre ordinateur et en le mettant à jour
                        régulièrement.</label>
                </div>
                <div>
                    <input type="radio" id="b" value="b" v-model="reponse10">
                    <label for="b">b. En ne téléchargeant que des logiciels de sources fiables.</label>
                </div>
            </div>

        </form>
        <button @click="sendAnswers">Envoyer</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            reponse1: '',
            reponse2: '',
            reponse3: '',
            reponse4: '',
            reponse5: '',
            reponse6: '',
            reponse7: '',
            reponse8: '',
            reponse9: '',
            reponse10: '',
        }
    },
    methods: {
        sendAnswers() {
            const responses = [
                this.reponse1,
                this.reponse2,
                this.reponse3,
                this.reponse4,
                this.reponse5,
                this.reponse6,
                this.reponse7,
                this.reponse8,
                this.reponse9,
                this.reponse10
            ]
            const correct_responses = [
                "a",
                "b",
                "a",
                "a",
                "a",
                "a",
                "a",
                "a",
                "a",
                "a"
            ]
            console.log(responses);
            console.log(correct_responses);
        }
    }
}
</script>
