import React from "react";
import CardImg from "./../../Assets/Rarity1.jpeg";

export default function Rarity() {
  return (
    <div className="container">
      <div className="row">
        <div class="col-12 col-lg-12" Style="font-size: 20px;padding-left:0;">
          <span>UPCOMMING OUR ARTS</span>
        </div>
        <div class="col-12 col-lg-12" Style="font-size: 45px;padding-left:0; ">
          Rarity
        </div>
      </div>
      <div className="row justify-content-between mt-3">
        <div class="card col-12 col-sm-12 col-md-3">
          <img class="card-img-top" src={CardImg} alt="" Style="width:100%;" />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="card col-12 col-sm-12 col-md-3">
          <img class="card-img-top" src={CardImg} alt="" Style="width:100%;" />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="card col-12 col-sm-12 col-md-3">
          <img class="card-img-top" src={CardImg} alt="" Style="width:100%;" />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
