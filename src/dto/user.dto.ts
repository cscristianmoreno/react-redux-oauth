export class UserDTO {
    id!: number;
    name!: string; 
    lastname!: string; 
    email!: string;
    
    public get getId() : number {
        return this.id;
    }
    
    public get getName() : string {
        return this.name;
    }
    
    public get getLastname(): string {
        return this.lastname;
    }

    public get getEmail(): string {
        return this.email;
    } 
}