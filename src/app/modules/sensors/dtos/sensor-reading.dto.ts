export interface SensorReadingDto {
  resourceIdentifier: string;
  temperature: number;
  humidity: number;
  airQuality: number;
  createdAt: string;
}
