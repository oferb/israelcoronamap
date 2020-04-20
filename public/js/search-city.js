


let substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    let matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

let citiesByName = [];
let allCities = [];
let lastUpdateOfCities = '';

const getCitiesByName = async () => {
  const {cities, lastUpdate} = await getAllCitiesData();
  citiesByName = cities.reduce((acc, city) => {acc.push(city.cityName); return acc;}, []);
  lastUpdateOfCities = lastUpdate;
  allCities = cities;
};

$(document).ready(async () => {
  await getCitiesByName();
  $('#city-search-input .typeahead').typeahead({
    highlight: true,
    minLength: 1
  },
  {
    name: 'citiesByName',
    source: substringMatcher(citiesByName)
  });

  $('.typeahead').bind('typeahead:select', (ev, suggestion) => {
    const chosenCity = allCities.find((city) => city.cityName === suggestion);
    if (chosenCity === undefined) return;

    $('.chosen-city-container').css('display', 'block');

    const {
      cityName,
      population,
      howManyPeopleTested,
      infectedPeople,
      recovered,
      increaseInPercentageInTheLastThreeDays,
      increaseInPercentageInTheLastWeek,
      sicknessPercentageForOneHundredThousand
    } = chosenCity;

    $('#city-name').text(cityName);
    $('#city-population').text(population);
    $('#city-tested').text(howManyPeopleTested);
    $('#city-infected').text(infectedPeople);
    $('#city-recovered').text(recovered);
    $('#city-increase-sick-three-days').text(increaseInPercentageInTheLastThreeDays);
    $('#city-increase-sick-week').text(increaseInPercentageInTheLastWeek);
    $('#city-percentage').text(sicknessPercentageForOneHundredThousand);
  });

});

