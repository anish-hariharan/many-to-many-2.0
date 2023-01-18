import { UserData } from "../DataSource/UserData";
import { Contact } from "../Entity/Contact";
import { User } from "../Entity/User";

const users = UserData.getRepository(User);
const details = UserData.getRepository(Contact);

class UserService {

    public static greet() {
        return "Hello There!"
    }

    public static async createUser(data:any, detail : any){
        const user = new User();
        user.name = data?.name
        user.age = data?.age
        const contact = new Contact();
        contact.experience = detail?.experience;
        contact.job = detail?.job;
        contact.details = [user]
        await details.save(contact)
        return "created SucessFully!"
    }

    public static async getUser(id: number){
        const user = await details.createQueryBuilder("contact").leftJoinAndSelect('contact.details', 'user').where('contact.details = :detailsId', {detailsId: id}).getOne()
        return user;
    }

    public static async getUsers(){
        // const user = await details.createQueryBuilder("contact").leftJoinAndSelect('contact.details', 'user').getMany();
        const user = await details.find()
        return user;
    }

    public static async deleteUser(id: number){
       const user:any = await users.findOne({where: {id: id}});
       user.delete(user)
       return "deleted Sucessfully!"
    }
}

export default UserService;