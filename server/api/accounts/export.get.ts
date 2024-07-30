import { Account } from '../../model/account';

const charactersMap: Record<string, any> = {
  Albedo: [
    ['button:nth-of-type(1) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[1]/label'],
    ['pierce/button:nth-of-type(1) > label'],
    ['text/Albedo'],
  ],
  Alhaitham: [
    ['button:nth-of-type(2) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[2]/label'],
    ['pierce/button:nth-of-type(2) > label'],
    ['text/Alhaitham'],
  ],
  Arlecchino: false,
  Ayaka: [
    ['button:nth-of-type(4) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[4]/label'],
    ['pierce/button:nth-of-type(4) > label'],
    ['text/Ayaka'],
  ],
  Ayato: [
    ['button:nth-of-type(5) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[5]/label'],
    ['pierce/button:nth-of-type(5) > label'],
    ['text/Ayato'],
  ],
  Baizhu: [
    ['button:nth-of-type(6) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[6]/label'],
    ['pierce/button:nth-of-type(6) > label'],
    ['text/Baizhu'],
  ],
  Childe: [
    ['button:nth-of-type(7) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[7]/label'],
    ['pierce/button:nth-of-type(7) > label'],
    ['text/Childe'],
  ],
  Chiori: false,
  Clorinde: false,
  Cyno: [
    ['button:nth-of-type(8) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[8]/label'],
    ['pierce/button:nth-of-type(8) > label'],
    ['text/Cyno'],
  ],
  Eula: [
    ['button:nth-of-type(11) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[11]/label'],
    ['pierce/button:nth-of-type(11) > label'],
    ['text/Eula'],
  ],
  Furina: false,
  Ganyu: [
    ['button:nth-of-type(12) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[12]/label'],
    ['pierce/button:nth-of-type(12) > label'],
    ['text/Ganyu'],
  ],
  'Hu Tao': [
    ['button:nth-of-type(13) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[13]/label'],
    ['pierce/button:nth-of-type(13) > label'],
    ['text/Hu Tao'],
  ],
  Itto: [
    ['button:nth-of-type(14) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[14]/label'],
    ['pierce/button:nth-of-type(14) > label'],
    ['text/Itto'],
  ],
  Kazuha: [
    ['button:nth-of-type(16) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[16]/label'],
    ['pierce/button:nth-of-type(16) > label'],
    ['text/Kazuha'],
  ],
  Klee: [
    ['button:nth-of-type(18) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[18]/label'],
    ['pierce/button:nth-of-type(18) > label'],
    ['text/Klee'],
  ],
  Kokomi: [
    ['button:nth-of-type(19) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[19]/label'],
    ['pierce/button:nth-of-type(19) > label'],
    ['text/Kokomi'],
  ],
  Lyney: [
    ['button:nth-of-type(20) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[20]/label'],
    ['pierce/button:nth-of-type(20) > label'],
    ['text/Lyney'],
  ],
  Nahida: [
    ['button:nth-of-type(22) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[22]/label'],
    ['pierce/button:nth-of-type(22) > label'],
    ['text/Nahida'],
  ],
  Navia: false,
  Neuvillette: false,
  Nilou: [
    ['button:nth-of-type(23) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[23]/label'],
    ['pierce/button:nth-of-type(23) > label'],
    ['text/Nilou'],
  ],
  'Raiden Shogun': [
    ['button:nth-of-type(25) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[25]/label'],
    ['pierce/button:nth-of-type(25) > label'],
    ['text/Raiden Shogun'],
  ],
  Shenhe: [
    ['button:nth-of-type(26) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[26]/label'],
    ['pierce/button:nth-of-type(26) > label'],
    ['text/Shenhe'],
  ],
  Sigewinne: false,
  Venti: [
    ['button:nth-of-type(28) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[28]/label'],
    ['pierce/button:nth-of-type(28) > label'],
    ['text/Venti'],
  ],
  Wanderer: [
    ['button:nth-of-type(29) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[29]/label'],
    ['pierce/button:nth-of-type(29) > label'],
    ['text/Wanderer'],
  ],
  Wriothesley: false,
  Xianyun: false,
  Xiao: [
    ['button:nth-of-type(30) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[30]/label'],
    ['pierce/button:nth-of-type(30) > label'],
    ['text/Xiao'],
  ],
  'Yae Miko': [
    ['button:nth-of-type(31) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[31]/label'],
    ['pierce/button:nth-of-type(31) > label'],
    ['text/Yae Miko'],
  ],
  Yelan: [
    ['button:nth-of-type(32) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[32]/label'],
    ['pierce/button:nth-of-type(32) > label'],
    ['text/Yelan'],
  ],
  Yoimiya: [
    ['button:nth-of-type(33) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[33]/label'],
    ['pierce/button:nth-of-type(33) > label'],
    ['text/Yoimiya'],
  ],
  Zhongli: [
    ['button:nth-of-type(34) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[34]/label'],
    ['pierce/button:nth-of-type(34) > label'],
    ['text/Zhongli'],
  ],

  Dehya: [
    ['button:nth-of-type(9) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[9]/label'],
    ['pierce/button:nth-of-type(9) > label'],
    ['text/Dehya'],
  ],
  Diluc: [
    ['button:nth-of-type(10) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[10]/label'],
    ['pierce/button:nth-of-type(10) > label'],
    ['text/Diluc'],
  ],
  Jean: [
    ['button:nth-of-type(15) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[15]/label'],
    ['pierce/button:nth-of-type(15) > label'],
    ['text/Jean'],
  ],
  Keqing: [
    ['button:nth-of-type(17) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[17]/label'],
    ['pierce/button:nth-of-type(17) > label'],
    ['text/Keqing'],
  ],
  Mona: [
    ['button:nth-of-type(21) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[21]/label'],
    ['pierce/button:nth-of-type(21) > label'],
    ['text/Mona'],
  ],
  Qiqi: [
    ['button:nth-of-type(24) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[24]/label'],
    ['pierce/button:nth-of-type(24) > label'],
    ['text/Qiqi'],
  ],
  Tighnari: [
    ['button:nth-of-type(27) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[27]/label'],
    ['pierce/button:nth-of-type(27) > label'],
    ['text/Tighnari'],
  ],
};
const weaponsMap: Record<string, any> = {
  'A Thousand Floating Dreams': [
    ['button:nth-of-type(1) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[1]/label'],
    ['pierce/button:nth-of-type(1) > label'],
    ['text/A Thousand Floating'],
  ],
  Absolution: false,
  'Aqua Simulacra': [
    ['button:nth-of-type(3) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[3]/label'],
    ['pierce/button:nth-of-type(3) > label'],
    ['text/Aqua Simulacra'],
  ],
  'Beacon of the Reed Sea': [
    ['button:nth-of-type(5) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[5]/label'],
    ['pierce/button:nth-of-type(5) > label'],
    ['text/Beacon of the'],
  ],
  'Calamity Queller': [
    ['button:nth-of-type(6) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[6]/label'],
    ['pierce/button:nth-of-type(6) > label'],
    ['text/Calamity Queller'],
  ],
  'Cashflow Supervision': false,
  "Crane's Echoing Call": false,
  "Crimson Moon's Semblance": false,
  'Elegy for the End': [
    ['button:nth-of-type(7) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[7]/label'],
    ['pierce/button:nth-of-type(7) > label'],
    ['text/Elegy for the'],
  ],
  'Engulfing Lightning': [
    ['button:nth-of-type(8) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[8]/label'],
    ['pierce/button:nth-of-type(8) > label'],
    ['text/Engulfing Lightning'],
  ],
  'Everlasting Moonglow': [
    ['button:nth-of-type(9) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[9]/label'],
    ['pierce/button:nth-of-type(9) > label'],
    ['text/Everlasting Moonglow'],
  ],
  'Freedom-Sworn': [
    ['button:nth-of-type(10) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[10]/label'],
    ['pierce/button:nth-of-type(10) > label'],
    ['text/Freedom-Sworn'],
  ],
  'Haran Geppaku Futsu': [
    ['button:nth-of-type(11) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[11]/label'],
    ['pierce/button:nth-of-type(11) > label'],
    ['text/Haran Geppaku'],
  ],
  "Hunter's Path": [
    ['button:nth-of-type(12) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[12]/label'],
    ['pierce/button:nth-of-type(12) > label'],
    ["text/Hunter's Path"],
  ],
  "Jadefall's Splendor": [
    ['button:nth-of-type(13) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[13]/label'],
    ['pierce/button:nth-of-type(13) > label'],
    ["text/Jadefall's Splendor"],
  ],
  "Kagura's Verity": [
    ['button:nth-of-type(14) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[14]/label'],
    ['pierce/button:nth-of-type(14) > label'],
    ["text/Kagura's Verity"],
  ],
  'Key of Khaj-Nisut': [
    ['button:nth-of-type(15) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[15]/label'],
    ['pierce/button:nth-of-type(15) > label'],
    ['text/Key of Khaj-Nisut'],
  ],
  'Light of Foliar Incision': [
    ['button:nth-of-type(16) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[16]/label'],
    ['pierce/button:nth-of-type(16) > label'],
    ['text/Light of Foliar'],
  ],
  'Memory of Dust': [
    ['button:nth-of-type(18) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[18]/label'],
    ['pierce/button:nth-of-type(18) > label'],
    ['text/Memory of Dust'],
  ],
  'Mistsplitter Reforged': [
    ['button:nth-of-type(19) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[19]/label'],
    ['pierce/button:nth-of-type(19) > label'],
    ['text/Mistsplitter'],
  ],
  'Polar Star': [
    ['button:nth-of-type(20) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[20]/label'],
    ['pierce/button:nth-of-type(20) > label'],
    ['text/Polar Star'],
  ],
  'Primordial Jade Cutter': [
    ['button:nth-of-type(21) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[21]/label'],
    ['pierce/button:nth-of-type(21) > label'],
    ['text/Primordial Jade Cutter'],
  ],
  'Redhorn Stonethresher': [
    ['button:nth-of-type(23) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[23]/label'],
    ['pierce/button:nth-of-type(23) > label'],
    ['text/Redhorn Stonethresher'],
  ],
  'Silvershower Heartstrings': false,
  'Song of Broken Pines': [
    ['button:nth-of-type(29) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[29]/label'],
    ['pierce/button:nth-of-type(29) > label'],
    ['text/Song of Broken'],
  ],
  'Splendor of Tranquil Waters': false,
  'Staff of Homa': [
    ['button:nth-of-type(30) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[30]/label'],
    ['pierce/button:nth-of-type(30) > label'],
    ['text/Staff of Homa'],
  ],
  'Staff of the Scarlet Sands': [
    ['button:nth-of-type(31) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[31]/label'],
    ['pierce/button:nth-of-type(31) > label'],
    ['text/Staff of the'],
  ],
  'Summit Shaper': [
    ['button:nth-of-type(32) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[32]/label'],
    ['pierce/button:nth-of-type(32) > label'],
    ['text/Summit Shaper'],
  ],
  'The First Great Magic': [
    ['button:nth-of-type(33) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[33]/label'],
    ['pierce/button:nth-of-type(33) > label'],
    ['text/The First Great'],
  ],
  'The Unforged': [
    ['button:nth-of-type(34) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[34]/label'],
    ['pierce/button:nth-of-type(34) > label'],
    ['text/The Unforged'],
  ],
  'Thundering Pulse': [
    ['button:nth-of-type(35) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[35]/label'],
    ['pierce/button:nth-of-type(35) > label'],
    ['text/Thundering Pulse'],
  ],
  'Tome of the Eternal Flow': false,
  "Tulaytullah's Remembrance": [
    ['button:nth-of-type(36) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[36]/label'],
    ['pierce/button:nth-of-type(36) > label'],
    ["text/Tulaytullah's"],
  ],
  'Uraku Misugiri': false,
  Verdict: false,
  'Vortex Vanquisher': [
    ['button:nth-of-type(37) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[37]/label'],
    ['pierce/button:nth-of-type(37) > label'],
    ['text/Vortex Vanquisher'],
  ],

  "Amos' Bow": [
    ['button:nth-of-type(2) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[2]/label'],
    ['pierce/button:nth-of-type(2) > label'],
    ['text/Amos Bow'],
  ],
  'Aquila Favonia': [
    ['button:nth-of-type(4) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[4]/label'],
    ['pierce/button:nth-of-type(4) > label'],
    ['text/Aquila Favonia'],
  ],
  'Lost Prayer to the Sacred Winds': [
    ['button:nth-of-type(17) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[17]/label'],
    ['pierce/button:nth-of-type(17) > label'],
    ['text/Lost Prayer to'],
  ],
  'Primordial Jade Winged-Spear': [
    ['button:nth-of-type(22) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[22]/label'],
    ['pierce/button:nth-of-type(22) > label'],
    ['text/Primordial Jade Winged-Spear'],
  ],
  'Skyward Atlas': [
    ['button:nth-of-type(24) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[24]/label'],
    ['pierce/button:nth-of-type(24) > label'],
    ['text/Skyward Atlas'],
  ],
  'Skyward Blade': [
    ['button:nth-of-type(25) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[25]/label'],
    ['pierce/button:nth-of-type(25) > label'],
    ['text/Skyward Blade'],
  ],
  'Skyward Harp': [
    ['button:nth-of-type(26) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[26]/label'],
    ['pierce/button:nth-of-type(26) > label'],
    ['text/Skyward Harp'],
  ],
  'Skyward Pride': [
    ['button:nth-of-type(27) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[27]/label'],
    ['pierce/button:nth-of-type(27) > label'],
    ['text/Skyward Pride'],
  ],
  'Skyward Spine': [
    ['button:nth-of-type(28) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[28]/label'],
    ['pierce/button:nth-of-type(28) > label'],
    ['text/Skyward Spine'],
  ],
  "Wolf's Gravestone": [
    ['button:nth-of-type(38) > label'],
    ['xpath///*[@data-test="undefined-option"]/button[38]/label'],
    ['pierce/button:nth-of-type(38) > label'],
    ["text/Wolf's Gravestone"],
  ],
};

