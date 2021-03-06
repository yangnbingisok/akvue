
import { core ,ioc,vue } from "ak-lib-sys/src";
import {BaseCol,IBaseColConfig}  from "../basecol"


export interface IDateTimeColConfig extends IBaseColConfig{
   
}



@ioc.PlugIn({RegName:"DateTimeCol",BaseType:"BaseCol",Author:"zhengyukun",CreateDate:"2018-01-26",Doc:"时间控件插件"})
@vue.com('<DatePicker type="datetime" placeholder="Select date" ></DatePicker>')
export   class DateTimeCol extends BaseCol {

      constructor (config?: IDateTimeColConfig){
          super(config);
      }


}