import { Row, Col, Container, Media } from "reactstrap";
import React from "react";

const Sidebar = props => {
	return (
		<div style={{ backgroundColor: "#A7D4F1" }}>
			<Row className="flex-grow-1" style={{ marginTop: 10, height: 800 }}>
				<Col sm="3">
					<Media>
						<Media
							border-rounded
							bg-primary
							Object
							src="./code.png"
							alt="profile pic"
							style={{ maxHeight: 128, maxWidth: 128 }}
						></Media>
						<Media
							body
							style={{ fontSize: 20, color: "blue", display: "block" }}
						>
							Rohit Kumar
						</Media>
					</Media>
				</Col>
				<Col sm="9"></Col>
			</Row>
		</div>
	);
};

export default Sidebar;
