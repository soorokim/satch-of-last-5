/* eslint-disable max-classes-per-file */
import appConfig from '../../appConfig';
import { IApiClient } from '../api/ApiClient';
import { CreateGoalRequest, CreateGoalResponse, GetCurrentGoalResponse } from './types';

export interface IGoalsApiClient {
  create(props: CreateGoalRequest): Promise<boolean>;
  getCurrent(): Promise<any>;
}

export class GoalsApiClient implements IGoalsApiClient {
  apiBase: string;

  goalsApiClient: IApiClient;

  constructor(goalsApiClient: IApiClient) {
    this.apiBase = appConfig.goalsApiBase;
    this.goalsApiClient = goalsApiClient;
  }

  async create({ name, price }: CreateGoalRequest): Promise<boolean> {
    try {
      await this.goalsApiClient.post<CreateGoalRequest, CreateGoalResponse>(`${this.apiBase}`, {
        name,
        price,
      });
      return true;
    } catch {
      return false;
    }
  }

  async getCurrent(): Promise<GetCurrentGoalResponse> {
    try {
      const res = await this.goalsApiClient.get<GetCurrentGoalResponse>(`${this.apiBase}`);

      if (res) {
        return res;
      }
    } catch {
      console.error('getCurrentError');
    }
    return {} as GetCurrentGoalResponse;
  }
}

export default class GoalsService {
  goalsApiClient: IGoalsApiClient;

  constructor(goalsApiClient: IGoalsApiClient) {
    this.goalsApiClient = goalsApiClient;
  }

  create(props: CreateGoalRequest) {
    return this.goalsApiClient.create(props);
  }

  getCurrent(): Promise<GetCurrentGoalResponse> {
    return this.goalsApiClient.getCurrent();
  }
}
