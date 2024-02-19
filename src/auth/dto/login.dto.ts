import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString, Matches, MinLength } from 'class-validator';


export class LoginDto {
    //@IsNotEmpty()
    @IsOptional()
    @IsEmail({}, { message: 'Please enter correct email or phone number' })
    readonly email?: string;


    //@IsNotEmpty()
    @IsOptional()
    @IsPhoneNumber('TN', { message: 'Please enter correct email or phone number' })
    readonly phoneNumber?: Number;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)
    readonly password: string;
}