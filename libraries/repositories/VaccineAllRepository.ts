// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/vaccine_all.json'
import {
  Convert,
  VaccineAll,
} from '@/libraries/auto_generated/data_converter/convertVaccineAll'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IVaccineAllRepository
  extends IBaseRepository<DailyPositiveDetail> {}

export class VaccinationRepository
  extends BaseRepository<DailyPositiveDetail>
  implements IVaccineAllRepository
{
  /**
   * 使用箇所
   *
   * モニタリング項目(1) 新規陽性者数 (components/cards/MonitoringConfirmedCasesNumberCard.vue)
   *
   * モニタリング項目(3) 新規陽性者における接触歴等不明者数／増加比 (components/cards/UntrackedRateCard.vue)
   */
  constructor() {
    super(Convert.toVaccineAll(JSON.stringify(rawData)))
  }
}
