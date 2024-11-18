export enum STATUS {
  PRESENT = "present",
  ABSENT = "absent",
  EXCUSED = "excused",
}
  
  export interface IAttendanceStudent {
    id: string;
    displayName: string;
    photo: string;
    className: string;
    age: number;
    status: STATUS;
  }

  export interface CreatedData {
    id: string;
    displayName: string;
    className: string;
    age: number;
    status: STATUS;
    photo: string;
}
