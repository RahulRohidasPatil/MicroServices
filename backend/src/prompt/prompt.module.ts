import { Module } from '@nestjs/common';
import { PromptService } from './prompt.service';
import { PromptController } from './prompt.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Prompt, PromptSchema } from 'schemas/prompt.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Prompt.name, schema: PromptSchema }]),
  ],
  controllers: [PromptController],
  providers: [PromptService],
})
export class PromptModule {}
