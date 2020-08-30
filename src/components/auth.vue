<template>
    <div>
    <amplify-authenticator >
        <div>
            My App
            <amplify-sign-out></amplify-sign-out>
        </div>
    </amplify-authenticator>
    </div>
</template>

<script>
   // import {AmplifyEventsBus} from "aws-amplify"
    export default {
        name: "auth"
    }
</script>

<style scoped>

</style>