export default {
  normal: {
    "color": "#A8A878",
    "attackStrong": [],
    "attackWeak": ['rock', 'steel', 'ghost'],
    "defendStrong": ['ghost'],
    "defendWeak": ['fighting']
  },
  fighting: {
    "color": "#C03028",
    "attackStrong": ['normal', 'rock', 'steel', 'ice', 'dark'],
    "attackWeak": ['flying', 'poison', 'bug', 'psychic', 'fairy', 'ghost'],
    "defendStrong": ['rock', 'bug', 'dark'],
    "defendWeak": ['flying', 'psychic', 'fairy']
  },
  flying: {
    "color": "#A890F0",
    "attackStrong": ['fighting', 'bug', 'grass'],
    "attackWeak": ['rock', 'steel', 'electric'],
    "defendStrong": ['fighting', 'bug', 'grass', 'ground'],
    "defendWeak": ['rock', 'electric', 'ice']
  },
  poison: {
    "color": "#A040A0",
    "attackStrong": ['grass', 'fairy'],
    "attackWeak": ['poison', 'ground', 'rock', 'ghost', 'steel'],
    "defendStrong": ['fighting', 'poison', 'bug', 'grass', 'fairy'],
    "defendWeak": ['ground', 'psychic']
  },
  ground: {
    "color": "#E0C068",
    "attackStrong": ['poison', 'rock', 'steel', 'fire', 'electric'],
    "attackWeak": ['bug', 'grass', 'flying'],
    "defendStrong": ['poison', 'rock', 'electric'],
    "defendWeak": ['water', 'grass', 'ice']
  },
  rock: {
    "color": "#B8A038",
    "attackStrong": ['flying', 'bug', 'fire', 'ice'],
    "attackWeak": ['fighting', 'ground', 'steel'],
    "defendStrong": ['normal', 'flying', 'poison', 'fire'],
    "defendWeak": ['fighting', 'ground', 'steel', 'water', 'grass']
  },
  bug: {
    "color": "#A8B820",
    "attackStrong": ['grass', 'psychic', 'dark'],
    "attackWeak": ['fighting', 'flying', 'poison', 'ghost', 'steel', 'fire', 'fairy'],
    "defendStrong": ['fighting', 'ground', 'grass'],
    "defendWeak": ['flying', 'rock', 'fire']
  },
  ghost: {
    "color": "#705898",
    "attackStrong": ['ghost', 'psychic'],
    "attackWeak": ['dark', 'normal'],
    "defendStrong": ['poison', 'bug', 'normal', 'fighting'],
    "defendWeak": ['ghost', 'dark']
  },
  steel: {
    "color": "#B8B8D0",
    "attackStrong": ['rock', 'ice', 'fairy'],
    "attackWeak": ['steel', 'fire', 'water', 'electric'],
    "defendStrong": ['normal', 'flying', 'rock', 'bug', 'steel', 'grass', 'psychic', 'ice', 'dragon', 'fairy', 'poison'],
    "defendWeak": ['fighting', 'ground', 'fire']
  },
  fire: {
    "color": "#F08030",
    "attackStrong": ['bug', 'steel', 'grass', 'ice'],
    "attackWeak": ['rock', 'fire', 'water', 'dragon'],
    "defendStrong": ['bug', 'steel', 'fire', 'grass', 'ice', 'fairy'],
    "defendWeak": ['ground', 'rock', 'water']
  },
  water: {
    "color": "#6890F0",
    "attackStrong": ['ground', 'rock', 'fire'],
    "attackWeak": ['water', 'grass', 'dragon'],
    "defendStrong": ['steel', 'fire', 'water', 'ice'],
    "defendWeak": ['grass', 'electric']
  },
  grass: {
    "color": "#78C850",
    "attackStrong": ['ground', 'rock', 'water'],
    "attackWeak": ['flying', 'poison', 'bug', 'steel', 'fire', 'grass', 'dragon'],
    "defendStrong": ['ground', 'water', 'grass', 'electric'],
    "defendWeak": ['flying', 'poison', 'bug', 'fire', 'ice']
  },
  electric: {
    "color": "#F8D030",
    "attackStrong": ['flying', 'water'],
    "attackWeak": ['grass', 'electric', 'dragon'],
    "defendStrong": ['flying', 'steel', 'electric'],
    "defendWeak": ['ground']
  },
  psychic: {
    "color": "#F85888",
    "attackStrong": ['fighting', 'poison'],
    "attackWeak": ['steel', 'psychic', 'dark'],
    "defendStrong": ['fighting', 'psychic'],
    "defendWeak": ['bug', 'ghost', 'dark']
  },
  ice: {
    "color": "#98D8D8",
    "attackStrong": ['flying', 'ground', 'grass', 'dragon'],
    "attackWeak": ['steel', 'fire', 'water', 'ice'],
    "defendStrong": ['ice'],
    "defendWeak": ['fighting', 'rock', 'steel', 'fire']
  },
  dragon: {
    "color": "#7038F8",
    "attackStrong": ['dragon'],
    "attackWeak": ['steel', 'fairy'],
    "defendStrong": ['fire', 'water', 'grass', 'electric'],
    "defendWeak": ['ice', 'dragon', 'fairy']
  },
  dark: {
    "color": "#705848",
    "attackStrong": ['ghost', 'psychic'],
    "attackWeak": ['fighting', 'dark', 'fairy'],
    "defendStrong": ['ghost', 'dark', 'psychic'],
    "defendWeak": ['fighting', 'bug', 'fairy']
  },
  fairy: {
    "color": "#F0B6BC",
    "attackStrong": ['fighting', 'dragon', 'dark'],
    "attackWeak": ['poison', 'steel', 'fire'],
    "defendStrong": ['fighting', 'bug', 'dark', 'dragon'],
    "defendWeak": ['poison', 'steel']
  },
  unknown: {
    "color": "#6AA596",
    "attackStrong": [],
    "attackWeak": [],
    "defendStrong": [],
    "defendWeak": []
  },
  shadow: {
    "color": "#705898",
    "attackStrong": [],
    "attackWeak": [],
    "defendStrong": [],
    "defendWeak": []
  }
};

