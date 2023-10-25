import KcAdminClient from '@keycloak/keycloak-admin-client';
import { IAuthenticationService } from '@src/domain/authentication/authentication.interface';
import { singleton } from 'tsyringe';

const kcAdminClient = new KcAdminClient();

@singleton()
export default class KeycloakClient implements IAuthenticationService {
  public static async start(): Promise<void> {
    kcAdminClient.setConfig({
      realmName: process.env.IDENTITYSERVER_REALM,
      baseUrl: process.env.IDENTITYSERVER_BASE_URL
    });

    await KeycloakClient.getToken();

    // eslint-disable-next-line no-console
    console.log('KeycloakClient started');
  }

  private static async getToken() {
    kcAdminClient.setConfig({
      realmName: process.env.IDENTITYSERVER_REALM,
      baseUrl: process.env.IDENTITYSERVER_BASE_URL
    });

    await kcAdminClient
      .auth({
        grantType: 'client_credentials',
        clientId: process.env.IDENTITYSERVER_CLIENT_ID as string,
        clientSecret: process.env.IDENTITYSERVER_SECRET as string,
        username: '',
        password: ''
      })
      .catch((err) => {
        throw new Error('KeycloakClient', err);
      });
  }

  async addUser(
    user: {
      email: string;
      password: string;
    }
  ): Promise<{ id: string }> {
    await KeycloakClient.getToken();

    const userCreated = await kcAdminClient.users.create({
      username: user.email,
      email: user.email,
      enabled: true,
      credentials: [
        {
          type: 'password',
          value: user.password,
          temporary: false
        }
      ]
    });

    return userCreated;
  }
}
