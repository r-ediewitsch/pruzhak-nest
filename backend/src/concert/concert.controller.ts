import { Controller } from '@nestjs/common';
import { ConcertService } from './concert.service';

@Controller('concert')
export class ConcertController {
  constructor(private readonly concertService: ConcertService) {}
}
