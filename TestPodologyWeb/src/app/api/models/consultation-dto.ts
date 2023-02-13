/* tslint:disable */
/* eslint-disable */
import { HealthCareProviderDto } from './health-care-provider-dto';
import { PatientDto } from './patient-dto';
export interface ConsultationDto {
  endConsultation?: string;
  healthCareProvider?: HealthCareProviderDto;
  healthCareProviderId?: null | string;
  id?: number;
  locationId?: number;
  patient?: PatientDto;
  patientInput?: null | string;
  startConsultation?: string;
  statusId?: number;
  updatedBy?: null | number;
}
