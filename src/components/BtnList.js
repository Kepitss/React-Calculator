import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Btn from "./Btn";

const BtnList = () => {
	// Render all buttons
	const renderButtons = () => {
		const rows = [
			[
				{ text: "C", type: "bg-primary" },
				{ text: "÷", type: "bg-primary" },
				{ text: "×", type: "bg-primary" },
				{ text: "DEL", type: "bg-primary" },
			],
			[{ text: "7" }, { text: "8" }, { text: "9" }, { text: "-", type: "bg-primary" }],
			[{ text: "4" }, { text: "5" }, { text: "6" }, { text: "+", type: "bg-primary" }],
			[{ text: "1" }, { text: "2" }, { text: "3" }, { text: "±", type: "bg-primary" }],
			[{ text: "%" }, { text: "0" }, { text: "." }, { text: "=", type: "bg-primary" }],
		];

		return (
			<div>
				{rows.map((array) => {
					return (
						<Row className="g-0" key={array[0].text}>
							{array.map((string) => {
								return (
									<Col
										className="d-flex justify-content-center align-items-center"
										key={string.text}
									>
										<Btn content={string.text} type={string.type} />
									</Col>
								);
							})}
						</Row>
					);
				})}
			</div>
		);
	};

	return <div>{renderButtons()}</div>;
};

export default BtnList;
