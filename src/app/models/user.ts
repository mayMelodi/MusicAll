import { DataSerialize } from './data-serialize'

export class User implements DataSerialize {
  public firstname: string;
  public lastname: string;
  public email: string;
  public password: string;

  constructor() { 
      this.firstname = null;
      this.lastname = null;
      this.email = null;
      this.password = null;
   }

   toJson():any {
      return {
          "email": this.email,
          "password": this.password,
          "firstname": this.firstname,
          "lastname": this.lastname
      };
  }
  fromJson(json: any): void {
      this.email = json.email;
      this.password = json.password;
      this.firstname = json.firstname;
      this.lastname = json.lastname;
  }

}
