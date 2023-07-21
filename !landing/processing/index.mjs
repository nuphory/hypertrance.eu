import { generate_db } from "./generate_db.mjs"

export async function analyze() {
    console.clear()
    const audioEl = document.querySelector("#audio")
    console.log("analysing...")
    const samplingRate = 100
    //Create all audio nodes
    const audioContext = new AudioContext()
    const track = audioContext.createMediaElementSource(audioEl)
    const gain = audioContext.createGain()
    gain.gain.value = 0
    const audioContextAnalyser = audioContext.createAnalyser(audioEl)
    audioContextAnalyser.fftSize = 64
    audioContextAnalyser.smoothingTimeConstant = 0.1
    const analyserBufferLength = audioContextAnalyser.frequencyBinCount
    const FFTDataArray = new Float32Array(analyserBufferLength)
    //Connect all audio Nodes
    track.connect(audioContextAnalyser).connect(gain).connect(audioContext.destination)

    let db = generate_db()
    for (const song of db.songs) {
        console.log(`Analyzing ${song}`)
        //if not loaded yet keep trying
        audioEl.src = song.url
        await awaitLoad(audioEl)
        song.duration = audioEl.duration
        let currentFFTData = []
        for (let curSecond = 0; curSecond < song.duration; curSecond += song.duration / samplingRate) {
            console.log(curSecond)
            audioEl.currentTime = curSecond
            await audioEl.play()
            await new Promise((done) => setTimeout(() => done(), 30))
            audioContextAnalyser.getFloatFrequencyData(FFTDataArray)
            let volume = 0
            FFTDataArray.forEach((element) => {
                volume += element
            })
            currentFFTData.push(Math.round((volume / FFTDataArray.length) * 100) / 100)
        }
        song.fft_data = currentFFTData
    }
    console.log(db)
}

function awaitLoad(audioEl) {
    return new Promise((resolve, reject) => {
        audioEl.addEventListener("loadeddata", function () {
            if (audioEl.readyState >= 4) {
                resolve()
            }
        })
    })
}