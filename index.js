// overfetching - 요청한 영역보다 더많이 주는것.(필요없는것도 가져옴..)
// underfetching - REST에서 하나를 완성하려고 많은 소스를 요청하는것

// Resolver - 1. 쿼리 data 입력  및 반환 값 입력
// Schema - 2. resolver의 입력된 쿼리 타입 확인 후 검사, 에러/반환 값  리턴

// old code ┐
// const graphqlYoga = required("graphql-yoga");

// $ yarn add global add babel-cli --ignore-engines  
// package.json : "start": "nodemon --exec babel-node" 추가
import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

const server = new GraphQLServer({
   // schema: 
	// mutation: 데이터 변경시 사용
	// query: 정보를 받을때 사용
    typeDefs: "graphql/schema.graphql",
    resolvers
    // http:localhost:4000 에 graphql playground 생성(쿼리 제작툴?)
});

server.start(() => console.log("GraphQL server running"));
