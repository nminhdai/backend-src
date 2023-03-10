import mongoose, { ObjectId, Schema } from 'mongoose';

export class SmartPhoneModel {
  _id: ObjectId;
  model: string;
  dataMem: string;
  yearManufacture: number;
  osVersion: string;
  bodyColor: string;
  price: number;
}

const SmartPhoneSchema = new Schema({
  model: { type: String, default: '' },
  dataMem: { type: String, default: '' },
  yearManufacture: { type: Number, default: 1970 },
  osVersion: { type: String, default: '' },
  bodyColor: { type: String, default: '' },
  price: { type: Number, default: 0 },
});

export const SmartPhone = mongoose.model<SmartPhoneModel>(
  'SmartPhone',
  SmartPhoneSchema,
);
