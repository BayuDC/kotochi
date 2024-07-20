import ejs from 'ejs';

export default defineEventHandler(event => {
  return ejs.renderFile('./templates/desc.ejs', {
    message: 'World',
  });
});
