import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta, mostRecentProjectDetails } from "../../content_option";
import laptop from "../../assets/images/IMG_6376.JPG"

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          <div className="po_item">
            <img src={laptop} alt="" />
          </div>
          <p>{dataportfolio.description}</p>
          {/* {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.desctiption}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })} */}
        </div>

        <div>
          <ul>
            <li><span><strong>Languages:&nbsp;</strong></span><span>{dataportfolio.languages}</span></li>
            <li><span><strong>Frameworks:&nbsp;</strong></span><span>{dataportfolio.frameworks}</span></li>
            <li><span><strong>Databases:&nbsp;</strong></span><span>{dataportfolio.dbs}</span></li>
            <li><span><strong>Designs:&nbsp;</strong></span><span>{dataportfolio.designs}</span></li>
            <li><span><strong>Miscellaneous:&nbsp;</strong></span><span>{dataportfolio.miscellaneous}</span></li>
            <li><span><strong>Brokers:&nbsp;</strong></span><span>{dataportfolio.brokers}</span></li>
            <li><span><strong>Cache:&nbsp;</strong></span><span>{dataportfolio.cache}</span></li>
          </ul>
        </div>

        <div>
          <p>&nbsp;</p>
        </div>

        <div>
          <h3>{mostRecentProjectDetails.title} (Most Recent Project)</h3>
          <hr />
          <h4>Backend</h4>
          <ol>
            {mostRecentProjectDetails.backend.map(d => {
              return (<li key={d}>{d}</li>)
            })}
          </ol>

          <hr />
          <h4>Frontend</h4>
          <p>Take a look:</p>
          <a href="https://learn.hashtagpoker.com/">{mostRecentProjectDetails.frontendlink}</a>
          <ol>
            {mostRecentProjectDetails.frontend.map(d => {
              return (<li key={d}>{d}</li>)
            })}
          </ol>
        </div>

        <div>
          <p>&nbsp;</p>
        </div>

      </Container>
    </HelmetProvider >
  );
};
