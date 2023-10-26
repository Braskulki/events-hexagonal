export interface IAuthenticationService {
  addUser(
    user: {
      email: string;
      password: string;
    }
  ): Promise<{ id: string }>;
}
