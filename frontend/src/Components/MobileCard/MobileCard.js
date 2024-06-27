import { useState } from "react";
import { Card, Button, Col, Badge } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux";
import { DELETE_MOBILE, EDIT_MOBILE, SELECT_MOBILE } from "../../mobileRedux/action";
import MobileAdd from "../MobileAdd/MobileAdd";
import axios from "axios";

export default function MobileCard(props) {
    const [isSelected, setSelect] = useState(false);
    const [popupShow, setPopupShow] = useState(false);
    const [editedProduct, setEditProducts] = useState([])
    const compareMobileArray = useSelector(state => state.compareMobileArray);
    const dispatch = useDispatch();
    const selectMobile = (data) => {
        setSelect(!isSelected);
        if(!isSelected) {
            // console.log("in if");
            // dispatch(SELECT_MOBILE(data))
            // console.log("compareMobileArray 19", compareMobileArray);
            
            const updatedCompareProducts = [...props.compareItemRef.current, data]
            props.compareItemRef.current = updatedCompareProducts;
            console.log("props.compareItemRef", props.compareItemRef.current);
        }
        else {
            // console.log("in else");
            // dispatch(SELECT_MOBILE(data))
            const updatedCompareProducts = props.compareItemRef.current.filter((item)=>{
                return item.id != data.id
            })
            props.compareItemRef.current = updatedCompareProducts;
            console.log("props.compareItemRef", props.compareItemRef.current);
        }
        // setTimeout(()=>{
        //     console.log("compareMobileArray 18", compareMobileArray);
        // }, 3000)
        dispatch(SELECT_MOBILE(props.compareItemRef.current))
    }
    const editMobile = async (data) => {
        console.log("working", data)
        setPopupShow(!popupShow);
        // const response = await axios.put(`http://localhost:8000/edit/mobile/${data._id}`, data);
        // console.log("response.data", response);
        setEditProducts(data);
        // dispatch(EDIT_MOBILE(response.data.mobile))
    }
    const deleteMobile = async (data) => {
        try {
            const response = await axios.delete(`http://localhost:8000/delete/${data._id}`);
            console.log("response.data", response);
            dispatch(DELETE_MOBILE(data))
        }
        catch (error) {
            console.log("in error")
        }
        console.log("deleteMobile", data)
        // dispatch(DELETE_MOBILE(data))
    }
    return (
        <>

            {props.isAdmin ?
                <tr>
                    <td>{props.mobileItem.name}</td>
                    <td><i className="bi bi-currency-rupee" style={{fontSize: "14px"}}></i>{Number(props.mobileItem.price).toLocaleString("en-IN")}</td>
                    <td>{props.mobileItem.os}</td>
                    <td>{props.mobileItem.rating}</td>
                    <td>{props.mobileItem.storage}</td>
                    <td>{props.mobileItem.color}</td>
                    <td>{props.mobileItem.battery}</td>
                    <td>{props.mobileItem.processor}</td>
                    <td>{props.mobileItem.primary_camera}</td>
                    <td>{props.mobileItem.front_camera}</td>
                    <td>{props.mobileItem.Zoom}</td>
                    <td className="text-center">
                        <Button variant="link" onClick={() => { editMobile(props.mobileItem) }}>
                            <i className="bi bi-pencil"></i>
                        </Button>
                        <Button variant="link" onClick={() => { deleteMobile(props.mobileItem) }}>
                            <i className="bi bi-trash3"></i>
                        </Button>
                    </td>
                </tr>
                :
                <Col sm={3}>
                    <Card className="mb-4">
                        <Card.Body>
                        {/* {JSON.stringify(props.compareItemRef.current)} */}
                            <Card.Title>{props.mobileItem.name}</Card.Title>
                            <Card.Text style={{marginLeft: "-3px"}} className="mb-0 align-items-center d-flex justify-content-between">
                                <div>
                                    <i className="bi bi-currency-rupee" style={{fontSize: "14px"}}></i>{Number(props.mobileItem.price).toLocaleString("en-IN")}
                                </div>
                                <Badge bg="success">{props.mobileItem.rating} <i className="bi bi-star-fill"></i></Badge>
                            </Card.Text>
                            <Card.Text>
                                <ul className="card-list">
                                    <li>{props.mobileItem.os}</li>
                                    <li>{props.mobileItem.storage}</li>
                                    <li>{props.mobileItem.color}</li>
                                    <li>{props.mobileItem.battery}</li>
                                </ul>
                            </Card.Text>
                            <Button
                                disabled={(!isSelected && compareMobileArray.length == 2)}
                                variant={`${isSelected ? "secondary" : "primary"}`}
                                onClick={() => { selectMobile(props.mobileItem) }}
                            >
                                {isSelected ? "Selected" : "Select"}
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            }
            <MobileAdd editedProduct={editedProduct} popupShow={popupShow} showMobilePopup={editMobile} />
        </>

    )
}