import { ApiHelperExtend } from '../api/api';
import { setToken, userLogin } from '../main';

const apiHelper = new ApiHelperExtend()

/**
 * 获取全流程水质数据
 */
export const getWholeProcessWaterQuality = async () => {
  const getToken = await userLogin()
  const options = await setToken(getToken)

  // 接口参数
  const productLine:string='1A'
  const startTime:string='2023-06-01T10:00:00'
  const endTime:string='2023-06-05T00:00:00'
  const modelName:string='在线滚动模型'
  // 接口调用
  const result = await apiHelper.GeneralDataApi.apiV2OutputEntireProcessTsByProductlineGet(productLine, startTime, endTime, modelName,options)
  // 接口返回
  console.log(result.data);
}