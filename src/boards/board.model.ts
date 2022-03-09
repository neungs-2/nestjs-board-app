export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}

// enumeration 사용하여 두가지 이외의 상태를 금지
export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
