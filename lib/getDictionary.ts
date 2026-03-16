import fs from 'fs';
import path from 'path';

export type Locale = 'en' | 'ro';

export function getDictionary(locale: Locale) {
  const validLocale: Locale = locale === 'ro' ? 'ro' : 'en';
  const filePath = path.join(process.cwd(), 'dictionaries', `${validLocale}.json`);
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContents);
}
