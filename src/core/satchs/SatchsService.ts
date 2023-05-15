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
  getList: (payload: GetSatchListRequest) => Promise<GetSatchListResponse | undefined>;
  create: (payload: CreateSatchData) => Promise<CreateSatchResponse | undefined>;
  update: (payload: UpdateSatchRequest) => Promise<UpdateSatchResponse | undefined>;
  delete: (payload: DeleteSatchRequest) => Promise<DeleteSatchResponse | undefined>;
}

export class SatchsApiClient implements ISatchsApiClient {
  apiBase: string;

  satchsApiClient: IApiClient;

  constructor(satchsApiClient: IApiClient) {
    this.apiBase = appConfig.satchsApiBase;
    this.satchsApiClient = satchsApiClient;
  }

  async getList({ goalId }: GetSatchListRequest) {
    try {
      const response = await this.satchsApiClient.get<GetSatchListResponse>(
        `${this.apiBase}/${goalId}`,
      );

      return response;
    } catch {
      console.log('getStachListError');
    }
  }

  async create({ goalId, ...satch }: CreateSatchData) {
    try {
      const response = await this.satchsApiClient.post<CreateSatchRequest, CreateSatchResponse>(
        `${this.apiBase}/${goalId}`,
        { ...satch },
      );

      return response;
    } catch {
      console.log('getStachListError');
    }
  }

  async update({ goalId, ...rest }: UpdateSatchRequest) {
    try {
      const response = await this.satchsApiClient.patch<UpdateSatchRequest, UpdateSatchResponse>(
        `${this.apiBase}/${goalId}`,
        { goalId, ...rest },
      );

      return response;
    } catch {
      console.log('getStachListError');
    }
  }

  async delete({ goalId, satchId }: DeleteSatchRequest) {
    try {
      const response = await this.satchsApiClient.delete<DeleteSatchResponse>(
        `${this.apiBase}/${goalId}/${satchId}`,
      );

      return response;
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

  getList(payload: GetSatchListRequest) {
    return this.satchsApiClient.getList(payload);
  }

  delete(payload: DeleteSatchRequest) {
    return this.satchsApiClient.delete(payload);
  }

  update(payload: UpdateSatchRequest) {
    return this.satchsApiClient.update(payload);
  }
}
