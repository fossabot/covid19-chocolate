import { AgencyRepository } from '@/libraries/repositories/AgencyRepository'
import { DailyPositiveDetailRepository } from '@/libraries/repositories/DailyPositiveDetailRepository'
import { DataRepository } from '@/libraries/repositories/DataRepository'
// InfectionMedicalcareprovisionStatus ではなく InfectionMedicalCareProvisionStatus とする
import { InfectionMedicalcareprovisionStatusRepository as InfectionMedicalCareProvisionStatusRepository } from '@/libraries/repositories/InfectionMedicalCareProvisionStatusRepository'
import { NewsRepository } from '@/libraries/repositories/NewsRepository'
import { VaccinationRepository } from '@/libraries/repositories/VaccinationRepository'
import { Vaccine1264Repository } from '@/libraries/repositories/Vaccine1264Repository'
import { VaccineAllRepository } from '@/libraries/repositories/VaccineAllRepository'

export const state = () => ({
  agency: new AgencyRepository().data,
  dailyPositiveDetail: new DailyPositiveDetailRepository().data,
  data: new DataRepository().data,
  infectionMedicalCareProvisionStatus:
    new InfectionMedicalCareProvisionStatusRepository().data,
  news: new NewsRepository().data,
  vaccination: new VaccinationRepository().data,
  vaccine1264: new Vaccine1264Repository().data,
  vaccineAll: new VaccineAllRepository().data,
})
