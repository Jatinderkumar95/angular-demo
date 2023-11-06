export class Employee {
  id: number;
  name: string;
  gender: string;
  contactPreference: string;
  dateOfBirth: Date;
  department: string;
  isActive: boolean;
  email?: string;
  phoneNumber?: number;
  photoPath?: string;
  constructor(id: number, name: string, gender: string, contactPreference: string, dateOfBirth: Date, department: string, isActive: boolean, email?: string, phoneNumber?: number, photoPath?: string) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.contactPreference = contactPreference;
    this.dateOfBirth = dateOfBirth;
    this.department = department;
    this.isActive = isActive;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.photoPath = photoPath;

    // this.name = null;

  }
}