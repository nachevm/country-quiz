import gql from 'graphql-tag'

export const COUNTRIES = gql`
    query countries {
        countries {
            name
            phone
            capital
            currency
            continent {
                name
            }
            languages {
                name
            }
        }
    }
`
