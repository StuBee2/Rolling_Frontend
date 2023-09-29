export interface FileRepository {
  uploadFile(file: FileParam): Promise<string>;
}

export interface FileParam {
  file: string;
}
