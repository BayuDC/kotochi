// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@pinia/nuxt', 'nuxt-mongoose'],
  imports: {
    dirs: ['types/*.ts'],
  },
});
