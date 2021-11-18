import React from "react";

import Button from "react-bootstrap/Button";

const Btn = ({ content, type, clickEvent }) => {
	return (
		<Button
			size="lg"
			variant={`${type === "bg-primary" ? "primary" : "dark"}`}
			onClick={clickEvent(content)}
			className={`
        d-flex justify-content-center align-items-center mt-2 
        ${type || ""}
      `}
		>
			{content}
		</Button>
	);
};

export default Btn;
