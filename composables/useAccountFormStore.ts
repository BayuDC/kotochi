interface Character {
  name: string;
  isWellBuild?: boolean;
}
interface Weapon {
  name: string;
  isSignature?: boolean;
}

export const useAccountFormStore = defineStore('account-form', () => {
  const basicInfo = reactive({
    no: '',
    adventureRank: '',
    birthdayStatus: '',
    mainCharacter: '',
    primo: '',
    resin: '',
    archonQuest: '',
    exploration: '',
  });

  const limitedCharacters = ref<Character[]>([]);
  const standardCharacters = ref<Character[]>([]);
  const limitedWeapons = ref<Weapon[]>([]);
  const standardWeapons = ref<Weapon[]>([]);

  const generated = reactive({
    name: '',
    price: '',
  });

  const character = {
    limited: {
      reguler: [] as string[],
      wellBuild: [] as string[],
    },
    standard: {
      reguler: [] as string[],
      wellBuild: [] as string[],
    },
  };
  const weapon = {
    limited: {
      reguler: [] as string[],
      signature: [] as string[],
    },
    standard: {
      reguler: [] as string[],
      signature: [] as string[],
    },
  };

  function generate() {
    character.limited.wellBuild = [];
    character.limited.reguler = [];
    character.standard.wellBuild = [];
    character.standard.reguler = [];
    weapon.limited.signature = [];
    weapon.limited.reguler = [];
    weapon.standard.signature = [];
    weapon.standard.reguler = [];

    limitedCharacters.value.forEach(char => {
      if (char.isWellBuild) return character.limited.wellBuild.push(char.name);
      return character.limited.reguler.push(char.name);
    });
    standardCharacters.value.forEach(char => {
      if (char.isWellBuild) return character.standard.wellBuild.push(char.name);
      return character.standard.reguler.push(char.name);
    });
    limitedWeapons.value.forEach(weap => {
      if (weap.isSignature) return weapon.limited.signature.push(weap.name);
      return weapon.limited.reguler.push(weap.name);
    });
    standardWeapons.value.forEach(weap => {
      if (weap.isSignature) return weapon.standard.signature.push(weap.name);
      return weapon.standard.reguler.push(weap.name);
    });
    generateName();
    generatePrice();
  }

  function generatePrice() {
    const limitedChar = character.limited.reguler.length * 30000;
    const limitedWellChar = character.limited.wellBuild.length * 45000;
    const standardChar = character.standard.reguler.length * 5000;
    const standardWellChar = character.standard.wellBuild.length * 5000;
    const limitedWeap = weapon.limited.reguler.length * 10000;
    const limitedSignWeap = weapon.limited.signature.length * 15000;
    const standardWeap = weapon.standard.reguler.length * 2500;
    const standardSignWeap = weapon.standard.signature.length * 2500;

    const summary =
      limitedChar +
      limitedWellChar +
      standardChar +
      standardWellChar +
      limitedWeap +
      limitedSignWeap +
      standardWeap +
      standardSignWeap;
    const profit = Math.round(summary / 50000) * 2500 + 5000;

    const price = summary + profit + 10000;

    generated.price = price.toString();
  }
  function generateName() {
    const limitedCount = limitedCharacters.value.length;
    const standardCount = standardCharacters.value.length;

    let wellBuildList = character.limited.wellBuild.length
      ? character.limited.wellBuild.reduce((prev, current) => prev + ' ' + current, '') + ' SIAP PAKAI '
      : undefined;
    let limitedList = character.limited.reguler.length
      ? character.limited.reguler.reduce((prev, current) => prev + ' ' + current, '') + ' '
      : undefined;
    let standardList = standardCharacters.value.length
      ? standardCharacters.value.reduce((prev, current) => prev + ' ' + current.name, '') + ' '
      : undefined;

    generated.name = `[${limitedCount} Limit]${[wellBuildList, limitedList, standardList].filter(c => c).join('|')}[AR${
      basicInfo.adventureRank
    }][${limitedCount + standardCount}B5]`;
  }

  return {
    basicInfo,
    limitedCharacters,
    standardCharacters,
    limitedWeapons,
    standardWeapons,
    generate,
    generated,
  };
});
