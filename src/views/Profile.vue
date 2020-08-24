<template>
    <div class="profile">
        {{email}}
        {{id}}
    </div>
</template>
<script>
import jwtDecode from 'jwt-decode'
export default {
    data(){
        const token= localStorage.usertoken
        const decoded= jwtDecode(token)
        console.log(decoded)
        return{
            email: decoded.sub,
            id:decoded.id
        }
    }
}
</script>