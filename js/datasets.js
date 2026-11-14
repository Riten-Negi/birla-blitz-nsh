// NASA Earth Information Center - Dataset Manifest
window.EARTH_DATASETS = {
  "appName": "NASA Earth Jukebox",
  "version": "1.1.0",
  "missionStatement": "Translating NASA's Earth Information Center visualizations into real-time, dynamic, multi-sensory soundscapes. Making planetary science accessible through sight, sound, and touch.",
  "officialNasaResources": [
    {
      "id": "eic-db",
      "name": "Earth Information Center (EIC) Content Database",
      "url": "https://svs.gsfc.nasa.gov/gallery/earth-information-center/",
      "type": "Primary Database",
      "description": "Visuals developed by the Scientific Visualization Studio (SVS) used in EIC dashboards."
    },
    {
      "id": "svs-13786",
      "name": "Data Sonification: Caldwell 73",
      "url": "https://svs.gsfc.nasa.gov/13786/",
      "type": "NASA Sonification Framework",
      "description": "Demonstrates how NASA translates visual attributes (luminosity, x/y spatial coordinates) into pitch and volume."
    },
    {
      "id": "svs-5313",
      "name": "Change in Night Lights between 2012 and 2023 (EIC Version)",
      "url": "https://svs.gsfc.nasa.gov/5313/",
      "type": "SVS Visualization",
      "description": "Tracks urban illumination. High contrast testing ground mapping intensity to audio tempo or volume."
    },
    {
      "id": "svs-3912",
      "name": "Global Sea Surface Currents and Temperature",
      "url": "https://svs.gsfc.nasa.gov/3912/#media_group_349716",
      "type": "SVS Visualization",
      "description": "Fluid movement of ocean currents alongside thermal gradients for continuous evolving soundscapes."
    },
    {
      "id": "svs-5669",
      "name": "GEOS Aerosols",
      "url": "https://svs.gsfc.nasa.gov/5669/",
      "type": "SVS Visualization",
      "description": "Monitors paths of smoke, dust, and particulate matter for multi-track acoustic experimentation."
    },
    {
      "id": "svs-5533",
      "name": "Air Quality Model Runs",
      "url": "https://svs.gsfc.nasa.gov/5533/",
      "type": "SVS Visualization",
      "description": "Downloadable frames for algorithmically converting color palettes and pixel densities into sound profiles."
    },
    {
      "id": "svs-5425",
      "name": "Perpetual Ocean 2: Western Boundary Currents",
      "url": "https://svs.gsfc.nasa.gov/5425/",
      "type": "SVS Visualization",
      "description": "High contrast oceanic boundary current maps for aligning visual shifts with musical scales."
    },
    {
      "id": "svs-5196",
      "name": "DYAMOND Global Carbon Dioxide",
      "url": "https://svs.gsfc.nasa.gov/5196/",
      "type": "SVS Visualization",
      "description": "Global CO2 concentrations over time, serving as primary input for driving interactive sonification."
    },
    {
      "id": "svs-5011",
      "name": "Lightning Events Detected from the ISS 2017-2023",
      "url": "https://svs.gsfc.nasa.gov/5011/",
      "type": "SVS Visualization",
      "description": "Punctuated sonification where percussive elements correspond to rapid spaceborne lightning flashes."
    },
    {
      "id": "svs-4960",
      "name": "A 3D View of an Atmospheric River from an Earth System Model",
      "url": "https://svs.gsfc.nasa.gov/4960/",
      "type": "SVS Visualization",
      "description": "Maps the density and geographic spread of moisture into shifting musical landscapes."
    },
    {
      "id": "svs-4950",
      "name": "GEDI Forest Height",
      "url": "https://svs.gsfc.nasa.gov/4950/",
      "type": "SVS Visualization",
      "description": "Global maps of canopy elevation for mapping color spectrums to dynamic audio parameters."
    }
  ],
  "datasets": [
        {
      "id": "global-temperature",
      "title": "GEOS-FP Near-Surface Temperature",
      "subtitle": "NASA SVS 5147: Goddard Earth Observing System 2m Temperature",
      "nasaResourceUrl": "https://svs.gsfc.nasa.gov/5147/",
      "nasaSvsId": "SVS-5147",
      "category": "Atmospheric Temperature & Heat Waves",
      "description": "Weather models begin their forecasts by integrating observations from ground stations, aircraft, balloons, and a growing constellation of Earth observing satellites to estimate the most realistic atmospheric state. The Goddard Earth Observing System Forward Processing (GEOS-FP) system is a research model maintained by NASA’s Global Modeling and Assimilation Office to demonstrate innovative new ways to use satellite data to improve predictions of weather, air quality, and greenhouse gases and to help NASA collect new observations of our home planet. Near surface temperature is calculated by sampling model fields at 2 meters (about 6 feet) above Earth’s surface, helping scientists communicate to the general public the air temperatures they encounter. Variations reflect differences in daytime and nighttime temperatures and the influence of large scale weather systems. As the planet warms in response to rising greenhouse gas concentrations, scientists are also tracking changes in the frequency of heat waves and their potential impacts on human health.",
      "sonificationProfile": {
        "scale": "Dorian & Microtonal Tension",
        "baseFrequency": "110 Hz (A2)",
        "timbre": "Warm atmospheric synth pad reflecting global 2-meter air temperature gradients",
        "mappingRule": "2m surface air temperature maps directly to audio pitch and acoustic harmonic density.",
        "spatialMode": "Polar-orbiting scanline sweeps from 90°N to 90°S."
      },
      "frames": [
        {
          "frameIndex": 0,
          "filename": "geos_near_surface_temp_5147.png",
          "label": "GEOS-FP Near-Surface Temperature Field",
          "value": "+15.2°C (Global Model Average)",
          "metricName": "Near-Surface 2m Air Temperature",
          "audioNarrative": "Weather models begin their forecasts by integrating observations from ground stations, aircraft, balloons, and a growing constellation of Earth observing satellites to estimate the most realistic atmospheric state. The Goddard Earth Observing System Forward Processing (GEOS-FP) system is a research model maintained by NASA’s Global Modeling and Assimilation Office to demonstrate innovative new ways to use satellite data to improve predictions of weather, air quality, and greenhouse gases and to help NASA collect new observations of our home planet. Near surface temperature is calculated by sampling model fields at 2 meters (about 6 feet) above Earth’s surface, helping scientists communicate to the general public the air temperatures they encounter. Variations reflect differences in daytime and nighttime temperatures and the influence of large scale weather systems. As the planet warms in response to rising greenhouse gas concentrations, scientists are also tracking changes in the frequency of heat waves and their potential impacts on human health.",
          "dominantFreqRange": "110 Hz - 880 Hz",
          "intensity": 0.85
        }
      ]
    },
    {
      "id": "biosphere-pulse",
      "title": "Earth's Biosphere Pulse & Forest Canopy",
      "subtitle": "NASA SVS 4950 (GEDI Canopy) & MODIS: Seasonal Breathing",
      "nasaResourceUrl": "https://svs.gsfc.nasa.gov/4950/",
      "nasaSvsId": "SVS-4950",
      "category": "Biosphere & Ecology",
      "description": "Visualizes photosynthetically active biomass and canopy height across 12 months. Aligned with NASA GEDI (SVS 4950) mapping canopy elevation into lush organic chords.",
      "sonificationProfile": {
        "scale": "Major Pentatonic & Lydian (C, D, E, G, A)",
        "baseFrequency": "130.81 Hz (C3)",
        "timbre": "Organic wooden marimba, acoustic kalimba, and resonant bamboo chimes",
        "mappingRule": "Canopy height and greenness index trigger pentatonic strikes. Dense rainforests play polyphonic clusters; arid lands generate warm ambient grain.",
        "spatialMode": "Hemispheric balance sweeps west-to-east with the sun."
      },
      "probePoints": [
        {
          "name": "Amazon Rainforest",
          "x": 0.28,
          "y": 0.58,
          "desc": "Continuous dense biomass; rich polyphonic chord clusters."
        },
        {
          "name": "Siberian Boreal Forest (Taiga)",
          "x": 0.7,
          "y": 0.22,
          "desc": "Dramatic seasonal bloom; switches from frosty drone to bright fast marimba cascades."
        },
        {
          "name": "Congo Basin",
          "x": 0.52,
          "y": 0.56,
          "desc": "Tropical heartbeat; rhythmic percussive syncopation."
        },
        {
          "name": "Sahara Desert",
          "x": 0.5,
          "y": 0.42,
          "desc": "Arid minimal vegetation; dry acoustic brush texture."
        }
      ],
      "frames": [
        {
          "frameIndex": 0,
          "filename": "biosphere_january.png",
          "label": "January",
          "month": "January",
          "value": "NDVI Peak: 0.42",
          "metricName": "Global Vegetation & Canopy Index",
          "audioNarrative": "January. The global biosphere breathes. Boreal greening index reaches 0.42.",
          "dominantFreqRange": "261 Hz - 1046 Hz (C4 - C6)",
          "intensity": 0.04999999999999999
        },
        {
          "frameIndex": 1,
          "filename": "biosphere_march.png",
          "label": "March",
          "month": "March",
          "value": "NDVI Peak: 0.48",
          "metricName": "Global Vegetation & Canopy Index",
          "audioNarrative": "March. The global biosphere breathes. Boreal greening index reaches 0.48.",
          "dominantFreqRange": "261 Hz - 1046 Hz (C4 - C6)",
          "intensity": 0.18180194846605358
        },
        {
          "frameIndex": 2,
          "filename": "biosphere_may.png",
          "label": "May",
          "month": "May",
          "value": "NDVI Peak: 0.62",
          "metricName": "Global Vegetation & Canopy Index",
          "audioNarrative": "May. The global biosphere breathes. Boreal greening index reaches 0.62.",
          "dominantFreqRange": "261 Hz - 1046 Hz (C4 - C6)",
          "intensity": 0.5
        },
        {
          "frameIndex": 3,
          "filename": "biosphere_june.png",
          "label": "June",
          "month": "June",
          "value": "NDVI Peak: 0.77",
          "metricName": "Global Vegetation & Canopy Index",
          "audioNarrative": "June. The global biosphere breathes. Boreal greening index reaches 0.77.",
          "dominantFreqRange": "261 Hz - 1046 Hz (C4 - C6)",
          "intensity": 0.8181980515339464
        },
        {
          "frameIndex": 4,
          "filename": "biosphere_july.png",
          "label": "July",
          "month": "July",
          "value": "NDVI Peak: 0.83",
          "metricName": "Global Vegetation & Canopy Index",
          "audioNarrative": "July. The global biosphere breathes. Boreal greening index reaches 0.83.",
          "dominantFreqRange": "261 Hz - 1046 Hz (C4 - C6)",
          "intensity": 0.95
        },
        {
          "frameIndex": 5,
          "filename": "biosphere_august.png",
          "label": "August",
          "month": "August",
          "value": "NDVI Peak: 0.77",
          "metricName": "Global Vegetation & Canopy Index",
          "audioNarrative": "August. The global biosphere breathes. Boreal greening index reaches 0.77.",
          "dominantFreqRange": "261 Hz - 1046 Hz (C4 - C6)",
          "intensity": 0.8181980515339464
        },
        {
          "frameIndex": 6,
          "filename": "biosphere_september.png",
          "label": "September",
          "month": "September",
          "value": "NDVI Peak: 0.62",
          "metricName": "Global Vegetation & Canopy Index",
          "audioNarrative": "September. The global biosphere breathes. Boreal greening index reaches 0.62.",
          "dominantFreqRange": "261 Hz - 1046 Hz (C4 - C6)",
          "intensity": 0.5
        },
        {
          "frameIndex": 7,
          "filename": "biosphere_november.png",
          "label": "November",
          "month": "November",
          "value": "NDVI Peak: 0.48",
          "metricName": "Global Vegetation & Canopy Index",
          "audioNarrative": "November. The global biosphere breathes. Boreal greening index reaches 0.48.",
          "dominantFreqRange": "261 Hz - 1046 Hz (C4 - C6)",
          "intensity": 0.18180194846605363
        }
      ]
    },
    {
      "id": "atmospheric-co2",
      "title": "DYAMOND Atmospheric Carbon Dioxide",
      "subtitle": "NASA SVS 5196 & OCO-2: Global Greenhouse Circulation",
      "nasaResourceUrl": "https://svs.gsfc.nasa.gov/5196/",
      "nasaSvsId": "SVS-5196",
      "category": "Atmospheric Chemistry",
      "description": "Visualizes atmospheric CO2 column density as transported by planetary winds and jet streams, matching NASA SVS 5196 (DYAMOND CO2). Dense plumes open twin resonant bandpass filters.",
      "sonificationProfile": {
        "scale": "Aeolian & Ambient Minor (F, G, Ab, Bb, C, Db, Eb)",
        "baseFrequency": "87.31 Hz (F2)",
        "timbre": "Deep sub-harmonic bass drone with swirling resonant bandpass filter sweeps and stereophonic wind texture",
        "mappingRule": "CO2 density (ppm) opens twin resonant bandpass filters (Q=8.0) and triggers detuned analog synth voices panning across stereo field.",
        "spatialMode": "Atmospheric wind stream flows West to East."
      },
      "probePoints": [
        {
          "name": "East Asia Industrial Corridor",
          "x": 0.78,
          "y": 0.36,
          "desc": "Dense anthropogenic emissions; intense resonant harmonic spike."
        },
        {
          "name": "North American Megalopolis",
          "x": 0.24,
          "y": 0.34,
          "desc": "High concentration plume; stereo panning drone."
        },
        {
          "name": "South Pacific Clean Air Baseline",
          "x": 0.2,
          "y": 0.75,
          "desc": "Pristine oceanic background air; soft low-amplitude drone."
        },
        {
          "name": "European Basin",
          "x": 0.52,
          "y": 0.28,
          "desc": "Intermittent industrial and transport plume; modulated chorus."
        }
      ],
      "frames": [
        {
          "frameIndex": 0,
          "filename": "co2_swirl_1.png",
          "label": "Winter Emission Peak",
          "value": "412.0 ppm",
          "metricName": "Atmospheric CO2 Concentration",
          "audioNarrative": "Winter Emission Peak. Column CO2 concentration averages 412.0 parts per million, with pronounced atmospheric jet-stream plumes.",
          "dominantFreqRange": "65 Hz - 350 Hz",
          "intensity": 0.4
        },
        {
          "frameIndex": 1,
          "filename": "co2_swirl_2.png",
          "label": "Spring Drawdown",
          "value": "415.9 ppm",
          "metricName": "Atmospheric CO2 Concentration",
          "audioNarrative": "Spring Drawdown. Column CO2 concentration averages 415.9 parts per million, with pronounced atmospheric jet-stream plumes.",
          "dominantFreqRange": "65 Hz - 350 Hz",
          "intensity": 0.5301225820673248
        },
        {
          "frameIndex": 2,
          "filename": "co2_swirl_3.png",
          "label": "Summer Photosynthesis Sink",
          "value": "417.9 ppm",
          "metricName": "Atmospheric CO2 Concentration",
          "audioNarrative": "Summer Photosynthesis Sink. Column CO2 concentration averages 417.9 parts per million, with pronounced atmospheric jet-stream plumes.",
          "dominantFreqRange": "65 Hz - 350 Hz",
          "intensity": 0.5957747855688069
        },
        {
          "frameIndex": 3,
          "filename": "co2_swirl_4.png",
          "label": "Autumn Respiration",
          "value": "417.8 ppm",
          "metricName": "Atmospheric CO2 Concentration",
          "audioNarrative": "Autumn Respiration. Column CO2 concentration averages 417.8 parts per million, with pronounced atmospheric jet-stream plumes.",
          "dominantFreqRange": "65 Hz - 350 Hz",
          "intensity": 0.5917600006716555
        },
        {
          "frameIndex": 4,
          "filename": "co2_swirl_5.png",
          "label": "Global Plume Dispersion",
          "value": "417.3 ppm",
          "metricName": "Atmospheric CO2 Concentration",
          "audioNarrative": "Global Plume Dispersion. Column CO2 concentration averages 417.3 parts per million, with pronounced atmospheric jet-stream plumes.",
          "dominantFreqRange": "65 Hz - 350 Hz",
          "intensity": 0.5769331253910063
        },
        {
          "frameIndex": 5,
          "filename": "co2_swirl_6.png",
          "label": "Megacity Corridors",
          "value": "418.6 ppm",
          "metricName": "Atmospheric CO2 Concentration",
          "audioNarrative": "Megacity Corridors. Column CO2 concentration averages 418.6 parts per million, with pronounced atmospheric jet-stream plumes.",
          "dominantFreqRange": "65 Hz - 350 Hz",
          "intensity": 0.6200896437780709
        },
        {
          "frameIndex": 6,
          "filename": "co2_swirl_7.png",
          "label": "Tropical Biomass Flux",
          "value": "422.1 ppm",
          "metricName": "Atmospheric CO2 Concentration",
          "audioNarrative": "Tropical Biomass Flux. Column CO2 concentration averages 422.1 parts per million, with pronounced atmospheric jet-stream plumes.",
          "dominantFreqRange": "65 Hz - 350 Hz",
          "intensity": 0.7367153751500893
        },
        {
          "frameIndex": 7,
          "filename": "co2_swirl_8.png",
          "label": "Annual Accumulation Peak",
          "value": "426.2 ppm",
          "metricName": "Atmospheric CO2 Concentration",
          "audioNarrative": "Annual Accumulation Peak. Column CO2 concentration averages 426.2 parts per million, with pronounced atmospheric jet-stream plumes.",
          "dominantFreqRange": "65 Hz - 350 Hz",
          "intensity": 0.8747488832265674
        }
      ]
    },
    {
      "id": "ocean-currents",
      "title": "Perpetual Ocean & Western Boundary Currents",
      "subtitle": "NASA SVS 5425 & SVS 3912: Thermohaline Conveyor",
      "nasaResourceUrl": "https://svs.gsfc.nasa.gov/5425/",
      "nasaSvsId": "SVS-5425",
      "category": "Oceanography & Fluid Dynamics",
      "description": "Visualizes oceanic gyres, western boundary currents, and thermal circulation based directly on NASA Perpetual Ocean 2 (SVS 5425) and SVS 3912. Fluid delay lines mirror current velocities.",
      "sonificationProfile": {
        "scale": "Ocean Hexatonic (D, E, F#, A, B, C#)",
        "baseFrequency": "73.42 Hz (D2)",
        "timbre": "Flowing fluid delay lines, smooth glissando pitches, and deep oceanic sub-bass foundation",
        "mappingRule": "Current vector velocity drives arpeggio rate and delay feedback. Thermal gradients modulate a warm, liquid tremolo (0.3 Hz).",
        "spatialMode": "Circular gyres map to 360\u00b0 binaural stereo panning."
      },
      "probePoints": [
        {
          "name": "Gulf Stream Thermal Highway",
          "x": 0.28,
          "y": 0.38,
          "desc": "Fast turbulent current carrying tropical heat; rapid cascading arpeggios."
        },
        {
          "name": "Antarctic Circumpolar Current",
          "x": 0.5,
          "y": 0.86,
          "desc": "World's most powerful unobstructed current; unending rhythmic bass pulse."
        },
        {
          "name": "Kuroshio Extension",
          "x": 0.82,
          "y": 0.38,
          "desc": "Pacific thermal conveyor; bright dynamic fluid leads."
        },
        {
          "name": "Equatorial Pacific Cold Tongue",
          "x": 0.2,
          "y": 0.52,
          "desc": "Deep nutrient-rich upwelling; deep tranquil resonant hum."
        }
      ],
      "frames": [
        {
          "frameIndex": 0,
          "filename": "ocean_current_1.png",
          "label": "Gulf Stream Eddy Pulse",
          "value": "1.20 m/s",
          "metricName": "Mean Current Velocity",
          "audioNarrative": "Gulf Stream Eddy Pulse. Thermohaline circulation speed peaks at 1.20 meters per second.",
          "dominantFreqRange": "73 Hz - 587 Hz (D2 - D5)",
          "intensity": 0.6
        },
        {
          "frameIndex": 1,
          "filename": "ocean_current_2.png",
          "label": "North Atlantic Deep Water",
          "value": "1.46 m/s",
          "metricName": "Mean Current Velocity",
          "audioNarrative": "North Atlantic Deep Water. Thermohaline circulation speed peaks at 1.46 meters per second.",
          "dominantFreqRange": "73 Hz - 587 Hz (D2 - D5)",
          "intensity": 0.7288435374475382
        },
        {
          "frameIndex": 2,
          "filename": "ocean_current_3.png",
          "label": "Kuroshio Current Surge",
          "value": "1.59 m/s",
          "metricName": "Mean Current Velocity",
          "audioNarrative": "Kuroshio Current Surge. Thermohaline circulation speed peaks at 1.59 meters per second.",
          "dominantFreqRange": "73 Hz - 587 Hz (D2 - D5)",
          "intensity": 0.797089945997692
        },
        {
          "frameIndex": 3,
          "filename": "ocean_current_4.png",
          "label": "Antarctic Circumpolar Drift",
          "value": "1.55 m/s",
          "metricName": "Mean Current Velocity",
          "audioNarrative": "Antarctic Circumpolar Drift. Thermohaline circulation speed peaks at 1.55 meters per second.",
          "dominantFreqRange": "73 Hz - 587 Hz (D2 - D5)",
          "intensity": 0.7726418733297747
        },
        {
          "frameIndex": 4,
          "filename": "ocean_current_5.png",
          "label": "Agulhas Retroflection",
          "value": "1.33 m/s",
          "metricName": "Mean Current Velocity",
          "audioNarrative": "Agulhas Retroflection. Thermohaline circulation speed peaks at 1.33 meters per second.",
          "dominantFreqRange": "73 Hz - 587 Hz (D2 - D5)",
          "intensity": 0.666997630031181
        },
        {
          "frameIndex": 5,
          "filename": "ocean_current_6.png",
          "label": "Equatorial Upwelling",
          "value": "1.06 m/s",
          "metricName": "Mean Current Velocity",
          "audioNarrative": "Equatorial Upwelling. Thermohaline circulation speed peaks at 1.06 meters per second.",
          "dominantFreqRange": "73 Hz - 587 Hz (D2 - D5)",
          "intensity": 0.529843354462076
        },
        {
          "frameIndex": 6,
          "filename": "ocean_current_7.png",
          "label": "Pacific Gyre Circulation",
          "value": "0.85 m/s",
          "metricName": "Mean Current Velocity",
          "audioNarrative": "Pacific Gyre Circulation. Thermohaline circulation speed peaks at 0.85 meters per second.",
          "dominantFreqRange": "73 Hz - 587 Hz (D2 - D5)",
          "intensity": 0.4256848455172824
        },
        {
          "frameIndex": 7,
          "filename": "ocean_current_8.png",
          "label": "Thermohaline Conveyor Cycle",
          "value": "0.81 m/s",
          "metricName": "Mean Current Velocity",
          "audioNarrative": "Thermohaline Conveyor Cycle. Thermohaline circulation speed peaks at 0.81 meters per second.",
          "dominantFreqRange": "73 Hz - 587 Hz (D2 - D5)",
          "intensity": 0.40350947747513344
        }
      ]
    },
    {
      "id": "arctic-sea-ice",
      "title": "Cryosphere: Arctic Sea Ice Minimum",
      "subtitle": "NASA GSFC & NSIDC: Four Decades of Polar Transformation",
      "nasaResourceUrl": "https://svs.gsfc.nasa.gov/gallery/earth-information-center/",
      "nasaSvsId": "EIC-CRYOSPHERE",
      "category": "Cryosphere & Polar Science",
      "description": "Visualizes the dramatic reduction of Arctic summer sea ice pack from 1979 to 2024. Multi-year thick ice triggers FM crystalline bells that thin out over time.",
      "sonificationProfile": {
        "scale": "Insen & Winter Pentatonic (E, F, A, B, D)",
        "baseFrequency": "164.81 Hz (E3)",
        "timbre": "Crystalline glass bells and FM synthesizer harmonics that thin out as ice vanishes",
        "mappingRule": "Ice pack area controls number of high harmonic bell voices. As extent drops, harmonic overtones drop away, leaving a haunting, barren open ocean drone.",
        "spatialMode": "Radial polar scan radiating outward from 90\u00b0N."
      },
      "probePoints": [
        {
          "name": "North Pole Ice Core",
          "x": 0.5,
          "y": 0.16,
          "desc": "Historically thick multi-year ice; pure glass chime resonance."
        },
        {
          "name": "Beaufort Gyre",
          "x": 0.35,
          "y": 0.14,
          "desc": "Dynamic ice drift and melt corridor; delicate micro-bells."
        },
        {
          "name": "Greenland Ice Sheet Summit",
          "x": 0.36,
          "y": 0.18,
          "desc": "High altitude continental glacier; steadfast, cold sustained tone."
        },
        {
          "name": "Barents Sea Open Water",
          "x": 0.62,
          "y": 0.18,
          "desc": "Now largely ice-free in summer; deep haunting oceanic bass void."
        }
      ],
      "frames": [
        {
          "frameIndex": 0,
          "filename": "sea_ice_1979.png",
          "label": "September 1979",
          "year": 1979,
          "value": "7.8 M km\u00b2",
          "metricName": "September Minimum Sea Ice Extent",
          "audioNarrative": "September 1979. Arctic minimum sea ice extent is 7.8 million square kilometers. Crystalline harmonic bells recede as coverage declines.",
          "dominantFreqRange": "330 Hz - 2637 Hz (E4 - E7)",
          "intensity": 0.040000000000000036
        },
        {
          "frameIndex": 1,
          "filename": "sea_ice_1985.png",
          "label": "September 1985",
          "year": 1985,
          "value": "6.9 M km\u00b2",
          "metricName": "September Minimum Sea Ice Extent",
          "audioNarrative": "September 1985. Arctic minimum sea ice extent is 6.9 million square kilometers. Crystalline harmonic bells recede as coverage declines.",
          "dominantFreqRange": "330 Hz - 2637 Hz (E4 - E7)",
          "intensity": 0.21999999999999992
        },
        {
          "frameIndex": 2,
          "filename": "sea_ice_1996.png",
          "label": "September 1996",
          "year": 1996,
          "value": "7.2 M km\u00b2",
          "metricName": "September Minimum Sea Ice Extent",
          "audioNarrative": "September 1996. Arctic minimum sea ice extent is 7.2 million square kilometers. Crystalline harmonic bells recede as coverage declines.",
          "dominantFreqRange": "330 Hz - 2637 Hz (E4 - E7)",
          "intensity": 0.15999999999999998
        },
        {
          "frameIndex": 3,
          "filename": "sea_ice_2005.png",
          "label": "September 2005",
          "year": 2005,
          "value": "5.3 M km\u00b2",
          "metricName": "September Minimum Sea Ice Extent",
          "audioNarrative": "September 2005. Arctic minimum sea ice extent is 5.3 million square kilometers. Crystalline harmonic bells recede as coverage declines.",
          "dominantFreqRange": "330 Hz - 2637 Hz (E4 - E7)",
          "intensity": 0.54
        },
        {
          "frameIndex": 4,
          "filename": "sea_ice_2012.png",
          "label": "September 2012",
          "year": 2012,
          "value": "3.4 M km\u00b2",
          "metricName": "September Minimum Sea Ice Extent",
          "audioNarrative": "September 2012. Arctic minimum sea ice extent is 3.4 million square kilometers. Crystalline harmonic bells recede as coverage declines.",
          "dominantFreqRange": "330 Hz - 2637 Hz (E4 - E7)",
          "intensity": 0.9199999999999999
        },
        {
          "frameIndex": 5,
          "filename": "sea_ice_2016.png",
          "label": "September 2016",
          "year": 2016,
          "value": "4.1 M km\u00b2",
          "metricName": "September Minimum Sea Ice Extent",
          "audioNarrative": "September 2016. Arctic minimum sea ice extent is 4.1 million square kilometers. Crystalline harmonic bells recede as coverage declines.",
          "dominantFreqRange": "330 Hz - 2637 Hz (E4 - E7)",
          "intensity": 0.78
        },
        {
          "frameIndex": 6,
          "filename": "sea_ice_2020.png",
          "label": "September 2020",
          "year": 2020,
          "value": "3.7 M km\u00b2",
          "metricName": "September Minimum Sea Ice Extent",
          "audioNarrative": "September 2020. Arctic minimum sea ice extent is 3.7 million square kilometers. Crystalline harmonic bells recede as coverage declines.",
          "dominantFreqRange": "330 Hz - 2637 Hz (E4 - E7)",
          "intensity": 0.86
        },
        {
          "frameIndex": 7,
          "filename": "sea_ice_2024.png",
          "label": "September 2024",
          "year": 2024,
          "value": "4.2 M km\u00b2",
          "metricName": "September Minimum Sea Ice Extent",
          "audioNarrative": "September 2024. Arctic minimum sea ice extent is 4.2 million square kilometers. Crystalline harmonic bells recede as coverage declines.",
          "dominantFreqRange": "330 Hz - 2637 Hz (E4 - E7)",
          "intensity": 0.76
        }
      ]
    },
    {
      "id": "global-wildfires",
      "title": "GEOS Aerosols & Global Wildfires",
      "subtitle": "NASA SVS 5669 & FIRMS: Fire and Particulate Smoke",
      "nasaResourceUrl": "https://svs.gsfc.nasa.gov/5669/",
      "nasaSvsId": "SVS-5669",
      "category": "Atmosphere & Hazards",
      "description": "Visualizes smoke, dust, and aerosol particles based on NASA GEOS Aerosols (SVS 5669) and FIRMS. Active thermal hotspots trigger crisp granular percussive sparks.",
      "sonificationProfile": {
        "scale": "Phrygian Dominant (E, F, G#, A, B, C, D)",
        "baseFrequency": "82.41 Hz (E2)",
        "timbre": "Filtered granular crackle noise and fiery staccato percussion enveloped in smoky atmospheric filter sweep",
        "mappingRule": "Active fire pixels trigger rapid random granular percussion (wood/spark sounds). Aerosol optical thickness controls a dark resonant low-pass filter.",
        "spatialMode": "Stereo position matches longitude of active fire clusters."
      },
      "probePoints": [
        {
          "name": "Western North America Fire Complex",
          "x": 0.18,
          "y": 0.32,
          "desc": "High intensity coniferous forest fires; rapid percussive spark bursts."
        },
        {
          "name": "Amazon Southern Arc of Deforestation",
          "x": 0.32,
          "y": 0.6,
          "desc": "Agricultural and forest combustion; intense low-frequency rumble with sparks."
        },
        {
          "name": "Central African Savanna Burns",
          "x": 0.54,
          "y": 0.56,
          "desc": "Widespread seasonal agricultural burning; polyrhythmic percussive field."
        },
        {
          "name": "Siberian Boreal Peatland Fires",
          "x": 0.76,
          "y": 0.24,
          "desc": "Smoldering peat and taiga; deep smoky resonance with intermittent crackles."
        }
      ],
      "frames": [
        {
          "frameIndex": 0,
          "filename": "wildfire_firms_1.png",
          "label": "Boreal Fire Season Peak",
          "value": "14,256 Active Thermal Detections",
          "metricName": "Global Thermal Hotspots",
          "audioNarrative": "Boreal Fire Season Peak. Satellite sensors detect 14,256 thermal fire hotspots with widespread particulate aerosol plumes.",
          "dominantFreqRange": "82 Hz - 1800 Hz",
          "intensity": 0.3564
        },
        {
          "frameIndex": 1,
          "filename": "wildfire_firms_2.png",
          "label": "Amazon Biomass Burning",
          "value": "17,433 Active Thermal Detections",
          "metricName": "Global Thermal Hotspots",
          "audioNarrative": "Amazon Biomass Burning. Satellite sensors detect 17,433 thermal fire hotspots with widespread particulate aerosol plumes.",
          "dominantFreqRange": "82 Hz - 1800 Hz",
          "intensity": 0.435825
        },
        {
          "frameIndex": 2,
          "filename": "wildfire_firms_3.png",
          "label": "Australian Black Summer Pulse",
          "value": "20,737 Active Thermal Detections",
          "metricName": "Global Thermal Hotspots",
          "audioNarrative": "Australian Black Summer Pulse. Satellite sensors detect 20,737 thermal fire hotspots with widespread particulate aerosol plumes.",
          "dominantFreqRange": "82 Hz - 1800 Hz",
          "intensity": 0.518425
        },
        {
          "frameIndex": 3,
          "filename": "wildfire_firms_4.png",
          "label": "Sub-Saharan Savanna Burns",
          "value": "24,355 Active Thermal Detections",
          "metricName": "Global Thermal Hotspots",
          "audioNarrative": "Sub-Saharan Savanna Burns. Satellite sensors detect 24,355 thermal fire hotspots with widespread particulate aerosol plumes.",
          "dominantFreqRange": "82 Hz - 1800 Hz",
          "intensity": 0.608875
        },
        {
          "frameIndex": 4,
          "filename": "wildfire_firms_5.png",
          "label": "Western US Wildfire Surge",
          "value": "27,111 Active Thermal Detections",
          "metricName": "Global Thermal Hotspots",
          "audioNarrative": "Western US Wildfire Surge. Satellite sensors detect 27,111 thermal fire hotspots with widespread particulate aerosol plumes.",
          "dominantFreqRange": "82 Hz - 1800 Hz",
          "intensity": 0.677775
        },
        {
          "frameIndex": 5,
          "filename": "wildfire_firms_6.png",
          "label": "Mediterranean Heat Dome Fires",
          "value": "30,155 Active Thermal Detections",
          "metricName": "Global Thermal Hotspots",
          "audioNarrative": "Mediterranean Heat Dome Fires. Satellite sensors detect 30,155 thermal fire hotspots with widespread particulate aerosol plumes.",
          "dominantFreqRange": "82 Hz - 1800 Hz",
          "intensity": 0.753875
        },
        {
          "frameIndex": 6,
          "filename": "wildfire_firms_7.png",
          "label": "Siberian Megafires",
          "value": "33,408 Active Thermal Detections",
          "metricName": "Global Thermal Hotspots",
          "audioNarrative": "Siberian Megafires. Satellite sensors detect 33,408 thermal fire hotspots with widespread particulate aerosol plumes.",
          "dominantFreqRange": "82 Hz - 1800 Hz",
          "intensity": 0.8352
        },
        {
          "frameIndex": 7,
          "filename": "wildfire_firms_8.png",
          "label": "Global Aerosol Smoke Transport",
          "value": "36,619 Active Thermal Detections",
          "metricName": "Global Thermal Hotspots",
          "audioNarrative": "Global Aerosol Smoke Transport. Satellite sensors detect 36,619 thermal fire hotspots with widespread particulate aerosol plumes.",
          "dominantFreqRange": "82 Hz - 1800 Hz",
          "intensity": 0.915475
        }
      ]
    },
    {
      "id": "night-lights",
      "title": "Evolution of Earth's Night Lights",
      "subtitle": "NASA SVS 5313 (EIC Version): A Decade of Human Illumination",
      "nasaResourceUrl": "https://svs.gsfc.nasa.gov/5313/",
      "nasaSvsId": "SVS-5313",
      "category": "Human Dimension & Energy",
      "description": "Directly recommended in NASA's official resources (SVS 5313). Tracks the evolution of urban illumination from 2012 to 2023. The high contrast between pitch-black terrain and brilliant city lights tests intensity-to-audio mappings.",
      "sonificationProfile": {
        "scale": "Lydian Celestial Scale (F, G, A, B, C, D, E)",
        "baseFrequency": "174.61 Hz (F3)",
        "timbre": "Celestial glass arpeggiator and shimmering bell chimes emerging from deep space silence",
        "mappingRule": "Dark terrain produces silence or deep sub-bass; city cluster brightness triggers rapid, sparkling Lydian arpeggios that intensify with urbanization.",
        "spatialMode": "Stereo pan sweeps across metropolitan corridors."
      },
      "probePoints": [
        {
          "name": "Tokyo & East Asia Megalopolis",
          "x": 0.76,
          "y": 0.38,
          "desc": "One of Earth's brightest nocturnal clusters; rapid celestial chimes."
        },
        {
          "name": "Nile River Corridor & Delta",
          "x": 0.54,
          "y": 0.44,
          "desc": "A vibrant golden ribbon of light tracing the historic river in the dark Sahara."
        },
        {
          "name": "Northeast US Megalopolis (Bos-Wash)",
          "x": 0.25,
          "y": 0.35,
          "desc": "Dense contiguous metropolitan illumination; multi-voice polyphony."
        },
        {
          "name": "Siberian Interior",
          "x": 0.72,
          "y": 0.2,
          "desc": "Vast pristine dark expanse; absolute tranquil acoustic stillness."
        }
      ],
      "frames": [
        {
          "frameIndex": 0,
          "filename": "night_lights_2012.png",
          "label": "Year 2012",
          "year": 2012,
          "value": "62.4 Radiance Index",
          "metricName": "Global Urban Radiance",
          "audioNarrative": "Year 2012. Earth night lights track urban electrification and infrastructure expansion, radiating at index 62.4.",
          "dominantFreqRange": "440 Hz - 3500 Hz (A4 - A7)",
          "intensity": 0.07999999999999995
        },
        {
          "frameIndex": 1,
          "filename": "night_lights_2014.png",
          "label": "Year 2014",
          "year": 2014,
          "value": "65.1 Radiance Index",
          "metricName": "Global Urban Radiance",
          "audioNarrative": "Year 2014. Earth night lights track urban electrification and infrastructure expansion, radiating at index 65.1.",
          "dominantFreqRange": "440 Hz - 3500 Hz (A4 - A7)",
          "intensity": 0.16999999999999982
        },
        {
          "frameIndex": 2,
          "filename": "night_lights_2016.png",
          "label": "Year 2016",
          "year": 2016,
          "value": "68.9 Radiance Index",
          "metricName": "Global Urban Radiance",
          "audioNarrative": "Year 2016. Earth night lights track urban electrification and infrastructure expansion, radiating at index 68.9.",
          "dominantFreqRange": "440 Hz - 3500 Hz (A4 - A7)",
          "intensity": 0.29666666666666686
        },
        {
          "frameIndex": 3,
          "filename": "night_lights_2018.png",
          "label": "Year 2018",
          "year": 2018,
          "value": "73.2 Radiance Index",
          "metricName": "Global Urban Radiance",
          "audioNarrative": "Year 2018. Earth night lights track urban electrification and infrastructure expansion, radiating at index 73.2.",
          "dominantFreqRange": "440 Hz - 3500 Hz (A4 - A7)",
          "intensity": 0.4400000000000001
        },
        {
          "frameIndex": 4,
          "filename": "night_lights_2020.png",
          "label": "Year 2020",
          "year": 2020,
          "value": "76.8 Radiance Index",
          "metricName": "Global Urban Radiance",
          "audioNarrative": "Year 2020. Earth night lights track urban electrification and infrastructure expansion, radiating at index 76.8.",
          "dominantFreqRange": "440 Hz - 3500 Hz (A4 - A7)",
          "intensity": 0.5599999999999999
        },
        {
          "frameIndex": 5,
          "filename": "night_lights_2021.png",
          "label": "Year 2021",
          "year": 2021,
          "value": "80.4 Radiance Index",
          "metricName": "Global Urban Radiance",
          "audioNarrative": "Year 2021. Earth night lights track urban electrification and infrastructure expansion, radiating at index 80.4.",
          "dominantFreqRange": "440 Hz - 3500 Hz (A4 - A7)",
          "intensity": 0.6800000000000002
        },
        {
          "frameIndex": 6,
          "filename": "night_lights_2022.png",
          "label": "Year 2022",
          "year": 2022,
          "value": "84.7 Radiance Index",
          "metricName": "Global Urban Radiance",
          "audioNarrative": "Year 2022. Earth night lights track urban electrification and infrastructure expansion, radiating at index 84.7.",
          "dominantFreqRange": "440 Hz - 3500 Hz (A4 - A7)",
          "intensity": 0.8233333333333335
        },
        {
          "frameIndex": 7,
          "filename": "night_lights_2023.png",
          "label": "Year 2023",
          "year": 2023,
          "value": "88.3 Radiance Index",
          "metricName": "Global Urban Radiance",
          "audioNarrative": "Year 2023. Earth night lights track urban electrification and infrastructure expansion, radiating at index 88.3.",
          "dominantFreqRange": "440 Hz - 3500 Hz (A4 - A7)",
          "intensity": 0.9433333333333332
        }
      ]
    },
    {
      "id": "iss-lightning",
      "title": "Lightning Events from the ISS (2017\u20132023)",
      "subtitle": "NASA SVS 5011: Spaceborne Optical Flash Transients",
      "nasaResourceUrl": "https://svs.gsfc.nasa.gov/5011/",
      "nasaSvsId": "SVS-5011",
      "category": "Extreme Weather & Electrodynamics",
      "description": "Recommended in NASA's official challenge resources (SVS 5011). Uniquely suited for punctuated sonification, where percussive elements and sharp audio triggers correspond to spaceborne flashes.",
      "sonificationProfile": {
        "scale": "Acoustic / Harmonic Minor (A, B, C, D, E, F, G#)",
        "baseFrequency": "110 Hz (A2)",
        "timbre": "Punctuated percussive strikes, sudden synthesized lightning snaps, and resonant thunder decays",
        "mappingRule": "Sudden bright pixel transients trigger instant percussive wood/metal transient clicks, followed by a low-frequency rumble (40Hz).",
        "spatialMode": "Spatial longitude determines stereo snap position."
      },
      "probePoints": [
        {
          "name": "Congo Basin Lightning Epicenter",
          "x": 0.54,
          "y": 0.56,
          "desc": "Earth's highest lightning flash density; rapid polyrhythmic electric snaps."
        },
        {
          "name": "Lake Maracaibo Lightning Phenomenon",
          "x": 0.28,
          "y": 0.48,
          "desc": "Relentless nocturnal atmospheric electrical storms; rapid high-voltage percussion."
        },
        {
          "name": "Florida Lightning Alley",
          "x": 0.24,
          "y": 0.42,
          "desc": "Severe convective sea-breeze convergence; punctuated explosive triggers."
        },
        {
          "name": "Indonesian Maritime Continent",
          "x": 0.8,
          "y": 0.58,
          "desc": "Tropical convective chimneys with frequent spaceborne transient strikes."
        }
      ],
      "frames": [
        {
          "frameIndex": 0,
          "filename": "iss_lightning_1.png",
          "label": "Equatorial Convective Surge",
          "value": "2,412 Spaceborne Detections",
          "metricName": "ISS Optical Transient Flashes",
          "audioNarrative": "Equatorial Convective Surge. International Space Station sensors detect 2,412 optical lightning transients.",
          "dominantFreqRange": "120 Hz - 4000 Hz",
          "intensity": 0.335
        },
        {
          "frameIndex": 1,
          "filename": "iss_lightning_2.png",
          "label": "Congo Basin Midnight Peak",
          "value": "3,294 Spaceborne Detections",
          "metricName": "ISS Optical Transient Flashes",
          "audioNarrative": "Congo Basin Midnight Peak. International Space Station sensors detect 3,294 optical lightning transients.",
          "dominantFreqRange": "120 Hz - 4000 Hz",
          "intensity": 0.4575
        },
        {
          "frameIndex": 2,
          "filename": "iss_lightning_3.png",
          "label": "Amazon Flash Complex",
          "value": "3,672 Spaceborne Detections",
          "metricName": "ISS Optical Transient Flashes",
          "audioNarrative": "Amazon Flash Complex. International Space Station sensors detect 3,672 optical lightning transients.",
          "dominantFreqRange": "120 Hz - 4000 Hz",
          "intensity": 0.51
        },
        {
          "frameIndex": 3,
          "filename": "iss_lightning_4.png",
          "label": "Florida Storm Corridor",
          "value": "4,626 Spaceborne Detections",
          "metricName": "ISS Optical Transient Flashes",
          "audioNarrative": "Florida Storm Corridor. International Space Station sensors detect 4,626 optical lightning transients.",
          "dominantFreqRange": "120 Hz - 4000 Hz",
          "intensity": 0.6425
        },
        {
          "frameIndex": 4,
          "filename": "iss_lightning_5.png",
          "label": "Indonesian Archipelago Cluster",
          "value": "5,400 Spaceborne Detections",
          "metricName": "ISS Optical Transient Flashes",
          "audioNarrative": "Indonesian Archipelago Cluster. International Space Station sensors detect 5,400 optical lightning transients.",
          "dominantFreqRange": "120 Hz - 4000 Hz",
          "intensity": 0.75
        },
        {
          "frameIndex": 5,
          "filename": "iss_lightning_6.png",
          "label": "Midlatitude Squall Line",
          "value": "5,994 Spaceborne Detections",
          "metricName": "ISS Optical Transient Flashes",
          "audioNarrative": "Midlatitude Squall Line. International Space Station sensors detect 5,994 optical lightning transients.",
          "dominantFreqRange": "120 Hz - 4000 Hz",
          "intensity": 0.8325
        },
        {
          "frameIndex": 6,
          "filename": "iss_lightning_7.png",
          "label": "Tropical Convergence Burst",
          "value": "6,516 Spaceborne Detections",
          "metricName": "ISS Optical Transient Flashes",
          "audioNarrative": "Tropical Convergence Burst. International Space Station sensors detect 6,516 optical lightning transients.",
          "dominantFreqRange": "120 Hz - 4000 Hz",
          "intensity": 0.905
        },
        {
          "frameIndex": 7,
          "filename": "iss_lightning_8.png",
          "label": "Global Flash Superposition",
          "value": "6,876 Spaceborne Detections",
          "metricName": "ISS Optical Transient Flashes",
          "audioNarrative": "Global Flash Superposition. International Space Station sensors detect 6,876 optical lightning transients.",
          "dominantFreqRange": "120 Hz - 4000 Hz",
          "intensity": 0.955
        }
      ]
    },
{
    "id": "near-surface-wind",
    "title": "GEOS-FP Near-Surface Wind Speed",
    "subtitle": "NASA SVS 5148: Global 10-Meter Wind & Storm Systems",
    "nasaResourceUrl": "https://svs.gsfc.nasa.gov/5148/",
    "nasaSvsId": "SVS-5148",
    "category": "Atmospheric Dynamics & Wind Energy",
    "description": "Near surface wind speed is calculated by sampling model fields at 10 meters (about 30 feet) above Earth\u2019s surface. Wind speed is typically largest over ocean because surfaces are smooth and result in less friction than over land. Organized patterns reflect weather fronts and storm systems around the world. Near surface winds help scientists track the movement and severity of storms and air pollution episodes. Increasingly, these kinds of products help wind energy managers plan resources to help meet the world\u2019s demand for energy while reducing the greenhouse gas emissions that cause climate change.",
    "sonificationProfile": {
        "scale": "Dorian Mode / Aerodynamic Resonances (D, E, F, G, A, B, C)",
        "baseFrequency": "146.83 Hz (D3)",
        "timbre": "Atmospheric vortex wind rumbles, gale-force noise sweeps, and fluctuating aerodynamic turbulence filters",
        "mappingRule": "10-meter wind velocity (m/s) controls white noise filter cutoff and low-frequency turbulence modulations; oceanic high-wind belts generate resonant wind whistle harmonics.",
        "spatialMode": "Global storm tracks sweep longitudinally from West to East."
    },
    "frames": [
        {
            "frameIndex": 0,
            "filename": "geos_near_surface_wind_5148.png",
            "label": "Global 10m Wind Speed Field",
            "value": "18.4 m/s (35.8 kts)",
            "metricName": "10-Meter Wind Velocity",
            "audioNarrative": "Near surface wind speed calculated at 10 meters above Earth's surface. Smooth ocean surfaces exhibit gale-force wind bands, while continental landmasses produce high frictional drag.",
            "dominantFreqRange": "60 Hz - 2800 Hz",
            "intensity": 0.72
        }
    ]
},
{
    "id": "geos-precipitation-clouds",
    "title": "GEOS-FP Precipitation and Clouds",
    "subtitle": "NASA SVS 5149: Rain, Snow & Cloud Optical Thickness",
    "nasaResourceUrl": "https://svs.gsfc.nasa.gov/5149/",
    "nasaSvsId": "SVS-5149",
    "category": "Hydrological Cycle & Storm Hazards",
    "description": "Weather models begin their forecasts by integrating observations from ground stations, aircraft, balloons, and a growing constellation of Earth observing satellites to estimate the most realistic atmospheric state. The Goddard Earth Observing System Forward Processing (GEOS-FP) system is a research model maintained by NASA\u2019s Global Modeling and Assimilation Office to demonstrate innovative new ways to use satellite data to improve predictions of weather, air quality, and greenhouse gases and to help NASA collect new observations of our home planet. These models use complex equations to track the formation of clouds and estimate the amount of rainfall they will produce.\n\nThis animation overlays total precipitation, including both rain and snow, atop simulated cloud fields shaded by their optical thickness. Precipitation patterns are shifting as a result of climate change because warmer temperatures allow the atmosphere to evaporate and store more water vapor. In the northeastern U.S., communities have experienced a higher percentage of total rain falling during severe storms, which is concerning because it can raise the risk of hazards like flash floods and result in a smaller percentage of rain replenishing ground water supplies. Scientists are also tracking changes in the frequency and impact of atmospheric rivers in the western U.S. In addition to producing precipitation, clouds play a critical role in climate. Depending on their elevation, thickness, and the presence of aerosol particles, clouds can either reflect sunlight (cooling the planet) or trap heat emitted from Earth\u2019s surface (heating the planet). The degree to which cloud properties may change in coming decades is one of the largest sources of uncertainty in climate projections. NASA is working to find new ways to measure the properties of clouds and precipitation to help improve the ability to predict both short term changes in weather and long term changes in climate.",
    "sonificationProfile": {
        "scale": "Aeolian Mode / Hydro-Acoustic Resonance (C, D, Eb, F, G, Ab, Bb)",
        "baseFrequency": "130.81 Hz (C3)",
        "timbre": "Granular rain trickle textures, low-frequency atmospheric thunder rumbles, and resonant cloud filter sweeps",
        "mappingRule": "Precipitation rate (mm/hr) drives droplet density and granular raindrop strikes; cloud optical thickness modulates high-cut atmospheric absorption filters.",
        "spatialMode": "Atmospheric rivers flow eastwards across the Pacific into continental coastal zones."
    },
    "frames": [
        {
            "frameIndex": 0,
            "filename": "geos_precipitation_clouds_5149.png",
            "label": "Total Precipitation & Cloud Optical Depth",
            "value": "24.6 mm/hr Severe Storm Band",
            "metricName": "Precipitation Intensity",
            "audioNarrative": "Total precipitation overlay atop simulated cloud optical thickness. Severe storm cells generate intense rain bursts exceeding 24 millimeters per hour, elevating flash flood hazards.",
            "dominantFreqRange": "80 Hz - 3500 Hz",
            "intensity": 0.85
        }
    ]
},
{
    "id": "geos-near-surface-humidity",
    "title": "GEOS-FP Near-Surface Humidity",
    "subtitle": "NASA SVS 5150: Specific Humidity (Q2M) in g/kg",
    "nasaResourceUrl": "https://svs.gsfc.nasa.gov/5150/",
    "nasaSvsId": "SVS-5150",
    "category": "Atmospheric Moisture & Water Vapor Dynamics",
    "description": "This daily-updated visualization shows near-surface humidity data from the last two weeks through the present day. Weather models begin their forecasts by integrating observations from ground stations, aircraft, balloons, and a growing constellation of Earth observing satellites to estimate the most realistic atmospheric state. The Goddard Earth Observing System Forward Processing (GEOS-FP) system is a research model maintained by NASA\u2019s Global Modeling and Assimilation Office to demonstrate innovative new ways to use satellite data to improve predictions of weather, air quality, and greenhouse gases and to help NASA collect new observations of our home planet.\n\nNear-surface humidity, also known as specific humidity (Q2M), measures the actual amount of water vapor present in the air near Earth's surface. This measurement tells us the exact mass of water vapor per unit of air mass, typically measured in grams per kilogram (g/kg). It is calculated using atmospheric temperature and pressure data and remains relatively constant even as temperature changes throughout the day. Near-surface Humidity patterns reveal how moisture moves through the atmosphere via weather systems, ocean evaporation, and land surface processes. Understanding near-surface humidity is crucial for predicting weather patterns, agricultural conditions, and air quality, as it directly influences cloud formation, precipitation development, and the transport of atmospheric pollutants.",
    "sonificationProfile": {
        "scale": "Mixolydian Mode / Vaporous Harmonics (G, A, B, C, D, E, F)",
        "baseFrequency": "196.00 Hz (G3)",
        "timbre": "Warm oceanic vapor drones, shimmering moisture resonance, and lush ambient chorus filtering",
        "mappingRule": "Specific humidity Q2M (g/kg) controls chorus depth, sub-surface moisture resonance, and shimmer harmonic overtones; arid zones trigger stark, dry acoustic plucks.",
        "spatialMode": "Ocean evaporation plumes track tropical atmospheric moisture corridors West to East."
    },
    "frames": [
        {
            "frameIndex": 0,
            "filename": "geos_near_surface_humidity_5150.png",
            "label": "Global Specific Humidity Q2M Field",
            "value": "16.8 g/kg Tropical Moisture Zone",
            "metricName": "Specific Humidity (Q2M)",
            "audioNarrative": "Near-surface specific humidity measured in grams per kilogram. High tropical water vapor concentrations sustain storm development and monsoon moisture transport.",
            "dominantFreqRange": "110 Hz - 3200 Hz",
            "intensity": 0.78
        }
    ]
}
  ]
};