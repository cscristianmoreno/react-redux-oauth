export class User {
    private name!: string;
    private lastname!: string;
    private email!: string;
    private password!: string;

    // constructor(data: User) {
    //     this.setName = data.name;
    //     this.setLastname = data.lastname;
    //     this.setEmail = data.email;
    //     this.setPassword = data.password;
    // }

    public get getName(): string {
        return this.name;
    }
    
    public get getLastname() : string {
        return this.lastname;
    }
    
    public get getEmail() : string {
        return this.email;
    }

    public get getPassword() : string {
        return this.password;
    }
    
    public set setName(name : string) {
        this.name = name;
    }
    
    public set setLastname(lastname : string) {
        this.lastname = lastname;
    }
    
    public set setEmail(email : string) {
        this.email = email;
    }
    
    public set setPassword(password : string) {
        this.password = password;
    }
}