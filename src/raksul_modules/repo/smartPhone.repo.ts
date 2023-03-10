import { Injectable } from '@nestjs/common';

import {
  SmartPhone,
  SmartPhoneModel,
} from '../model/smartPhone/smartPhone.model';
import { CreateSmartPhoneReq } from '../request/smartPhone';

@Injectable()
export class SmartPhoneRepo {
  constructor() {}

  async create(item: CreateSmartPhoneReq): Promise<SmartPhoneModel> {
    const quizVocab = new SmartPhone(item);
    await quizVocab.save();

    return quizVocab;
  }
}
