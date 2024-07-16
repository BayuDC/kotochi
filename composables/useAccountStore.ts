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
    price: '',
    description: '',
    status: '',
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
        if (weap.rank && weap.rank > 0) ctx.dup += weap.rank;
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
      limitedChars.reg.length * 30000 +
      limitedChars.well.length * 45000 +
      standardChars.reg.length * 5000 +
      standardChars.well.length * 7500 +
      limitedWeaps.reg.length * 10000 +
      limitedWeaps.sign.length * 15000 +
      standardWeaps.reg.length * 2500 +
      standardWeaps.sign.length * 5000 +
      limitedChars.dup * 25000 +
      limitedWeaps.dup * 7500;

    const profit = Math.round(summary / 50000) * 2500 + 5000;
    data.price = (summary + profit + 10000).toString();

    let wellBuildList = limitedChars.well.length
      ? limitedChars.well.reduce((acc: string, char: Character) => {
          let label = acc + ' ' + char.name;
          if (char.rank) label += `(C${char.rank})`;
          if (char.hasSignature) label += '+Sign';
          return label;
        }, '') + ' SIAP PAKAI '
      : undefined;
    let limitedList = limitedChars.reg.length
      ? limitedChars.reg.reduce((acc: string, char: Character) => {
          let label = acc + ' ' + char.name;
          if (char.rank) label += `(C${char.rank})`;
          if (char.hasSignature) label += '+Sign';
          return label;
        }, '') + ' '
      : undefined;
    let standardList = data.standardChars.length
      ? data.standardChars.reduce((acc, char) => acc + ' ' + char.name, '') + ' '
      : undefined;

    data.name = `[${data.limitedChars.length} Limit]${[wellBuildList, limitedList, standardList]
      .filter(c => c)
      .join('|')}[AR${data.ar}][${data.limitedChars.length + data.standardChars.length}B5]`;

    data.description = `Cocok buat kamu yang malas mulung primo tapi pengen punya banyak karakter bintang 5 yang keren-keren.

Detail akun
AR : ${data.ar}
MC : ${data.mc}
Server : ASIA
Birthday : ${data.bd}
Username : ${data.username == 'UNSET' ? 'UNSET' : 'SET'}
Email : ${data.email == 'UNSET' ? 'UNSET' : 'SET'}

Limited Character : 
${data.limitedChars.map(c => `- ${c.name} ${c.rank ? 'C' + c.rank : ''}`).join('\r\n') || '- (KOSONG)'}
Limited Weapon : 
${data.limitedWeaps.map(w => `- ${w.name} ${w.rank ? 'R' + w.rank : ''}`).join('\r\n') || '- (KOSONG)'}
Standard Character : 
${data.standardChars.map(c => `- ${c.name} ${c.rank ? 'C' + c.rank : ''}`).join('\r\n') || '- (KOSONG)'}
Standard Weapon : 
${data.standardWeaps.map(w => `- ${w.name} ${w.rank ? 'R' + w.rank : ''}`).join('\r\n') || '- (KOSONG)'}

Archon Quest : ${data.archonQuest}
Exploration : ${data.exploration}
Primogem : ${data.primo}
Fragile Resin : ${data.resin}

Stok pasti ready ya~ 
Silakan langsung checkout aja~ 
Kalau kurang yakin boleh chat kami dulu~ 
Terimakasih~
    `;
  }

  return {
    data,
    generate,
    $reset() {
      Object.assign(data, init);
    },
  };
});
