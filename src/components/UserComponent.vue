<script>

// import Api file
import AppApi from '../services/AppApi'

//import helper functions of vuex to retrieve and set data from store.
import { mapMutations, mapState, mapGetters } from 'vuex'

export default {

    //add this
    data(){
        return {
            username: '',
            phone:'',
            email: '',
            website:''
        }
    },

    //add in the life cycle hook computed add this
    computed: {

        ...mapState([
            //this is the variable initialiazed in the state section of store(store.js)
            'users'
        ]),

        ...mapGetters([
            //the getter function names in the store.js file
            'maxId',
            'totalUsers'
        ])

    },

    //add in the life cycle hook methods add this
    methods: {

        /*
        * Manipulations of store
        */

        //Adding an user to the store
        addUserInput(){
            if(!this.username) return;
        },

        //Removing a user from store
        removeUser(id){
            this.REMOVE_USER(id)
        },

        addUser(data){
            //data is coming from API
            /*ADD_USER is a mutation function. 
            It is now available for calling because we have used mapMutations to bind that with the component 
            */
            this.ADD_USER(data)
        },

        //function names in the mutation section in the store.js
        ...mapMutations([
            'ADD_USER',
            'REMOVE_USER'
        ]), // now, we've added all the code related to store.js, tie to call and utilize them.
    },

    //call this API in the created life cycle hook of vuejs
    created() { //this is a lifecycle hook

//AppApi which calls the API on page load.We are storing the response in our store.
        AppApi.getUsers().then(users => {
            this.addUser(users)
        })

        .catch()

        .finally( () => {

        }) 

    }


}

</script>


<template>
    
    <div>
        <h2>Users</h2>

        <div class="container">
            <div class="addcontainer">

                <div class="row">
                    <div>Name</div>
                    <div>
                        <input type="text" v-model="username" />
                    </div>
                </div>

                <div class="row">
                    <div>Email</div>
                    <div>
                        <input type="email" v-model="email" />
                    </div>
                </div>

                <div class="row">
                    <div>Phone</div>
                    <div>
                        <input type="text" v-model="phone" />
                    </div>
                </div>

                <div class="row">
                    <div>Website</div>
                    <div>
                        <input type="text" v-model="website" />
                    </div>
                </div>

                <button @click="addUserInput">Add</button>

            </div>

            <div class="displaytable">
                <div class="header">
                    <p>Name</p>
                    <p>Email</p>
                    <p>Phone</p>
                    <p>Website</p>
                </div>

<!-- Binding the store data with template -->
                <div class="row" v-for="(user, index) in users" :key="user.id" >
                    <div>  {{user.name}} </div>
                    <div> <a href='"mailto:" +user.email'>{{ user.email}} </a> </div>
                    <div> {{user.phone}} </div>
                    <div> {{user.website}}</div>
                    <span @click="removeUser(index)" class="link" >Delete</span>
                </div>

            </div>

        </div>

<!-- Use of getters 
    we had mapGetters in our application.simply call that getter function.
-->
        <p>Total users in store : <strong> {{ this.totalUsers }} </strong></p>

    </div>

</template>


<style scoped>
.container {
    margin-left:5rem;
    width:80%;
}
.displaytable{
    width:100%;
    margin-top: 1rem;
    
}
.row {
  display: flex;
  justify-content:flex-start;
  flex-direction:row;
  width:100%;
  padding:10px;
}
.addcontainer {
  width: 20rem;
}
.header {
    display: flex;
    justify-content:flex-start;
    flex-direction:row;
    width:99%;
    padding:5px;
    font-weight:bold;
    background-color:#e3e3e3;
    color:#fff;
    height:48px;
    line-height: 48px; 
}

/* .header > p{
    margin-bottom: 1rem;
} */
.row > div , .header > p{
  width :19%;
  text-align:left;
  word-wrap: break-word;
  color :#333300;
}
.row:nth-of-type(odd) {
background-color:#DAF7A6;
}
.row:nth-of-type(even) {
background-color:#FFFF99;
}
    
.link {
  text-decoration:underline;
  color:#000FFF;
  cursor:pointer;
}
</style>

