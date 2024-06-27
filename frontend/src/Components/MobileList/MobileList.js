import { Button, Col, Container, Row, Table } from "react-bootstrap";
import MobileCard from "../MobileCard/MobileCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileAdd from "../MobileAdd/MobileAdd";
import axios from "axios";
import { FETCH_MOBILE_LIST } from "../../mobileRedux/action";

export default function MobileList() {
    const [popupShow, setPopupShow] = useState(false);
    const [isAdmin, setAdmin] = useState(
        localStorage.getItem("userDetails") && JSON.parse(localStorage.getItem("userDetails")).role == "admin"
    );
    const [mobileListData, setmobileListData] = useState();
    const navigate = useNavigate()
    // const mobileData = useSelector(state => state.mobileData);
    const mobileListUpdated = useSelector(state => state.mobileListUpdated);
    const compareMobileArray = useSelector(state => state.compareMobileArray);
    const dispatch = useDispatch();
    const compareItemRef = useRef([]);
    // console.log("compareMobileArray 132", compareMobileArray);
    localStorage.setItem("compareList", JSON.stringify([]));
    const userDetails = JSON.parse(localStorage.getItem("userDetails"))
    const compareMobile = () => {
        localStorage.setItem("compareList", JSON.stringify(compareMobileArray));
        navigate("/mobile-compare")
    }
    const showMobilePopup = () => {
        setPopupShow(!popupShow)
    }
    const newcompareList = JSON.parse(localStorage.getItem("compareList"))
    // console.log("newcompareList", newcompareList)
    useEffect(() => {
        const MobileListRes = async () => {
            try {
                const response = await axios.get("http://localhost:8000/mobile");
                // console.log("response.data", response.data.mobiles);
                dispatch(FETCH_MOBILE_LIST(response.data.mobiles))


            }
            catch (error) {
                console.log("in error")
            }
        }
        MobileListRes();


    }, [])
    // console.log("mobileListUpdated 51", mobileListUpdated)
    const mobileRow = mobileListUpdated && mobileListUpdated.map((mobileItem) => {
        return <MobileCard key={mobileItem.id} isAdmin={isAdmin} mobileItem={mobileItem} compareItemRef={compareItemRef} />
    })

    let mobileTableKey = mobileListUpdated.length > 0 && Object.keys(mobileListUpdated[0]);
    return (
        <Container className="py-4">
            <Row className="mb-4">
                <Col sm={6}>
                    {compareMobileArray.length >= 2 &&
                        <Button variant="success" onClick={() => { compareMobile() }}>Compare</Button>
                    }
                </Col>
                <Col sm={6} className="d-flex justify-content-end">
                    {isAdmin &&
                        <Button variant="success" onClick={() => { showMobilePopup() }}>Add Mobile</Button>
                    }
                </Col>
            </Row>
            {
                isAdmin ?
                    <Table bordered hover>
                        <thead>
                            {mobileTableKey.length > 0 &&
                                <tr>
                                    {mobileTableKey && mobileTableKey.map((item, index) => {
                                        // console.log("loop key", item)
                                        if (item != "_id" && item != "__v") {
                                            return <th key={index} className="text-capitalize">{item}</th>
                                        }
                                    })}
                                    <th className="text-center" style={{ width: '120px' }}>Action</th>
                                </tr>
                            }
                        </thead>
                        <tbody>
                            {mobileTableKey.length > 0 ? mobileRow : <tr><td className="text-center">No records found</td></tr>}
                        </tbody>
                    </Table>
                    :
                    <Row>
                        {mobileTableKey.length > 0 ? mobileRow : <Col xs={12} className="text-center">No records found</Col>}
                    </Row>
            }

            <MobileAdd popupShow={popupShow} showMobilePopup={showMobilePopup} />
        </Container >
    )
}