export default defineEventHandler(async event => {
  const query = getQuery(event);
  if (!query.id) return createError({ statusCode: 400 });

  const account = (await Account.findById(query.id)) as any;
  if (!account) return createError({ statusCode: 404 });
  return {
    title: 'Dagangan No ' + account.no + (query.alt ? ' Alt' : ''),
    steps: [
      // ? Opening
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
        value: query.alt ? account.name2 : account.name,
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
          [`aria/Tambahkan '${query.alt ? account.name2 : account.name}'`],
          ['#product-name-option-0'],
          ['xpath///*[@id="product-name-option-0"]'],
          ['pierce/#product-name-option-0'],
          ["text/Tambahkan 'Nama"],
        ],
        offsetY: 10,
        offsetX: 10,
      },
      // ? character
      {
        type: 'click',
        target: 'main',
        selectors: [
          ['aria/Pilih Karakter B5 yang dimiliki'],
          ['div:nth-of-type(7) input'],
          ['xpath///*[@data-test="product-form"]/div[1]/div[2]/div[7]/div[2]/div/input'],
          ['pierce/div:nth-of-type(7) input'],
        ],
        offsetY: 10,
        offsetX: 10,
      },
      ...[...account.limitedChars, ...account.standardChars]
        .map((char: any) => {
          const selectors = charactersMap[char.name as string];

          if (!selectors) return false;

          return {
            type: 'click',
            target: 'main',
            selectors,
            offsetY: 10,
            offsetX: 10,
          };
        })
        .filter((x: any) => x),
      {
        type: 'click',
        target: 'main',
        selectors: [['div:nth-of-type(7) > div.relative > div > div > div:nth-of-type(2) svg']],
        offsetY: 10,
        offsetX: 10,
      },

      // ? weapon
      {
        type: 'click',
        target: 'main',
        selectors: [
          ['aria/Pilih Weapon B5 yang dimiliki'],
          ['div:nth-of-type(8) input'],
          ['xpath///*[@data-test="product-form"]/div[1]/div[2]/div[8]/div[2]/div/input'],
          ['pierce/div:nth-of-type(8) input'],
        ],
        offsetY: 10,
        offsetX: 10,
      },

      ...[...account.limitedWeaps, ...account.standardWeaps]
        .map((weap: any) => {
          const selectors = weaponsMap[weap.name as string];

          if (!selectors) return false;

          return {
            type: 'click',
            target: 'main',
            selectors,
            offsetY: 10,
            offsetX: 10,
          };
        })
        .filter((x: any) => x),
      {
        type: 'click',
        target: 'main',
        selectors:
          account.limitedWeaps.length + account.standardWeaps.length > 0
            ? [
                'div:nth-of-type(8) > div.relative > div > div > div:nth-of-type(2) svg',
                'xpath///*[@data-test="product-form"]/div[1]/div[2]/div[8]/div[2]/div/div/div[2]/div/svg',
                'pierce/div:nth-of-type(8) > div.relative > div > div > div:nth-of-type(2) svg',
              ]
            : [
                'div:nth-of-type(8) > div.relative > div svg',
                'xpath///*[@data-test="product-form"]/div[1]/div[2]/div[8]/div[2]/div/div/div/div/svg',
                'pierce/div:nth-of-type(8) > div.relative > div svg',
              ],
        offsetX: 10,
        offsetY: 10,
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

      // ? description
      {
        type: 'click',
        target: 'main',
        selectors: [
          ['#product-description'],
          ['xpath///*[@id="product-description"]'],
          ['pierce/#product-description'],
        ],
        offsetY: 48,
        offsetX: 222,
      },
      {
        type: 'change',
        value: query.alt ? account.description2 : account.description,
        selectors: [
          ['#product-description'],
          ['xpath///*[@id="product-description"]'],
          ['pierce/#product-description'],
        ],
        target: 'main',
        timeout: 30000,
      },

      // ? ending
      {
        type: 'click',
        target: 'main',
        selectors: [['#product-stock'], ['xpath///*[@id="product-stock"]'], ['pierce/#product-stock']],
        offsetY: 10,
        offsetX: 10,
      },
      {
        type: 'change',
        value: '1',
        selectors: [['#product-stock'], ['xpath///*[@id="product-stock"]'], ['pierce/#product-stock']],
        target: 'main',
      },
      {
        type: 'click',
        target: 'main',
        selectors: [['#product-min-order'], ['xpath///*[@id="product-min-order"]'], ['pierce/#product-min-order']],
        offsetY: 10,
        offsetX: 10,
      },
      {
        type: 'change',
        value: '1',
        selectors: [['#product-min-order'], ['xpath///*[@id="product-min-order"]'], ['pierce/#product-min-order']],
        target: 'main',
      },
    ],
  };
});
