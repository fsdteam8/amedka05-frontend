export interface Agent {
  _id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  country: string;
  designation: string;
  brandName: string;
  workingFrom: string;
  status: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface AgentMeta {
  page: number;
  limit: number;
  total: number;
}

export interface AgentApiResponse {
  statusCode: number;
  success: boolean;
  message: string;
  meta: AgentMeta;
  data: Agent[];
}

export interface AgentData {
  fullName: string;
  designation: string;
  phoneNumber: string;
  brandName: string;
  emailAddress: string;
  workingFrom: string;
  country: string;
  image: File | string | null;
}
