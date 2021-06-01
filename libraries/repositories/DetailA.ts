// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/data.json'
import {
  Convert,
  InfectionMedicalcareprovisionStatus,
} from '@/libraries/auto_generated/data_converter/DetailA'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IDetailARepository
  extends IBaseRepository<DetailA> {}

export class DetailAepository
  extends BaseRepository<DetailA>
  implements DetailARepository
{
  /**
   * 使用箇所
   *
   * 本日の感染状況
   */
  constructor() {
    super(
      Convert.toDetailA(JSON.stringify(rawData))
    )
  }
}

