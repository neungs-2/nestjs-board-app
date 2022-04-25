// 실제 Database와 Entity를 사용하므로 필요 없어짐.
// 파일명도 models에서 status.enum으로 수정
// export interface Board {
//   id: string;
//   title: string;
//   description: string;
//   status: BoardStatus;
// }

// enumeration 사용하여 두가지 이외의 상태를 금지
export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
