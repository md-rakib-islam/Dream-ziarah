import Image from 'next/image';
import loading_image from "../public/img/loading_img.jpg";

export default function Loading() {
    // Or a custom loading skeleton component
    return <Image height={200} width={200} src={loading_image}/>
  }