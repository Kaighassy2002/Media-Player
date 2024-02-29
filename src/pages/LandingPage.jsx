import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigates = useNavigate();

  const handleNavigation = () => {
    // navigated to home
    navigates("/home");
  };
  return (
    <>
      <div className="container mt-5">
        <div className="header row align-items-center">
          <div className="col-lg-5">
            <h3>
              Welcome to <span className="text-warning">Media Player</span>
            </h3>
            <p className="mt-3" style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              soluta excepturi repellendus nesciunt eaque sequi commodi omnis
              unde praesentium. Temporibus placeat hic tempore illum est.
              Aperiam repellat ipsa modi eos!
            </p>
            <button onClick={handleNavigation} className="btn btn-info mt-3">
              Get Started
            </button>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <img
              className="img-fluid"
              src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif"
              alt="landing page"
            />
          </div>
        </div>
        <div className="features">
          <h3 className="text-center">Features</h3>
          <div className="row mt-5">
            <div className="col">
              <Card>
                <Card.Img height={'300px'} variant="top" src="https://i.pinimg.com/originals/7b/ec/58/7bec589365fbdb1a95649e22e3da05c3.gif" />
                <Card.Body>
                  <Card.Title>Managing videos</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card>
                <Card.Img height={'300px'} variant="top" src="https://i.pinimg.com/originals/2d/9a/99/2d9a99324ede6e2787db071ffeae8ca9.gif" />
                <Card.Body>
                  <Card.Title>Categorize videos</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card>
                <Card.Img height={'300px'} variant="top" src="https://i.pinimg.com/originals/cb/33/13/cb33131c5474225ae9a6139a7c3a2404.gif" />
                <Card.Body>
                  <Card.Title>Watch History</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="vedio row border p-5 mt-5 rounded">
          <div className="col-lg-6 p-5">
            <h4 className="text-warning">simple, fast and Poweful</h4>
            <p style={{textAlign:'justify'}} ><span className="fs-4">play everything :</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt delectus cum soluta enim porro quo velit? Molestias consequuntur vero facilis</p>
            <p style={{textAlign:'justify'}} ><span className="fs-4">Categorize Videos:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt delectus cum soluta enim porro quo velit? Molestias consequuntur vero facilis</p>
            <p style={{textAlign:'justify'}} ><span className="fs-4">Watch History :</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt delectus cum soluta enim porro quo velit? Molestias consequuntur vero facilis</p>
          </div>
          <div className="col-lg-6 p-5">
          <iframe className="img-fluid m-5" width="788" height="588" src="https://www.youtube.com/embed/kRsYLmiowmQ" title="Sanam Teri Kasam Title Song | Official Video | Harshvardhan, Mawra | Himesh Reshammiya, Ankit Tiwari" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default LandingPage;
