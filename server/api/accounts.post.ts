import { Account } from '../model/account';

export default defineEventHandler(async event => {
  const body = await readBody(event);
  const query = getQuery(event);
  const account = query.id ? await Account.findByIdAndUpdate(query.id, body) : await Account.create(body);

  if (!account) throw createError({ statusCode: 400 });
  return { message: 'Success' };
});
