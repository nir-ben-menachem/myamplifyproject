<template>
    <div class="about">
        <b-card bg-variant="transparent">
            <b-card-header header-bg-variant="primary">
                <b-card-title>Full stack amplify project for genome variants testing
                   </b-card-title>
                <b-card-sub-title sub-title-text-variant="black"> Nir Ben Menachem</b-card-sub-title>
            </b-card-header>
            <b-card-body>
                <b-card-text>
                    <b-list-group >
                        <b-list-group-item  variant="info" >
                            Frontend - Implemented in Vue.js
                            <b-list-group >
                                <b-list-group-item variant="secondary" href="https://docs.amplify.aws">
                                    Uses Amplify plugin for vue.js for authentication and storage
                                </b-list-group-item>
                                <b-list-group-item variant="secondary" href="https://bootstrap-vue.org">
                                    Uses BootstrapVue plugin for file submission form
                                </b-list-group-item>
                                <b-list-group-item variant="secondary" href="https://vue-chartjs.org/">
                                    Uses vue-chartjs for charting user results
                                </b-list-group-item>
                            </b-list-group>
                        </b-list-group-item>
                        <b-list-group-item variant="warning" href="https://aws.amazon.com/amplify/framework">
                            Backend - using AWS:
                            <b-list-group >
                                <b-list-group-item variant="warning" href="https://aws.amazon.com/cognito">
                                    Authentication - implemented with Cognito
                                </b-list-group-item>
                                <b-list-group-item variant="warning" href="https://aws.amazon.com/s3">
                                    Storage - implemented in S3
                                </b-list-group-item>
                                <b-list-group-item variant="warning" href="https://aws.amazon.com/lambda">
                                    Functions - implemented with Lambda using python with pandas library as a layer
                                </b-list-group-item>
                            </b-list-group>
                        </b-list-group-item>
                        <b-list-group-item variant="dark" href="https://www.snpedia.com">
                           Application relies on information from snpedia and currently accepts only 23&me raw data
                        </b-list-group-item>
                        <b-list-group-item variant="dark" href="https://www.snpedia.com">
                            Application variants tested relies on information from snpedia and currently accepts only 23&me raw data
                        </b-list-group-item>
                    </b-list-group>
                </b-card-text>
            </b-card-body>

        </b-card>
    </div>
</template>
