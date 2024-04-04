import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'schemas/user.schema';
import { SignInDto } from './dto/signIn.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  create(signInDto: SignInDto) {
    return this.userModel.create(signInDto);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
