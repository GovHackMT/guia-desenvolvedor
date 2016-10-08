import React from 'react';

module.exports = React.createClass({
  render() {
    return (
      <section id="services">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <h2 className="section-heading">
                        Hackathon com o tema de governo digital
                      </h2>
                      <h3 className="section-subheading text-muted">
                        O evento ocorre entres os dias 04 e 06 de novembro, no shopping Goiabeiras em Cuiabá-MT.
                        Programadores e profissionais ligados ao desenvolvimento de softwares se reunirão para uma maratona de palestras, brainstormings, mentorias e avaliações dos projetos construídos.
                      </h3>
                  </div>
              </div>
              <div className="row text-center">
                  <div className="col-md-4">
                      <span className="fa-stack fa-4x">
                          <i className="fa fa-circle fa-stack-2x text-primary"></i>
                          <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                      </span>
                      <h4 className="service-heading">Hackathon</h4>
                      <p className="text-muted">
                        24 horas de programação, criatividade e muit café.
                        Uma idéia bem construída é o começo de todo bom negócio
                      </p>
                  </div>
                  <div className="col-md-4">
                      <span className="fa-stack fa-4x">
                          <i className="fa fa-circle fa-stack-2x text-primary"></i>
                          <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
                      </span>
                      <h4 className="service-heading">Governo Digital</h4>
                      <p className="text-muted">
                        O tema deste ano é Governo Digital: Soluções que auxiliem o governo e a sociedade a se comunicarem.
                      </p>
                  </div>
                  <div className="col-md-4">
                      <span className="fa-stack fa-4x">
                          <i className="fa fa-circle fa-stack-2x text-primary"></i>
                          <i className="fa fa-users fa-stack-1x fa-inverse"></i>
                      </span>
                      <h4 className="service-heading">Público</h4>
                      <p className="text-muted">Toda a comunidade de tecnologia e desenvolvimento está convidada a participar deste evento histórico em nosso estado.</p>
                  </div>
              </div>
          </div>
        </section>
    );
  }
});