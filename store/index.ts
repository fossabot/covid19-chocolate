import { DailyPositiveDetailRepository } from '@/libraries/repositories/DailyPositiveDetailRepository'
import { DataRepository } from '@/libraries/repositories/DataRepository'
// InfectionMedicalcareprovisionStatus ではなく InfectionMedicalCareProvisionStatus とする
import { InfectionMedicalcareprovisionStatusRepository as InfectionMedicalCareProvisionStatusRepository } from '@/libraries/repositories/InfectionMedicalCareProvisionStatusRepository'
import { NewsRepository } from '@/libraries/repositories/NewsRepository'
import { VaccinationRepository } from '@/libraries/repositories/VaccinationRepository'

export const state = () => ({
  dailyPositiveDetail: new DailyPositiveDetailRepository().data,
  data: new DataRepository().data,
  infectionMedicalCareProvisionStatus:
    new InfectionMedicalCareProvisionStatusRepository().data,
  news: new NewsRepository().data,
  vaccination: new VaccinationRepository().data,
})
