const animals = [{
    "id": 1,
    "common_name": "Hottentot teal",
    "scientific_name": "Anas punctata",
    "population": 92,
    "zoo": 6
  }, {
    "id": 2,
    "common_name": "Spurfowl, yellow-necked",
    "scientific_name": "Francolinus leucoscepus",
    "population": 708,
    "zoo": 10
  }, {
    "id": 3,
    "common_name": "Hummingbird (unidentified)",
    "scientific_name": "unavailable",
    "population": 44,
    "zoo": 8
  }, {
    "id": 4,
    "common_name": "Bat-eared fox",
    "scientific_name": "Otocyon megalotis",
    "population": 983,
    "zoo": 11
  }, {
    "id": 5,
    "common_name": "Capuchin, brown",
    "scientific_name": "Cebus apella",
    "population": 910,
    "zoo": 11
  }, {
    "id": 6,
    "common_name": "Owl, snowy",
    "scientific_name": "Nyctea scandiaca",
    "population": 313,
    "zoo": 8
  }, {
    "id": 7,
    "common_name": "Savanna baboon",
    "scientific_name": "Papio cynocephalus",
    "population": 327,
    "zoo": 10
  }, {
    "id": 8,
    "common_name": "Lion, south american sea",
    "scientific_name": "Otaria flavescens",
    "population": 534,
    "zoo": 11
  }, {
    "id": 9,
    "common_name": "Common zorro",
    "scientific_name": "Dusicyon thous",
    "population": 328,
    "zoo": 7
  }, {
    "id": 10,
    "common_name": "Coot, red-knobbed",
    "scientific_name": "Fulica cristata",
    "population": 386,
    "zoo": 9
  }];

const animalFilter = (list = animals, pop, zoo) => {

  const filPop = list.filter(item => item.population > pop);

  const filZoo = filPop.filter(item => item.zoo <= zoo);

  const sortZoo = filZoo.sort((a, b) => a.common_name.localeCompare(b.common_name));
  const sortedNames = [];
  sortZoo.forEach(item => sortedNames.push(item.common_name));

  return sortedNames;


    // return [];
};

if (typeof module !== 'undefined') {
    module.exports = {
        animals,
        animalFilter,
    };
}
