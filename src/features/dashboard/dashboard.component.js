
import dashboardService from './dashboard.service'
import {workOrderSelectComponent} from '../workorder'
import util from '../../shared/services/util.service'
export default {
    name:'dashboard',
    components:{
        'workorder-select':workOrderSelectComponent
    },
    data:function(){
      
        return {
            names:dashboardService.getnames(),
            btnclick:function(){
                alert(util.getToken())
            }
        }
    },
    mounted(){
        util.setToken('123token')
    },
    template:`<div>
               <p>仪表盘</p>
               <ul >
                  <li v-for="name of names" :key="name">
                    {{name}}
                  </li>
               </ul>
               <p>显示工单下拉组件，测试业务模块互相引用</p>
               <workorder-select></workorder-select>
               <p>显示共享按钮组件和警告组件,测试共享模块</p>
               <action-toolbar></action-toolbar>
               <alert></alert>
               <button @click="btnclick">调用共享模块的服务</button>
      </div>`
}