import { Euterpe, EuterpeBuilder } from '@euterpe.js/euterpe';
import { db } from './db';
import { Collection } from '@euterpe.js/music-library';
export function make(): Euterpe {
    db.add(
        [
            new Collection({ songs: [], artists: [], name: "free updates" })
        ]
    )
    //remove the 01, 02 ... from song names
    for (const song of db.songs) {
        //To avoid demo song
        if (!song.name.includes('Luna Lenta')) song.name = song.name.slice(2);
        song.name = song.name.replace(' and ', ' & ');
    }

    //add descriptions
    for (const collection of db.collections) {
        switch (collection.name) {
            case 'demos': {
                collection.metadata[0] = `Got demos you want to share with us? Join our Discord! <a href="https://discord.gg/hypertrance">https://discord.gg/hypertrance</a>`;
                collection.metadata[1] = 0;
                break;
            }
            case 'synths': {
                collection.metadata[0] = `The hypertrance samplepack includes a wide variety of different synth sounds, each including both .wav files and presets, which work on every platform and every DAW. All sounds come pre-EQd to fit into your mix and are fully customizable for your specific needs.`;
                collection.metadata[1] = 1;
                break;
            }
            case 'bass': {
                collection.metadata[0] = `From offbeat-handsup styled basslines to arpeggiated trance basses, the hypertrance samplepack not only gives you timbres that cut, but sub basses that cleanly underpin your whole mix. All sounds are delivered with their respective presets for further customization.`;
                collection.metadata[1] = 2;
                break;
            }
            case 'loops': {
                collection.metadata[0] = `The quickest way from a blank project to a banging beat. Our loops come pre-mixed to turn mixing a complicated trance beat into a simple thing anyone can do. Enjoy our fully mixed loops, or assemble your own from our broad selection of over 60 drumloops.`;
                collection.metadata[1] = 3;
                break;
            }
            case 'kicks': {
                collection.metadata[0] = `Ever tire of trying to build a nice, clean, basic kick? Our pack provides not only that, but also custom layers for you to assemble your unique kickdrum, without having to worry about complicated mixing techniques. Create and tweak your ideal kick in seconds.`;
                collection.metadata[1] = 4;
                break;
            }
            case 'drums': {
                collection.metadata[0] = `Sifting through hundreds of different claps, hats and percs, just to find one that works, can be tiring. We aim to provide you with samples that focus on doing one thing only, and doing it well. All of our drums are mixed and matched so that you can freely pick your favorite.`;
                collection.metadata[1] = 5;
                break;
            }
            case 'FX': {
                collection.metadata[0] = `Looking for that huge, anthemic trance breakdown sound? We provide dozens of clean FX sounds that can be layered into one another without any effort. No more messy playlists and automations, our effect sounds work together out of the box.`;
                collection.metadata[1] = 6;
                break;
            }
            case "free updates": {
                collection.metadata[0] = `Couldn't find the samples you were looking for? <a href="https://discord.gg/hypertrance">Join the hypertrance Discord</a>, where we'll be pushing regular updates to the samplepack, entirely free of charge. All legitimate owners of the samplepack will be able to suggest what to include in future expansions.`
                collection.metadata[1] = 7
            }
        }
    }
    db.collections.sort((a, b) => {
        return a.metadata[1] - b.metadata[1];
    });
    return new EuterpeBuilder(document.createElement('audio'), db, { use_only_pathname_url: true }).build();
}

