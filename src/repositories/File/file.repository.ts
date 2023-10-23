export interface FileRepository {
  uploadFile(file: FileParam): Promise<FileResponse>;
}

export interface FileParam {
  file: string;
}

export interface FileResponse {
  url: string;
  rgb: number;
}
