import { Account } from '../model/account';

export default defineEventHandler(async event => {
  const body = await readBody(event);
  const account = await Account.create(body);

  if (!account) throw createError({ statusCode: 400 });
  return { message: 'Success' };
});
