// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@pinia/nuxt', 'nuxt-mongoose', '@kgierke/nuxt-basic-auth'],
  imports: {
    dirs: ['types/*.ts'],
  },
  basicAuth: {
    enabled: true,
  },
});
