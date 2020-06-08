<template>
  <div class="about">
    <h1>Register</h1>
    <div v-if="error" class="error">
      {{error.message}}
    </div>
    <div class="container ">
      <div class="row">
        <div class="col-sm-2">

        </div>
        <div class="col-sm-9">
          <form >
            <div class="form-group">
              <label for="userName">UserName:</label>
              <input type="userName" class="form-control" placeholder="UserName" v-model="user.UserName" />
            </div>
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
              <input type="password" class="form-control" placeholder="Confirm Password" />
            </div>
            <button v-on:click.prevent="post"  class="btn btn-primary">Submit</button>
          </form>
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
      error:'',
      user:{
      email:'',
      password:'',
      UserName:''
    }
    }
  },
  methods:{
    post:function(){
      const path = 'http://localhost:5000/register'
      let currentObj = this;
         this.axios.post(path,{
            username:this.user.UserName,
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
          console.error(error);
        });
    }
  }
}
</script>
