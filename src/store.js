import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)


//add mutations, getters and state
export default new Vuex.Store({

    state: {
        //state : It holds all the data for our application
        
        //display a list of users
        users: []
    },

    getters: {
        //getter for total number of users
        totalUsers: state => {
            return state.users.length
        },

        //getter for getting the Max id from the user list,
        //The user list is a Json and it hasa field id.
        maxId: state => {
            return Math.max(...state.users.map(o => o.id), 0) +1
        }
    },

    mutations: {
        //add user to the existing array
        ADD_USER: (state, name) => {
            state.users.push(...name)
        },

        //Remove user from the Lint
        REMOVE_USER: (state, index) => {
            state.users.splice(index, 1)
        }

    },

    actions: {
        

    }


})













