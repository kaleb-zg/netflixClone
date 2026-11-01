
import React, { useEffect, useState } from "react";
import requests from "../../Utility/requestUrls";
import { Play, Info, CloudHail } from "lucide-react";
import Styles from "./Banner.module.css";
import logo from "../../assets/image/logo.png";
import { movieInstance } from "../../Utility/MovieInstance";
import { BsGear } from "react-icons/bs";
const BANNER_BASE = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [bannerImage, setBannerImage] = useState({});

  useEffect(() => {
    async function fetchbannerImage() {
      const request = await movieInstance.get(requests.fetchNetflixOriginals);

      setBannerImage(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ],
      );
    }
    fetchbannerImage();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div
      className={Styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${BANNER_BASE}${bannerImage.backdrop_path}")`,
      }}
    >
      <div className={Styles.contents}>
        {/* Netflit image */}
        <img className={Styles.logoImg} src={logo} alt="netflix-logo" />

        {/* title */}
        <h1 className={Styles.title}> {bannerImage.original_name}</h1>

        {/* description */}
        <h1 className={Styles.description}>

          {truncate(bannerImage?.overview, 140)}
         
        </h1>

        {/* buttons */}
        <div className={Styles.buttonContainer}>
          <button className={Styles.button}>
            <Play size={30} />
            Play
          </button>
          <button className={Styles.button}>
            {" "}
            <Info size={30} /> My List
          </button>
        </div>
      </div>
      {/* fading */}
      <div className={Styles.fadeBottom}></div>
    </div>
  );
}

export default Banner;
