import { rollingAxios } from "@src/libs/Axios/customAxios";
import { FileParam, FileRepository } from "./file.repository";

class FileRepositoryImpl implements FileRepository {
  public async uploadFile(file: FileParam): Promise<string> {
    const { data } = await rollingAxios.post("/file", file);
    return data;
  }
}

export default new FileRepositoryImpl();
