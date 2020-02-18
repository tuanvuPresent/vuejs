<template>
    <div class="v-card justify-center">
        <h2>Please sign in</h2>
        <v-form>
            <v-text-field
                    :rules="emailRules"
                    v-model="email"
                    label="Name">
            </v-text-field>
            <v-text-field
                    type="password"
                    :rules="passwordRules"
                    v-model="password"
                    label="Password">
            </v-text-field>
            <div class="d-flex justify-end">
                <RegisterComponent/>
                <v-btn color="success" @click="signin">Sign in</v-btn>
            </div>
        </v-form>
    </div>
</template>

<script>
    import router from "../../router/routers";
    import RegisterComponent from "./RegisterComponent";
    import axios from 'axios';

    export default {
        name: "LoginComponent",
        components: {RegisterComponent},
        data() {
            return {
                token: null,
                email: '',
                password: '',
                emailRules: [
                    v => !!v || 'Mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                ],
            }
        },
        methods: {
            async signin() {
                // axios.get('http://192.168.0.152:8000/account/')
                //     .then(function (response) {
                //         console.log(response);
                //     })
                //     .catch(function (error) {
                //         console.log(error);
                //     });

                await axios.post('http://192.168.0.152:8000/auth/login/', {
                    username: this.email,
                    password: this.password
                })
                    .then(function (response) {
                        let data = response.data.data;
                        this.token = data.token;
                        console.log(data, this.token);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                console.log(this.token);
                if (this.token !== null) {
                    localStorage.setItem('token', this.token);
                    await router.push('/')
                }
            },
        }
    }
</script>

<style scoped>

</style>
