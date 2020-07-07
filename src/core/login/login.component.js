
import loginService from './login.service.js'

export default {
    name:'login',
    methods:{
         login:async function(){
            const user =await loginService.login();
            console.log(`user:%o`,user);
            console.log(this)
            this.$router.push('home')
        }
    },
    template:`
           <div style="display: flex;
           justify-content: center;
           align-items: center;
           flex-direction: column;
       }">
                <h3>产品名称:{{$productName}}</h3>
                <button v-on:click="login">点击登录</button>
           </div>
     `,
     mounted:function(){
         console.log(`login mounted`)
     }
}