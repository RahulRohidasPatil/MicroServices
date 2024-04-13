import { Body, Controller, Post } from '@nestjs/common';
import { PromptService } from './prompt.service';
import { CreatePromptDto } from './dto/createPrompt.dto';

@Controller('prompt')
export class PromptController {
  constructor(private readonly promptService: PromptService) {}

  @Post('create')
  async create(@Body() body: CreatePromptDto) {
    const { creator, prompt } = body;
    return this.promptService.create(creator, prompt);
  }
}
