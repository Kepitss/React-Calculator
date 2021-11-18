import React, { useState } from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import "../css/custom.css";
import BtnList from "./BtnList";

const App = () => {
	// State
	const [value, setValue] = useState("0");
	const [memory, setMemory] = useState(null);
	const [operator, setOperator] = useState(null);

	// Calculations and more function for calculator
	const onButtonClick = (content) => () => {
		const currentValue = parseFloat(value);

		// All Clear button
		if (content === "C") {
			setValue("0");
			setMemory(null);
			setOperator(null);
			return;
		}

		// Single number Delete button
		if (content === "DEL") {
			if (value === "0") return;

			setValue(value.slice(0, -1));

			if (value.length === 1) {
				setValue("0");
			}
			return;
		}

		// Change number from pasitive to negative and opposite
		if (content === "±") {
			setValue((currentValue * -1).toString());
			return;
		}

		// Get % of number (value)
		if (content === "%") {
			setValue((currentValue / 100).toString());
			setMemory(null);
			setOperator(null);
			return;
		}

		// When you work with commas
		if (content === ".") {
			if (value.includes(".")) return;
			setValue(value + ".");
			return;
		}
		if (value[value.length - 1] === ".") {
			setValue(value + content);
		} else {
			setValue(parseFloat(currentValue + content).toString());
		}

		// When clicking + operator
		if (content === "+") {
			if (operator !== null) {
				if (operator === "+") {
					setMemory(memory + currentValue);
				} else if (operator === "-") {
					setMemory(memory - currentValue);
				} else if (operator === "×") {
					setMemory(memory * currentValue);
				} else if (operator === "÷") {
					setMemory(memory / currentValue);
				}
			} else {
				setMemory(currentValue);
			}

			setValue("0");
			setOperator("+");
			return;
		}

		// When clicking - operator
		if (content === "-") {
			if (operator !== null) {
				if (operator === "+") {
					setMemory(memory + currentValue);
				} else if (operator === "-") {
					setMemory(memory - currentValue);
				} else if (operator === "×") {
					setMemory(memory * currentValue);
				} else if (operator === "÷") {
					setMemory(memory / currentValue);
				}
			} else {
				setMemory(currentValue);
			}

			setValue("0");
			setOperator("-");
			return;
		}

		// When clicking × operator
		if (content === "×") {
			if (operator !== null) {
				if (operator === "+") {
					setMemory(memory + currentValue);
				} else if (operator === "-") {
					setMemory(memory - currentValue);
				} else if (operator === "×") {
					setMemory(memory * currentValue);
				} else if (operator === "÷") {
					setMemory(memory / currentValue);
				}
			} else {
				setMemory(currentValue);
			}

			setValue("0");
			setOperator("×");
			return;
		}

		// When clicking ÷ operator
		if (content === "÷") {
			if (operator !== null) {
				if (operator === "+") {
					setMemory(memory + currentValue);
				} else if (operator === "-") {
					setMemory(memory - currentValue);
				} else if (operator === "×") {
					setMemory(memory * currentValue);
				} else if (operator === "÷") {
					setMemory(memory / currentValue);
				}
			} else {
				setMemory(currentValue);
			}

			setValue("0");
			setOperator("÷");
			return;
		}

		// When clicking = sign
		if (content === "=") {
			if (!operator) return;

			if (operator === "+") {
				setValue((memory + currentValue).toString());
			} else if (operator === "-") {
				setValue((memory - currentValue).toString());
			} else if (operator === "×") {
				setValue((memory * currentValue).toString());
			} else if (operator === "÷") {
				setValue((memory / currentValue).toString());
			}

			setMemory(null);
			setOperator(null);
			return;
		}
	};

	// App Component return function
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
					<BtnList onButtonClick={onButtonClick} />
				</Col>
			</Row>
		</Container>
	);
};

export default App;
