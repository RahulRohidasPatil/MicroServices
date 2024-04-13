import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreatePromptDto } from './dto/createPrompt.dto';
import { PromptService } from './prompt.service';

@Controller('prompt')
export class PromptController {
  constructor(private readonly promptService: PromptService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post('create')
  async create(@Req() request: Request, @Body() body: CreatePromptDto) {
    return this.promptService.create(request['user'].sub, body.prompt);
  }
}
