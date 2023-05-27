export class User{
    constructor(
        email:string,
        id:string,
        private _token:string,
        expirationDate:Date
      
      
    ){}
    GetToken(){
        return this._token;
    }

    
}