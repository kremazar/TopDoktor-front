<template>
<div>
  <div  v-for="item in msg" :key="item.id" class="card  m-auto" style="width: 18rem;">
  <div class="card-body m-auto">
    <h5 class="card-title">{{item.ime}} {{item.prezime}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{item.specijalizacija}}</h6>
    <h6 class="card-subtitle mb-2 text-muted">{{item.bolnica}}</h6>
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
      msg: {},
    };
  },
  methods: {
  
  },
  created() {
          const path = 'http://localhost:5000/doktori';
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