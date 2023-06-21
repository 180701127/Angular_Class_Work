export class UserService{
    Users=[{name:'Logesh',status:'active'},{name:'Giri',status:'active'},{name:'Harish',status:'Inactive'}]
    addnewuser(name:string,status:string){
        this.Users.push({name:name,status:status})
        console.log(this.Users);

    }

}
