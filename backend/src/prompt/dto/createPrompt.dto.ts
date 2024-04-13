import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class CreatePromptDto {
  @IsMongoId()
  @IsNotEmpty()
  creator: string;

  @IsString()
  @IsNotEmpty()
  prompt: string;
}
