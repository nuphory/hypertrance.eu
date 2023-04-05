<script lang="ts">
	import AudioPlayer from "$lib/utils/AudioPlayer";

    const player = new AudioPlayer($$restProps.id, $$restProps.class);
</script>

<section class="bg-gray-300 w-full">
    <div class="container">
        <!-- Play/Pause -->
        <div></div>
        <!-- Progress/Seek bar -->
        <div></div>
        <!-- Volume -->
        <div></div>
        <!-- Optional: Queue -->
        <!-- <div></div> -->
    </div>
</section>