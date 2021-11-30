// Our application on initial load (more specifically on load of a component) will fetch some data from an API and stores it in the vuex store.We read the same data from the store and do all the manipulations with it.

import axios from 'axios'

export default {

    getUsers() {
        
        return axios.get('/users')

            .then(response => {
            return response.data
        })

    }

}



