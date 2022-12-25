import "./App.css";
import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function App() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/melmesery/Sports-Pages/posts")
      .then((response) => response.json())
      .then((json) => setPages(json));
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <img src={pages.product} />
          {pages.map((page) => {
            return (
              <Col
                md={{ span: 3 }}
                className="d-flex justify-content-center my-5"
              >
                <Card className='p-2 rounded-0'>
                  <img src={page.product} className="w-100" />
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
