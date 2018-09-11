import { DataSerialize } from './data-serialize'

export class User implements DataSerialize {
  public firstname: string;
  public lastname: string;
  public email: string;
  public password: string;
  public privileges: Array<string>;

  constructor() { 
      this.firstname = null;
      this.lastname = null;
      this.email = null;
      this.password = null;
      this.privileges = null;
   }

   toJson():any {
      return {
          "email": this.email,
          "password": this.password,
          "firstname": this.firstname,
          "lastname": this.lastname,
          "privileges": this.privileges
      };
  }
  fromJson(json: any): void {
      this.email = json.email;
      this.password = null;
      this.firstname = json.firstname || json.first;
      this.lastname = json.lastname || json.last;
      this.privileges = json.privileges;
  }

}
