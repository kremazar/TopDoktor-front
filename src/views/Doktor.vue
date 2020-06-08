<template>
<div>
  <div  v-for="item in msg" :key="item.id" class="card  m-auto" style="width: 18rem;">
  <div class="card-body m-auto">
    <h5 class="card-title">{{item.ime}} {{item.prezime}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{item.specijalizacija}}</h6>
    <h6 class="card-subtitle mb-2 text-muted">{{item.bolnica}}</h6>
  </div>
</div>
   <form >
            <div class="form-group">
              <label for="ocjena">Ocjena:</label>
              <input type="number" min="1" max="5" class="form-control" placeholder="ocjena" v-model="ocjena" />
              <label for="doktor_id">doktor_id:</label>
              <input type="text"  class="form-control" value="bosna" placeholder="doktor_id" v-model="id" />
            </div>
            <button v-on:click.prevent="ocjeni"  class="btn btn-primary">Ocjeni</button>
          </form>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Doktori',
  data() {
    return {
      id:this.$route.params.id,
      msg: {},
      ocjena:1,
      user_id:6,
    };
  },
  methods: {
    ocjeni:function(){
      const path = 'http://localhost:5000/ocjeni'
      let currentObj = this;
         this.axios.post(path,{
            ocjena:this.ocjena,
            user_id:this.user_id,
            doktor_id:this.id
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
  },
  created() {
          const path = 'http://localhost:5000/doktor/'+this.id;
      axios.get(path)
        .then((res) => {
            
          this.msg = res.data.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
  },
};
</script>