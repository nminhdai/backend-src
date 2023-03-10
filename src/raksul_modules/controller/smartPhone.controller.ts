import { Controller, UsePipes, Post, HttpCode, Body } from '@nestjs/common';
import { ValidationPipe } from '../../nmd_core/common/pipes/validation.pipe';
import { ReturnInternalServerError } from '../../nmd_core/common/utils/custom.error';
import { SmartPhoneModel } from '../model/smartPhone/smartPhone.model';
import { CreateSmartPhoneReq } from '../request/smartPhone';
import { SmartPhoneService } from '../service/smartPhone.service';

@Controller('/smartphone')
export class SmartPhoneController {
  constructor(private readonly smartPhoneService: SmartPhoneService) {}

  @Post('/create')
  @HttpCode(201)
  @UsePipes(new ValidationPipe())
  async createSmartPhone(@Body() bodyReq: CreateSmartPhoneReq) {
    try {
      const res: SmartPhoneModel = await this.smartPhoneService.createOne(
        bodyReq,
      );
      return {
        statusCode: 200,
        message: 'Create smartphone successfully',
        data: res,
      };
    } catch (error) {
      if (error.status) throw error;
      else throw ReturnInternalServerError(error);
    }
  }
}
