import { CreateScenarioByGroupPara2 } from '@dhicn/domain-paas-sdk-ts/dist/scenario-service';
import { ApiHelperExtend } from '../api/api';
import { setToken, userLogin } from '../main';
import { ScenarioModelMessageInput } from '@dhicn/domain-paas-sdk-ts/dist/model-driver-service';

const apiHelper = new ApiHelperExtend()

 
/**
 * 创建方案
 */
export const crerateScnearioByGroup = async () =>{
  const getToken = await userLogin()
  const options = await setToken(getToken)

  // 接口参数
  const params = {parentScenarioId:"a02deced-67dc-40b4-bb9d-60a66076021c",
  newScenarioName:"777",
  groupId:'1082b4f3-a699-4bcd-a7c0-2525fef824dc',
  startTime:'2023-06-01T10:53:17',
  endTime:'2023-06-02T10:53:17',
  subType:'WWTPMLab',
  description:'模拟方案'
  } as CreateScenarioByGroupPara2
  // 接口调用
  const result = await apiHelper.scenarioManagerApi.apiV2ScenarioManagerScenarioDfsCreateByGroupPost("version",params,options)
  // 返回结果
  console.log(result.data);
}


/**
 * 计算方案
 */
export const calculationScenario = async () => {
  const getToken = await userLogin()
  const options = await setToken(getToken)

  // 接口参数
  const params = {
    tenantId: "3a07fc5a-e2cc-2136-6969-0e1f1ad4205f",
    scenarioId: "da1adbc2-5057-4a2a-8cc4-42705f5552cb",
    projectName: "bz",
    modelType: "WWTP",
    priority: 0,
    modelInfo: "{\"scenarioId\":\"da1adbc2-5057-4a2a-8cc4-42705f5552cb\",\"tenantId\":\"3a07fc5a-e2cc-2136-6969-0e1f1ad4205f\",\"type\":19}"
} as ScenarioModelMessageInput
  // 接口调用
  const result = await apiHelper.ModelRunApi.modelRunRunModelPost(params,options)
  // 返回结果
  console.log(result.data);
}

/**
 * 查询方案计算进度
 */
export const queryCalculatingStatus= async () =>{
  const getToken = await userLogin()
  const options = await setToken(getToken)

  // 接口参数
  const params = ["da1adbc2-5057-4a2a-8cc4-42705f5552cb"] as Array<string>
  // 接口调用
  const result = await apiHelper.ModelRunApi.modelRunV2CalculateStatusPost(params,options)
  // 接口返回
  console.log(result.data);
}

/**
 * 查询方案日志
 */
export const queryCalculatingProgress = async () =>{
  const getToken = await userLogin()
  const options = await setToken(getToken)

  // 接口参数
  const params:string = 'da1adbc2-5057-4a2a-8cc4-42705f5552cb'
  // 接口调用
  const result = await apiHelper.ModelRunApi.modelRunV2CalculateLogsGet(params,options)
  // 接口返回
  console.log(result.data);
}

/**
 * 查询方案出水结果
 */
export const queryScenarioOutLetResult = async () =>{
  const getToken = await userLogin()
  const options = await setToken(getToken)

  // 接口参数
  const params:string = 'da1adbc2-5057-4a2a-8cc4-42705f5552cb'
  // 接口调用
  const result = await apiHelper.ProNumSimLabApi.apiProNumSimLabSimResultsGet(params,options)
  // 接口返回
  console.log(result.data);
}
//#endregionv