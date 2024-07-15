import { defineMongooseModel } from '#nuxt/mongoose';

export const Account = defineMongooseModel({
  name: 'Account',
  schema: {},
  options: { strict: false },
});
