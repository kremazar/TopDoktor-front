<template>
  <div class="login">
    <h1>This is an Login page</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm-3">

        </div>
        <div class="col-sm-6">
          <form @submit.prevent="login">
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control" id="email" v-model="email" placeholder="Enter email" />
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" class="form-control" v-model="password" placeholder="Password" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
          <div class="error" v-if="error">{{error.message}} </div>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'login',
  data(){
    return{
      email:'',
      password:'',
      error:''
    }
  },
  methods:{
    login:function(){
    const path = 'http://localhost:5000/login'
   
         this.axios.post(path,{
            email:this.email,
            password:this.password
         },
             {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
            'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
        )
        .then((res) => {
          if (res.data==="OK"){
            this.$router.push({name:"About"})
          }else{
            console.log("Wrong email or password")
          }
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });     
    }
  }
}
</script>
