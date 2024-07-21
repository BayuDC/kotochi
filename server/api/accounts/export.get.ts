import { Account } from '../../model/account';

export default defineEventHandler(async event => {
  const query = getQuery(event);
  if (!query.id) return createError({ statusCode: 400 });

  const account = (await Account.findById(query.id)) as any;
  if (!account) return createError({ statusCode: 404 });
  return {
    // ? Opening
    title: 'Buat Dagangan',
    steps: [
      {
        type: 'setViewport',
        width: 1280,
        height: 720,
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        isLandscape: false,
      },
      {
        type: 'navigate',
        url: 'https://tokoku.itemku.com/dagangan/baru',
        assertedEvents: [
          {
            type: 'navigation',
            url: 'https://tokoku.itemku.com/dagangan/baru',
            title: 'Buat Dagangan',
          },
        ],
      },
      {
        type: 'click',
        target: 'main',
        selectors: [
          ['aria/Pilih Kategori'],
          ['input'],
          ['xpath///*[@data-test="game-picker"]/div[1]/input'],
          ['pierce/input'],
        ],
        offsetY: 10,
        offsetX: 10,
      },
      {
        type: 'change',
        value: 'Genshin Impact',
        selectors: [
          ['aria/Pilih Kategori'],
          ['input'],
          ['xpath///*[@data-test="game-picker"]/div[1]/input'],
          ['pierce/input'],
        ],
        target: 'main',
      },
      {
        type: 'click',
        target: 'main',
        selectors: [
          ['aria/Genshin Impact[role="paragraph"]'],
          ['main > div.w-full p'],
          ['xpath///*[@data-test="game-picker-option"]/li/button/p'],
          ['pierce/main > div.w-full p'],
          ['text/Genshin Impact'],
        ],
        offsetY: 10,
        offsetX: 10,
      },
      {
        type: 'click',
        target: 'main',
        selectors: [
          ['aria/Pilih Tipe'],
          ["[data-test='product-form'] > div:nth-of-type(1) > div > div.MuiFormControl-root input"],
          ['xpath///*[@data-test="item-picker"]/div[1]/input'],
          ["pierce/[data-test='product-form'] > div:nth-of-type(1) > div > div.MuiFormControl-root input"],
        ],
        offsetY: 10,
        offsetX: 10,
      },
      {
        type: 'click',
        target: 'main',
        selectors: [
          ['aria/Akun[role="paragraph"]'],
          ['li:nth-of-type(2) p'],
          ['xpath///*[@data-test="item-picker-option"]/li[2]/button/p'],
          ['pierce/li:nth-of-type(2) p'],
        ],
        offsetY: 10,
        offsetX: 10,
      },
      // ? Name
      {
        type: 'click',
        target: 'main',
        selectors: [
          ['aria/Masukkan nama item yang kamu jual'],
          ['#product-name'],
          ['xpath///*[@id="product-name"]'],
          ['pierce/#product-name'],
        ],
        offsetY: 10,
        offsetX: 10,
      },
      {
        type: 'change',
        value: account.name,
        selectors: [
          ['aria/Masukkan nama item yang kamu jual'],
          ['#product-name'],
          ['xpath///*[@id="product-name"]'],
          ['pierce/#product-name'],
        ],
        target: 'main',
      },
      {
        type: 'click',
        target: 'main',
        selectors: [
          [`aria/Tambahkan '${account.name}'`],
          ['#product-name-option-0'],
          ['xpath///*[@id="product-name-option-0"]'],
          ['pierce/#product-name-option-0'],
          ["text/Tambahkan 'Nama"],
        ],
        offsetY: 10,
        offsetX: 10,
      },
      // ? MC
      {
        type: 'click',
        target: 'main',
        selectors: [
          ['aria/Pilih Gender Main Character'],
          ['div:nth-of-type(4) input'],
          ['xpath///*[@data-test="product-form"]/div[1]/div[2]/div[4]/div[2]/div[1]/input'],
          ['pierce/div:nth-of-type(4) input'],
        ],
        offsetY: 10,
        offsetX: 10,
      },
      {
        type: 'click',
        target: 'main',
        selectors: {
          'Male Aether': [
            ['aria/Male Aether[role="paragraph"]'],
            ['li:nth-of-type(1) p'],
            ['xpath///*[@data-test="undefined-option"]/li[1]/button/p'],
            ['pierce/li:nth-of-type(1) p'],
            ['text/Male Aether'],
          ],
          'Female Lumine': [
            ['aria/Female Lumine[role="paragraph"]'],
            ['li:nth-of-type(2) p'],
            ['xpath///*[@data-test="undefined-option"]/li[2]/button/p'],
            ['pierce/li:nth-of-type(2) p'],
            ['text/Female Lumine'],
          ],
        }[account.mc as 'Male Aether' | 'Female Lumine'],
        offsetY: 10,
        offsetX: 10,
      },
      // ? AR
      {
        type: 'click',
        target: 'main',
        selectors: [
          ['aria/Contoh: 60'],
          ['#attribute-number-13'],
          ['xpath///*[@id="attribute-number-13"]'],
          ['pierce/#attribute-number-13'],
        ],
        offsetY: 10,
        offsetX: 10,
      },
      {
        type: 'change',
        value: account.ar,
        selectors: [
          ['aria/Contoh: 60'],
          ['#attribute-number-13'],
          ['xpath///*[@id="attribute-number-13"]'],
          ['pierce/#attribute-number-13'],
        ],
        target: 'main',
      },
      // ? Primo
      {
        type: 'click',
        target: 'main',
        selectors: [
          ['aria/Contoh: 16000'],
          ['#attribute-number-14'],
          ['xpath///*[@id="attribute-number-14"]'],
          ['pierce/#attribute-number-14'],
        ],
        offsetY: 10,
        offsetX: 10,
      },
      {
        type: 'change',
        value: account.primo,
        selectors: [
          ['aria/Contoh: 16000'],
          ['#attribute-number-14'],
          ['xpath///*[@id="attribute-number-14"]'],
          ['pierce/#attribute-number-14'],
        ],
        target: 'main',
      },
    ],
  };
});
