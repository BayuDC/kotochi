export const useAccountStore = defineStore('account', () => {
  const init = {
    no: 0,
    username: '',
    email: '',
    password: '',
    gameId: '',
    ar: '',
    bd: '',
    mc: '',
    primo: '',
    resin: '',
    archonQuest: '',
    exploration: '',
    limitedChars: [] as Character[],
    limitedWeaps: [] as Weapon[],
    standardChars: [] as Character[],
    standardWeaps: [] as Weapon[],
    name: '',
    name2: '',
    price: '',
    ads: '',
    description: '',
    description2: '',
    status: '',
    minus: '',
    _id: null,
  };

  const data = reactive({ ...init });

  function generate() {
    const limitedChars = data.limitedChars.reduce(
      (ctx: any, char) => {
        char.isWellBuild ? ctx.well.push(char) : ctx.reg.push(char);
        if (char.rank && char.rank > 0) ctx.dup += char.rank;
        return ctx;
      },
      { reg: [], well: [], dup: 0 }
    );
    const standardChars = data.standardChars.reduce(
      (ctx: any, char) => {
        char.isWellBuild ? ctx.well.push(char) : ctx.reg.push(char);
        return ctx;
      },
      { reg: [], well: [] }
    );
    const limitedWeaps = data.limitedWeaps.reduce(
      (ctx: any, weap) => {
        weap.isSignature ? ctx.sign.push(weap) : ctx.reg.push(weap);
        if (weap.rank && weap.rank > 1) ctx.dup += weap.rank;
        return ctx;
      },
      { reg: [], sign: [], dup: 0 }
    );
    const standardWeaps = data.standardWeaps.reduce(
      (ctx: any, weap) => {
        weap.isSignature ? ctx.sign.push(weap) : ctx.reg.push(weap);
        return ctx;
      },
      { reg: [], sign: [] }
    );
    const summary =
      limitedChars.reg.length * 40000 +
      limitedChars.well.length * 55000 +
      standardChars.reg.length * 5000 +
      standardChars.well.length * 7500 +
      limitedWeaps.reg.length * 15000 +
      limitedWeaps.sign.length * 20000 +
      standardWeaps.reg.length * 2500 +
      standardWeaps.sign.length * 5000 +
      limitedChars.dup * 35000 +
      limitedWeaps.dup * 10000;

    const profit = Math.round(summary / 50000) * 2500;
    data.price = (summary + profit + 10000).toString();
    data.ads = (Math.ceil((summary + profit + 10000) / 25000) * 2500 + 17500).toString();

    let wellBuildList = limitedChars.well.length
      ? limitedChars.well.reduce((acc: string, char: Character) => {
          let label = acc + ' ' + char.name;
          if (char.rank) label += `(C${char.rank})`;
          if (char.hasSignature) label += '+Sign';
          return label;
        }, '') + ' WELL BUILD '
      : undefined;
    let wellBuildList2 = limitedChars.well.length
      ? limitedChars.well
          .map((char: Character) => {
            let label = char.name;
            if (char.rank) label += ` C${char.rank}`;
            if (char.hasSignature) label += ' Sign';
            return label;
          })
          .join(', ') + ' WELL BUILD'
      : undefined;
    let limitedList = limitedChars.reg.length
      ? limitedChars.reg.reduce((acc: string, char: Character) => {
          let label = acc + ' ' + char.name;
          if (char.rank) label += `(C${char.rank})`;
          if (char.hasSignature) label += '+Sign';
          return label;
        }, '') + ' '
      : undefined;
    let limitedList2 = limitedChars.reg.length
      ? limitedChars.reg
          .map((char: Character) => {
            let label = char.name;
            if (char.rank) label += ` C${char.rank}`;
            if (char.hasSignature) label += ' Sign';
            return label;
          })
          .join(', ')
      : '';
    let standardList = data.standardChars.length
      ? data.standardChars.reduce((acc, char) => acc + ' ' + char.name, '') + ' '
      : undefined;
    let standardList2 = data.standardChars.length ? data.standardChars.map(c => c.name).join(', ') : '';

    data.name = `[${data.limitedChars.length} Limit]${[wellBuildList, limitedList, standardList]
      .filter(c => c)
      .join('|')}[AR${data.ar}][${data.limitedChars.length + data.standardChars.length}B5]${
      data.minus ? '[MINUS]' : ''
    }`;
    data.name2 = `Akun ${data.limitedChars.length} Limit - ${[wellBuildList2, limitedList2, standardList2]
      .filter(c => c)
      .join(' - ')} - AR${data.ar} ID${data.gameId.slice(0, -7)} ${data.minus ? '- MINUS' : ''}`;

    data.description = `Cocok buat kamu yang malas mulung primo tapi pengen punya banyak karakter bintang 5 yang keren-keren.

Detail akun
UID : ${data.gameId.slice(0, -7) + 'xxxxxxx'}
AR : ${data.ar}
MC : ${data.mc}
Birthday : ${data.bd}

Limited Character : 
${data.limitedChars.map(c => `- ${c.name} ${c.rank ? 'C' + c.rank : ''}`).join('\n') || '- (KOSONG)'}
Limited Weapon : 
${data.limitedWeaps.map(w => `- ${w.name} ${w.rank ? 'R' + w.rank : ''}`).join('\n') || '- (KOSONG)'}
Standard Character : 
${data.standardChars.map(c => `- ${c.name} ${c.rank ? 'C' + c.rank : ''}`).join('\n') || '- (KOSONG)'}
Standard Weapon : 
${data.standardWeaps.map(w => `- ${w.name} ${w.rank ? 'R' + w.rank : ''}`).join('\n') || '- (KOSONG)'}

Archon Quest : ${data.archonQuest}
Exploration : ${data.exploration}
Primogem : ${data.primo}
Fragile Resin : ${data.resin}

Server : ASIA
Username : ${data.username == 'UNSET' ? 'UNSET' : 'SET'}
Email : ${data.email == 'UNSET' ? 'UNSET' : 'SET'}

MINUS : ${data.minus || '-'}

Disarankan untuk chat kami sebelum order untuk mempercepat proses pengiriman setelah checkout~ Kalau buru-buru boleh langsung checkout aja, tapi kalau kami masih tidur mohon ditunggu ya~ Terimakasih~`;
    data.description2 = `Akun ${data.limitedChars.length} Limit ${data.standardChars.length} Standard 
MC ${data.mc}
ID ${data.gameId.slice(0, -7) + '*******'}
Server Asia

Karakter B5 Limited 
${data.limitedChars.map(c => `- ${c.name} ${c.rank ? 'C' + c.rank : ''}`).join('\n') || '- (TIDAK ADA)'}

Karakter B5 Standard
${data.standardChars.map(c => `- ${c.name} ${c.rank ? 'C' + c.rank : ''}`).join('\n') || '- (TIDAK ADA)'}

Senjata B5 Limited 
${data.limitedWeaps.map(w => `- ${w.name} ${w.rank ? 'R' + w.rank : ''}`).join('\n') || '- (TIDAK ADA)'}

Senjata B5 Standard
${data.standardWeaps.map(w => `- ${w.name} ${w.rank ? 'R' + w.rank : ''}`).join('\n') || '- (TIDAK ADA)'}

Detail Lainnya
Primogem : ${data.primo}
Fragile Resin: ${data.resin}
Login : Hoyo via username/email dan password

MINUS : ${data.minus || '-'}

Jika ada yang belum jelas boleh ditanyakan langsung lewat chat ya`;
  }

  return {
    data,
    generate,
    $reset() {
      Object.assign(data, init);
    },
  };
});
