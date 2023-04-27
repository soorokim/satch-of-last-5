export interface Satch {
  id: string; // 식별
  name: string; // 아메리카노, 신발,
  price: number; // 가격
  date: Date | string; // 언제 사치한 아이템이야?
}

export interface GetSatchListRequest {
  goalId: string;
}
export interface GetSatchListResponse {
  success: boolean;
  reason: string;
  data: Satch[];
}

export type CreateSatchRequest = Omit<Satch, 'id'>;

export interface CreateSatchResponse {
  success: boolean;
  reason: string;
  data: Satch;
}

export interface UpdateSatchRequest {
  goalId: string;
  satchId: string;
  data: Partial<Omit<Satch, 'id'>>;
}

export interface UpdateSatchResponse {
  success: boolean;
  reason: string;
  data: Satch;
}

export interface DeleteSatchRequest {
  goalId: string;
  satchId: string;
}

export interface DeleteSatchResponse {
  success: boolean;
  reason: string;
}
