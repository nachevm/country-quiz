const questionTypes = [
  {
    getQuestion(country) {
      return `What is the phone code for ${country.name}?`
    },
    getAnswer(country) {
      return country.phone
    }
  },
  {
    getQuestion(country) {
      return `On which continent is the country ${country.name}?`
    },
    getAnswer(country) {
      return country.continent.name
    }
  },
  {
    getQuestion(country) {
      return `What is the capital of ${country.name}?`
    },
    getAnswer(country) {
      return country.capital ? country.capital : 'No official capital'
    }
  },
  {
    getQuestion(country) {
      return `What is the currency in ${country.name}?`
    },
    getAnswer(country) {
      return country.currency ? country.currency : 'No official currency'
    }
  }
  ,
  {
    getQuestion(country) {
      return `What is one language ${country.name} speaks?`
    },
    getAnswer(country) {
      return country.languages && country.languages.length > 0 ? country.languages[0].name : 'No official language'
    }
  }
]

export default questionTypes
