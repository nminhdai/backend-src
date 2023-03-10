import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSmartPhoneReq {
  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  @IsString()
  dataMem: string;

  @IsNotEmpty()
  @IsNumber()
  yearManufacture: number;

  @IsNotEmpty()
  @IsString()
  osVersion: string;

  @IsNotEmpty()
  @IsString()
  bodyColor: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
