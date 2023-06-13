import { Helper, IdentityServiceApi, ScenarioServiceApi, WWTPDomainApi,ModelDriverApi,IoTServiceApi } from '@dhicn/domain-paas-sdk-ts'
import { DomainServiceUrlMap } from '@dhicn/domain-paas-sdk-ts/src/sdk-helper'

export class ApiHelperExtend extends Helper.ApiHelper {
  usersMnangerApi: IdentityServiceApi.UsersMnangerApi
  scenarioManagerApi: ScenarioServiceApi.ScenarioManagerApi
  ProNumSimLabApi:WWTPDomainApi.ProNumSimLabApi
  IntelligentDenitrificationApi:WWTPDomainApi.IntelligentDenitrificationApi
  GeneralDataApi:WWTPDomainApi.GeneralDataApi
  ModelRunApi:ModelDriverApi.ModelRunApi
  TelemetryApi:IoTServiceApi.TelemetryApi
  OpcuaApi:IoTServiceApi.OpcuaApi
  // ...自定义需要使用API
  constructor() {
    super()
    // 在构造函数中实例化对应API，需要传入API访问前缀和axios实例axios
    this.usersMnangerApi = new IdentityServiceApi.UsersMnangerApi(
      DomainServiceUrlMap.identity,
      this.axiosInstance,
    )
    this.scenarioManagerApi = new ScenarioServiceApi.ScenarioManagerApi(
      DomainServiceUrlMap.scenario,
      this.axiosInstance,
    )
    this.ProNumSimLabApi = new WWTPDomainApi.ProNumSimLabApi(
      DomainServiceUrlMap.wwtp.mainBus,
      this.axiosInstance,
    )
    this.IntelligentDenitrificationApi = new WWTPDomainApi.IntelligentDenitrificationApi(
      DomainServiceUrlMap.wwtp.mainBus,
      this.axiosInstance,
    )
    this.GeneralDataApi = new WWTPDomainApi.GeneralDataApi(
      DomainServiceUrlMap.wwtp.mainBus,
      this.axiosInstance,
    )
    this.ModelRunApi = new ModelDriverApi.ModelRunApi(
      DomainServiceUrlMap.modelDriver,
      this.axiosInstance,
    )
    this.TelemetryApi = new IoTServiceApi.TelemetryApi(
      DomainServiceUrlMap.iot,
      this.axiosInstance,
    )
    this.OpcuaApi = new IoTServiceApi.OpcuaApi(
      DomainServiceUrlMap.iot,
      this.axiosInstance,
    )
    // ...这里可以对 AxiosInstance 进行自行修改
  }
}
