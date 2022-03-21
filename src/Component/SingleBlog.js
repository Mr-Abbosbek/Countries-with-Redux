import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { BiArrowBack } from "react-icons/bi";
import { HashLoader } from "react-spinners";

function SingleBlog({ post }) {
  let [loading] = useState(true);
  let [color] = useState("#36D7B7");

  let urlName = useParams();
  console.log(urlName.name.length);

  if(urlName.name.length){
    document.querySelector(".body").classList.add("singleBlog");
  } else {
    document.querySelector(".body").classList.remove("singleBlog");
  }

  let arr = [];
  post.map((e) => {
    if (urlName.name === e.name) {
      e.languages.map((l) => {
        arr.push(l.name);
        arr.push(", ");
        return arr;
      });
    }
    return arr;
  });
  arr.pop();
  console.log(arr);

  return (
    <div className="pt-5 pb-lg-5 singleBlogs">
      <div className="blog-container singleBlog-blogs">
        <Row className="all-row mx-0 back-button-blog">
          <Col className="mt-3 mx-0">
            <Link
              to="/"
              className="mt-5 btn back-button shadow d-inline-flex align-items-center px-4 py-2"
            >
              <BiArrowBack />
              <p className="my-0 pl-5">Back</p>
            </Link>
          </Col>
        </Row>
      </div>
      <div className="pb-lg-3 pb-md-3 pb-sm-3 pb-0 blog-container singleBlog-blogs">
        {post.length ? (
          <>
            {post.map((post, id) => {
              if (urlName.name === post.name) {
                return (
                  <Row className="all-row d-flex flex-wrap pb-5 m-0 px-lg-0 px-md-0 px-sm-0 px-3" key={id}>
                    <Col className="m-0 col-lg-5 col-md-6 col-sm-12 col-12">
                      <Image src={post.flag} className="img-fluid p-0 w-100" />
                    </Col>
                    <Col className="px-lg-5 px-md-3  py-lg-0 py-md-0 py-sm-5 py-0 col-lg-7 col-md-6 col-sm-12 col-12">
                      <h2 className="px-lg-4 fw-bold">{post.name}</h2>

                      <Row className="px-lg-4 m-0 d-flex justify-content-end">
                        <Col className="col-lg-6 col-md-12 col-sm-6 col-12 p-0">
                          <p className="fw-bold">
                            Native name:{" "}
                            <span className="fw-light">{post.nativeName}</span>
                          </p>
                          <p className="fw-bold">
                            Population:{" "}
                            <span className="fw-light">{post.population}</span>
                          </p>
                          <p className="fw-bold">
                            Region:{" "}
                            <span className="fw-light">{post.region}</span>
                          </p>
                          <p className="fw-bold">
                            Sub Region:{" "}
                            <span className="fw-light">{post.subregion}</span>
                          </p>
                          <p className="fw-bold">
                            Capital:{" "}
                            <span className="fw-light">{post.capital}</span>
                          </p>
                        </Col>
                        <Col className="col-lg-6 col-md-12 col-sm-6 col-12 p-0">
                          <p className="fw-bold">
                            Top Level Domain:{" "}
                            <span className="fw-light">
                              {post.topLevelDomain}
                            </span>
                          </p>
                          <p className="fw-bold">
                            Currencies:{" "}
                              {post.currencies ? (
                                <>
                                  {post.currencies.map((cur, id) => (
                                    <span className="fw-light" key={id}>{cur.name}</span>
                                  ))}
                                </>
                              ) : null}
                          </p>
                          <p className="fw-bold">
                            Languages:{" "}
                            <span className="fw-light">
                              {arr.map((language, id) => (
                                <span key={id}>{language}</span>
                              ))}
                            </span>
                          </p>
                        </Col>
                      </Row>

                      <Row className="px-lg-4 d-flex align-items-center m-0">
                        <Col className="p-0">
                          <Row className="d-flex py-5 m-0">
                            <Col className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 p-0">
                              <h5 className="pt-2 fw-bold">
                                Border Countries:
                              </h5>
                            </Col>
                            <Col className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12 p-0">
                              {post.borders ? (
                                <ul className="d-flex flex-wrap p-0 m-0 justify-content-start border-region">
                                  {post.borders.map((bor, id) => (
                                    <li
                                      className="px-3 py-1 w-auto shadow-sm"
                                      key={id}
                                    >
                                      {bor}
                                    </li>
                                  ))}
                                </ul>
                              ) : null}
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                );
              }
              return null;
            })}
          </>
        ) : (
          <Row className="spinner m-0">
            <Col className="d-flex justify-content-center">
              <HashLoader color={color} loading={loading} size={70} />
              {/* <Col className="p-0">
              {post.map((post, id) => {
                if (urlName.name === post.name) {
                  return (
                    <div key={id}>
                      <Image
                        src={post.flag}
                        className="img-fluid w-100 h-100"
                      />
                    </div>
                  );
                }
                return null;
              })}
            </Col>
            <Col>
              {post.map((post, id) => {
                if (urlName.name === post.name) {
                  return (
                    <div key={id}>
                      <h2>{post.name}</h2>
                      <Row>
                        <Col>
                          <p>
                            Native name: <span>{post.nativeName}</span>
                          </p>
                          <p>
                            Population: <span>{post.population}</span>
                          </p>
                          <p>
                            Region: <span>{post.region}</span>
                          </p>
                          <p>
                            Sub Region: <span>{post.subregion}</span>
                          </p>
                          <p>
                            Capital: <span>{post.capital}</span>
                          </p>
                        </Col>
                        <Col>
                          <p>
                            Top Level Domain: <span>{post.topLevelDomain}</span>
                          </p>
                          <p>
                            <span>
                            {
                                post.currencies
                                ? <>
                                    {
                                      post.currencies.map((cur, id)=>(
                                        <div key={id}>Currencies:{" "} {cur.name}</div>
                                      ))
                                    }
                                  </>
                                : null
                              }
                            </span>
                          </p>
                          <p>
                            Languages:{" "}
                            <span>
                              {arr.map((language, id) => (
                                <div key={id}>{language}</div>
                              ))}
                            </span>
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div className="d-flex py-5">
                            <h5 className="pt-2">Border Countries:</h5>

                            {post.borders ? (
                              <ul className="d-flex flex-wrap">
                                {post.borders.map((bor, id) => (
                                  <li className="px-3 py-2" key={id}>
                                    {bor}
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                          </div>
                        </Col>
                      </Row>
                    </div>
                  );
                }
                return null;
              })}
            </Col> */}
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
}

export default SingleBlog;
