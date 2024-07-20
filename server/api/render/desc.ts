import ejs from 'ejs';

export default defineEventHandler(event => {
  return ejs.renderFile('./server/templates/desc.ejs', {
    message: 'World',
  });
});
