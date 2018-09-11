import { DataSerialize } from "./data-serialize";

export class ContactDetails implements DataSerialize {
    public firstname: string;
    public lastname: string;
    public email: string;
    public message: string;
  
      constructor() { 
          this.firstname = null;
          this.lastname = null;
          this.email = null;
          this.message = null;
      }
  
      toJson() {
          return {
            "firstname": this.firstname,
            "lastname": this.lastname,
            "email": this.email,
            "message": this.message,
          }
      }
      fromJson(json: Object) {
        this.firstname = json['firstname'];
        this.lastname = json['lastname'];
        this.email = json['email'];
        this.message = json['message'];
      }
  }