import { defineMongooseModel } from '#nuxt/mongoose';

export const Account = defineMongooseModel({
  name: 'Account',
  schema: { no: Number },
  options: { strict: false },
});
