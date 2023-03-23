<script>
import NUPHORY from "$lib/assets/artists/nuphory";
import AEKAE from "$lib/assets/artists/aekae";
import Artist from "$lib/components/utils/Artist.svelte";
</script>

<section id="about" class="transition-quick duration-default ease-out container [&>ul]:list-disc">
    <h2>what is hypertrance?</h2>
    <h3 class="mt-8 mb-0">hypertrance</h3>
    <i>coined by <Artist artist={NUPHORY} />, <Artist artist={AEKAE} /></i>
    <ul class="ml-4 mt-2">
        <li>very open BPM range (135-180)</li>
        <li>high energy in the drops</li>
        <li>big 4x4 trance drums</li>
        <li>tight mixing</li>
        <li>strong emphasis on emotional impact (chord progs, "epic" sounds)</li>
        <li>grand storytelling in the tracks</li>
        <li>emotional, quieter (maybe piano driven) breakdowns</li>
        <li>heavy emphasis on using authentic feeling sounds</li>
        <li>capturing the optimstic futurism of y2k</li>
    </ul>
    <h3 class="mt-8 mb-0">neotrance (VS)</h3>
    <i>coined by virtual self</i>
    <ul class="ml-4 mt-2">
        <li>using various hardtrance and hardcore elements</li>
        <li>reminiscent of beatmania / DDR type music</li>
        <li>emphasis on lain sorta vibes</li>
        <li>cyberia</li>
        <li>dystopian future</li>
        <li>bpm range from 140-180</li>
        <li>beats can be 4x4 or halftime, very trancey drums</li>
        <li>speedcore added into tracks regularly</li>
    </ul>

    <h3 class="mt-8 mb-0">sextrance</h3>
    <i>coined by purity filter</i>
    <ul class="ml-4 mt-2">
        <li>bpm range very wide (140-200)</li>
        <li>heavy use of sound degradation in the mixes</li>
        <li>captures a sort of early youtube type feeling</li>
        <li>heavy emphasis on fast drumbeats</li>
    </ul>

    <h3 class="mt-8 mb-0">neotrance (techno)</h3>
    <i>coined by ???</i>
    <ul class="ml-4 mt-2">
        <li>techno genre, can probably find definition online</li>
    </ul>

    <h3 class="mt-8 mb-0">hardwave</h3>
    <i>coined by ???</i>
    <ul class="ml-4 mt-2">
        <li>mixture of trap beats and trance synths</li>
        <li>bpms around 150</li>
        <li>halftime drums, very trap influenced</li>
        <li>overall ethereal vibe</li>
        <li>lots of pad and atmosphere usage</li>
    </ul>

    <button
            class="w-full button-neutral mt-8"
            on:click={() => window.open('http://discord.gg/673AfPB', '_blank')}
            on:auxclick={() => window.open('http://discord.gg/673AfPB', '_blank')}
    >
        <span>Join our Discord</span>
    </button>
</section>