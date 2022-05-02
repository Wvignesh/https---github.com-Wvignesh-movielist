import React, { useState } from "react";

function MovieCard(props) {

  const [like, setLike]=useState(0)
  const [dislike, setDislike]=useState(0)

  return (

    <>
       <div className="col-lg-4 py-3 ">
            <div class=" h-100">
              <img
                src={props.data.image}
                class="card-img-top movie-img "
                alt="movie-img"
              />
              <div class="card-body d-flex justify-content-between ">
                <h5 class="card-title fs-3  ">{props.data.title}</h5>
                <span className="rating "><i class="fa-solid fa-star rate"></i> {props.data.rating}  </span>
              </div>
              <p class="card-text fs-"> {props.data.discription} </p>
              <div >
                
              <button onClick={()=>setLike(like+1)} className="px-3 mx-2">👍 {like}</button>
              <button onClick={()=> setDislike(dislike+1)} className="px-3 mx-2">👎🏻 {dislike}</button>
              </div>
            </div>
          </div>
    </>
  );
}

export default MovieCard;
