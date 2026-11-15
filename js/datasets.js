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
      "description": "This satellite observation visualization reveals the global surface air thermal distribution sampled at 2 meters above Earth. The metric spans an extreme temperature range from -40\u00b0C (-40\u00b0F) in severe polar cold up to +50\u00b0C (+122\u00b0F) in intense desert heatwaves. The colorbar maps this thermal gradient progressively: deep purple and dark indigo signify freezing polar zones (-40\u00b0C to -10\u00b0C) over Antarctica, Greenland, and Arctic ice sheets; cyan and soft green mark cool to temperate mid-latitude zones (0\u00b0C to +15\u00b0C); vibrant yellow and warm orange indicate tropical and sub-tropical daytime warmth (+20\u00b0C to +35\u00b0C); while dark crimson, maroon, and white-hot cores highlight dangerous extreme heatwaves exceeding +40\u00b0C to +50\u00b0C across the Sahara Desert, Persian Gulf, and central Australia.",
      "sonificationProfile": {
        "scale": "Dorian & Microtonal Tension",
        "baseFrequency": "110 Hz (A2)",
        "timbre": "Warm atmospheric synth pad reflecting global 2-meter air temperature gradients",
        "mappingRule": "2m surface air temperature maps directly to audio pitch and acoustic harmonic density.",
        "spatialMode": "Polar-orbiting scanline sweeps from 90\u00b0N to 90\u00b0S."
      },
      "frames": [
        {
          "frameIndex": 0,
          "filename": "geos_near_surface_temp_5147.png",
          "label": "GEOS-FP Near-Surface Temperature Field",
          "value": "+15.2\u00b0C (Global Model Average)",
          "metricName": "Near-Surface 2m Air Temperature",
          "audioNarrative": "This satellite observation visualization reveals the global surface air thermal distribution sampled at 2 meters above Earth. The metric spans an extreme temperature range from -40\u00b0C (-40\u00b0F) in severe polar cold up to +50\u00b0C (+122\u00b0F) in intense desert heatwaves. The colorbar maps this thermal gradient progressively: deep purple and dark indigo signify freezing polar zones (-40\u00b0C to -10\u00b0C) over Antarctica, Greenland, and Arctic ice sheets; cyan and soft green mark cool to temperate mid-latitude zones (0\u00b0C to +15\u00b0C); vibrant yellow and warm orange indicate tropical and sub-tropical daytime warmth (+20\u00b0C to +35\u00b0C); while dark crimson, maroon, and white-hot cores highlight dangerous extreme heatwaves exceeding +40\u00b0C to +50\u00b0C across the Sahara Desert, Persian Gulf, and central Australia.",
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
      "description": "This seasonal planetary visualization captures Earth's vegetative biosphere pulse, tracking photosynthetically active biomass across land and oceans. The metric measures Normalized Difference Vegetation Index (NDVI) and ocean chlorophyll density spanning from 0.0 (Barren) to 1.0 (Dense Climax Canopy). The colorbar explains biological productivity: pale beige and sand tan indicate barren deserts, rocky plateaus, and snow-covered winter landscapes with dormant plant life (NDVI under 0.15); light olive and yellow-green represent savannas, grasslands, and emerging springtime foliage (NDVI 0.2 to 0.5); deep emerald and dark forest green denote dense chlorophyll-rich canopies (NDVI 0.6 to 0.9) in the Amazon, Congo, and boreal taiga; while turquoise to neon blue oceanic ribbons reveal massive seasonal phytoplankton blooms along coastal nutrient upwellings.",
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
          "audioNarrative": "This seasonal planetary visualization captures Earth's vegetative biosphere pulse, tracking photosynthetically active biomass across land and oceans. The metric measures Normalized Difference Vegetation Index (NDVI) and ocean chlorophyll density spanning from 0.0 (Barren) to 1.0 (Dense Climax Canopy). The colorbar explains biological productivity: pale beige and sand tan indicate barren deserts, rocky plateaus, and snow-covered winter landscapes with dormant plant life (NDVI under 0.15); light olive and yellow-green represent savannas, grasslands, and emerging springtime foliage (NDVI 0.2 to 0.5); deep emerald and dark forest green denote dense chlorophyll-rich canopies (NDVI 0.6 to 0.9) in the Amazon, Congo, and boreal taiga; while turquoise to neon blue oceanic ribbons reveal massive seasonal phytoplankton blooms along coastal nutrient upwellings.",
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
          "audioNarrative": "This seasonal planetary visualization captures Earth's vegetative biosphere pulse, tracking photosynthetically active biomass across land and oceans. The metric measures Normalized Difference Vegetation Index (NDVI) and ocean chlorophyll density spanning from 0.0 (Barren) to 1.0 (Dense Climax Canopy). The colorbar explains biological productivity: pale beige and sand tan indicate barren deserts, rocky plateaus, and snow-covered winter landscapes with dormant plant life (NDVI under 0.15); light olive and yellow-green represent savannas, grasslands, and emerging springtime foliage (NDVI 0.2 to 0.5); deep emerald and dark forest green denote dense chlorophyll-rich canopies (NDVI 0.6 to 0.9) in the Amazon, Congo, and boreal taiga; while turquoise to neon blue oceanic ribbons reveal massive seasonal phytoplankton blooms along coastal nutrient upwellings.",
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
          "audioNarrative": "This seasonal planetary visualization captures Earth's vegetative biosphere pulse, tracking photosynthetically active biomass across land and oceans. The metric measures Normalized Difference Vegetation Index (NDVI) and ocean chlorophyll density spanning from 0.0 (Barren) to 1.0 (Dense Climax Canopy). The colorbar explains biological productivity: pale beige and sand tan indicate barren deserts, rocky plateaus, and snow-covered winter landscapes with dormant plant life (NDVI under 0.15); light olive and yellow-green represent savannas, grasslands, and emerging springtime foliage (NDVI 0.2 to 0.5); deep emerald and dark forest green denote dense chlorophyll-rich canopies (NDVI 0.6 to 0.9) in the Amazon, Congo, and boreal taiga; while turquoise to neon blue oceanic ribbons reveal massive seasonal phytoplankton blooms along coastal nutrient upwellings.",
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
          "audioNarrative": "This seasonal planetary visualization captures Earth's vegetative biosphere pulse, tracking photosynthetically active biomass across land and oceans. The metric measures Normalized Difference Vegetation Index (NDVI) and ocean chlorophyll density spanning from 0.0 (Barren) to 1.0 (Dense Climax Canopy). The colorbar explains biological productivity: pale beige and sand tan indicate barren deserts, rocky plateaus, and snow-covered winter landscapes with dormant plant life (NDVI under 0.15); light olive and yellow-green represent savannas, grasslands, and emerging springtime foliage (NDVI 0.2 to 0.5); deep emerald and dark forest green denote dense chlorophyll-rich canopies (NDVI 0.6 to 0.9) in the Amazon, Congo, and boreal taiga; while turquoise to neon blue oceanic ribbons reveal massive seasonal phytoplankton blooms along coastal nutrient upwellings.",
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
          "audioNarrative": "This seasonal planetary visualization captures Earth's vegetative biosphere pulse, tracking photosynthetically active biomass across land and oceans. The metric measures Normalized Difference Vegetation Index (NDVI) and ocean chlorophyll density spanning from 0.0 (Barren) to 1.0 (Dense Climax Canopy). The colorbar explains biological productivity: pale beige and sand tan indicate barren deserts, rocky plateaus, and snow-covered winter landscapes with dormant plant life (NDVI under 0.15); light olive and yellow-green represent savannas, grasslands, and emerging springtime foliage (NDVI 0.2 to 0.5); deep emerald and dark forest green denote dense chlorophyll-rich canopies (NDVI 0.6 to 0.9) in the Amazon, Congo, and boreal taiga; while turquoise to neon blue oceanic ribbons reveal massive seasonal phytoplankton blooms along coastal nutrient upwellings.",
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
          "audioNarrative": "This seasonal planetary visualization captures Earth's vegetative biosphere pulse, tracking photosynthetically active biomass across land and oceans. The metric measures Normalized Difference Vegetation Index (NDVI) and ocean chlorophyll density spanning from 0.0 (Barren) to 1.0 (Dense Climax Canopy). The colorbar explains biological productivity: pale beige and sand tan indicate barren deserts, rocky plateaus, and snow-covered winter landscapes with dormant plant life (NDVI under 0.15); light olive and yellow-green represent savannas, grasslands, and emerging springtime foliage (NDVI 0.2 to 0.5); deep emerald and dark forest green denote dense chlorophyll-rich canopies (NDVI 0.6 to 0.9) in the Amazon, Congo, and boreal taiga; while turquoise to neon blue oceanic ribbons reveal massive seasonal phytoplankton blooms along coastal nutrient upwellings.",
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
          "audioNarrative": "This seasonal planetary visualization captures Earth's vegetative biosphere pulse, tracking photosynthetically active biomass across land and oceans. The metric measures Normalized Difference Vegetation Index (NDVI) and ocean chlorophyll density spanning from 0.0 (Barren) to 1.0 (Dense Climax Canopy). The colorbar explains biological productivity: pale beige and sand tan indicate barren deserts, rocky plateaus, and snow-covered winter landscapes with dormant plant life (NDVI under 0.15); light olive and yellow-green represent savannas, grasslands, and emerging springtime foliage (NDVI 0.2 to 0.5); deep emerald and dark forest green denote dense chlorophyll-rich canopies (NDVI 0.6 to 0.9) in the Amazon, Congo, and boreal taiga; while turquoise to neon blue oceanic ribbons reveal massive seasonal phytoplankton blooms along coastal nutrient upwellings.",
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
          "audioNarrative": "This seasonal planetary visualization captures Earth's vegetative biosphere pulse, tracking photosynthetically active biomass across land and oceans. The metric measures Normalized Difference Vegetation Index (NDVI) and ocean chlorophyll density spanning from 0.0 (Barren) to 1.0 (Dense Climax Canopy). The colorbar explains biological productivity: pale beige and sand tan indicate barren deserts, rocky plateaus, and snow-covered winter landscapes with dormant plant life (NDVI under 0.15); light olive and yellow-green represent savannas, grasslands, and emerging springtime foliage (NDVI 0.2 to 0.5); deep emerald and dark forest green denote dense chlorophyll-rich canopies (NDVI 0.6 to 0.9) in the Amazon, Congo, and boreal taiga; while turquoise to neon blue oceanic ribbons reveal massive seasonal phytoplankton blooms along coastal nutrient upwellings.",
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
      "description": "This high-resolution atmospheric model visualization illustrates the hemispheric transport and swirling plumes of atmospheric carbon dioxide. The metric measures column CO2 concentration spanning from baseline oceanic air at 400 parts per million up to emission-heavy plumes exceeding 435 parts per million. The colorbar maps carbon concentration: deep blue and purple hues denote clean Southern Hemisphere background air (400 to 408 ppm); cyan and light green represent ambient Northern Hemisphere levels (410 to 418 ppm); bright yellow and orange plumes track seasonal terrestrial respiration and wildfire smoke; while intense red and dark crimson filaments expose dense, concentrated CO2 plumes (exceeding 425 to 435+ ppm) billowing from heavily industrialized manufacturing hubs, thermal power corridors, and intense biomass burns.",
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
          "audioNarrative": "This high-resolution atmospheric model visualization illustrates the hemispheric transport and swirling plumes of atmospheric carbon dioxide. The metric measures column CO2 concentration spanning from baseline oceanic air at 400 parts per million up to emission-heavy plumes exceeding 435 parts per million. The colorbar maps carbon concentration: deep blue and purple hues denote clean Southern Hemisphere background air (400 to 408 ppm); cyan and light green represent ambient Northern Hemisphere levels (410 to 418 ppm); bright yellow and orange plumes track seasonal terrestrial respiration and wildfire smoke; while intense red and dark crimson filaments expose dense, concentrated CO2 plumes (exceeding 425 to 435+ ppm) billowing from heavily industrialized manufacturing hubs, thermal power corridors, and intense biomass burns.",
          "dominantFreqRange": "65 Hz - 350 Hz",
          "intensity": 0.4
        },
        {
          "frameIndex": 1,
          "filename": "co2_swirl_2.png",
          "label": "Spring Drawdown",
          "value": "415.9 ppm",
          "metricName": "Atmospheric CO2 Concentration",
          "audioNarrative": "This high-resolution atmospheric model visualization illustrates the hemispheric transport and swirling plumes of atmospheric carbon dioxide. The metric measures column CO2 concentration spanning from baseline oceanic air at 400 parts per million up to emission-heavy plumes exceeding 435 parts per million. The colorbar maps carbon concentration: deep blue and purple hues denote clean Southern Hemisphere background air (400 to 408 ppm); cyan and light green represent ambient Northern Hemisphere levels (410 to 418 ppm); bright yellow and orange plumes track seasonal terrestrial respiration and wildfire smoke; while intense red and dark crimson filaments expose dense, concentrated CO2 plumes (exceeding 425 to 435+ ppm) billowing from heavily industrialized manufacturing hubs, thermal power corridors, and intense biomass burns.",
          "dominantFreqRange": "65 Hz - 350 Hz",
          "intensity": 0.5301225820673248
        },
        {
          "frameIndex": 2,
          "filename": "co2_swirl_3.png",
          "label": "Summer Photosynthesis Sink",
          "value": "417.9 ppm",
          "metricName": "Atmospheric CO2 Concentration",
          "audioNarrative": "This high-resolution atmospheric model visualization illustrates the hemispheric transport and swirling plumes of atmospheric carbon dioxide. The metric measures column CO2 concentration spanning from baseline oceanic air at 400 parts per million up to emission-heavy plumes exceeding 435 parts per million. The colorbar maps carbon concentration: deep blue and purple hues denote clean Southern Hemisphere background air (400 to 408 ppm); cyan and light green represent ambient Northern Hemisphere levels (410 to 418 ppm); bright yellow and orange plumes track seasonal terrestrial respiration and wildfire smoke; while intense red and dark crimson filaments expose dense, concentrated CO2 plumes (exceeding 425 to 435+ ppm) billowing from heavily industrialized manufacturing hubs, thermal power corridors, and intense biomass burns.",
          "dominantFreqRange": "65 Hz - 350 Hz",
          "intensity": 0.5957747855688069
        },
        {
          "frameIndex": 3,
          "filename": "co2_swirl_4.png",
          "label": "Autumn Respiration",
          "value": "417.8 ppm",
          "metricName": "Atmospheric CO2 Concentration",
          "audioNarrative": "This high-resolution atmospheric model visualization illustrates the hemispheric transport and swirling plumes of atmospheric carbon dioxide. The metric measures column CO2 concentration spanning from baseline oceanic air at 400 parts per million up to emission-heavy plumes exceeding 435 parts per million. The colorbar maps carbon concentration: deep blue and purple hues denote clean Southern Hemisphere background air (400 to 408 ppm); cyan and light green represent ambient Northern Hemisphere levels (410 to 418 ppm); bright yellow and orange plumes track seasonal terrestrial respiration and wildfire smoke; while intense red and dark crimson filaments expose dense, concentrated CO2 plumes (exceeding 425 to 435+ ppm) billowing from heavily industrialized manufacturing hubs, thermal power corridors, and intense biomass burns.",
          "dominantFreqRange": "65 Hz - 350 Hz",
          "intensity": 0.5917600006716555
        },
        {
          "frameIndex": 4,
          "filename": "co2_swirl_5.png",
          "label": "Global Plume Dispersion",
          "value": "417.3 ppm",
          "metricName": "Atmospheric CO2 Concentration",
          "audioNarrative": "This high-resolution atmospheric model visualization illustrates the hemispheric transport and swirling plumes of atmospheric carbon dioxide. The metric measures column CO2 concentration spanning from baseline oceanic air at 400 parts per million up to emission-heavy plumes exceeding 435 parts per million. The colorbar maps carbon concentration: deep blue and purple hues denote clean Southern Hemisphere background air (400 to 408 ppm); cyan and light green represent ambient Northern Hemisphere levels (410 to 418 ppm); bright yellow and orange plumes track seasonal terrestrial respiration and wildfire smoke; while intense red and dark crimson filaments expose dense, concentrated CO2 plumes (exceeding 425 to 435+ ppm) billowing from heavily industrialized manufacturing hubs, thermal power corridors, and intense biomass burns.",
          "dominantFreqRange": "65 Hz - 350 Hz",
          "intensity": 0.5769331253910063
        },
        {
          "frameIndex": 5,
          "filename": "co2_swirl_6.png",
          "label": "Megacity Corridors",
          "value": "418.6 ppm",
          "metricName": "Atmospheric CO2 Concentration",
          "audioNarrative": "This high-resolution atmospheric model visualization illustrates the hemispheric transport and swirling plumes of atmospheric carbon dioxide. The metric measures column CO2 concentration spanning from baseline oceanic air at 400 parts per million up to emission-heavy plumes exceeding 435 parts per million. The colorbar maps carbon concentration: deep blue and purple hues denote clean Southern Hemisphere background air (400 to 408 ppm); cyan and light green represent ambient Northern Hemisphere levels (410 to 418 ppm); bright yellow and orange plumes track seasonal terrestrial respiration and wildfire smoke; while intense red and dark crimson filaments expose dense, concentrated CO2 plumes (exceeding 425 to 435+ ppm) billowing from heavily industrialized manufacturing hubs, thermal power corridors, and intense biomass burns.",
          "dominantFreqRange": "65 Hz - 350 Hz",
          "intensity": 0.6200896437780709
        },
        {
          "frameIndex": 6,
          "filename": "co2_swirl_7.png",
          "label": "Tropical Biomass Flux",
          "value": "422.1 ppm",
          "metricName": "Atmospheric CO2 Concentration",
          "audioNarrative": "This high-resolution atmospheric model visualization illustrates the hemispheric transport and swirling plumes of atmospheric carbon dioxide. The metric measures column CO2 concentration spanning from baseline oceanic air at 400 parts per million up to emission-heavy plumes exceeding 435 parts per million. The colorbar maps carbon concentration: deep blue and purple hues denote clean Southern Hemisphere background air (400 to 408 ppm); cyan and light green represent ambient Northern Hemisphere levels (410 to 418 ppm); bright yellow and orange plumes track seasonal terrestrial respiration and wildfire smoke; while intense red and dark crimson filaments expose dense, concentrated CO2 plumes (exceeding 425 to 435+ ppm) billowing from heavily industrialized manufacturing hubs, thermal power corridors, and intense biomass burns.",
          "dominantFreqRange": "65 Hz - 350 Hz",
          "intensity": 0.7367153751500893
        },
        {
          "frameIndex": 7,
          "filename": "co2_swirl_8.png",
          "label": "Annual Accumulation Peak",
          "value": "426.2 ppm",
          "metricName": "Atmospheric CO2 Concentration",
          "audioNarrative": "This high-resolution atmospheric model visualization illustrates the hemispheric transport and swirling plumes of atmospheric carbon dioxide. The metric measures column CO2 concentration spanning from baseline oceanic air at 400 parts per million up to emission-heavy plumes exceeding 435 parts per million. The colorbar maps carbon concentration: deep blue and purple hues denote clean Southern Hemisphere background air (400 to 408 ppm); cyan and light green represent ambient Northern Hemisphere levels (410 to 418 ppm); bright yellow and orange plumes track seasonal terrestrial respiration and wildfire smoke; while intense red and dark crimson filaments expose dense, concentrated CO2 plumes (exceeding 425 to 435+ ppm) billowing from heavily industrialized manufacturing hubs, thermal power corridors, and intense biomass burns.",
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
      "description": "This physical oceanography visualization maps kinetic surface current velocities across the global ocean conveyor system. The metric measures current velocity ranging from 0.0 m/s in calm oceanic gyres up to rapid boundary jets exceeding 2.5 m/s (nearly 5 knots). The colorbar visualizes fluid speed: dark midnight blue and black represent tranquil, slow-moving deep-sea waters (0.0 to 0.2 m/s); sky blue and cyan swirls trace meandering intermediate ocean currents and mesoscale vortex rings (0.3 to 0.8 m/s); bright yellow indicates accelerating boundary streams (1.0 to 1.5 m/s); and brilliant electric white streaks illuminate high-velocity ocean superhighways\u2014including the Gulf Stream, Kuroshio Current, and Agulhas Retroflection\u2014driving intense thermohaline heat transfer at velocities exceeding 2.0 to 2.5+ m/s.",
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
          "audioNarrative": "This physical oceanography visualization maps kinetic surface current velocities across the global ocean conveyor system. The metric measures current velocity ranging from 0.0 m/s in calm oceanic gyres up to rapid boundary jets exceeding 2.5 m/s (nearly 5 knots). The colorbar visualizes fluid speed: dark midnight blue and black represent tranquil, slow-moving deep-sea waters (0.0 to 0.2 m/s); sky blue and cyan swirls trace meandering intermediate ocean currents and mesoscale vortex rings (0.3 to 0.8 m/s); bright yellow indicates accelerating boundary streams (1.0 to 1.5 m/s); and brilliant electric white streaks illuminate high-velocity ocean superhighways\u2014including the Gulf Stream, Kuroshio Current, and Agulhas Retroflection\u2014driving intense thermohaline heat transfer at velocities exceeding 2.0 to 2.5+ m/s.",
          "dominantFreqRange": "73 Hz - 587 Hz (D2 - D5)",
          "intensity": 0.6
        },
        {
          "frameIndex": 1,
          "filename": "ocean_current_2.png",
          "label": "North Atlantic Deep Water",
          "value": "1.46 m/s",
          "metricName": "Mean Current Velocity",
          "audioNarrative": "This physical oceanography visualization maps kinetic surface current velocities across the global ocean conveyor system. The metric measures current velocity ranging from 0.0 m/s in calm oceanic gyres up to rapid boundary jets exceeding 2.5 m/s (nearly 5 knots). The colorbar visualizes fluid speed: dark midnight blue and black represent tranquil, slow-moving deep-sea waters (0.0 to 0.2 m/s); sky blue and cyan swirls trace meandering intermediate ocean currents and mesoscale vortex rings (0.3 to 0.8 m/s); bright yellow indicates accelerating boundary streams (1.0 to 1.5 m/s); and brilliant electric white streaks illuminate high-velocity ocean superhighways\u2014including the Gulf Stream, Kuroshio Current, and Agulhas Retroflection\u2014driving intense thermohaline heat transfer at velocities exceeding 2.0 to 2.5+ m/s.",
          "dominantFreqRange": "73 Hz - 587 Hz (D2 - D5)",
          "intensity": 0.7288435374475382
        },
        {
          "frameIndex": 2,
          "filename": "ocean_current_3.png",
          "label": "Kuroshio Current Surge",
          "value": "1.59 m/s",
          "metricName": "Mean Current Velocity",
          "audioNarrative": "This physical oceanography visualization maps kinetic surface current velocities across the global ocean conveyor system. The metric measures current velocity ranging from 0.0 m/s in calm oceanic gyres up to rapid boundary jets exceeding 2.5 m/s (nearly 5 knots). The colorbar visualizes fluid speed: dark midnight blue and black represent tranquil, slow-moving deep-sea waters (0.0 to 0.2 m/s); sky blue and cyan swirls trace meandering intermediate ocean currents and mesoscale vortex rings (0.3 to 0.8 m/s); bright yellow indicates accelerating boundary streams (1.0 to 1.5 m/s); and brilliant electric white streaks illuminate high-velocity ocean superhighways\u2014including the Gulf Stream, Kuroshio Current, and Agulhas Retroflection\u2014driving intense thermohaline heat transfer at velocities exceeding 2.0 to 2.5+ m/s.",
          "dominantFreqRange": "73 Hz - 587 Hz (D2 - D5)",
          "intensity": 0.797089945997692
        },
        {
          "frameIndex": 3,
          "filename": "ocean_current_4.png",
          "label": "Antarctic Circumpolar Drift",
          "value": "1.55 m/s",
          "metricName": "Mean Current Velocity",
          "audioNarrative": "This physical oceanography visualization maps kinetic surface current velocities across the global ocean conveyor system. The metric measures current velocity ranging from 0.0 m/s in calm oceanic gyres up to rapid boundary jets exceeding 2.5 m/s (nearly 5 knots). The colorbar visualizes fluid speed: dark midnight blue and black represent tranquil, slow-moving deep-sea waters (0.0 to 0.2 m/s); sky blue and cyan swirls trace meandering intermediate ocean currents and mesoscale vortex rings (0.3 to 0.8 m/s); bright yellow indicates accelerating boundary streams (1.0 to 1.5 m/s); and brilliant electric white streaks illuminate high-velocity ocean superhighways\u2014including the Gulf Stream, Kuroshio Current, and Agulhas Retroflection\u2014driving intense thermohaline heat transfer at velocities exceeding 2.0 to 2.5+ m/s.",
          "dominantFreqRange": "73 Hz - 587 Hz (D2 - D5)",
          "intensity": 0.7726418733297747
        },
        {
          "frameIndex": 4,
          "filename": "ocean_current_5.png",
          "label": "Agulhas Retroflection",
          "value": "1.33 m/s",
          "metricName": "Mean Current Velocity",
          "audioNarrative": "This physical oceanography visualization maps kinetic surface current velocities across the global ocean conveyor system. The metric measures current velocity ranging from 0.0 m/s in calm oceanic gyres up to rapid boundary jets exceeding 2.5 m/s (nearly 5 knots). The colorbar visualizes fluid speed: dark midnight blue and black represent tranquil, slow-moving deep-sea waters (0.0 to 0.2 m/s); sky blue and cyan swirls trace meandering intermediate ocean currents and mesoscale vortex rings (0.3 to 0.8 m/s); bright yellow indicates accelerating boundary streams (1.0 to 1.5 m/s); and brilliant electric white streaks illuminate high-velocity ocean superhighways\u2014including the Gulf Stream, Kuroshio Current, and Agulhas Retroflection\u2014driving intense thermohaline heat transfer at velocities exceeding 2.0 to 2.5+ m/s.",
          "dominantFreqRange": "73 Hz - 587 Hz (D2 - D5)",
          "intensity": 0.666997630031181
        },
        {
          "frameIndex": 5,
          "filename": "ocean_current_6.png",
          "label": "Equatorial Upwelling",
          "value": "1.06 m/s",
          "metricName": "Mean Current Velocity",
          "audioNarrative": "This physical oceanography visualization maps kinetic surface current velocities across the global ocean conveyor system. The metric measures current velocity ranging from 0.0 m/s in calm oceanic gyres up to rapid boundary jets exceeding 2.5 m/s (nearly 5 knots). The colorbar visualizes fluid speed: dark midnight blue and black represent tranquil, slow-moving deep-sea waters (0.0 to 0.2 m/s); sky blue and cyan swirls trace meandering intermediate ocean currents and mesoscale vortex rings (0.3 to 0.8 m/s); bright yellow indicates accelerating boundary streams (1.0 to 1.5 m/s); and brilliant electric white streaks illuminate high-velocity ocean superhighways\u2014including the Gulf Stream, Kuroshio Current, and Agulhas Retroflection\u2014driving intense thermohaline heat transfer at velocities exceeding 2.0 to 2.5+ m/s.",
          "dominantFreqRange": "73 Hz - 587 Hz (D2 - D5)",
          "intensity": 0.529843354462076
        },
        {
          "frameIndex": 6,
          "filename": "ocean_current_7.png",
          "label": "Pacific Gyre Circulation",
          "value": "0.85 m/s",
          "metricName": "Mean Current Velocity",
          "audioNarrative": "This physical oceanography visualization maps kinetic surface current velocities across the global ocean conveyor system. The metric measures current velocity ranging from 0.0 m/s in calm oceanic gyres up to rapid boundary jets exceeding 2.5 m/s (nearly 5 knots). The colorbar visualizes fluid speed: dark midnight blue and black represent tranquil, slow-moving deep-sea waters (0.0 to 0.2 m/s); sky blue and cyan swirls trace meandering intermediate ocean currents and mesoscale vortex rings (0.3 to 0.8 m/s); bright yellow indicates accelerating boundary streams (1.0 to 1.5 m/s); and brilliant electric white streaks illuminate high-velocity ocean superhighways\u2014including the Gulf Stream, Kuroshio Current, and Agulhas Retroflection\u2014driving intense thermohaline heat transfer at velocities exceeding 2.0 to 2.5+ m/s.",
          "dominantFreqRange": "73 Hz - 587 Hz (D2 - D5)",
          "intensity": 0.4256848455172824
        },
        {
          "frameIndex": 7,
          "filename": "ocean_current_8.png",
          "label": "Thermohaline Conveyor Cycle",
          "value": "0.81 m/s",
          "metricName": "Mean Current Velocity",
          "audioNarrative": "This physical oceanography visualization maps kinetic surface current velocities across the global ocean conveyor system. The metric measures current velocity ranging from 0.0 m/s in calm oceanic gyres up to rapid boundary jets exceeding 2.5 m/s (nearly 5 knots). The colorbar visualizes fluid speed: dark midnight blue and black represent tranquil, slow-moving deep-sea waters (0.0 to 0.2 m/s); sky blue and cyan swirls trace meandering intermediate ocean currents and mesoscale vortex rings (0.3 to 0.8 m/s); bright yellow indicates accelerating boundary streams (1.0 to 1.5 m/s); and brilliant electric white streaks illuminate high-velocity ocean superhighways\u2014including the Gulf Stream, Kuroshio Current, and Agulhas Retroflection\u2014driving intense thermohaline heat transfer at velocities exceeding 2.0 to 2.5+ m/s.",
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
      "description": "This polar observation dataset chronicles the multi-decadal contraction of the Arctic summer sea ice minimum extent. The metric spans from the historic 1979 baseline of 7.8 million square kilometers down to modern record minimums under 3.4 million square kilometers. The visual palette explains ice age, thickness, and ocean exposure: bright solid white shields depict thick, multi-year perennial pack ice exceeding 3 meters in thickness that survives summer melt cycles; translucent light cyan and pale sky blue fringes mark thin, first-year marginal drift ice vulnerable to rapid thaw; while the encroaching dark navy ocean highlights ice-free Arctic waters that absorb solar heat and accelerate polar amplification.",
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
          "audioNarrative": "This polar observation dataset chronicles the multi-decadal contraction of the Arctic summer sea ice minimum extent. The metric spans from the historic 1979 baseline of 7.8 million square kilometers down to modern record minimums under 3.4 million square kilometers. The visual palette explains ice age, thickness, and ocean exposure: bright solid white shields depict thick, multi-year perennial pack ice exceeding 3 meters in thickness that survives summer melt cycles; translucent light cyan and pale sky blue fringes mark thin, first-year marginal drift ice vulnerable to rapid thaw; while the encroaching dark navy ocean highlights ice-free Arctic waters that absorb solar heat and accelerate polar amplification.",
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
          "audioNarrative": "This polar observation dataset chronicles the multi-decadal contraction of the Arctic summer sea ice minimum extent. The metric spans from the historic 1979 baseline of 7.8 million square kilometers down to modern record minimums under 3.4 million square kilometers. The visual palette explains ice age, thickness, and ocean exposure: bright solid white shields depict thick, multi-year perennial pack ice exceeding 3 meters in thickness that survives summer melt cycles; translucent light cyan and pale sky blue fringes mark thin, first-year marginal drift ice vulnerable to rapid thaw; while the encroaching dark navy ocean highlights ice-free Arctic waters that absorb solar heat and accelerate polar amplification.",
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
          "audioNarrative": "This polar observation dataset chronicles the multi-decadal contraction of the Arctic summer sea ice minimum extent. The metric spans from the historic 1979 baseline of 7.8 million square kilometers down to modern record minimums under 3.4 million square kilometers. The visual palette explains ice age, thickness, and ocean exposure: bright solid white shields depict thick, multi-year perennial pack ice exceeding 3 meters in thickness that survives summer melt cycles; translucent light cyan and pale sky blue fringes mark thin, first-year marginal drift ice vulnerable to rapid thaw; while the encroaching dark navy ocean highlights ice-free Arctic waters that absorb solar heat and accelerate polar amplification.",
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
          "audioNarrative": "This polar observation dataset chronicles the multi-decadal contraction of the Arctic summer sea ice minimum extent. The metric spans from the historic 1979 baseline of 7.8 million square kilometers down to modern record minimums under 3.4 million square kilometers. The visual palette explains ice age, thickness, and ocean exposure: bright solid white shields depict thick, multi-year perennial pack ice exceeding 3 meters in thickness that survives summer melt cycles; translucent light cyan and pale sky blue fringes mark thin, first-year marginal drift ice vulnerable to rapid thaw; while the encroaching dark navy ocean highlights ice-free Arctic waters that absorb solar heat and accelerate polar amplification.",
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
          "audioNarrative": "This polar observation dataset chronicles the multi-decadal contraction of the Arctic summer sea ice minimum extent. The metric spans from the historic 1979 baseline of 7.8 million square kilometers down to modern record minimums under 3.4 million square kilometers. The visual palette explains ice age, thickness, and ocean exposure: bright solid white shields depict thick, multi-year perennial pack ice exceeding 3 meters in thickness that survives summer melt cycles; translucent light cyan and pale sky blue fringes mark thin, first-year marginal drift ice vulnerable to rapid thaw; while the encroaching dark navy ocean highlights ice-free Arctic waters that absorb solar heat and accelerate polar amplification.",
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
          "audioNarrative": "This polar observation dataset chronicles the multi-decadal contraction of the Arctic summer sea ice minimum extent. The metric spans from the historic 1979 baseline of 7.8 million square kilometers down to modern record minimums under 3.4 million square kilometers. The visual palette explains ice age, thickness, and ocean exposure: bright solid white shields depict thick, multi-year perennial pack ice exceeding 3 meters in thickness that survives summer melt cycles; translucent light cyan and pale sky blue fringes mark thin, first-year marginal drift ice vulnerable to rapid thaw; while the encroaching dark navy ocean highlights ice-free Arctic waters that absorb solar heat and accelerate polar amplification.",
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
          "audioNarrative": "This polar observation dataset chronicles the multi-decadal contraction of the Arctic summer sea ice minimum extent. The metric spans from the historic 1979 baseline of 7.8 million square kilometers down to modern record minimums under 3.4 million square kilometers. The visual palette explains ice age, thickness, and ocean exposure: bright solid white shields depict thick, multi-year perennial pack ice exceeding 3 meters in thickness that survives summer melt cycles; translucent light cyan and pale sky blue fringes mark thin, first-year marginal drift ice vulnerable to rapid thaw; while the encroaching dark navy ocean highlights ice-free Arctic waters that absorb solar heat and accelerate polar amplification.",
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
          "audioNarrative": "This polar observation dataset chronicles the multi-decadal contraction of the Arctic summer sea ice minimum extent. The metric spans from the historic 1979 baseline of 7.8 million square kilometers down to modern record minimums under 3.4 million square kilometers. The visual palette explains ice age, thickness, and ocean exposure: bright solid white shields depict thick, multi-year perennial pack ice exceeding 3 meters in thickness that survives summer melt cycles; translucent light cyan and pale sky blue fringes mark thin, first-year marginal drift ice vulnerable to rapid thaw; while the encroaching dark navy ocean highlights ice-free Arctic waters that absorb solar heat and accelerate polar amplification.",
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
      "description": "This global environmental monitoring visualization tracks active biomass fires and airborne aerosol smoke plumes. The metric captures thermal anomaly radiant fire detections alongside Aerosol Optical Depth (AOD) ranging from 0.0 (Pristine Atmosphere) to 5.0+ (Hazardous Choking Wildfire Smoke). The color palette highlights fire dynamics: bright red and fiery orange hotspots pinpoint satellite infrared thermal detections of active wildfire fronts and crop burning; translucent gray, amber, and golden haze layers trace expansive smoke plumes laden with carbon monoxide and fine particulate matter (PM2.5) drifting thousands of kilometers downwind; while dark blue and clear background areas indicate clean, unaffected tropospheric air.",
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
          "audioNarrative": "This global environmental monitoring visualization tracks active biomass fires and airborne aerosol smoke plumes. The metric captures thermal anomaly radiant fire detections alongside Aerosol Optical Depth (AOD) ranging from 0.0 (Pristine Atmosphere) to 5.0+ (Hazardous Choking Wildfire Smoke). The color palette highlights fire dynamics: bright red and fiery orange hotspots pinpoint satellite infrared thermal detections of active wildfire fronts and crop burning; translucent gray, amber, and golden haze layers trace expansive smoke plumes laden with carbon monoxide and fine particulate matter (PM2.5) drifting thousands of kilometers downwind; while dark blue and clear background areas indicate clean, unaffected tropospheric air.",
          "dominantFreqRange": "82 Hz - 1800 Hz",
          "intensity": 0.3564
        },
        {
          "frameIndex": 1,
          "filename": "wildfire_firms_2.png",
          "label": "Amazon Biomass Burning",
          "value": "17,433 Active Thermal Detections",
          "metricName": "Global Thermal Hotspots",
          "audioNarrative": "This global environmental monitoring visualization tracks active biomass fires and airborne aerosol smoke plumes. The metric captures thermal anomaly radiant fire detections alongside Aerosol Optical Depth (AOD) ranging from 0.0 (Pristine Atmosphere) to 5.0+ (Hazardous Choking Wildfire Smoke). The color palette highlights fire dynamics: bright red and fiery orange hotspots pinpoint satellite infrared thermal detections of active wildfire fronts and crop burning; translucent gray, amber, and golden haze layers trace expansive smoke plumes laden with carbon monoxide and fine particulate matter (PM2.5) drifting thousands of kilometers downwind; while dark blue and clear background areas indicate clean, unaffected tropospheric air.",
          "dominantFreqRange": "82 Hz - 1800 Hz",
          "intensity": 0.435825
        },
        {
          "frameIndex": 2,
          "filename": "wildfire_firms_3.png",
          "label": "Australian Black Summer Pulse",
          "value": "20,737 Active Thermal Detections",
          "metricName": "Global Thermal Hotspots",
          "audioNarrative": "This global environmental monitoring visualization tracks active biomass fires and airborne aerosol smoke plumes. The metric captures thermal anomaly radiant fire detections alongside Aerosol Optical Depth (AOD) ranging from 0.0 (Pristine Atmosphere) to 5.0+ (Hazardous Choking Wildfire Smoke). The color palette highlights fire dynamics: bright red and fiery orange hotspots pinpoint satellite infrared thermal detections of active wildfire fronts and crop burning; translucent gray, amber, and golden haze layers trace expansive smoke plumes laden with carbon monoxide and fine particulate matter (PM2.5) drifting thousands of kilometers downwind; while dark blue and clear background areas indicate clean, unaffected tropospheric air.",
          "dominantFreqRange": "82 Hz - 1800 Hz",
          "intensity": 0.518425
        },
        {
          "frameIndex": 3,
          "filename": "wildfire_firms_4.png",
          "label": "Sub-Saharan Savanna Burns",
          "value": "24,355 Active Thermal Detections",
          "metricName": "Global Thermal Hotspots",
          "audioNarrative": "This global environmental monitoring visualization tracks active biomass fires and airborne aerosol smoke plumes. The metric captures thermal anomaly radiant fire detections alongside Aerosol Optical Depth (AOD) ranging from 0.0 (Pristine Atmosphere) to 5.0+ (Hazardous Choking Wildfire Smoke). The color palette highlights fire dynamics: bright red and fiery orange hotspots pinpoint satellite infrared thermal detections of active wildfire fronts and crop burning; translucent gray, amber, and golden haze layers trace expansive smoke plumes laden with carbon monoxide and fine particulate matter (PM2.5) drifting thousands of kilometers downwind; while dark blue and clear background areas indicate clean, unaffected tropospheric air.",
          "dominantFreqRange": "82 Hz - 1800 Hz",
          "intensity": 0.608875
        },
        {
          "frameIndex": 4,
          "filename": "wildfire_firms_5.png",
          "label": "Western US Wildfire Surge",
          "value": "27,111 Active Thermal Detections",
          "metricName": "Global Thermal Hotspots",
          "audioNarrative": "This global environmental monitoring visualization tracks active biomass fires and airborne aerosol smoke plumes. The metric captures thermal anomaly radiant fire detections alongside Aerosol Optical Depth (AOD) ranging from 0.0 (Pristine Atmosphere) to 5.0+ (Hazardous Choking Wildfire Smoke). The color palette highlights fire dynamics: bright red and fiery orange hotspots pinpoint satellite infrared thermal detections of active wildfire fronts and crop burning; translucent gray, amber, and golden haze layers trace expansive smoke plumes laden with carbon monoxide and fine particulate matter (PM2.5) drifting thousands of kilometers downwind; while dark blue and clear background areas indicate clean, unaffected tropospheric air.",
          "dominantFreqRange": "82 Hz - 1800 Hz",
          "intensity": 0.677775
        },
        {
          "frameIndex": 5,
          "filename": "wildfire_firms_6.png",
          "label": "Mediterranean Heat Dome Fires",
          "value": "30,155 Active Thermal Detections",
          "metricName": "Global Thermal Hotspots",
          "audioNarrative": "This global environmental monitoring visualization tracks active biomass fires and airborne aerosol smoke plumes. The metric captures thermal anomaly radiant fire detections alongside Aerosol Optical Depth (AOD) ranging from 0.0 (Pristine Atmosphere) to 5.0+ (Hazardous Choking Wildfire Smoke). The color palette highlights fire dynamics: bright red and fiery orange hotspots pinpoint satellite infrared thermal detections of active wildfire fronts and crop burning; translucent gray, amber, and golden haze layers trace expansive smoke plumes laden with carbon monoxide and fine particulate matter (PM2.5) drifting thousands of kilometers downwind; while dark blue and clear background areas indicate clean, unaffected tropospheric air.",
          "dominantFreqRange": "82 Hz - 1800 Hz",
          "intensity": 0.753875
        },
        {
          "frameIndex": 6,
          "filename": "wildfire_firms_7.png",
          "label": "Siberian Megafires",
          "value": "33,408 Active Thermal Detections",
          "metricName": "Global Thermal Hotspots",
          "audioNarrative": "This global environmental monitoring visualization tracks active biomass fires and airborne aerosol smoke plumes. The metric captures thermal anomaly radiant fire detections alongside Aerosol Optical Depth (AOD) ranging from 0.0 (Pristine Atmosphere) to 5.0+ (Hazardous Choking Wildfire Smoke). The color palette highlights fire dynamics: bright red and fiery orange hotspots pinpoint satellite infrared thermal detections of active wildfire fronts and crop burning; translucent gray, amber, and golden haze layers trace expansive smoke plumes laden with carbon monoxide and fine particulate matter (PM2.5) drifting thousands of kilometers downwind; while dark blue and clear background areas indicate clean, unaffected tropospheric air.",
          "dominantFreqRange": "82 Hz - 1800 Hz",
          "intensity": 0.8352
        },
        {
          "frameIndex": 7,
          "filename": "wildfire_firms_8.png",
          "label": "Global Aerosol Smoke Transport",
          "value": "36,619 Active Thermal Detections",
          "metricName": "Global Thermal Hotspots",
          "audioNarrative": "This global environmental monitoring visualization tracks active biomass fires and airborne aerosol smoke plumes. The metric captures thermal anomaly radiant fire detections alongside Aerosol Optical Depth (AOD) ranging from 0.0 (Pristine Atmosphere) to 5.0+ (Hazardous Choking Wildfire Smoke). The color palette highlights fire dynamics: bright red and fiery orange hotspots pinpoint satellite infrared thermal detections of active wildfire fronts and crop burning; translucent gray, amber, and golden haze layers trace expansive smoke plumes laden with carbon monoxide and fine particulate matter (PM2.5) drifting thousands of kilometers downwind; while dark blue and clear background areas indicate clean, unaffected tropospheric air.",
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
      "description": "This nocturnal remote sensing visualization captures artificial nighttime light emissions, mapping human electrification, infrastructure expansion, and urban settlement. The metric measures radiance ranging from 0 nanowatts per square centimeter per steradian in wild uninhabited areas up to over 100 in intense urban metropolitan centers. The colorbar maps luminosity: total pitch black represents dark oceans, dense rainforests, and uninhabited polar tundra with zero artificial lighting; warm golden amber and soft yellow clusters mark suburban networks, agricultural communities, and illuminated transport highways; while brilliant white-hot nodes delineate densely populated megacity urban cores, commercial skylines, and industrial complexes radiating peak nocturnal light intensity.",
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
          "audioNarrative": "This nocturnal remote sensing visualization captures artificial nighttime light emissions, mapping human electrification, infrastructure expansion, and urban settlement. The metric measures radiance ranging from 0 nanowatts per square centimeter per steradian in wild uninhabited areas up to over 100 in intense urban metropolitan centers. The colorbar maps luminosity: total pitch black represents dark oceans, dense rainforests, and uninhabited polar tundra with zero artificial lighting; warm golden amber and soft yellow clusters mark suburban networks, agricultural communities, and illuminated transport highways; while brilliant white-hot nodes delineate densely populated megacity urban cores, commercial skylines, and industrial complexes radiating peak nocturnal light intensity.",
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
          "audioNarrative": "This nocturnal remote sensing visualization captures artificial nighttime light emissions, mapping human electrification, infrastructure expansion, and urban settlement. The metric measures radiance ranging from 0 nanowatts per square centimeter per steradian in wild uninhabited areas up to over 100 in intense urban metropolitan centers. The colorbar maps luminosity: total pitch black represents dark oceans, dense rainforests, and uninhabited polar tundra with zero artificial lighting; warm golden amber and soft yellow clusters mark suburban networks, agricultural communities, and illuminated transport highways; while brilliant white-hot nodes delineate densely populated megacity urban cores, commercial skylines, and industrial complexes radiating peak nocturnal light intensity.",
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
          "audioNarrative": "This nocturnal remote sensing visualization captures artificial nighttime light emissions, mapping human electrification, infrastructure expansion, and urban settlement. The metric measures radiance ranging from 0 nanowatts per square centimeter per steradian in wild uninhabited areas up to over 100 in intense urban metropolitan centers. The colorbar maps luminosity: total pitch black represents dark oceans, dense rainforests, and uninhabited polar tundra with zero artificial lighting; warm golden amber and soft yellow clusters mark suburban networks, agricultural communities, and illuminated transport highways; while brilliant white-hot nodes delineate densely populated megacity urban cores, commercial skylines, and industrial complexes radiating peak nocturnal light intensity.",
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
          "audioNarrative": "This nocturnal remote sensing visualization captures artificial nighttime light emissions, mapping human electrification, infrastructure expansion, and urban settlement. The metric measures radiance ranging from 0 nanowatts per square centimeter per steradian in wild uninhabited areas up to over 100 in intense urban metropolitan centers. The colorbar maps luminosity: total pitch black represents dark oceans, dense rainforests, and uninhabited polar tundra with zero artificial lighting; warm golden amber and soft yellow clusters mark suburban networks, agricultural communities, and illuminated transport highways; while brilliant white-hot nodes delineate densely populated megacity urban cores, commercial skylines, and industrial complexes radiating peak nocturnal light intensity.",
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
          "audioNarrative": "This nocturnal remote sensing visualization captures artificial nighttime light emissions, mapping human electrification, infrastructure expansion, and urban settlement. The metric measures radiance ranging from 0 nanowatts per square centimeter per steradian in wild uninhabited areas up to over 100 in intense urban metropolitan centers. The colorbar maps luminosity: total pitch black represents dark oceans, dense rainforests, and uninhabited polar tundra with zero artificial lighting; warm golden amber and soft yellow clusters mark suburban networks, agricultural communities, and illuminated transport highways; while brilliant white-hot nodes delineate densely populated megacity urban cores, commercial skylines, and industrial complexes radiating peak nocturnal light intensity.",
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
          "audioNarrative": "This nocturnal remote sensing visualization captures artificial nighttime light emissions, mapping human electrification, infrastructure expansion, and urban settlement. The metric measures radiance ranging from 0 nanowatts per square centimeter per steradian in wild uninhabited areas up to over 100 in intense urban metropolitan centers. The colorbar maps luminosity: total pitch black represents dark oceans, dense rainforests, and uninhabited polar tundra with zero artificial lighting; warm golden amber and soft yellow clusters mark suburban networks, agricultural communities, and illuminated transport highways; while brilliant white-hot nodes delineate densely populated megacity urban cores, commercial skylines, and industrial complexes radiating peak nocturnal light intensity.",
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
          "audioNarrative": "This nocturnal remote sensing visualization captures artificial nighttime light emissions, mapping human electrification, infrastructure expansion, and urban settlement. The metric measures radiance ranging from 0 nanowatts per square centimeter per steradian in wild uninhabited areas up to over 100 in intense urban metropolitan centers. The colorbar maps luminosity: total pitch black represents dark oceans, dense rainforests, and uninhabited polar tundra with zero artificial lighting; warm golden amber and soft yellow clusters mark suburban networks, agricultural communities, and illuminated transport highways; while brilliant white-hot nodes delineate densely populated megacity urban cores, commercial skylines, and industrial complexes radiating peak nocturnal light intensity.",
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
          "audioNarrative": "This nocturnal remote sensing visualization captures artificial nighttime light emissions, mapping human electrification, infrastructure expansion, and urban settlement. The metric measures radiance ranging from 0 nanowatts per square centimeter per steradian in wild uninhabited areas up to over 100 in intense urban metropolitan centers. The colorbar maps luminosity: total pitch black represents dark oceans, dense rainforests, and uninhabited polar tundra with zero artificial lighting; warm golden amber and soft yellow clusters mark suburban networks, agricultural communities, and illuminated transport highways; while brilliant white-hot nodes delineate densely populated megacity urban cores, commercial skylines, and industrial complexes radiating peak nocturnal light intensity.",
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
      "description": "This spaceborne electrodynamic visualization compiles optical lightning transient events detected by the Lightning Imaging Sensor aboard the International Space Station. The metric measures lightning flash density spanning from 1 flash per square kilometer per year in quiet regions up to over 100 flashes in hyperactive lightning chimneys. The colorbar explains electrical storm intensity: deep blue and dark purple clouds represent electrically quiet storm formations; vibrant green and cyan sparks mark isolated cloud-to-ground and intra-cloud lightning discharges; while intense electric magenta, brilliant yellow, and blazing white flashes reveal global lightning hotspots\u2014such as Lake Maracaibo and the Congo Basin\u2014generating violent convective storms with continuous lightning super-bursts.",
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
          "audioNarrative": "This spaceborne electrodynamic visualization compiles optical lightning transient events detected by the Lightning Imaging Sensor aboard the International Space Station. The metric measures lightning flash density spanning from 1 flash per square kilometer per year in quiet regions up to over 100 flashes in hyperactive lightning chimneys. The colorbar explains electrical storm intensity: deep blue and dark purple clouds represent electrically quiet storm formations; vibrant green and cyan sparks mark isolated cloud-to-ground and intra-cloud lightning discharges; while intense electric magenta, brilliant yellow, and blazing white flashes reveal global lightning hotspots\u2014such as Lake Maracaibo and the Congo Basin\u2014generating violent convective storms with continuous lightning super-bursts.",
          "dominantFreqRange": "120 Hz - 4000 Hz",
          "intensity": 0.335
        },
        {
          "frameIndex": 1,
          "filename": "iss_lightning_2.png",
          "label": "Congo Basin Midnight Peak",
          "value": "3,294 Spaceborne Detections",
          "metricName": "ISS Optical Transient Flashes",
          "audioNarrative": "This spaceborne electrodynamic visualization compiles optical lightning transient events detected by the Lightning Imaging Sensor aboard the International Space Station. The metric measures lightning flash density spanning from 1 flash per square kilometer per year in quiet regions up to over 100 flashes in hyperactive lightning chimneys. The colorbar explains electrical storm intensity: deep blue and dark purple clouds represent electrically quiet storm formations; vibrant green and cyan sparks mark isolated cloud-to-ground and intra-cloud lightning discharges; while intense electric magenta, brilliant yellow, and blazing white flashes reveal global lightning hotspots\u2014such as Lake Maracaibo and the Congo Basin\u2014generating violent convective storms with continuous lightning super-bursts.",
          "dominantFreqRange": "120 Hz - 4000 Hz",
          "intensity": 0.4575
        },
        {
          "frameIndex": 2,
          "filename": "iss_lightning_3.png",
          "label": "Amazon Flash Complex",
          "value": "3,672 Spaceborne Detections",
          "metricName": "ISS Optical Transient Flashes",
          "audioNarrative": "This spaceborne electrodynamic visualization compiles optical lightning transient events detected by the Lightning Imaging Sensor aboard the International Space Station. The metric measures lightning flash density spanning from 1 flash per square kilometer per year in quiet regions up to over 100 flashes in hyperactive lightning chimneys. The colorbar explains electrical storm intensity: deep blue and dark purple clouds represent electrically quiet storm formations; vibrant green and cyan sparks mark isolated cloud-to-ground and intra-cloud lightning discharges; while intense electric magenta, brilliant yellow, and blazing white flashes reveal global lightning hotspots\u2014such as Lake Maracaibo and the Congo Basin\u2014generating violent convective storms with continuous lightning super-bursts.",
          "dominantFreqRange": "120 Hz - 4000 Hz",
          "intensity": 0.51
        },
        {
          "frameIndex": 3,
          "filename": "iss_lightning_4.png",
          "label": "Florida Storm Corridor",
          "value": "4,626 Spaceborne Detections",
          "metricName": "ISS Optical Transient Flashes",
          "audioNarrative": "This spaceborne electrodynamic visualization compiles optical lightning transient events detected by the Lightning Imaging Sensor aboard the International Space Station. The metric measures lightning flash density spanning from 1 flash per square kilometer per year in quiet regions up to over 100 flashes in hyperactive lightning chimneys. The colorbar explains electrical storm intensity: deep blue and dark purple clouds represent electrically quiet storm formations; vibrant green and cyan sparks mark isolated cloud-to-ground and intra-cloud lightning discharges; while intense electric magenta, brilliant yellow, and blazing white flashes reveal global lightning hotspots\u2014such as Lake Maracaibo and the Congo Basin\u2014generating violent convective storms with continuous lightning super-bursts.",
          "dominantFreqRange": "120 Hz - 4000 Hz",
          "intensity": 0.6425
        },
        {
          "frameIndex": 4,
          "filename": "iss_lightning_5.png",
          "label": "Indonesian Archipelago Cluster",
          "value": "5,400 Spaceborne Detections",
          "metricName": "ISS Optical Transient Flashes",
          "audioNarrative": "This spaceborne electrodynamic visualization compiles optical lightning transient events detected by the Lightning Imaging Sensor aboard the International Space Station. The metric measures lightning flash density spanning from 1 flash per square kilometer per year in quiet regions up to over 100 flashes in hyperactive lightning chimneys. The colorbar explains electrical storm intensity: deep blue and dark purple clouds represent electrically quiet storm formations; vibrant green and cyan sparks mark isolated cloud-to-ground and intra-cloud lightning discharges; while intense electric magenta, brilliant yellow, and blazing white flashes reveal global lightning hotspots\u2014such as Lake Maracaibo and the Congo Basin\u2014generating violent convective storms with continuous lightning super-bursts.",
          "dominantFreqRange": "120 Hz - 4000 Hz",
          "intensity": 0.75
        },
        {
          "frameIndex": 5,
          "filename": "iss_lightning_6.png",
          "label": "Midlatitude Squall Line",
          "value": "5,994 Spaceborne Detections",
          "metricName": "ISS Optical Transient Flashes",
          "audioNarrative": "This spaceborne electrodynamic visualization compiles optical lightning transient events detected by the Lightning Imaging Sensor aboard the International Space Station. The metric measures lightning flash density spanning from 1 flash per square kilometer per year in quiet regions up to over 100 flashes in hyperactive lightning chimneys. The colorbar explains electrical storm intensity: deep blue and dark purple clouds represent electrically quiet storm formations; vibrant green and cyan sparks mark isolated cloud-to-ground and intra-cloud lightning discharges; while intense electric magenta, brilliant yellow, and blazing white flashes reveal global lightning hotspots\u2014such as Lake Maracaibo and the Congo Basin\u2014generating violent convective storms with continuous lightning super-bursts.",
          "dominantFreqRange": "120 Hz - 4000 Hz",
          "intensity": 0.8325
        },
        {
          "frameIndex": 6,
          "filename": "iss_lightning_7.png",
          "label": "Tropical Convergence Burst",
          "value": "6,516 Spaceborne Detections",
          "metricName": "ISS Optical Transient Flashes",
          "audioNarrative": "This spaceborne electrodynamic visualization compiles optical lightning transient events detected by the Lightning Imaging Sensor aboard the International Space Station. The metric measures lightning flash density spanning from 1 flash per square kilometer per year in quiet regions up to over 100 flashes in hyperactive lightning chimneys. The colorbar explains electrical storm intensity: deep blue and dark purple clouds represent electrically quiet storm formations; vibrant green and cyan sparks mark isolated cloud-to-ground and intra-cloud lightning discharges; while intense electric magenta, brilliant yellow, and blazing white flashes reveal global lightning hotspots\u2014such as Lake Maracaibo and the Congo Basin\u2014generating violent convective storms with continuous lightning super-bursts.",
          "dominantFreqRange": "120 Hz - 4000 Hz",
          "intensity": 0.905
        },
        {
          "frameIndex": 7,
          "filename": "iss_lightning_8.png",
          "label": "Global Flash Superposition",
          "value": "6,876 Spaceborne Detections",
          "metricName": "ISS Optical Transient Flashes",
          "audioNarrative": "This spaceborne electrodynamic visualization compiles optical lightning transient events detected by the Lightning Imaging Sensor aboard the International Space Station. The metric measures lightning flash density spanning from 1 flash per square kilometer per year in quiet regions up to over 100 flashes in hyperactive lightning chimneys. The colorbar explains electrical storm intensity: deep blue and dark purple clouds represent electrically quiet storm formations; vibrant green and cyan sparks mark isolated cloud-to-ground and intra-cloud lightning discharges; while intense electric magenta, brilliant yellow, and blazing white flashes reveal global lightning hotspots\u2014such as Lake Maracaibo and the Congo Basin\u2014generating violent convective storms with continuous lightning super-bursts.",
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
      "description": "This atmospheric visualization maps surface wind velocity sampled at 10 meters above Earth, illustrating planetary wind streams, cyclonic storms, and frontal boundaries. The metric measures wind speed spanning from 0 m/s (Calm) up to 35+ m/s (Severe Gale and Hurricane-force gusts, exceeding 70 knots). The colorbar interprets aerodynamic intensity: dark indigo and navy blue represent calm to light air (0 to 5 m/s) typically sheltered over landmasses; cyan and emerald green indicate moderate to fresh breezes (6 to 14 m/s) driving oceanic trade winds; bright yellow and amber orange mark strong, near-gale wind corridors (15 to 24 m/s); and vibrant magenta, violet, and bright white streaks highlight dangerous storm tracks, oceanic jet streams, and roaring circumpolar westerly gale belts surpassing 25 to 35+ m/s.",
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
          "audioNarrative": "This atmospheric visualization maps surface wind velocity sampled at 10 meters above Earth, illustrating planetary wind streams, cyclonic storms, and frontal boundaries. The metric measures wind speed spanning from 0 m/s (Calm) up to 35+ m/s (Severe Gale and Hurricane-force gusts, exceeding 70 knots). The colorbar interprets aerodynamic intensity: dark indigo and navy blue represent calm to light air (0 to 5 m/s) typically sheltered over landmasses; cyan and emerald green indicate moderate to fresh breezes (6 to 14 m/s) driving oceanic trade winds; bright yellow and amber orange mark strong, near-gale wind corridors (15 to 24 m/s); and vibrant magenta, violet, and bright white streaks highlight dangerous storm tracks, oceanic jet streams, and roaring circumpolar westerly gale belts surpassing 25 to 35+ m/s.",
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
      "description": "This satellite imagery overlays active precipitation rates atop atmospheric cloud optical thickness, pinpointing severe convective storm systems and monsoon troughs. The metric measures precipitation intensity spanning from light drizzle at 0.1 mm/hr up to flash flood cloudbursts exceeding 30 mm/hr. The colorbar maps rainfall severity against cloud cover: the monochrome white and translucent gray background shows cloud optical depth, where brighter white indicates denser cloud cover; cool aqua and soft green show light, steady rainfall (0.1 to 2.5 mm/hr); bright yellow and orange indicate moderate to heavy convective downpours (5 to 15 mm/hr); while intense red, crimson, and deep violet cores demarcate severe storm cells, tropical cyclones, and deluge rain bands exceeding 20 to 30+ mm/hr capable of triggering catastrophic flash flooding.",
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
          "audioNarrative": "This satellite imagery overlays active precipitation rates atop atmospheric cloud optical thickness, pinpointing severe convective storm systems and monsoon troughs. The metric measures precipitation intensity spanning from light drizzle at 0.1 mm/hr up to flash flood cloudbursts exceeding 30 mm/hr. The colorbar maps rainfall severity against cloud cover: the monochrome white and translucent gray background shows cloud optical depth, where brighter white indicates denser cloud cover; cool aqua and soft green show light, steady rainfall (0.1 to 2.5 mm/hr); bright yellow and orange indicate moderate to heavy convective downpours (5 to 15 mm/hr); while intense red, crimson, and deep violet cores demarcate severe storm cells, tropical cyclones, and deluge rain bands exceeding 20 to 30+ mm/hr capable of triggering catastrophic flash flooding.",
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
      "description": "This atmospheric moisture visualization displays near-surface specific humidity, or Q2M, measuring the actual mass of water vapor per kilogram of air. The metric spans from bone-dry conditions at 0 g/kg up to hyper-saturated tropical moisture corridors exceeding 24 g/kg. The colorbar illustrates atmospheric water vapor content: pale desert yellow and light tan signify arid, moisture-starved air masses (0 to 3 g/kg) characteristic of subtropical deserts and polar ice; mint green and light cyan denote moderate continental humidity (4 to 10 g/kg); rich turquoise and cobalt blue highlight deep moisture transport (12 to 18 g/kg); and dark indigo to saturated violet plumes trace atmospheric rivers and tropical convergence zones surpassing 20 to 24+ g/kg that supply fuel for cyclonic storms and heavy rainfall.",
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
          "audioNarrative": "This atmospheric moisture visualization displays near-surface specific humidity, or Q2M, measuring the actual mass of water vapor per kilogram of air. The metric spans from bone-dry conditions at 0 g/kg up to hyper-saturated tropical moisture corridors exceeding 24 g/kg. The colorbar illustrates atmospheric water vapor content: pale desert yellow and light tan signify arid, moisture-starved air masses (0 to 3 g/kg) characteristic of subtropical deserts and polar ice; mint green and light cyan denote moderate continental humidity (4 to 10 g/kg); rich turquoise and cobalt blue highlight deep moisture transport (12 to 18 g/kg); and dark indigo to saturated violet plumes trace atmospheric rivers and tropical convergence zones surpassing 20 to 24+ g/kg that supply fuel for cyclonic storms and heavy rainfall.",
          "dominantFreqRange": "110 Hz - 3200 Hz",
          "intensity": 0.78
        }
      ]
    }
  ]
};
