import { IPinnedSource } from "@tempradar/modules/pinned-sources/pinned-source.contract";

export class City implements IPinnedSource {
  id?: string;
  name?: string;
  latitude?: string;
  longitude?: string;
  createdAt?: string;
}
