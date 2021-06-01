// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/data.json'
import {
  Convert,
  InfectionMedicalcareprovisionStatus,
} from '@/libraries/auto_generated/data_converter/convertInfectionMedicalcareprovisionStatus'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IInfectionMedicalcareprovisionStatusRepository
  extends IBaseRepository<InfectionMedicalcareprovisionStatus> {}

export class InfectionMedicalcareprovisionStatusRepository
  extends BaseRepository<InfectionMedicalcareprovisionStatus>
  implements IInfectionMedicalcareprovisionStatusRepository
{
  /**
   * 使用箇所
   *
   * 本日の感染状況
   */
  constructor() {
    super(
      Convert.toInfectionMedicalcareprovisionStatus(JSON.stringify(rawData))
    )
  }
}

