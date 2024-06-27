import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { ADD_MOBILE, EDIT_MOBILE, FETCH_MOBILE_LIST } from "../../mobileRedux/action";


export default function MobileAdd(props) {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    // console.log("props.editedProduct", props.editedProduct);
    const AddMobileSubmit = async (data) => {
        // console.log("data", data);
        if (!props.editedProduct) {
            const response = await axios.post("http://localhost:8000/add/mobile", data);
            // console.log("response.data", response);
            dispatch(ADD_MOBILE(response.data.mobile))
            props.showMobilePopup();
        }
        else {
            // console.log(`http://localhost:8000/edit/mobile/${props.editedProduct._id}`);
            console.log("data", data);
            const response = await axios.put(`http://localhost:8000/edit/mobile/${props.editedProduct._id}`, {...data, _id:props.editedProduct._id});
            console.log("response.data", response);
            dispatch(EDIT_MOBILE(response.data.mobile))
            props.showMobilePopup();
        }

    }
    return (
        <Modal show={props.popupShow} onHide={props.showMobilePopup}>
            <Modal.Header closeButton>
                <Modal.Title>{props.editedProduct ? "Edit" : "Add"} Mobile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(AddMobileSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            defaultValue={props.editedProduct ? props.editedProduct.name : ""}
                            {...register("name", {
                                required: "Name is required",
                            })} />
                        {errors.name &&
                            <Form.Text className="text-danger">
                                {errors.name.message}
                            </Form.Text>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Price"
                            defaultValue={props.editedProduct ? props.editedProduct.price : ""}
                            {...register("price", {
                                required: "Price is required",
                            })}
                        />
                        {errors.price &&
                            <Form.Text className="text-danger">
                                {errors.price.message}
                            </Form.Text>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicOs">
                        <Form.Label>OS</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Os"
                            defaultValue={props.editedProduct ? props.editedProduct.os : ""}
                            {...register("os", {
                                required: "Os is required",
                            })}
                        />
                        {errors.os &&
                            <Form.Text className="text-danger">
                                {errors.os.message}
                            </Form.Text>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicRating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Rating"
                            defaultValue={props.editedProduct ? props.editedProduct.rating : ""}
                            {...register("rating", {
                                required: "Rating is required",
                            })}
                        />
                        {errors.rating &&
                            <Form.Text className="text-danger">
                                {errors.rating.message}
                            </Form.Text>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicStorage">
                        <Form.Label>Storage</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Storage"
                            defaultValue={props.editedProduct ? props.editedProduct.storage : ""}
                            {...register("storage", {
                                required: "Storage is required",
                            })}
                        />
                        {errors.storage &&
                            <Form.Text className="text-danger">
                                {errors.storage.message}
                            </Form.Text>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicColor">
                        <Form.Label>Color</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Color"
                            defaultValue={props.editedProduct ? props.editedProduct.color : ""}
                            {...register("color", {
                                required: "Color is required",
                            })}
                        />
                        {errors.color &&
                            <Form.Text className="text-danger">
                                {errors.color.message}
                            </Form.Text>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicBattery">
                        <Form.Label>Battery</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Battery"
                            defaultValue={props.editedProduct ? props.editedProduct.battery : ""}
                            {...register("battery", {
                                required: "Battery is required",
                            })}
                        />
                        {errors.battery &&
                            <Form.Text className="text-danger">
                                {errors.battery.message}
                            </Form.Text>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicProcessor">
                        <Form.Label>Processor</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Processor"
                            defaultValue={props.editedProduct ? props.editedProduct.processor : ""}
                            {...register("processor", {
                                required: "Processor is required",
                            })}
                        />
                        {errors.processor &&
                            <Form.Text className="text-danger">
                                {errors.processor.message}
                            </Form.Text>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPrimaryCamera">
                        <Form.Label>Primary Camera</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Primary Camera"
                            defaultValue={props.editedProduct ? props.editedProduct.primary_camera : ""}
                            {...register("primary_camera", {
                                required: "Primary Camera is required",
                            })}
                        />
                        {errors.primary_camera &&
                            <Form.Text className="text-danger">
                                {errors.primary_camera.message}
                            </Form.Text>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicFrontCamera">
                        <Form.Label>Front Camera</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Front Camera"
                            defaultValue={props.editedProduct ? props.editedProduct.front_camera : ""}
                            {...register("front_camera", {
                                required: "Front Camera is required",
                            })}
                        />
                        {errors.front_camera &&
                            <Form.Text className="text-danger">
                                {errors.front_camera.message}
                            </Form.Text>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicFrontZoom">
                        <Form.Label>Zoom</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Zoom"
                            defaultValue={props.editedProduct ? props.editedProduct.Zoom : ""}
                            {...register("Zoom", {
                                required: "Zoom is required",
                            })}
                        />
                        {errors.Zoom &&
                            <Form.Text className="text-danger">
                                {errors.Zoom.message}
                            </Form.Text>
                        }
                    </Form.Group>
                    <div className="mt-4">
                        <Button variant="secondary" className="me-3" onClick={props.showMobilePopup}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Save Mobile
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}