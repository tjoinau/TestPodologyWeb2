import { Role } from "./role";

export interface User {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    role: Role;
}
