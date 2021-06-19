// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/vaccine.json'
import {
  Convert,
  Vaccine,
} from '@/libraries/auto_generated/data_converter/convertVaccine'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IVaccineRepository extends IBaseRepository<Vaccine> {}

export class VaccineRepository
  extends BaseRepository<Data>
  implements IVaccineRepository
{
  /**
   * 使用箇所
   *
   * 65歳以上のワクチン接種状況
   */
  constructor() {
    super(Convert.toVaccine(JSON.stringify(rawData)))
  }
}
