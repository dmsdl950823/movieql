export const people = [
  {
    id: 1,
    name: "Johun",
    age: 29,
    sex: "male",
  },
  {
    id: 2,
    name: "loge",
    age: 49,
    sex: "female",
  },
  {
    id: 3,
    name: "Joey",
    age: 19,
    sex: "female",
  },
  {
    id: 4,
    name: "Monica",
    age: 89,
    sex: "male",
  },
  {
    id: 5,
    name: "Rachael",
    age: 39,
    sex: "female",
  },
];

export const getPersonById = id => {
  const filteredPeople = people.filter(pers => id === pers.id);
  return filteredPeople[0];
};

// ===============Movie================

let movies = [
  {
    id: 0,
    name: "Starwars - The new one",
    score: 1,
  },
  {
    id: 1,
    name: "Avengers - The new one",
    score: 8,
  },
  {
    id: 2,
    name: "The GodFother I",
    score: 95,
  },
  {
    id: 3,
    name: "Logan",
    score: 2,
  },
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovie = movies.filter(movie => movie.id === id);
  return filteredMovie[0];
};

// data 추가
export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };

  movies.push(newMovie);
  return newMovie;
};

// data 삭제
export const deleteMovie = id => {
  const cleanMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanMovies.length) {
    movies = cleanMovies;
    // 삭제시 true 반영
    return true;
  } else {
    return false;
  }
};

// ================= with Restful Api - Movie Api ===================
import fetch from "node-fetch";

const API_URL = "https://yts.mx/api/v2/list_movies.json?";

export const getTrueMovies = (limit, rating) => {
	// 간단하게 리턴하기(param 필요X)
	//   return fetch(`${API_URL}`)
	//     .then(res => res.json())
	//     .then(json => json.data.movies);

	// url 조건 걸어 리턴하기
  let REQUEST_URL = API_URL;

  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }

  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }

  return fetch (REQUEST_URL).then(res => res.json()).then(json => json.data.movies)
};
