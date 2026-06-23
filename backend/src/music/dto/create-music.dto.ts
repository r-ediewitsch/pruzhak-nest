import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { MusicEra } from '@prisma/client';

export class CreateMusicDto {
    @IsString({ message: 'Title should be a string' })
    @IsNotEmpty({ message: 'Title cannot be empty' })
    readonly title: string;

    @IsString({ message: 'Composer should be a string' })
    @IsNotEmpty({ message: 'Composer cannot be empty' })
    readonly composer: string;

    @IsEnum(MusicEra, { message: 'Invalid era' })
    @IsNotEmpty({ message: 'Era cannot be empty' })
    readonly era: MusicEra;
}