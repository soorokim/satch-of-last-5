import { Satch } from '../satchs/types';

export interface CreateGoalRequest {
  name: string;
  price: number;
}
export interface CreateGoalResponse {
  success: boolean;
}

export interface GetCurrentGoalResponse {
  id: string; // 식별
  emoticon?: string; // 이모티콘
  name: string; // 맥북 미국여행
  price: number; // 골의 목표 금액
  percent: number; // 달성률
  createdAt: Date | string; // 언제시작
  endedAt?: Date; // 언제 달성했어?
  satchList: Satch[];
}
