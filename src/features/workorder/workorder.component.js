
import workorderService from './workorder.service'

export default {
    name:'workorder',
    data:function(){
        return {
            workorders:workorderService.getWorkorders()
        }
    },
    template:`<div>
               <p>工单列表</p>
               <ul >
                  <li v-for="name of workorders" :key="name">
                    {{name}}
                  </li>
               </ul>
      </div>`
}