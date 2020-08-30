<template>
    <div>
    <amplify-authenticator > </amplify-authenticator>

    </div>
</template>

<script>
   //import {AuthState, onAuthUIStateChange} from '@aws-amplify/ui-components'
    //import {Auth} from 'aws-amplify';
    export default {
        name: "Login"
        /*,data() {
             return {
                 authState: undefined,
                 user: undefined
             };
         },

         async mounted() {

             onAuthUIStateChange((authState, authData) => {
                 this.authState = authState;
                 this.user = authData;
                 if (authState === AuthState.SignedIn) this.$router.push({name: 'Home'});
                 //else if (authState === AuthState.SignedOut) this.$router.push({name: 'Login'});
             })/*;
              try {
                 await Auth.currentAuthenticatedUser()
                 await this.$router.push({name: "Home"})
              }
              catch (err) {
                  console.log(err)
                  await this.$router.push({name: "Login"});
              }

         }
*/

    }
</script>

<style scoped>
    amplify-authenticator {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 4;
        height: 100vh;
        color: #2c3e50;

    }

</style>