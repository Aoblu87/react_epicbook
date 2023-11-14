
import React, { useState } from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { PencilFill, Trash3Fill } from "react-bootstrap-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bearer } from "../Bearer";
import EditComment from "./EditComment";

export default function CommentList({
  id,
  comments,
  setComments,
  loading,
  setLoading,
}) {
  const [editingComment, setEditingComment] = useState(null);

  const getComments = () => {
    try {
      fetch(`https://striveschool-api.herokuapp.com/api/books/${id}/comments/`)
        .then((r) => r.json())
        .then(setComments);
      // .finally(() => {
      //   setLoading(false);
      // });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    setLoading(true);
    try {
      fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
        method: "DELETE",
        headers: {
          Authorization: Bearer,
        },
      })
        .then((r) => {
          if (r.ok) {
            toast.success("Deleted successfully!", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          } else {
            toast.error("Something went wrong!", {
              position: toast.POSITION.TOP_LEFT,
            });
          }
        })
        .then(getComments);
      // .finally(() => {
      //   setLoading(false);
      // });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditComment = (comment) => {
    setEditingComment(comment);
  };

  // return loading ? (
  //   <div className="d-flex mt-5">
  //     <Spinner animation="border" variant="primary" className="mx-auto" />
  //   </div>
  // ) : (
  return comments.map((comment) => (
    <ListGroup.Item as="li" key={comment._id}>
      <Row className="justify-content-between">
        {editingComment && editingComment._id === comment._id ? (
          <>
            <EditComment
              comment={comment}
              editingComment={editingComment}
              setEditingComment={setEditingComment}
            />
          </>
        ) : (
          <>
            <Col xs={12}>

<Card>

  <Card.Image>
    <a href="#" type="button" class="btn">
      <img src="https://farm3.staticflickr.com/2764/4350166105_be2c85cdb5_z_d.jpg" alt="user-image" />
    </a>
  </Card.Image>



  <div class="card-info">




    <hr>

    <div class="content">
      <p>"Hi Tom. Just to formally acknowledge all your super service and help. Before I found this Bentley I had contacted a lot of other dealers and visited one or two also. I have to say that from the first initial phone contact with you....you were super helpful, totally knowledgeable and very pragmatic. You guided me through step by step all I needed to know about buying a used prestige car and really allayed my fears in a very professional way. When I came over to see the car, I was so impressed. The car is amazing and your customer focus is first class. It is rare to see that these days. Your Dad drove all the way to Lancashire to deliver the car today and he couldn't have been more helpful. I would happily recommend LKC Motors to anyone. Wherever you are in the UK you just don't need to bother to go anywhere else but these people. Seriously!"</p>

       <div class="name">
      <p>
        Andrew McLaren - <strong>2005 Bentley Continental</strong></p>
    </div>
    </div>
  </div>
</div>
</div>
          </>
        )}
      </Row>
    </ListGroup.Item>
  ));
  // );
}
