// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/vaccine.json'
import {
  Convert,
  Data,
} from '@/libraries/auto_generated/data_converter/convertVaccine'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IDataRepository extends IBaseRepository<Data> {}

export class DataRepository
  extends BaseRepository<Data>
  implements IDataRepository
{
  /**
   * 使用箇所
   *
   * 65歳以上のワクチン接種状況
   */
  constructor() {
    super(Convert.toData(JSON.stringify(rawData)))
  }
}
