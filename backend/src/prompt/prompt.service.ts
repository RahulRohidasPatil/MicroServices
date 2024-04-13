import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Prompt } from 'schemas/prompt.schema';

@Injectable()
export class PromptService {
  constructor(@InjectModel(Prompt.name) private promptModel: Model<Prompt>) {}

  create(creator: string, prompt: string) {
    return this.promptModel.create({ creator, prompt });
  }
}
