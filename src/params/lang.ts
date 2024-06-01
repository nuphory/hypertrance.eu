import Language, { addLanguages } from "$lib/utils/iso639";
import { ISO_639_1 } from "$lib/utils/iso639/data";
import type { ParamMatcher } from "@sveltejs/kit";

addLanguages(ISO_639_1);

export const match: ParamMatcher = (param) => {
        // TODO including country code locale is planned("en-US", "nl-BE", "fr-FR", etc.)

        return /^[a-z]{2,3}$/.test(param) && Language.isValidCode(param);
}
