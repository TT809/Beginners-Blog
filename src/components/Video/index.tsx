import ReactPlayer from "react-player";
import { transformImagePaths, combineClasses } from "../../utils/utils";
import { WEBSITE_URL } from "../../../BLOG_CONSTANTS/_BLOG_SETUP";

interface iVideoPlayer {
  url?: string;
  className?: String;
  WEBSITE_URL: "https://beginners-blog-pguybj4f5-tt809.vercel.app/"
}

const VideoPlayer = ({ url, className }: iVideoPlayer) => {
  return (
    <div className={combineClasses("w-full h-auto my-3", className)}>
      <ReactPlayer
        url={transformImagePaths(url)}
        width="100%"
        height="auto"
        controls={true}
        config={{
          file: {
            attributes: {
              controlsList: "nodownload",
            },
          },
        }}
      />
    </div>
  );
};

export default VideoPlayer;
