import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';


@Injectable()
export class MusicService {
    constructor(private readonly prisma: PrismaService) { }

    async createMusic(createMusicDto: CreateMusicDto) {
        try {
            return await this.prisma.music.create({
                data: createMusicDto,
            });
        } catch (error) {
            if (error.code == "P2002") {
                throw new ConflictException("The piece already exists!");
            }
            throw error;
        }
    }

    async getAllMusic() {
        const music = await this.prisma.music.findMany();

        if (!music) {
            throw new NotFoundException("Music not found!");
        }
        return music;
    }

    async getMusicById(id: string) {
        const music = await this.prisma.music.findUnique({
            where: { id },
        });

        if (!music) {
            throw new NotFoundException("Music not found!");
        }

        return music;
    }

    async updateMusic(id: string, updateMusicDto: UpdateMusicDto) {
        const music = await this.getMusicById(id);

        return await this.prisma.music.update({
            where: { id },
            data: updateMusicDto,
        });
    }

    async deleteMusic(id: string) {
        const music = await this.getMusicById(id);

        return await this.prisma.music.delete({
            where: { id },
        });
    }

}
