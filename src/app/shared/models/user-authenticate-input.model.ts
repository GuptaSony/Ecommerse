export class UserAuthenticateInput {

	// public user_name:string;
	// public password:string;

	// constructor(user_name:string, password:string) {
	// 	this.user_name = user_name;
	// 	this.password = password;
		
	//   }
	  public constructor(init?: Partial<UserAuthenticateInput>) {
        Object.assign(this, init);
    }
}
