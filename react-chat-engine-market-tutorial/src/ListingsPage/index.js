import NavBar from "../NavBar"

import {Row, Col} from "react-grid-system"

export default function ListingsPage() {
    return (
        <Row>
            <NavBar />
            <Col>
                col1
            </Col>
            <Col>
                col2
            </Col>
        </Row>
    )
}