import { ApolloClient, InMemoryCache } from '@apollo/client'

export const createCountriesClient = () => new ApolloClient({
  uri: process.env.REACT_APP_COUNTRIES_GRAPHQL_URI,
  cache: new InMemoryCache()
})
