/* eslint-disable max-classes-per-file */
/* eslint-disable no-shadow */
import appConfig from '../../appConfig';
import { CreateSatchData } from '../../components/types';
import { IApiClient } from '../api/ApiClient';
import {
  CreateSatchRequest,
  CreateSatchResponse,
  DeleteSatchRequest,
  DeleteSatchResponse,
  GetSatchListRequest,
  GetSatchListResponse,
  UpdateSatchRequest,
  UpdateSatchResponse,
} from './types';

export interface ISatchsApiClient {
  getList: (payload: GetSatchListRequest) => Promise<any>;
  create: (payload: CreateSatchData) => Promise<any>;
  update: (payload: UpdateSatchRequest) => Promise<any>;
  delete: (payload: DeleteSatchRequest) => Promise<any>;
}

export class SatchsApiClient implements ISatchsApiClient {
  apiBase: string;

  satchsApiClient: IApiClient;

  constructor(satchsApiClient: IApiClient) {
    this.apiBase = appConfig.satchsApiBase;
    this.satchsApiClient = satchsApiClient;
  }

  async getList({ goalId }: GetSatchListRequest): Promise<any> {
    try {
      const response = await this.satchsApiClient.get<GetSatchListResponse>(
        `${this.apiBase}/${goalId}`,
      );

      if (response) {
        if (response.success) {
          return response.data;
        }
      }
    } catch {
      console.log('getStachListError');
    }
  }

  async create({ goalId, ...satch }: CreateSatchData): Promise<any> {
    try {
      const response = await this.satchsApiClient.post<CreateSatchRequest, CreateSatchResponse>(
        `${this.apiBase}/${goalId}`,
        { ...satch },
      );

      if (response) {
        if (response.success) {
          return response.data;
        }

        console.log(response.reason);
      }
    } catch {
      console.log('getStachListError');
    }
  }

  async update({ goalId, ...rest }: UpdateSatchRequest): Promise<any> {
    try {
      const response = await this.satchsApiClient.patch<UpdateSatchRequest, UpdateSatchResponse>(
        `${this.apiBase}/${goalId}`,
        { goalId, ...rest },
      );

      if (response) {
        if (response.success) {
          return response.data;
        }
      }

      console.log(response.reason);
    } catch {
      console.log('getStachListError');
    }
  }

  async delete({ goalId, satchId }: DeleteSatchRequest): Promise<any> {
    try {
      const response = await this.satchsApiClient.delete<DeleteSatchResponse>(
        `${this.apiBase}/${goalId}/${satchId}`,
      );

      if (response) {
        if (response.success) {
          return response.success;
        }

        console.log(response.reason);
      }
    } catch {
      console.log('getStachListError');
    }
  }
}

export default class SatchsService {
  satchsApiClient: ISatchsApiClient;

  constructor(satchsApiClient: ISatchsApiClient) {
    this.satchsApiClient = satchsApiClient;
  }

  create({ goalId, name, price, date }: CreateSatchData) {
    const payload = {
      goalId,
      name,
      price,
      date,
    };

    return this.satchsApiClient.create(payload);
  }

  getList(payload: GetSatchListRequest): Promise<any> {
    return this.satchsApiClient.getList(payload);
  }

  delete(payload: DeleteSatchRequest): Promise<any> {
    return this.satchsApiClient.delete(payload);
  }

  update(payload: UpdateSatchRequest): Promise<any> {
    return this.satchsApiClient.update(payload);
  }
}
