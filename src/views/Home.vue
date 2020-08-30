<template>

        <!--        <amplify-greetings v-if="authState === 'signedin' && user" :username="user.username"></amplify-greetings>-->

        <div id="amplify-signout">

            <amplify-sign-out to="/login"></amplify-sign-out>
        </div>

</template>

<script>
    // @ is an alias to /src
    //import HelloWorld from '@/components/HelloWorld.vue'
    //import index from '@/components/index.vue'
    // import {onAuthUIStateChange} from "@aws-amplify/ui-components";

    export default {
        name: 'Home'
        /* created() {
             onAuthUIStateChange((authState, authData) => {
                 this.authState = authState;
                 this.user = authData;
             })
         },

         data() {
             return {
                 authState: undefined,
                 user: undefined
             };
         },
         components: {
            // index
         },
         beforeDestroy() {
             return onAuthUIStateChange;
         }*/
    }
</script>
