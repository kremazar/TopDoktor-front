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
        
          <br><br>
            <p class="btn btn-warning" v-for="error in errors" v-bind:key="error.id">{{ error }}</p>
          

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
      errors: [],
    }
  },
  methods:{
    login:function(){
      this.errors = [];

      if (!this.email) {
        this.errors.push('Email required');
      }
      else if (!this.password) {
        this.errors.push('Password required');
      }else{
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
          localStorage.setItem('usertoken',res.data.token)
          this.email=''
          this.password=''
          this.$router.push({name:'Doktori'})
        })
        .catch((error) => {
          error="Kriva lozinka ili email !!!"
          this.errors.push(error)
          console.error(error);
        })
        .then(() =>{
         
        })
           
      }
    
    },   
  }
}
</script>
