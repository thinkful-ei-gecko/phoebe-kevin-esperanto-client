import React, { Component } from 'react'
import Dashboard from '../../components/Dashboard/Dashboard'
import languageContext from '../../contexts/LanguageContext'

class DashboardRoute extends Component {
  static contextType = languageContext

  render() {
    const { language, words } = this.context;
		
		if (!language || words.length === 0 ) {
			return null;
		} else {
      return (
        <section>
          <h2>Your {this.context.language.name} Progress</h2>
          <Dashboard />
        </section>
      );
    }
  }
}

export default DashboardRoute
