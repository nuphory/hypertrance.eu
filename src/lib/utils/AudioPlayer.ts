import type { Track } from '$lib/metadata/track';

export default class AudioPlayer {
	private _audioElement: HTMLAudioElement;
	private _queueIndex: number;
	private _loop: 0 | 1 | 2;
	private _queue: Track[];
	private _duration?: number;

	/**
	 * @description Creates an audio element with the specified id and class list
	 * @param id - The id attribute of the audio element
	 * @param classList - List of classes to apply to the audio element
	 */
	constructor(id?: string, ...classList: string[]) {
		this._audioElement = this.createElement(id, ...classList);
		this._loop = 0;
		this._queue = [];
		this._queueIndex = 0;
	}

	private createElement(id?: string, ...classList: string[]) {
		const el = new Audio();
		el.id = id ?? '';
		el.classList.add(...(classList ?? ''));
		el.addEventListener('ended', this.handleTrackEnd);
		el.addEventListener('loadeddata', this.updateDuration);
		return el;
	}

	get loop() {
		return this._loop;
	}

	public cycleLoop() {
		this._loop = ((this._loop + 1) % 3) as 0 | 1 | 2;
	}

	get queue() {
		return this._queue;
	}
	set queue(queue: Track[]) {
		this._queue = queue;
	}

	get duration() {
		return this._duration;
	}
	private updateDuration() {
		this._duration = this.element.duration;
	}

	public clearQueue() {
		this.queue = [];
	}
	public resetQueue = this.clearQueue;

	public addTrack(track: Track) {
		this.queue.push(track);
	}
	public addToQueue = this.addTrack;

	get queuePosition() {
		return this._queueIndex;
	}
	set queuePosition(index: number) {
		this._queueIndex = index;
		const prevPaused = this.element.paused;
		this.element.src = this.queue[this._queueIndex].audioSrc ?? '';
	}

	/**
	 * @description Returns the track that is currently playing.
	 * @param options - Options for the function.
	 * @param options.index - Whether to return the index of the track that is currently playing.
	 * @returns The track that is currently playing, or the index of the track that is currently playing.
	 */
	public getNowPlaying(options?: { index: boolean }): Track | number | null {
		if (options?.index) {
			return this.queuePosition;
		}

		return this.queue[this.queuePosition] ?? null;
	}

	get element() {
		return this._audioElement;
	}

	/**
	 * @description Plays the audio element.
	 * @param tracks - Tracks to play.
	 * @param index - Index of the track to play.
	 */
	public play(tracks?: Track[] | Track, index?: number) {
		if (tracks) {
			this.queue = Array.isArray(tracks) ? tracks : [tracks];
		}

		if (index !== undefined) {
			this.queuePosition = index;
		}

		if (this.element.readyState < HTMLMediaElement.HAVE_FUTURE_DATA) {
			this.element.addEventListener('canplay', () => this.play(), { once: true });
		} else {
			this.element.play();
			this.updateContinuously();
		}
	}

	private updateContinuously() {
		this.updateDuration();
		if (this.paused) return;
		setTimeout(this.updateContinuously, 1000);
	}

	get paused() {
		return this.element.paused;
	}
	set paused(paused: boolean) {
		paused ? this.pause() : this.play();
	}

	public pause() {
		this.updateDuration();
		this.element.pause();
	}

	public handleTrackEnd() {
		if (this.loop === 2) {
			this.element.currentTime = 0;
			this.element.play();
		} else {
			this.playNext();
		}
	}

	public playNext() {
		this._queueIndex = (this._queueIndex + 1) % this.queue.length;

		if (this._queueIndex === 0 && this.loop === 0) {
			this.pause();
			return;
		}

		this.element.src = this.queue[this._queueIndex].audioSrc ?? '';
		this.play();
	}

	public playPrevious() {
		if (this.element.currentTime >= 3) {
			this.element.currentTime = 0;
			return;
		}

		this._queueIndex = (this._queueIndex - 1 + this.queue.length) % this.queue.length;

		this.element.src = this.queue[this._queueIndex].audioSrc ?? '';
		this.play();
	}

	get currentTime() {
		return this.element.currentTime;
	}
	set currentTime(time: number) {
		this.element.currentTime = time;
	}

	get volume() {
		return this.element.volume;
	}
	set volume(volume: number) {
		this.element.volume = volume;
	}
}
