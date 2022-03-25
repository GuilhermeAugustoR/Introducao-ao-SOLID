import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userAlredyExist = this.usersRepository.findByEmail(email);

    if (userAlredyExist) {
      throw new Error("Email alredy exist");
    }

    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
