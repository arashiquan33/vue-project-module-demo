export default{
    name:'home',
    data:function(){
        return {
            menus:[
                {
                    path:"dashboard",
                    name:"仪表盘"
                },
                {
                    path:"workorder",
                    name:"工单"
                }
            ]
        }
    },
    template:`
        <div class="home" style="display:flex;flex-direction:row;height:100%;">
           <div class="sidebar" style="display:flex;flex-basis:200px;height:100%;border-right:#f1f1f1 5px solid">
              <ul>
                 <li v-for=" menu of menus" :key="menu.name">
                   <a href="javascript:void(0)" @click="$router.push({ path: '/home/'+menu.path })">{{menu.name}}</a>
                 </li>
              </ul>
           </div>
           <div class="content" style="display:flex;flex-grow:1;height:100%">
             <router-view></router-view>
           </div>
        </div>
    `
}