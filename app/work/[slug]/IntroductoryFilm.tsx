import styles from "./IntroductoryFilm.module.css";

export default function IntroductoryFilm({ src, poster, label, className }: {
  src: string;
  poster: string;
  label: string;
  className: string;
}) {
  return (
    <div className={styles.insertion}>
      <figure className={`prototype-walkthrough ${className} ${styles.frame}`}>
        <video
          className={styles.video}
          width={1920}
          height={1080}
          muted
          playsInline
          controls
          preload="none"
          poster={poster}
          aria-label={label}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support embedded video. <a href={src}>Open the film.</a>
        </video>
      </figure>
    </div>
  );
}
