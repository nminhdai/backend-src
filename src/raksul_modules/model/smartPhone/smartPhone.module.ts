import { Module } from '@nestjs/common';

import { SmartPhoneController } from '../../controller/smartPhone.controller';
import { SmartPhoneService } from '../../service/smartPhone.service';
import { SmartPhoneRepo } from '../../repo';

@Module({
  imports: [],
  controllers: [SmartPhoneController],
  providers: [SmartPhoneService, SmartPhoneRepo],
  exports: [],
})
export class SmartPhoneModule {}
