export interface Satch {
  id: string; // 식별
  name: string; // 아메리카노, 신발,
  price: number; // 가격
  date: Date | string; // 언제 사치한 아이템이야?
}
export interface GetSatchListRequest {
  goalId: string;
}

export type GetSatchListResponse = Satch[];

export type CreateSatchRequest = Omit<Satch, 'id'>;

export type CreateSatchResponse = Satch;

export interface UpdateSatchRequest {
  goalId: string;
  satchId: string;
  data: Partial<Omit<Satch, 'id'>>;
}

export type UpdateSatchResponse = Satch;

export interface DeleteSatchRequest {
  goalId: string;
  satchId: string;
}

type IsSuccess = boolean;
export type DeleteSatchResponse = IsSuccess;
