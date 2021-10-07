export interface BarkInitOptions {
  server?: string;
  user?: string;
  password?: string;
  key?: string;
}

export interface BarkPushOptions {
  text: string;
  title?: string;
  icon?: string;
  autoCopy?: boolean;
  copy?: string;
  url?: string;
  isArchive?: boolean;
  group?: string;
  sound?: string;
}
