interface Jwpltx {
  ready: (analyticsid: string, hostname: string, feedid: string, mediaid: string, title: string, accountid?: number) => void;
  adImpression: () => void;
  seek: (offset: number, duration: number) => void;
  seeked: () => void;
  time: (position: number, duration: number) => void;
  complete: () => void;
  remove: () => void;
}
