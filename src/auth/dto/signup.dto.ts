import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, Matches, MinLength } from 'class-validator';


export class SignUpDto {

    @IsNotEmpty()
    @IsEmail({}, { message: 'Please enter correct email' })
    readonly email: string;


    @IsNotEmpty()
    @IsPhoneNumber('TN', { message: 'Please enter correct phone number' })
    readonly phoneNumber: Number;



    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)
    readonly password: string;


    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)
    readonly confirmPassword: string;
}

