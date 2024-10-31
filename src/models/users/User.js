 class User {
    constructor(name, email, password){
        this.id = this.generalteId();
        this.name = name
        this.email = email
        this.password = password
    }

    generalteId() {
        return Math.floor(math.random() * 999) +1;
    }
 }

export default User;
