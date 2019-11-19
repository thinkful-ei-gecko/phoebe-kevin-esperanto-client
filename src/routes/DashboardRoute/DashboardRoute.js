import React, { Component } from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import languageContext from '../../contexts/LanguageContext';
import languageApiService from '../../services/language-api-service';

class DashboardRoute extends Component {
  static contextType = languageContext;

  componentDidMount = () => {
    languageApiService.getLanguageAndWords().then((res) => {
      const { language, words } = res;
      this.context.setLanguageAndWords(language, words);
    });
  };

  render() {
    const { language, words } = this.context;
    if (!language || words.length === 0) {
      return null;
    } else {
      return (
        <section>
          <h2>{language.name} Progress</h2>
          <Dashboard />
        </section>
      );
    }
  }
}

export default DashboardRoute;
