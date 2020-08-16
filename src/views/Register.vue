<template>
  <div class="about">
    <h1>Register</h1>
    
    <div class="container ">
      <div class="row">
        <div class="col-sm-2">

        </div>
        <div class="col-sm-9">
          <form >
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control" v-model="user.email" placeholder="Email" />
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" class="form-control" v-model="user.password" placeholder="Password" />
            </div>
            <div class="form-group">
              <label for="password2">Confirm Password:</label>
              <input type="password" class="form-control" v-model="user.password2" placeholder="Confirm Password" />
            </div>
            <button v-on:click.prevent="post"  class="btn btn-primary">Submit</button>
          </form>
          <br><br>
           <p class="btn btn-warning" v-for="error in errors" v-bind:key="error.id">{{ error }}</p>
        </div>
        <div class="col-sm-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'signup',
  data(){
    
    return{
      errors: [],
      user:{
      email:'',
      password:'',
      password2: ''
    }
    }
  },
  methods:{
    post:function(){
      if (this.user.password != this.user.password2){
         this.errors.push('Lozinke nisu jednake');
      }else if (!this.user.email) {
        this.errors.push('Email required');
      }else if (!this.user.password) {
        this.errors.push('Password required');
      }
      else{
        const path = 'http://localhost:5000/register'
      let currentObj = this;
         this.axios.post(path,{
            email:this.user.email,
            password:this.user.password
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
          console.log(res.data)
           currentObj.output = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          this.errors.push(error)
          console.error(error);
        }).then(()=>{
          this.$router.push('/login')
        })
      }
    }
  }
}
</script>
