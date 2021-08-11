// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/vaccine_12_64.json'
import {
  Convert,
  Vaccination,
} from '@/libraries/auto_generated/data_converter/convertVaccine1264'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IVaccine1264Repository extends IBaseRepository<Vaccination> {}
export class Vaccine1264Repository
  extends BaseRepository<Vaccination>
  implements IVaccine1264Repository
{
  /**
   * 使用箇所
   *
   * ワクチン接種回数（高齢者・累計） (components/index/CardsReference/Vaccination/Card.vue)
   */
  constructor() {
    super(Convert.toVaccination(JSON.stringify(rawData)))
  }
}
