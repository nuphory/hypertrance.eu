import {
	Collection,
	Ref,
	RefTo,
	Song,
	DB
} from './node_modules/@euterpe.js/music-library/src/index.js';
import { songs } from './songs_list.mjs';

export function generate_db() {
	console.log(songs);
	//construct db
	let db = new DB();
	//create collections by folder names
	let collections = [];
	let new_songs = [];
	for (let i = 0; i < songs.length; i++) {
		const song = songs[i];
		const last_i = song.lastIndexOf('\\');
		const collection_name = song.slice(song.slice(0, last_i).lastIndexOf('\\') + 1, last_i);
		/*
        const foreforelast_i = song.slice(0, forelast_i - 1)
        const foreforeforelast_i = song.slice(0, foreforelast_i - 1).lastIndexOf("\\")
        */
		if (!collections.includes(collection_name)) {
			console.log(`creating collection ${collection_name}`);
			db.add([
				new Collection({
					name: collection_name,
					songs: [],
					artists: []
				})
			]);
			collections.push(collection_name);
		}
		let col = db.collections.find((col) => col.name == collection_name);
		// debugger
		let col_id = col.id;
		console.log(col_id);
		if (col_id == undefined) {
			break;
		}
		new_songs.push({ song: song, collection_id: col_id });
	}

	//create songs
	for (let i = 0; i < new_songs.length; i++) {
		let song = new_songs[i];
		const last_i = song.song.lastIndexOf('\\');

		const name = song.song.slice(last_i + 1);
		const song_url = song.song.replace('\\\\', '/');
		const db_song = new Song({
			name: name,
			artists: [],
			url: new URL('http://127.0.0.1:5500/' + song_url),
			duration: 0,
			remix_artists: [],
			in_collection: new Ref(RefTo.Collections, song.collection_id)
		});
		db.add([db_song]);
	}
	console.log(db);
	return db;
}
/*
async function main() {
    let currentsongID = 0
    for (let currentAlbum = 0; currentAlbum < paths.length; currentAlbum++) {
        let songs = []
        let currAlbumName
        let currArtist
        let cumulativePrice = 0
        let duration = 0
        let currReleaseDate = 0
        //save album cover path
        const albumCovers = paths[currentAlbum].filter(path => {
            const temp = path.split(".")
            return temp[temp.length - 1] == "jpg" || temp[temp.length - 1] == "png"
        })
        const currAlbumCover = albumCovers.map(path => {
            let paths = path.split("\\")

            currAlbumName = `${paths[paths.length - 2]}`

            return path = `\\${paths[paths.length - 2]}\\${paths[paths.length - 1]}`
        })[0]

        //make a songs list
        let songPaths = paths[currentAlbum].filter(path => {
            const temp = path.split(".")
            return temp[temp.length - 1] == "mp3" || temp[temp.length - 1] == "ogg"
        })
        let songURLs = songPaths.map(path => {
            let paths = path.split("\\")
            return path = `\\${paths[paths.length - 2]}\\${paths[paths.length - 1]}`
        })


        currReleaseDate = +(Math.random() * 560000000 + 1200000000).toFixed(0)
        for (let currentSong = 0; currentSong < songURLs.length; currentSong++) {
            const currMetaData = await getMetaData(`..\\..\\..\\public\\${songURLs[currentSong]}`)
            currArtist = currMetaData[2]

            let currPrice = Math.round((Math.random() * 5 + 2) * 100) / 100

            songs.push({
                id: currentsongID,
                ts: currReleaseDate,
                name: `${songURLs[currentSong]?.split("\\")[2]?.split(".mp3")[0]}`,
                artist: `${currArtist}`,
                song_url: songURLs[currentSong],
                duration: currMetaData[1],
                price: currPrice,
                FFT_data: {},
            })
            currentsongID++
        }


        songs.forEach((element) => {
            duration += element.duration
        })
        songs.forEach((element) => {
            cumulativePrice += element.price
        })
        cumulativePrice = Math.round(cumulativePrice * 100) / 100
        db.albums.push({
            id: currentAlbum,
            ts: currReleaseDate,
            name: currAlbumName,
            description: `Ninety9Lives releases are free to use and monetize in user-generated content (UGC) made by independent content creators in video content on YouTube & Twitch without the fear of copyright claims. \n\nAlbum "${currAlbumName}" provided by Ninety9Lives. Stream / Free Download: https://www.ninety9lives.com/ \n\n© Ninety9Lives`,
            album_cover_url: currAlbumCover,
            artists: [currArtist],
            duration: duration,
            price: cumulativePrice,
            songs: songs
        })
    }
    fs.writeFileSync("../db.json", JSON.stringify(db))
}
*/
