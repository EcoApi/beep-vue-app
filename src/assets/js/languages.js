const languages = {
  languageArray: [
    { lang: 'nl', title: 'Nederlands' },
    { lang: 'de', title: 'Deutsch' },
    { lang: 'en', title: 'English' },
    { lang: 'fr', title: 'Français' },
    { lang: 'el', title: 'Ελληνικά' },
    { lang: 'it', title: 'Italiano' },
    { lang: 'nb', title: 'Norsk bokmål' },
    // { lang: 'pl', title: 'Polski' },
    { lang: 'pt', title: 'Português' },
    { lang: 'ro', title: 'Română' },
    { lang: 'es', title: 'Spanish' },
    { lang: 'fi', title: 'Suomi' },
    { lang: 'sv', title: 'Svenska' },
  ],
  unpublishedLanguageArray: [
    { lang: 'bg', title: 'Български' },
    { lang: 'pl', title: 'Polski' },
    // { lang: 'en-US', title: 'English US' },
  ],
  checkBrowserLanguage() {
    var matched = null
    var languagePartials = navigator.language.split('-')[0]
    this.languageArray.map((language) => {
      if (language.lang === navigator.language) {
        matched = language.lang
      }
    })
    if (!matched) {
      this.languageArray.map((language) => {
        if (language.lang === languagePartials) {
          matched = language.lang
        }
      })
    }
    if (!matched) {
      this.languageArray.map((language) => {
        if (language.lang.split('-')[0] === languagePartials) {
          matched = language.lang
        }
      })
    }
    return matched
  },
}

export default languages
