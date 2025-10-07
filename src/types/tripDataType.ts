export interface Trip {
  _id: string;
  country: string;
  location: string;
  startDate: string; // ISO date string (e.g., "2025-10-04T00:00:00.000Z")
  endDate: string;
  participants: number;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TripsMeta {
  page: number;
  limit: number;
  total: number;
}

export interface TripsData {
  meta: TripsMeta;
  data: Trip[];
}

export interface TripsApiResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: TripsData;
}
