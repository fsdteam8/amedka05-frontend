export interface Partnership {
  _id: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface PartnershipMeta {
  page: number;
  limit: number;
  total: number;
}

export interface PartnershipData {
  meta: PartnershipMeta;
  data: Partnership[];
}

export interface PartnershipApiResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: PartnershipData;
}
