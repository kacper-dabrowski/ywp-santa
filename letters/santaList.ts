import { parse } from "csv-parse/sync";
import fs from "fs/promises";
import path from "path";

export const excludedKeys = [
  "Musisz zaakceptować wszystkie poniższe zasady, żeby móc się zapisać.",
  "Dziękujemy, że chcesz wziąć udział w Wąsowym Secret Santa 2022. Jak oceniasz ten formularz?",
  "Czarna lista",
  "Adres mailowy",
  "Sygnatura czasowa",
];

const deliveryDetailsKeys = [
  "Twój adres mailowy",
  "Rodzaj dostawy",
  "Polski adres jak na kopercie",
  "Twój numer telefonu",
  "Preferowana usługa",
  "Sześcioznakowy (lub dłuższy) numer paczkomatu",
  "Pełny zagraniczny adres jak na kopercie",
];

let list: WishlistModel[];

export const getList = async (): Promise<WishlistModel[]> => {
  if (!list) {
    const parsedDataSource = await parseGoodChildrenList();

    list = await mapDto(parsedDataSource);
  }

  return list;
};

async function mapDto(dto: Array<Array<string>>): Promise<WishlistModel[]> {
  const [keys, ...values] = dto;

  const allKeys = values.map((valueList) =>
    goodChildrenListToObject(keys, valueList)
  );

  const array: WishlistModel[] = allKeys.map((obj) => {
    const deliveryEntries: [string, string][] = [];
    const personalInfoEntries: [string, string][] = [];

    Object.entries(obj).forEach(([key, value]) => {
      if (excludedKeys.includes(key)) {
        return;
      }

      if (deliveryDetailsKeys.includes(key)) {
        if (!value) {
          return;
        }
        
        deliveryEntries.push([key, value]);
        return;
      }

      personalInfoEntries.push([key, value]);
    });

    return {
      deliveryDetails: deliveryEntries,
      personalDetails: personalInfoEntries,
    };
  });

  return array;
}

function goodChildrenListToObject(
  keys: string[],
  values: string[]
): Record<string, string> {
  return keys.reduce((obj, key, index) => {
    if (excludedKeys.includes(key)) {
      return obj;
    }

    Object.assign(obj, { [key]: values[index] });

    return obj;
  }, {});
}

export async function parseGoodChildrenList() {
  const pathToCsv = path.join(process.cwd(), "public", "data", "data.csv");

  const buffer = await fs.readFile(pathToCsv);

  const result = parse(buffer);

  return result;
}

export const getUsernamesFromList = async () => {
  const list = await getList();

  const usernameKey = "Twoja nazwa na forum YWP";

  return list.map(
    (element) =>
      element.personalDetails.find(([key, value]) => key == usernameKey)?.[1]
  );
};

export interface WishlistModel {
  deliveryDetails: [string, string][];
  personalDetails: [string, string][];
}
