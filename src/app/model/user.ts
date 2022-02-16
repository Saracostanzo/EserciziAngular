export enum Gender {male="male", female='female', other='other'};
export enum Role {staff='staff', student='student', manager='manager',admin= 'admin'};

export interface User {
        id: Number,
        name: string,
        surname: string,
        age: number,
        dateOfBirth: string,
        address: {
          city: string,
          street: string,
          postalCode: string
        },
        role: Role,
        username: string,
        profilePhotoUrl: string,
        gender: Gender
      }


