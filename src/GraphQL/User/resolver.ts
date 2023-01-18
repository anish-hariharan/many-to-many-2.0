import UserService from "../../Service/UserService"

const UserResolver = {
    Query:{
        greet() {
            return UserService.greet();
        },
        getUser(parent: any, args:any, context:any){
            return UserService.getUser(args.id);
        },
        getUsers(){
            return UserService.getUsers()
        }
    },

    Mutation: {
        createUser(parent:any, args:any, context:any){
            const arr = args.user
            const det = args.details
            return UserService.createUser(arr, det)
        },
        deleteUser(parent:any, args:any, context:any){
            return UserService.deleteUser(args.id)
        }
    }
}

export default UserResolver;