import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { MusicService } from './music.service';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';

@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) { }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createMusicDto: CreateMusicDto) {
    return this.musicService.createMusic(createMusicDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.musicService.getAllMusic();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.musicService.getMusicById(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateMusicDto: UpdateMusicDto) {
    return this.musicService.updateMusic(id, updateMusicDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.musicService.deleteMusic(id);
  }
}
