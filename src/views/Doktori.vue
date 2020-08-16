<template>
<div>
  <input type="text" v-model="trazi" placeholder="pretraži doktore">
  <br><br>
  <div  v-for="item in search" :key="item.id" class="card m-auto" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{item.ime}} {{item.prezime}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{item.specijalizacija}}</h6>
    <h6 class="card-subtitle mb-2 text-muted">{{item.bolnica}}</h6>
    <router-link :to="{ name: 'Doktor', params: { id: item.id }}">Ocjeni</router-link>
  </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Doktori',
  data() {
    return {
      doktori: [],
      trazi:''
    };
  },
  methods: {
  
  },
  created() {
      const path = 'http://localhost:5000/doktori'
      axios.get(path)
        .then((res) => {
          this.doktori = res.data.data;
        })
        .catch((error) => {
          console.error(error);
        });
      
  },
  computed:{
    search:function(){
      return this.doktori.filter((item)=>{
        return item.ime.toLowerCase().match(this.trazi.toLowerCase()) || item.prezime.toLowerCase().match(this.trazi.toLowerCase()) || item.specijalizacija.toLowerCase().match(this.trazi.toLowerCase()) || item.bolnica.toLowerCase().match(this.trazi.toLowerCase())
      })
    }
  }
};
</script>