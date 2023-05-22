import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "./init";

const auth = getAuth(app);

/**
 * `createUserWithEmailAndPassword()` method from firebase auth is used to create new user
 * using email and password
 *
 * @param {string} email
 * @param {string} password
 * @returns
 *
 * Email -> email variable takes users email address from email input
 * password -> password variable takes user password from password input
 *
 */
export async function CreateNewUser(email, password) {
  // let's add some validation
  if (!email) throw new Error("Email can not be empty");
  if (!password) throw new Error("Password can not be Empty");

  const userCredentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  /**
   * after successfull login it will return users credentials like
   * email, userId, token, etc.
   */
  return userCredentials;
}

/**
 * If user alredy exists in firebase and want to login.
 * In last video we have seen how to create user "signup"
 * In this video we will see how to login existing user.
 */
export async function LoginUser(email, password) {
  // let's add some validation
  if (!email) throw new Error("Email can not be empty");
  if (!password) throw new Error("Password can not be Empty");

  const user = await signInWithEmailAndPassword(auth, email, password);
  return user;
}
