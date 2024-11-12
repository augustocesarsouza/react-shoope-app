import { ObjUser } from "../IObjUser/IObjUser";

export interface IResultGetUserFromLocalStorage {
  isNullUserLocalStorage: boolean;
  user: ObjUser | null;
}
