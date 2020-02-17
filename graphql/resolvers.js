// Resolver : Query를 resolve 하는 것

import {
  people,
  getPersonById,
  getMovies,
  getById,
  addMovie,
  deleteMovie,
  getTrueMovies,
} from "./db";

const Jaeeun = {
  name: "Jaeeun",
  age: 24,
  sex: "female",
};

const resolvers = {
  Query: {
    name: () => "Jaeeun",
    // query/name을 실행하면 "Jaeeun"을 리턴

    jaeeun: () => Jaeeun,
    person: () => Jaeeun,
    people: () => people,
    person: (_, { id }) => getPersonById(id),

    // ========
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),

    // ====movie api for rest api
    // apimovies: () => getTrueMovies(),  // 간단 return시 사용
    apimovies: (_, { limit, rating }) => getTrueMovies(limit, rating),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
    // 현재는 실 database에 연결되지 않았기 때문에 yarnstart하면 다시 원래대로 돌아옴
  },
};

export default resolvers;
