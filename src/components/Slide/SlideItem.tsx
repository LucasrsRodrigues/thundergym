import { ReactNode } from "react";

interface SlideItemProps{
  image?: string;
  children?: ReactNode;
}

export function SlideItem({ image, children}:SlideItemProps){
  return(
    <div data-src="/slide/slide1.jpg" >
      Life goes easy on me

      Most of the time ♪
    </div>
  );
}