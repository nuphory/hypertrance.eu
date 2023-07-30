import { from_json } from "@euterpe.js/music-library";
import * as json from "./db.json"
export const db =
    from_json(json)