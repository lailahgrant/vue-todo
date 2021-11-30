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
        </div>

    </div>

</template>


<style scoped>
.container {
    margin-left:5rem;
    width:80%;
    
}

.row {
  display: flex;
  justify-content:flex-start;
  flex-direction:row;
  width:100%;
  padding:5px;
}
.addcontainer {
  width: 300px;
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
.row > div , .header > div{
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

