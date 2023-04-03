const submitBtn = document.getElementById("submit")
const resetBtn = document.getElementById("reset-btn")

function getSongFeatures(songName) {
    // Here you would retrieve the audio features for the selected song from your data source.
    // For the purposes of this example, we'll just return some dummy data.
  
    switch (songName) {
      case "rick-astley":
        return {
            songName: "Never Gonna Give you Up",
            explicit: 0,
            danceability: 0.7,
            energy: 0.8,
            key: 8,
            loudness: -11.82,
            mode: 1,
            speechiness: 0.04,
            acousticness: 0.2,
            instrumentalness: 0.4,
            liveness: 0.11,
            valence: 0.91,
            tempo: 120,
            time_signature: 4,
            duration_seconds: 213.57,
            popularity: 78
        };
      case "requiem-d-minor":
        return {
            songName: "Requiem D Minor",
            explicit: 0,
            danceability: 0.15,
            energy: 0.03,
            key: 2,
            loudness: -22.62,
            mode: 0,
            speechiness: 0.04,
            acousticness: 0.98,
            instrumentalness: 0.83,
            liveness: 0.10,
            valence: 0.04,
            tempo: 135.61,
            time_signature: 4,
            duration_seconds: 213.67,
            popularity: 1
        };
      case "shape-of-you":
        return {
            songName: "Shape of You",
            explicit: 0,
            danceability: 0.82,
            energy: 0.65,
            key: 1,
            loudness: -3.18,
            mode: 0,
            speechiness: 0.08,
            acousticness: 0.58,
            instrumentalness: 0.00,
            liveness: 0.09,
            valence: 0.93,
            tempo: 95.98,
            time_signature: 4,
            duration_seconds: 233.71,
            popularity: 86
        };
      case "as-it-was":
            return {
                songName: "As it Was",
                explicit: 0,
                danceability: 0.52,
                energy: 0.73,
                key: 6,
                loudness: -5.34,
                mode: 0,
                speechiness: 0.06,
                acousticness: 0.34,
                instrumentalness: 0.00,
                liveness: 0.31,
                valence: 0.66,
                tempo: 173.93,
                time_signature: 4,
                duration_seconds: 167.30,
                popularity: 91
            };
          case "about-damn-time":
            return {
                songName: "About Damn Time",
                    explicit: 1,
                    danceability: 0.84,
                    energy: 0.74,
                    key: 10,
                    loudness: -6.30,
                    mode: 0,
                    speechiness: 0.07,
                    acousticness: 0.10,
                    instrumentalness: 0.00,
                    liveness: 0.34,
                    valence: 0.72,
                    tempo: 108.97,
                    time_signature: 4,
                    duration_seconds: 191.82,
                    popularity: 82
                };
          case "i-aint-worried":
                    return {
                        songName: "I ain't worried",
                        explicit: 0,
                        danceability: 0.70,
                        energy: 0.80,
                        key: 0,
                        loudness: -5.93,
                        mode: 0,
                        speechiness: 0.05,
                        acousticness: 0.08,
                        instrumentalness: 0.00,
                        liveness: 0.05,
                        valence: 0.82,
                        tempo: 139.99,
                        time_signature: 4,
                        duration_seconds: 148.49,
                        popularity: 92
                    };
          case "dreams":
            return {
                songName: "Dreams",
                            explicit: 0,
                            danceability: 0.83,
                            energy: 0.49,
                            key: 0,
                            loudness: -9.74,
                            mode: 1,
                            speechiness: 0.03,
                            acousticness: 0.06,
                            instrumentalness: 0.00,
                            liveness: 0.13,
                            valence: 0.79,
                            tempo: 120.15,
                            time_signature: 4,
                            duration_seconds: 257.80,
                            popularity: 83
                        };
          case "call-on-me":
                    return {
                        songName: "Call on Me",
                                explicit: 0,
                                danceability: 0.66,
                                energy: 0.85,
                                key: 4,
                                loudness: -5.24,
                                mode: 0,
                                speechiness: 0.04,
                                acousticness: 0.24,
                                instrumentalness: 0.00,
                                liveness: 0.11,
                                valence: 0.66,
                                tempo: 123.03,
                                time_signature: 4,
                                duration_seconds: 170.10,
                                popularity: 64
                            };
          case "call-me-maybe":
            return {
                songName: "Call me Maybe",
                                            explicit: 0,
                                            danceability: 0.78,
                                            energy: 0.58,
                                            key: 7,
                                            loudness: -6.55,
                                            mode: 1,
                                            speechiness: 0.04,
                                            acousticness: 0.01,
                                            instrumentalness: 0.00,
                                            liveness: 0.11,
                                            valence: 0.66,
                                            tempo: 120.02,
                                            time_signature: 4,
                                            duration_seconds: 193.40,
                                            popularity: 59
                                        };
            case "own":
                return {
                    songName: "",
                                                                            explicit: 0,
                                                                            danceability: 0.00,
                                                                            energy: 0.00,
                                                                            key: 0,
                                                                            loudness: 0.00,
                                                                            mode: 0,
                                                                            speechiness: 0.00,
                                                                            acousticness: 0.00,
                                                                            instrumentalness: 0.00,
                                                                            liveness: 0.0,
                                                                            valence: 0.00,
                                                                            tempo: 0.00,
                                                                            time_signature: 0,
                                                                            duration_seconds: 0.00,
                                                                            popularity: 0
                                                                        };
      default:
        return null;
    }
  }

  function resetForm() {
    document.getElementById("song-form").reset();
    submitBtn.disabled =false;
    if (document.getElementById("result-data").hasChildNodes()) {
      document.getElementById("result-para").remove();
  }
  }
  
  function displaySongFeatures(event) {
    event.preventDefault();
  
    const songName = document.getElementById("song-name").value;
    const songFeatures = getSongFeatures(songName);
  

    if (songFeatures) {
      const songNameInput =  document.getElementById("song-name-input");
      const explicitInput = document.getElementById("explicit");
      const danceabilityInput = document.getElementById("danceability");
      const energyInput = document.getElementById("energy");
      const keyInput = document.getElementById("key");
      const loudnessInput = document.getElementById("loudness");
      const modeInput = document.getElementById("mode");
      const speechinessInput = document.getElementById("speechiness");
      const acousticnessInput = document.getElementById("acousticness");
      const instrumentalnessInput = document.getElementById("instrumentalness");
      const livenessInput = document.getElementById("liveness");
      const valenceInput = document.getElementById("valence");
      const tempoInput = document.getElementById("tempo");
      const timeSignatureInput = document.getElementById("time_signature");
      const durationSecondsInput = document.getElementById("duration_seconds");
      const popularityInput = document.getElementById("popularity");

      songNameInput.value = songFeatures.songName;
      explicitInput.value = songFeatures.explicit;
      danceabilityInput.value = songFeatures.danceability;
      energyInput.value = songFeatures.energy;
      keyInput.value = songFeatures.key;
    loudnessInput.value = songFeatures.loudness;
    modeInput.value = songFeatures.mode;
    speechinessInput.value = songFeatures.speechiness;
    acousticnessInput.value = songFeatures.acousticness;
    instrumentalnessInput.value = songFeatures.instrumentalness;
    livenessInput.value = songFeatures.liveness;
    valenceInput.value = songFeatures.valence;
    tempoInput.value = songFeatures.tempo;
    timeSignatureInput.value = songFeatures.time_signature;
    durationSecondsInput.value = songFeatures.duration_seconds;
    popularityInput.value = songFeatures.popularity;
    console.log(popularityInput)
    } else {
      alert("Please select a valid song.");
    }
  }
  
  function updateSongFeatures() {
    const songName = document.getElementById("song-name").value;
    const songFeatures = getSongFeatures(songName);
  
    if (songFeatures) {
        const songNameInput =  document.getElementById("song-name-input");
        const explicitInput = document.getElementById("explicit");
        const danceabilityInput = document.getElementById("danceability");
        const energyInput = document.getElementById("energy");
        const keyInput = document.getElementById("key");
        const loudnessInput = document.getElementById("loudness");
        const modeInput = document.getElementById("mode");
        const speechinessInput = document.getElementById("speechiness");
        const acousticnessInput = document.getElementById("acousticness");
        const instrumentalnessInput = document.getElementById("instrumentalness");
        const livenessInput = document.getElementById("liveness");
        const valenceInput = document.getElementById("valence");
        const tempoInput = document.getElementById("tempo");
        const timeSignatureInput = document.getElementById("time_signature");
        const durationSecondsInput = document.getElementById("duration_seconds");
        const popularityInput = document.getElementById("popularity");
  
        songNameInput.value = songFeatures.songName;
        explicitInput.value = songFeatures.explicit;
        danceabilityInput.value = songFeatures.danceability;
        energyInput.value = songFeatures.energy;
        keyInput.value = songFeatures.key;
      loudnessInput.value = songFeatures.loudness;
      modeInput.value = songFeatures.mode;
      speechinessInput.value = songFeatures.speechiness;
      acousticnessInput.value = songFeatures.acousticness;
      instrumentalnessInput.value = songFeatures.instrumentalness;
      livenessInput.value = songFeatures.liveness;
      valenceInput.value = songFeatures.valence;
      tempoInput.value = songFeatures.tempo;
      timeSignatureInput.value = songFeatures.time_signature;
      durationSecondsInput.value = songFeatures.duration_seconds;
      popularityInput.value = songFeatures.popularity;

    } else {
      alert("Please select a valid song.");
    }
  }
  
  let form = document.getElementById("song-form");
  form.addEventListener("submit", submitForm);
  
  function submitForm(event) {
    event.preventDefault();
    let formData = new FormData(document.getElementById("song-form"));
    
    const formObj = {};
    formData.forEach((value, key) => {
      formObj[key] = value;
    });

    resetBtn.disabled = true
    submitBtn.disabled = true
    let loadDiv = document.querySelector("#load-text")
    let loadText = document.createElement("p")
    loadText.innerText = "Loading..."
    loadDiv.append(loadText)

    fetch('https://song-rec-program.onrender.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formObj)
    })
    .then(response => response.json())
    .then(data => {
      const para = document.createElement("p")
      para.setAttribute("id", "result-para");
      let resArea = document.getElementById("result-data");
      para.innerText = "The recommended songs are:"
      resArea.appendChild(para)

      for (let [key, value] of Object.entries(data)) {
        // Create a new <p> element to display the key and value
        let p = document.createElement("li");
        
        // Set the text content of the <p> element to the key and value
        p.textContent = value + ": " + key;
        
        // Append the <p> element to the output element
        para.appendChild(p)}

      
      
      
      resetBtn.disabled = false;
      loadText.remove();
    })
    .catch(err => 
      alert("Something went wrong, please contact us directly regarding this issue.")
  );
  }
  const songNameDropdown = document.getElementById("song-name");
  songNameDropdown.addEventListener("change", updateSongFeatures);