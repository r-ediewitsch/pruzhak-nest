import { Module } from '@nestjs/common';
import { ConcertModule } from './concert/concert.module';
import { MusicModule } from './music/music.module';
import { ArtistModule } from './artist/artist.module';

@Module({
  imports: [ConcertModule, MusicModule, ArtistModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
