import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "../css/custom.css";
import BtnList from "./BtnList";

const App = () => {
	// State
	const [value, setValue] = useState("0");

	return (
		<Container className="d-flex justify-content-center pt-5">
			<Row>
				<Col xs={12}>
					<Row className="d-flex justify-content-center mb-2 mt-lg-5">
						<Col className="bg-secondary text-end rounded py-1" xs={11}>
							<h1
								className={`
                    text-light
                    ${value.length > 15 ? "fs-3" : "fs-0"}
                  `}
							>
								{value}
							</h1>
						</Col>
					</Row>
					<BtnList />
				</Col>
			</Row>
		</Container>
	);
};

export default App;
