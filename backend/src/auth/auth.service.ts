import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  signIn(name: string, email: string, image: string) {
    return this.userModel.findOneAndUpdate(
      { email },
      { name, image },
      { upsert: true, new: true },
    );
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
