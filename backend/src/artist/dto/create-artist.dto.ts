import { IsString, IsNotEmpty } from 'class-validator';

export class CreateArtistDto {
    @IsString({ message: 'Name should be a string' })
    @IsNotEmpty({ message: 'Name cannot be empty' })
    readonly name: string;

    @IsString({ message: 'Description should be a string' })
    readonly description: string;
}