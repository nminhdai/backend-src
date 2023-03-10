import { Module } from '@nestjs/common';
import { SmartPhoneModule } from './model/smartPhone/smartPhone.module';

@Module({
  imports: [SmartPhoneModule],
  providers: [],
  exports: [],
})
export class RAKSULModule {}
