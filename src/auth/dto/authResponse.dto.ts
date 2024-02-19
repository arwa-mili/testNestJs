import { User } from "src/models/user.entity";

export class AuthResponse {
    user: User;
    backendTokens: {
        accessToken: string;
        refreshToken: string;
        expiresIn: number;
    };
}