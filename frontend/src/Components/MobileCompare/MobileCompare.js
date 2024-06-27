import { Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function MobileCompare() {
    // const compareMobileList = useSelector(state => state.compareMobileArray);
    // console.log("compareMobileList", compareMobileList);
    const newcompareList = JSON.parse(localStorage.getItem("compareList"))
    if (newcompareList?.length > 0) {
        var mobileKey = Object.keys(newcompareList[0]);
    }
    // console.log("mobileKey", mobileKey);
    return (
        <Container className="py-4">
            <div className="mb-4">
                <NavLink to="/mobile">Back to Mobile list</NavLink>
            </div>
            <Table bordered hover>
                {mobileKey ?
                    <>
                        <thead>
                            <tr>
                                <th width="350">Spec</th>
                                {newcompareList && newcompareList.map((tdItem, index) => {
                                    return <th key={index}>Mobile {index}</th>
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mobileKey && mobileKey.map((itemName, index) => {
                                    return <tr key={index}>
                                        {(itemName != "_id" && itemName != "__v") && <td className="text-danger text-capitalize"><strong>{itemName}</strong></td>}
                                        {newcompareList.map((tdItem, index) => {
                                            // console.log("tdItem", tdItem[itemName], itemName);
                                            if(itemName != "_id" && itemName != "__v") {
                                                return <td key={index} className="text-capitalize">{tdItem[itemName]}</td>
                                            }
                                        })}
                                    </tr>
                                })
                            }
                        </tbody>
                    </>
                    :
                    <tbody>
                        <tr>
                            <td className="text-center">No Records Found</td>
                        </tr>
                    </tbody>
                }
            </Table>
        </Container>
    )
}