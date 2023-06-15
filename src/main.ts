import { ApiHelper, AxiosRequestConfig } from '@dhicn/domain-paas-sdk-ts/src/sdk-helper'
import { getDosingParamete } from './wwtp/intelligent_denitrification_example';
import { IToken } from './type';
import { calculationScenario, crerateScnearioByGroup, queryCalculatingProgress, queryCalculatingStatus, queryScenarioOutLetResult } from './wwtp/process_simulation_lab_example';
import { getWqAnalysisMicroOrganism } from './wwtp/wq_analysis_example';
import { getWholeProcessWaterQuality } from './wwtp/general_data_example';

const tenantId:string='3a07fc5a-e2cc-2136-6969-0e1f1ad4205f'
const clientId:string='IdentityServer_App'
const grantType:string='password'
const clientSecret:string='955q2w3e*'
const username:string='bztest1'
const password:string='955555=hot'

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
 * 全开放性决策数据中心
 */
getWqAnalysisMicroOrganism()

/**
 * 智能反硝化碳源加药
 */
getDosingParamete()

/**
 * 工艺模拟实验室
 */
crerateScnearioByGroup()
calculationScenario()
queryCalculatingStatus()
queryCalculatingProgress()
queryScenarioOutLetResult();

/**
 * 水质模拟预测分析
 */
getWholeProcessWaterQuality()







