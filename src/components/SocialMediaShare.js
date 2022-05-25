import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

const SocialMediaShare = () => {
  const shareUrl = "http://github.com";
  const title = "GitHub";
  return (
    <div className="social-share">
      <h2>Share: </h2>
      <div className="share-icons">
        <FacebookShareButton url={shareUrl} quote={title} className="share-btn">
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} quote={title} className="share-btn">
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default SocialMediaShare;
