<template>
  <div class="dodaj_doktora">
    <h1>Dodaj doktora</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm-3">

        </div>
        <div class="col-sm-6">
          <form @submit.prevent="login">
            <div class="form-group">
              <label for="ime">Ime:</label>
              <input type="text" class="form-control" id="ime" v-model="ime" placeholder="ime" />
            </div>
            <div class="form-group">
              <label for="prezime">Prezime:</label>
              <input type="text" class="form-control" id="prezime" v-model="prezime" placeholder="prezime" />
            </div>
            <div class="form-group">
              <label for="specijalizacija">Specijalizacija:</label>
              <input type="text" class="form-control" id="specijalizacija" v-model="specijalizacija" placeholder="specijalizacija" />
            </div>
            <div class="form-group">
              <label for="bolnica">Bolnica:</label>
              <input type="text" class="form-control" id="bolnica" v-model="bolnica" placeholder="bolnica" />
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
  name:'DodajDoktora',
  data(){
    return{
      ime:'',
      prezime:'',
      specijalizacija:'',
      bolnica:'',
      error:''
    }
  },
  methods:{
    login:function(){
    const path = 'http://localhost:5000/dodajDoktora'
   
         this.axios.post(path,{
            ime:this.ime,
            prezime:this.prezime,
            specijalizacija:this.specijalizacija,
            bolnica:this.bolnica
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
            this.$router.push({name:"About"})
            console.log(res.data)
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });     
    }
  }
}
</script>
