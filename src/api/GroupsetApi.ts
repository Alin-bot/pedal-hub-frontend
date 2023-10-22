import { axiosClient } from "./Api";
import { Groupset } from "./model/IBike";

export interface IGroupsetService {
  getGroupsets(): Promise<{ data: Groupset[] }>;
  getGroupsetById(id: number): Promise<{ data: Groupset }>;
  addGroupset(brand: Groupset): Promise<{ data: Groupset }>;
}

export class GroupsetServiceImpl implements IGroupsetService {
  public async getGroupsets(): Promise<{ data: Groupset[] }> {
    return axiosClient.get("/groupsets");
  }

  public async getGroupsetById(id: number): Promise<{ data: Groupset }> {
    return axiosClient.get(`/groupsets/${id}`);
  }

  public async addGroupset(brand: Groupset): Promise<{ data: Groupset }> {
    return axiosClient.post("/groupsets", brand);
  }
}
