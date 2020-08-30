<template>
    <div id="app">
        <div id="nav">
<!--            <router-link to="/login">Login</router-link> |-->
            <router-link v-if="signedIn" to="/">Home </router-link>
            <router-link v-if="!signedIn" to="/login"> Login </router-link>
            <router-link v-if="signedIn" to="/upload">| Upload </router-link>
            <router-link v-if="signedIn" to="/results">| Results</router-link>
            <router-link to="/about">| About </router-link>
        </div>
            <router-view />
    </div>
</template>
<script>
    import { Auth, Hub } from 'aws-amplify'
    export default {
        name: 'app',
        data() {
            return {
                signedIn: false
            }
        },
        beforeCreate() {
            Hub.listen('auth', data => {
                console.log('data:', data)
                const { payload } = data
                if (payload.event === 'signIn') {
                    this.signedIn = true
                    this.$router.push('/')
                }
                if (payload.event === 'signOut') {
                    this.$router.push('/login')
                    this.signedIn = false
                }
            })
            Auth.currentAuthenticatedUser()
                .then(() => {
                    this.signedIn = true
                })
                .catch(() => this.signedIn = false)
        }
    }
</script>
<style>
    :root {
        --amplify-primary-color : coral;
        --amplify-primary-contrast : lightcyan;
        --amplify-primary-tint : skyblue;
        --amplify-primary-shade: dodgerblue;
        --amplify-secondary-contrast : whitesmoke;
         --amplify-secondary-tint : red;
        --amplify-grey : orangered;
        --amplify-light-grey : lightblue;
        --amplify-white : rgba(3, 63, 78, 0.7);
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        background-image: url("assets/bg-gene.png");
        background-color: lightcyan;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
    #amplify-signout {
        width: 100px;
        margin: 0 auto;
        position: absolute;
        bottom: 0;


    }
</style>
