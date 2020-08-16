<template>
    <div class="profile">
        {{email}}
    </div>
</template>
<script>
import jwtDecode from 'jwt-decode'
export default {
    data(){
        const token= localStorage.usertoken
        const decoded= jwtDecode(token)
        return{
            email: decoded.sub
        }
    }
}
</script>