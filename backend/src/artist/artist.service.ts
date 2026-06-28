import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';

@Injectable()
export class ArtistService {
    constructor(private readonly prisma: PrismaService) { }

    async createArtist(createArtistDto: CreateArtistDto) {
        try {
            return await this.prisma.artist.create({
                data: createArtistDto,
            });
        } catch (error) {
            if (error.code == "P2002") {
                throw new ConflictException("The artist already exists!");
            }
            throw error;
        }
    }

    async getAllArtist() {
        const artist = await this.prisma.artist.findMany();

        if (!artist) {
            throw new NotFoundException("Artist not found!");
        }

        return artist;
    }

    async getArtistById(id: string) {
        const artist = await this.prisma.artist.findUnique({
            where: { id },
        });

        if (!artist) {
            throw new NotFoundException("Artist not found!");
        }

        return artist;
    }

    async updateArtist(id: string, updateArtistDto: UpdateArtistDto) {
        const artist = await this.getArtistById(id);

        return await this.prisma.artist.update({
            where: { id },
            data: updateArtistDto,
        });
    }

    async deleteArtist(id: string) {
        const artist = await this.getArtistById(id);

        return await this.prisma.artist.delete({
            where: { id },
        });
    }
}
