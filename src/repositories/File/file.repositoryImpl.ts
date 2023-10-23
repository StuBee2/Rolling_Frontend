import { rollingAxios } from "@src/libs/Axios/customAxios";
import { FileParam, FileRepository, FileResponse } from "./file.repository";

class FileRepositoryImpl implements FileRepository {
  public async uploadFile(file: FileParam): Promise<FileResponse> {
    const { data } = await rollingAxios.post("/file", file);
    return data;
  }
}

export default new FileRepositoryImpl();
