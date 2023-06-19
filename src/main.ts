import { ApiHelper, AxiosRequestConfig } from '@dhicn/domain-paas-sdk-ts/src/sdk-helper'
import { getDosingParamete } from './wwtp/intelligent_denitrification_example';
import { IToken } from './type';
import { calculationScenario, crerateScnearioByGroup, queryCalculatingProgress, queryCalculatingStatus, queryScenarioOutLetResult } from './wwtp/process_simulation_lab_example';
import { getWqAnalysisMicroOrganism } from './wwtp/wq_analysis_example';
import { getWholeProcessWaterQuality } from './wwtp/general_data_example';

const tokenHelper = new ApiHelper()

/**
 * 登录
 */
export const userLogin = async () => {
    // 方法调用
    await tokenHelper.logIn(
    import.meta.env.VITE_TENANTID,
    import.meta.env.VITE_CLIENT_ID,
    import.meta.env.VITE_GRANT_TYPE,
    import.meta.env.VITE_CLIENT_SECRET,
    import.meta.env.VITE_USRE_NAME,
    import.meta.env.VITE_PASSWORD
    )
    const token = tokenHelper.apiToken as IToken
   return token
}

/**
 * 设置token
 */
export const setToken = async (token:IToken) => {
 const options:AxiosRequestConfig = {headers:{
    tenantId:import.meta.env.VITE_TENANTID,
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







