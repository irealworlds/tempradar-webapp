export class CreatePinnedSensorDto {
  name?: string;
  sensorId?: string;

  /**
   * CreatePinnedSensorDto constructor method.
   *
   * @param initial
   */
  constructor(initial?: Partial<CreatePinnedSensorDto>) {
    if (initial) {
      Object.assign(this, initial);
    }
  }
}
