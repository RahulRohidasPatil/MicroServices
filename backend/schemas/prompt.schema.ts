import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type PromptDocument = mongoose.HydratedDocument<Prompt>;

@Schema({ timestamps: true, versionKey: false })
export class Prompt {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  creator: string;

  @Prop()
  prompt: string;
}

export const PromptSchema = SchemaFactory.createForClass(Prompt);
