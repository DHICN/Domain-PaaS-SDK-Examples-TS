import { ApiHelperExtend } from '../api/api';
import { setToken, userLogin } from '../main';


const apiHelper = new ApiHelperExtend()

/**
 * 获取碳源加药
 */
export const getDosingParamete = async() => {
  const getToken = await userLogin()
  const options = await setToken(getToken)

  // 接口参数
  const category:number = 1,
  productionLineCode:string ='1A'
  // 接口调用
  const result = await apiHelper.IntelligentDenitrificationApi.apiIntelligentDenitrificationGetDosingParameterGet(category,productionLineCode,options)
  // 接口返回
  console.log(result.data);
}

