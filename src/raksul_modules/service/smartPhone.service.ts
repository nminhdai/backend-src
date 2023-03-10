import { Injectable } from '@nestjs/common';
import { SmartPhoneModel } from '../model/smartPhone/smartPhone.model';
import { SmartPhoneRepo } from '../repo';
import { CreateSmartPhoneReq } from '../request/smartPhone';

@Injectable()
export class SmartPhoneService {
  constructor(private readonly smartPhoneRepo: SmartPhoneRepo) {}

  async createOne(data: CreateSmartPhoneReq): Promise<SmartPhoneModel> {
    // normally: validate the input, but in this source code, I use the "class-validator" of nestJS

    // do the repo create to save in the database
    const res = await this.smartPhoneRepo.create(data);
    return res;
  }
}
