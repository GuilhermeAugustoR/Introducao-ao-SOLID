import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userAlredyExist = this.usersRepository.findById(user_id);

    if (userAlredyExist) {
      throw new Error("User already exists");
    }

    const users = this.usersRepository.list();

    if (user_id === "false") {
      throw new Error("User not admin");
    }

    return users;
  }
}

export { ListAllUsersUseCase };
