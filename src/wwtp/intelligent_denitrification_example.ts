import { ApiHelperExtend } from '../api/api';
import { setToken, userLogin } from '../main';


const apiHelper = new ApiHelperExtend()

/**
 * 获取加药参数
 */
export const getDosingParamete = async() => {
  const userInfo = await userLogin()
  const options = await setToken(userInfo.tenantId,userInfo.token)

  // 接口参数
  const category:number = 1,
  productionLineCode:string ='1A'
  // 接口调用
  const result = await apiHelper.IntelligentDenitrificationApi.apiIntelligentDenitrificationGetDosingParameterGet(category,productionLineCode,options)
  // 接口返回
  console.log(result.data);
}

