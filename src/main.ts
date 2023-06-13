import { ApiHelper, AxiosRequestConfig } from '@dhicn/domain-paas-sdk-ts/src/sdk-helper'
import { getDosingParamete } from './wwtp/intelligent_denitrification_example';
import { IToken } from './type';
import { calculationScenario, crerateScnearioByGroup, queryCalculatingProgress, queryCalculatingStatus, queryScenarioOutLetResult } from './wwtp/process_simulation_lab_example';
import { getWholeProcessWaterQuality } from './wwtp/wq_analysis_example';

const tenantId='3a07fc5a-e2cc-2136-6969-0e1f1ad4205f'
const clientId='IdentityServer_App'
const grantType='password'
const clientSecret='955q2w3e*'
const username='bztest1'
const password='955555=hot'

const tokenHelper = new ApiHelper()


/**
 * 登录
 */
export const userLogin = async () => {
  // 方法调用
    await tokenHelper.logIn(tenantId,
    clientId,
    grantType,
    clientSecret,
    username,
    password)
    const token = tokenHelper.apiToken as IToken
   return {token,tenantId}
}

/**
 * 设置token
 */
export const setToken = async (tenantId:string,token:IToken) => {
 const options:AxiosRequestConfig = {headers:{
    tenantId:tenantId,
    Authorization:`${token.token_type} ${token.access_token}`
}}

return options
}


/**
 * 工艺模拟实验室
 */
// 创建方案
crerateScnearioByGroup()
// 计算方案
calculationScenario()
// 查询方案计算进度
queryCalculatingStatus()
// 查询方案日志
queryCalculatingProgress()
// 查询方案出水结果
queryScenarioOutLetResult();

/**
 * 获取全流程水质数据
 */
getWholeProcessWaterQuality()

/**
 * 获取加药参数
 */
getDosingParamete()





