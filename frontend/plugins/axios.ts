import axios from 'axios'

export default defineNuxtPlugin (async () => {
    axios.defaults.baseURL = 'http://localhost:8080'
    return {
        provide: {
            axios: axios
        }
    }
})