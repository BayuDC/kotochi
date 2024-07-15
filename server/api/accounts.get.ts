import { Account } from '../model/account';

export default defineEventHandler(async event => {
  const accounts = await Account.find(
    {},
    {
      no: true,
      name: true,
      price: true,
      status: true,
    }
  );

  return { accounts };
});
