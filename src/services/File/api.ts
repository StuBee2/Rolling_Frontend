import { rollingAxios } from "@src/libs/Axios/RollingAxios";

export interface FileParam {
  file: string;
}

export interface FileResponse {
  url: string;
  rgb: number;
}

class FileApi {
  public async uploadFile(file: FileParam): Promise<FileResponse> {
    const { data } = await rollingAxios.post("/file", file);
    return data;
  }
}

export default new FileApi();
