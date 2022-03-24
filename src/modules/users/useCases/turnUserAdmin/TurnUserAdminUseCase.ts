import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const turnUserAdminAlredyExist = this.usersRepository.findById(user_id);

    if (turnUserAdminAlredyExist) {
      throw new Error("User alredy exist");
    }
    // return this.usersRepository.create({ user_id });
  }
}

export { TurnUserAdminUseCase };
