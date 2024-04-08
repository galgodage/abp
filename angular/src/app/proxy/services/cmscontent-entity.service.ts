import type { CMSContenEntityDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CMSContentEntityService {
  apiName = 'Default';
  

  create = (text: string, description: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CMSContenEntityDto>({
      method: 'POST',
      url: '/api/app/c-mSContent-entity',
      params: { text, description },
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/c-mSContent-entity/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, CMSContenEntityDto[]>({
      method: 'GET',
      url: '/api/app/c-mSContent-entity',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
