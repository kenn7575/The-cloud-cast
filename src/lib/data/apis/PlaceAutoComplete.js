const PlaceAutoComplete = async (place) => {
  /*var response = await fetch(
    "https://api.geoapify.com/v1/geocode/autocomplete?text=" +
      place +
      "&apiKey=ea47387ed72e4b0db5092e389d23dd0c"
  );
  const data = await response.json();
  console.log(data, "data");
  return data;*/

  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          datasource: {
            sourcename: "openstreetmap",
            attribution: "© OpenStreetMap contributors",
            license: "Open Database License",
            url: "https://www.openstreetmap.org/copyright",
          },
          name: "Svendborg",
          country: "Denmark",
          country_code: "dk",
          state: "Region of Southern Denmark",
          city: "Svendborg",
          municipality: "Svendborg Municipality",
          postcode: "5700",
          lon: 10.6070651,
          lat: 55.0629877,
          formatted: "5700 Svendborg, Denmark",
          address_line1: "Svendborg",
          address_line2: "5700 Svendborg, Denmark",
          category: "populated_place",
          timezone: {
            name: "Europe/Copenhagen",
            name_alt: "Europe/Berlin",
            offset_STD: "+01:00",
            offset_STD_seconds: 3600,
            offset_DST: "+02:00",
            offset_DST_seconds: 7200,
            abbreviation_STD: "CET",
            abbreviation_DST: "CEST",
          },
          result_type: "postcode",
          rank: {
            importance: 0.47170325486751785,
            confidence: 1,
            confidence_city_level: 1,
            match_type: "full_match",
          },
          place_id:
            "5100169e3cd1362540596fc61ffb0f884b40f00103f901879434aa01000000c002079203095376656e64626f7267",
        },
        geometry: {
          type: "Point",
          coordinates: [10.6070651, 55.0629877],
        },
        bbox: [10.5670651, 55.0229877, 10.6470651, 55.1029877],
      },
      {
        type: "Feature",
        properties: {
          datasource: {
            sourcename: "openstreetmap",
            attribution: "© OpenStreetMap contributors",
            license: "Open Database License",
            url: "https://www.openstreetmap.org/copyright",
          },
          country: "Lithuania",
          country_code: "lt",
          state: "Vilnius County",
          state_district: "Švenčionių rajono savivaldybė",
          county: "Švenčionių seniūnija",
          city: "Švenčionys",
          lon: 26.1630146,
          lat: 55.1336865,
          formatted: "Švenčionys, Švenčionių seniūnija, Lithuania",
          address_line1: "Švenčionys",
          address_line2: "Švenčionių seniūnija, Lithuania",
          category: "administrative",
          timezone: {
            name: "Europe/Vilnius",
            offset_STD: "+02:00",
            offset_STD_seconds: 7200,
            offset_DST: "+03:00",
            offset_DST_seconds: 10800,
            abbreviation_STD: "EET",
            abbreviation_DST: "EEST",
          },
          result_type: "city",
          rank: {
            importance: 0.4551695017084598,
            confidence: 1,
            confidence_city_level: 1,
            match_type: "full_match",
          },
          place_id:
            "5141c52753bb293a405957b5a4a31c914b40f00101f9019675110000000000c00208",
        },
        geometry: {
          type: "Point",
          coordinates: [26.1630146, 55.1336865],
        },
        bbox: [26.1372627, 55.1096186, 26.2021136, 55.1424721],
      },
      {
        type: "Feature",
        properties: {
          datasource: {
            sourcename: "openstreetmap",
            attribution: "© OpenStreetMap contributors",
            license: "Open Database License",
            url: "https://www.openstreetmap.org/copyright",
          },
          country: "Lithuania",
          country_code: "lt",
          state: "Vilnius County",
          state_district: "Švenčionių rajono savivaldybė",
          county: "Švenčionėliai eldership",
          city: "Švenčionėliai",
          lon: 25.9985239,
          lat: 55.1652567,
          formatted: "Švenčionėliai, Švenčionėliai eldership, Lithuania",
          address_line1: "Švenčionėliai",
          address_line2: "Švenčionėliai eldership, Lithuania",
          category: "administrative",
          timezone: {
            name: "Europe/Vilnius",
            offset_STD: "+02:00",
            offset_STD_seconds: 7200,
            offset_DST: "+03:00",
            offset_DST_seconds: 10800,
            abbreviation_STD: "EET",
            abbreviation_DST: "EEST",
          },
          result_type: "city",
          rank: {
            importance: 0.4224503141235672,
            confidence: 1,
            confidence_city_level: 1,
            match_type: "full_match",
          },
          place_id:
            "513dc626439fff394059f2f8ac2127954b40f00101f90126ac120000000000c00208",
        },
        geometry: {
          type: "Point",
          coordinates: [25.9985239, 55.1652567],
        },
        bbox: [25.9811828, 55.1452354, 26.0243201, 55.1812561],
      },
      {
        type: "Feature",
        properties: {
          datasource: {
            sourcename: "openstreetmap",
            attribution: "© OpenStreetMap contributors",
            license: "Open Database License",
            url: "https://www.openstreetmap.org/copyright",
          },
          name: "Sven Johnsens holmer",
          country: "Norway",
          country_code: "no",
          county: "Agder",
          city: "Arendal",
          lon: 8.732873985493123,
          lat: 58.403385099999994,
          formatted: "Sven Johnsens holmer, Arendal, Agder, Norway",
          address_line1: "Sven Johnsens holmer",
          address_line2: "Arendal, Agder, Norway",
          category: "populated_place",
          timezone: {
            name: "Europe/Oslo",
            name_alt: "Europe/Berlin",
            offset_STD: "+01:00",
            offset_STD_seconds: 3600,
            offset_DST: "+02:00",
            offset_DST_seconds: 7200,
            abbreviation_STD: "CET",
            abbreviation_DST: "CEST",
          },
          result_type: "amenity",
          rank: {
            importance: 0.32500999999999997,
            confidence: 1,
            match_type: "full_match",
          },
          place_id:
            "5175904f423b77214059ca187a1fa2334d40f00102f90122afb01800000000c002019203145376656e204a6f686e73656e7320686f6c6d6572",
        },
        geometry: {
          type: "Point",
          coordinates: [8.732873985493123, 58.403385099999994],
        },
        bbox: [8.7318024, 58.40289, 8.7340507, 58.4038848],
      },
      {
        type: "Feature",
        properties: {
          datasource: {
            sourcename: "openstreetmap",
            attribution: "© OpenStreetMap contributors",
            license: "Open Database License",
            url: "https://www.openstreetmap.org/copyright",
          },
          name: "Sven-Abram",
          country: "Sweden",
          country_code: "se",
          county: "Blekinge County",
          city: "Ronneby kommun",
          lon: 15.068940629165652,
          lat: 56.13746705,
          formatted: "Sven-Abram, Ronneby kommun, Blekinge County, Sweden",
          address_line1: "Sven-Abram",
          address_line2: "Ronneby kommun, Blekinge County, Sweden",
          category: "populated_place",
          timezone: {
            name: "Europe/Stockholm",
            name_alt: "Europe/Berlin",
            offset_STD: "+01:00",
            offset_STD_seconds: 3600,
            offset_DST: "+02:00",
            offset_DST_seconds: 7200,
            abbreviation_STD: "CET",
            abbreviation_DST: "CEST",
          },
          result_type: "amenity",
          rank: {
            importance: 0.25000999999999995,
            confidence: 1,
            match_type: "full_match",
          },
          place_id:
            "51a843a72f4c232e40598803328598114c40f00102f90144f8532b00000000c0020192030a5376656e2d416272616d",
        },
        geometry: {
          type: "Point",
          coordinates: [15.068940629165652, 56.13746705],
        },
        bbox: [15.0685083, 56.1372717, 15.0693311, 56.1376702],
      },
    ],
    query: {
      text: "sven",
    },
  };
};
export { PlaceAutoComplete };
