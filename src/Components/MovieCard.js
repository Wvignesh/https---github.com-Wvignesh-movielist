import React, { useState } from "react";

function MovieCard(props) {

  const [like, setLike]=useState(0)
  const [dislike, setDislike]=useState(0)
  const [toggle, setToggle] =useState(false)

  return (

    <>
       <div className="col-lg-4 py-3 ">
            <div class=" bg-light h-100">
              <img
                src={props.data.image}
                class="card-img-top movie-img "
                alt="movie-img"
              />
              <div class="card-body d-flex justify-content-between ">
                <h5 class="card-title fs-3  ">{props.data.title} <button onClick={()=>setToggle(!toggle)} className="btn btn-outline"><i class="fa-solid fa-angle-down "></i></button> </h5>
                <span className="rating "><i class="fa-solid fa-star rate"></i> {props.data.rating}  </span>
              </div>
              {
                toggle ?   <p class="card-text fs-5 px-3" > {props.data.discription} </p> : null
              }
              <div >
                
              <button onClick={()=>setLike(like+1)} className="px-3 mx-2">👍 {like}</button>
              <button onClick={()=> setDislike(dislike+1)} className="px-3 m-2">👎🏻 {dislike}</button>
              </div>
            </div>
          </div>
    </>
  );
}

export default MovieCard;
