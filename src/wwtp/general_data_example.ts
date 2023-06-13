import { SaveTelemetryDataInput } from "@dhicn/domain-paas-sdk-ts/dist/iot-service";
import { ApiHelperExtend } from '../api/api';
import { setToken, userLogin } from '../main';


const apiHelper = new ApiHelperExtend()

// 实测数据接入 HTTP
export const accessMeasuredDataByHttp = async () => {
  const userInfo = await userLogin()
  const options = await setToken(userInfo.tenantId,userInfo.token)

  // 接口参数
  const params = [  
  {
    deviceId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    telemetryDataJson: "[{\"ts\": 1663136100, \"values\": {\"forecastRf\": 0.19}}, {\"ts\": 1663136400, \"values\": {\"forecastRf\": 0.19}}]"
  }
] as Array<SaveTelemetryDataInput>
  // 接口调用
  const result = await apiHelper.TelemetryApi.apiV1IotSaveTelemetryDataBatchPost(params,options)
  // 接口返回
  console.log(result.data);
}
//#endregion