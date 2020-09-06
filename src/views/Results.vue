<template>

    <div class="container">
        <h1>Variant analysis</h1>
        <b-overlay :show="!loaded">
        <div class="pt-5">

            <b-button-group size="sm" class="mx-3 my-3"  v-for="(item) in chartData.datasets" v-bind:key="item.label">
                <b-button variant="primary" :pressed.sync="item.state" @click="addData">{{item.label.substr(0,10)}}</b-button>
            </b-button-group>
        </div>
        <b-list-group horizontal > Selected:
            <b-list-group-item class="mx-lg-2" variant="info" v-for="(data) in selectedData.datasets" v-bind:key="data.label">
                <b-badge variant="primary">{{data.label.substr(0,10)}}</b-badge>
            </b-list-group-item>
            <b-button @click="removeFiles" size="sm" variant="danger">
                <b-icon-trash2-fill/>Remove from cloud</b-button>
        </b-list-group>

        <BarChart
                class="mt-lg-4"
                :key="chosenFiles"
                v-if="loaded"
                :chartData="selectedData"
                :options="options"
        />
        </b-overlay>
    </div>
</template>

<script>
    import BarChart from "../components/Chart.vue";
    import res from '../assets/res.json'
    import {Storage} from 'aws-amplify';

    export default {
        name: "Results",
        components: {
            BarChart
        },
        data() {
            return {
                loaded: false,
                chosenFiles: 0,
                //chartData labels for metrics
                chartData: {
                    labels: res.index,
                    datasets: []
                },
                //Chart options configuration
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            }
        },
        computed: {
            //computed selected data to display
            selectedData() {
                return {
                    labels: this.chartData.labels,
                    datasets: this.chartData.datasets.filter((dataset) => dataset.state)
                };
            }
        },
        methods: {
            addData() {
                this.chosenFiles++;//Change key to render component
            },
            async removeFiles() {
                if(this.selectedData.datasets.length === 0) return
                this.loaded = false
                for(const item in this.selectedData.datasets) {
                    const label = this.selectedData.datasets[item].label
                    console.log(label)
                    await Storage.remove(label,{level : 'protected'}).then(() => {
                    }).catch((err) => {
                        console.log(err)
                    })
                }
                this.$router.go(0);
            },
            randomColor() {
                const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
                const randomByte = () => randomNumber(0, 255)
                const randomPercent = () => (randomNumber(50, 100) * 0.01).toFixed(2)
                const randomCssRgba = `rgba(${[randomByte(), randomByte(), randomByte(), randomPercent()].join(',')})`
                return randomCssRgba
            }
        },
        async mounted() {
            //Download all files from protected folder for charting
            const files = await Storage.list('', {level: 'protected'})
            //Create presigned url to download files from
            for (const item of files) {
                const url = await Storage.get(item.key, {
                    level: 'protected',
                    expires: 5
                })
                //Download json file using fetch request
                const response = await fetch(url)
                const file = await response.json()
                this.chartData.labels = file.index
                await this.chartData.datasets.push({
                    backgroundColor: this.randomColor(),
                    label: item.key,
                    data: file.data.flat(),
                    state: false
                })
            }
            this.loaded = true//Display graph
        }
    };
</script>

<style scoped>

</style>