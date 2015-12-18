import _ from "underscore";
import ga from "react-ga";
import Radium, { Style } from "radium";
import React from "react";
import { VictoryTheme, Header, Footer } from "formidable-landers";

import BaseDocs from "./docs";
import { components, routing as routingConfig } from "../config";
import Sidebar from "./sidebar";

@Radium
class ComponentDocs extends BaseDocs {

  componentWillMount() {
    ga.pageview(`${routingConfig.base}docs/${this.props.params.component}`);
  }

  render() {
    const Docs = _.findWhere(components, { slug: this.props.params.component }).docs;
    return (
      <div style={{display: "flex", minHeight: "100vh", flexDirection: "column"}}>
        <Header
          text={"Interested in using Victory on your next project? Let’s talk."}
        />
        <main style={this.getMainStyles()}>
          <Sidebar active={`${this.props.params.component}`} />
          <section style={this.getDocsStyles()}>
            <Docs />
          </section>
        </main>
        <Footer/>
        <Style rules={VictoryTheme} />
      </div>
    );
  }

}

ComponentDocs.propTypes = {
  params: React.PropTypes.shape({
    component: React.PropTypes.string
  })
};

export default ComponentDocs;
