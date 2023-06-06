import { ProjectScenario, ScenarioModelMessageInput } from '@dhicn/domain-paas-sdk-ts/dist/model-driver-service';
import { AxiosRequestConfig } from '@dhicn/domain-paas-sdk-ts/src/sdk-helper';
import { ApiHelperExtend } from '../src/api/api';
import { SaveTelemetryDataInput } from '@dhicn/domain-paas-sdk-ts/dist/iot-service';
import { CreateScenarioByGroupPara2 } from '@dhicn/domain-paas-sdk-ts/dist/scenario-service';


const tenantId:string='3a07fc5a-e2cc-2136-6969-0e1f1ad4205f'

const token_type:string='Bearer'
const access_token:string='eyJhbGciOiJSUzI1NiIsImtpZCI6InRjZ05VUEY2RmRJamo1ZFFkeVc5WGciLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2ODYwMzIwOTksImV4cCI6MTY4NjYzNjg5OSwiaXNzIjoiaHR0cDovL2RoaWdyb3VwLmNvbSIsImF1ZCI6ImFwaTEiLCJjbGllbnRfaWQiOiJJZGVudGl0eVNlcnZlcl9BcHAiLCJzdWIiOiIzYTA3ZmM1YS1lMmQ2LTgxNzEtYWM3ZC0zMTVmMzg4MWNkY2MiLCJhdXRoX3RpbWUiOjE2ODYwMzIwOTksImlkcCI6ImxvY2FsIiwibmFtZSI6ImJ6dGVzdDEiLCJnaXZlbl9uYW1lIjoi57O757uf566h55CG5ZGYIiwiZW1haWwiOiIiLCJ0ZW5hbnRJZCI6IjNhMDdmYzVhLWUyY2MtMjEzNi02OTY5LTBlMWYxYWQ0MjA1ZiIsInJvbGUiOiJ0ZW5hbnRfYWRtaW4iLCJyb2xlX25hbWUiOiLnrqHnkIblkZgiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiYXBpMSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJjdXN0b20iXX0.RwoL3-abppjLXQrsD32oX1Ibd1F4aRk3ppItxbjUorgrRbsOthJSVUF7b4sZ2IgJfjeetR-nI6ruzg6dwOKqbRpC8YaszlPuecRBi8oVHx94F-o2tm0rlGv2vYilTBNqeZOcDmQwz8UlQ6f7RqhZqmzroY8-Sfv9mrMf4urjHHIL61d6d2o3A1tr4dGD-z9jIFyMilcR2mCHfMSrsGqiM7Njs8xpjOk2DBHkk0HztzOwDunWihQHWxE88xcv-Sxq6H3D9ynJRD0_8X4hWlS14VXaMZ8dxRCULQ8CRa65ap15rUINzqjptjxoMqdS7zXv8ovistZW3gY2oXMOoVzmOA'


const options:AxiosRequestConfig = {headers:{
    tenantId:tenantId,
    Authorization:`${token_type} ${access_token}`
  }}


const apiHelper = new ApiHelperExtend()


 //#region 工艺模拟实验室
// 创建方案
async function crerateScnearioByGroup() {
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
  console.log(result);
}


// 计算方案
async function calculationScenario() {
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
  console.log(result);
}

// 查询方案计算进度
async function queryCalculatingStatus() {

  // 接口参数
  const params ={
    projectName:'bz',serialNo:'8ee55309-00de-4fbf-b37a-b61c79b85e48',scenarioId:'8ee55309-00de-4fbf-b37a-b61c79b85e48'
  } as ProjectScenario
  // 接口调用
  const result = await apiHelper.ModelRunApi.modelRunQueryModelRunStatusGet(params,options)

  console.log(result);
}

// 查询方案日志
async function queryCalculatingProgress() {

  // 接口参数
  const params:string = 'da1adbc2-5057-4a2a-8cc4-42705f5552cb'

  const result = await apiHelper.ModelRunApi.modelRunV2CalculateLogsGet(params,options)

  console.log(result);
}

// 查询方案出水结果
async function queryScenarioOutLetResult() {

  // 接口参数
  const params:string = 'da1adbc2-5057-4a2a-8cc4-42705f5552cb'
  // 接口调用
  const result = await apiHelper.ProNumSimLabApi.apiProNumSimLabSimResultsGet(params,options)

  console.log(result);
}
//#endregion

//#region 实测数据接入
// 实测数据接入 HTTP
async function accessMeasuredDataByHttp() {

  // 接口参数
  const params = [  
  {
    deviceId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    telemetryDataJson: "[{\"ts\": 1663136100, \"values\": {\"forecastRf\": 0.19}}, {\"ts\": 1663136400, \"values\": {\"forecastRf\": 0.19}}]"
  }
] as Array<SaveTelemetryDataInput>
  // 接口调用
  const result = await apiHelper.TelemetryApi.apiV1IotSaveTelemetryDataBatchPost(params,options)

  console.log(result);
}

//#endregion


//#region 获取全流程水质数据
async function getWholeProcessWaterQuality() {
  // 接口参数
  const productLine:string='1A'
  const startTime:string='2023-06-01T10:00:00'
  const endTime:string='2023-06-05T00:00:00'
  const modelName:string='在线滚动模型'
  // 接口调用
  const result = await apiHelper.GeneralDataApi.apiV2OutputEntireProcessTsByProductlineGet(productLine, startTime, endTime, modelName,options)

  console.log(result);
}
//#endregion

//#region 获取加药参数
async function getDosingParameter() {

  // 接口参数
  const category:number = 1,
  productionLineCode:string ='1A'
  // 接口调用
  const result = await apiHelper.IntelligentDenitrificationApi.apiIntelligentDenitrificationGetDosingParameterGet(category,productionLineCode,options)

  console.log(result);
}

//#endregion

//#region 方法调用
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
// 实测数据接入 HTTP
accessMeasuredDataByHttp()
// 获取全流程水质数据
getWholeProcessWaterQuality()
// 获取加药参数
getDosingParameter()

//#endregion


// createApp(App).mount('#app')





