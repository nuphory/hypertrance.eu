import { ISO_639_1 } from "./data";

export interface ILanguage {
        identifiers: string[];
        names: string[];
        scope: "Collective" | "Individual" | "Local" | "Macrolanguage" | "Special";
        type: "Ancient" | "Constructed" | "Extinct" | "Historical" | "Living" | "Special";
        alpha2?: string;
        nativeName?: string;
        rtl?: boolean;
}

export default class Language implements ILanguage {
        identifiers: string[];
        names: string[];
        scope: "Collective" | "Individual" | "Local" | "Macrolanguage" | "Special";
        type: "Special" | "Ancient" | "Constructed" | "Extinct" | "Historical" | "Living";
        alpha2?: string | undefined;
        nativeName?: string | undefined;
        rtl?: boolean | undefined;


        private constructor(options: ILanguage) {
                this.identifiers = options.identifiers;
                this.names = options.names;
                this.scope = options.scope;
                this.type = options.type;
                this.alpha2 = options.alpha2;
                this.nativeName = options.nativeName;
                this.rtl = options.rtl;
        }

        static LANGUAGES: Record<string, Language> = {};

        public static addLanguage(alpha3code: string, options: ILanguage) {
                if (alpha3code.length !== 3) throw Error("Invalid Alpha 3 language code, must be exactly 3 characters long.");

                const newLanguage = new Language(options);
                this.LANGUAGES[alpha3code] = newLanguage;

                return newLanguage;
        }

        public static isValid(code: string): boolean {
                return Boolean(this.getLanguage(code));
        }

        public static isValidCode(code: string): boolean {
                return this.matchCode(code) && Boolean(this.getLanguage(code));
        }

        public static isValidAlpha2Code(code: string): boolean {
                return this.matchAlpha2Code(code) && Boolean(this.getLanguageByAlpha2Code(code));
        }

        public static isValidAlpha3Code(code: string): boolean {
                return this.matchAlpha3Code(code) && Boolean(this.getLanguageByAlpha3Code(code));
        }

        public static getLanguage(code: string): Language | undefined {
                switch (code.length) {
                        case 2:
                                return this.getLanguageByAlpha2Code(code);
                        case 3:
                                return this.getLanguageByAlpha3Code(code);
                        default:
                                // Fallback: search by name, else throw Error("Invalid language code, not found by name either.")
                                return this.getLanguageByName(code);
                }
        }

        public static getLanguageByAlpha3Code(code: string): Language | undefined {
                if (!this.matchAlpha3Code(code)) throw Error("Invalid Alpha 3 language code, must be 3 characters long, and only contain alpha characters.");
                code = code.toLowerCase();

                return Object.values(this.LANGUAGES).find((lang) => lang.identifiers.includes(code));
        }

        public static getLanguageByAlpha2Code(code: string): Language | undefined {
                if (!this.matchAlpha2Code(code)) throw Error("Invalid Alpha 2 language code, must be 2 characters long, and only contain alpha characters.");
                code = code.toLowerCase();

                return Object.values(this.LANGUAGES).find((lang) => lang.alpha2 === code);
        }

        public static getLanguageByName(name: string): Language | undefined {
                name = name.toLowerCase();

                return Object.values(this.LANGUAGES).find((lang) => lang.names.map((name) => name.toLowerCase()).includes(name));
        }

        /**
         * gets a list of languages that include the specified properties
         * @param props which properties to include on the returned objects
         * @returns array of language objects, with only the specified properties
         */
        public static getLanguages(
                ...props: ("alpha3" | "identifiers" | "name" | "names" | "rtl" | "scope" | "type" | "alpha2" | "nativeName")[]
        ) {
                const allLanguages = Object.values(this.LANGUAGES);

                if (props.length === 0) return allLanguages;

                const languages = allLanguages.map((lang) => {
                        if (props.length === 1) {
                                switch (props[0]) {
                                        case "alpha3":
                                                return lang.identifiers[0];
                                        case "identifiers":
                                                return lang.identifiers;
                                        case "name":
                                                return lang.names[0];
                                        case "names":
                                                return lang.names;
                                        case "rtl":
                                                return lang.rtl;
                                        case "scope":
                                                return lang.scope;
                                        case "type":
                                                return lang.type;
                                        case "alpha2":
                                                return lang.alpha2;
                                        case "nativeName":
                                                return lang.nativeName;
                                }
                        }
                        // if there is a "alpha3" prop, include the first item in the identifiers array
                        // if there is a "identifiers" prop, include the entire identifiers array
                        // if there is a "name" prop, include the first item in the names array
                        // if there is a "names" prop, include the entire names array
                        // if there is a "rtl" prop, include the rtl prop
                        // if there is a "scope" prop, include the scope prop
                        // if there is a "type" prop, include the type prop
                        // if there is a "alpha2" prop, include the alpha2 prop
                        // if there is a "nativeName" prop, include the nativeName prop
                        const mappedLang: Record<string, string | string[] | boolean | undefined> = {};

                        props.forEach((prop) => {
                                switch (prop) {
                                        case "alpha3":
                                                mappedLang.alpha3 = lang.identifiers[0];
                                                break;
                                        case "identifiers":
                                                mappedLang.identifiers = lang.identifiers;
                                                break;
                                        case "name":
                                                mappedLang.name = lang.names[0];
                                                break;
                                        case "names":
                                                mappedLang.names = lang.names;
                                                break;
                                        case "rtl":
                                                mappedLang.rtl = lang.rtl;
                                                break;
                                        case "scope":
                                                mappedLang.scope = lang.scope;
                                                break;
                                        case "type":
                                                mappedLang.type = lang.type;
                                                break;
                                        case "alpha2":
                                                mappedLang.alpha2 = lang.alpha2;
                                                break;
                                        case "nativeName":
                                                mappedLang.nativeName = lang.nativeName;
                                                break;
                                }
                        })

                        return mappedLang;
                })

                return languages;
        }


        private static matchAlpha2Code(code: string): boolean {
                return /^[a-z]{2}$/i.test(code);
        }
        private static matchAlpha3Code(code: string): boolean {
                return /^[a-z]{3}$/i.test(code);
        }
        private static matchCode(code: string): boolean {
                return /^[a-z]{2,3}$/i.test(code);
        }
}

export function addLanguages(languages: ILanguage[]) {
        languages.forEach((lang) => {
                Language.addLanguage(lang.identifiers[0], {
                        ...lang
                })
        })
}
