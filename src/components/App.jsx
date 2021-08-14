import React from 'react'
import { ApolloProvider } from '@apollo/client'
import '../styles/App.scss'
import Quiz from './quiz/Quiz'
import { createCountriesClient } from '../utils/ApolloClientFactory'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const App = () => (
  <HelmetProvider>
    <Helmet>
      <body className="bg-secondary" />
    </Helmet>
    <ApolloProvider client={createCountriesClient()}>
      <Quiz />
    </ApolloProvider>
  </HelmetProvider>
)

export default App
