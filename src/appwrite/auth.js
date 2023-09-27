import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appWriteUrl)
      .setProject(config.appWriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method
        // return userAccount;
        this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.error("An error occurred:", error);
      throw error; // Rethrow the error if needed.
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("AppWrite service :: getCurrentUser :: error",error);
    }
    return null;
  }
}

const authService = new AuthService();
export default AuthService;
