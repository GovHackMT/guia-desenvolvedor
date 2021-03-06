import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

module.exports = React.createClass({
  propTypes () {
    return {
      route: React.PropTypes.object,
    }
  },
  render () {
    const post = this.props.route.page.data;
    let Wrapper = (props) => {
      return <section className="container">{props.children}</section>
    };
    let path = this.props.route.page.path;
    if(path && path.indexOf('docs') > 0){
      Wrapper = (props) => {
        return <div className="container">{props.children}</div>
      };
    }
    return (
      <DocumentTitle title={`${config.siteTitle} | ${post.title}`}>
        <Wrapper>
          <h2>{post.title}</h2>
          <br/>
          <div className="col-md-8" dangerouslySetInnerHTML={{ __html: post.body }} />
        </Wrapper>
      </DocumentTitle>
    )
  },
})
