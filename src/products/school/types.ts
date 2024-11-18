
export enum STATUS {
    PRESENT = 'present',
    ABSENT = 'absent',
    EXCUSED = 'excused',
  }
  
  export interface IAttendanceStudent {
    id: string;
    displayName: string;
    photo: string;
    className: string;
    age: number;
    status: STATUS;
  }
