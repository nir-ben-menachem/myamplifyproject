<template>
    <div class="" >
        <b-overlay :show="loading">
            <div> Select genome to analyze </div>
            <b-form  @submit.prevent="createPost">
                <b-form-group
                        :invalid-feedback="invalidFeedback"
                >
                    <b-form-select v-model="selected" required :state="Boolean(selected)"
                                   :options="options" class="mb-5 w-50"></b-form-select>
                   <b-form-file
                            class="my-5 w-75  "
                            id="file-default"
                            accept=".txt"
                            v-model="file"
                            required
                            :state="fileState"
                            placeholder="Choose a file or drop it here..."
                            drop-placeholder="Drop file here...">
                    </b-form-file>
                        <b-row>
                            <b-col>
                                <b-button @click="file = null" variant="danger">
                                    <b-icon-trash2-fill/>Remove</b-button>
                            </b-col>
                            <b-col>
                                <b-button type="submit" variant="primary">
                                    <b-icon-cloud-upload/>Upload
                                </b-button>
                            </b-col>
                        </b-row>
                </b-form-group>
            </b-form>

        </b-overlay>
        <b-collapse v-model="uploaded">
    <b-icon-check-circle variant="success"/>
            Upload successful, the results should up on the results page
        </b-collapse>
    </div>
</template>

<script>
    import {Storage} from 'aws-amplify';//Storage,
    const maxFileSize = 50 * 1024 * 1024;
    export default {
        name: 'index',
        data() {
            return {
                file: null,
                loading: false,
                uploaded: false,
                selected: null,
                options: [
                    {value: null, text: 'Please select an option'},
                    {value: '23&me', text: 'Use 23&me  raw genome file'},
                    {value: 'Illumina', text: 'Use Illumina genome file (In development)', disabled: true}
                ]

            }
        },
        computed : {
            fileState() {
                    return (Boolean(this.file) && this.file.size < maxFileSize
                        && this.file.type === "text/plain" && Boolean(this.selected))
            },
            invalidFeedback() {
                if (this.file) {
                    if (this.file.type !== "text/plain") {
                        return "Choose file in text format"
                    }
                    if (this.file.size > maxFileSize) {
                        return "File too big (> 50MB) "
                    }
                }
                return '';
            }
        },
        methods: {
            createPost: async function (evt) {
                if (this.file.size > maxFileSize) {
                    evt.preventDefault();
                    alert('File too big (> 50MB)');
                    return;
                }
                this.loading = true;
                await Storage.vault.put(
                    this.file.name,
                    this.file
                ).then((results) => {
                    console.log(results)
                    this.loading = false
                    this.uploaded= true
                }).catch((err) => {
                    console.log(err)
                    this.loading = false
                    alert(err)
                });
            }
        }
    }
</script>
<style scoped>

</style>