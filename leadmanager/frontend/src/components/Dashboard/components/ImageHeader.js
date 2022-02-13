import * as React from 'react';
import { CardMedia } from "@mui/material";

function ImageHeader(props) {
  return (
    <section className="bg-dark a-img-header">
      <div className="a-center">
        <div className="container">
          <div className="a-center">
            {/* <CardMedia
              component="img"
              height="20vw"
              width="20vw"
              image="https://source.unsplash.com/random"
            />
            <h1>Name</h1> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageHeader;
