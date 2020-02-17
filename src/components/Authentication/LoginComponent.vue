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
            signin() {
                let token = '';
                axios.post('http://192.168.0.152:8000/auth/login', {
                    username: this.email,
                    password: this.password
                })
                    .then(function (response) {
                        token = response.data.token;
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                if (this.email === 'admin@gmail.com' && this.password === 'admin') {
                    localStorage.setItem('token', token);
                    router.push('/')
                }
            },
        }
    }
</script>

<style scoped>

</style>
