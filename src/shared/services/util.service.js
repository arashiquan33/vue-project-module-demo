export default {
       setToken(token){
           window.localStorage.setItem('app-token',token)
       },
       getToken(){
           return window.localStorage.getItem('app-token')
       },
}