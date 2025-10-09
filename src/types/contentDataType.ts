export interface Event {
  _id: string;
  video: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface EventMeta {
  page: number;
  limit: number;
  total: number;
}

export interface EventListData {
  meta: EventMeta;
  data: Event[];
}

export interface EventResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: EventListData;
}
