import Wrapper from "@/components/layout/Wrapper";
import getAllContentByMenuId from "@/services/contentService";
import getAllMenuItem from "@/services/menuService";
import BlogSingleDynamic from "./BlogSingleDynamic";

// const tourMetadatas = {
//     Makkah_City_Ziarah_Vehicle_Sharing_With_Guide : {
//         title : "Makkah City Ziarah - Vehicle Sharing with Expert Guide | DreamZiarah.com",
//         description : "Experience the spiritual journey of Makkah City Ziarah with our convenient Vehicle Sharing option. Join fellow travelers on this guided tour led by our expert guides. Explore sacred sites and deepen your connection to the holy city in the company of like-minded pilgrims."
//     },
//     Makkah_City_Ziarah_Luxury_Private_Vehicle_Without_Guide : {
//         title : "Luxury Private Vehicle Tour - Makkah City Ziarah | DreamZiarah.com",
//         description : "Indulge in the epitome of comfort with our Luxury Private Vehicle Tour of Makkah City Ziarah. Enjoy the flexibility of a private journey, exploring sacred destinations at your pace. Immerse yourself in the spirituality of Makkah with the freedom of a private luxury vehicle."
//     },
//     Makkah_City_Ziarah_Luxury_Private_Vehicle_With_Guide : {
//         title : "Guided Luxury Ziarah - Makkah City | DreamZiarah.com",
//         description : "Elevate your Makkah City Ziarah experience with our Luxury Private Vehicle and Expert Guide. Immerse yourself in the spiritual ambiance as our knowledgeable guide leads you through sacred landmarks. Revel in the comfort of luxury travel with a personalized touch."
//     }
// }

// export const metadata = {
//   title: "Ziarah Packages for Spiritual Exploration - Dream Ziarah",
//   description:  "Embark on a soul-stirring Ziarah journey with DreamZiarah.com. Discover sacred destinations and enrich your spiritual experience with our meticulously curated Ziarah packages.",
// };


// export async function generateMetadata({ params, searchParams }, parent) {
//     const slug = params?.slug[0];
   
//     return {
//       title: tourMetadatas[slug]?.title,
//       description : tourMetadatas[slug]?.description
//     }
//   }

export async function generateStaticParams() {
  const data = await getAllMenuItem();
  const blogId = data?.menus?.find((item) => item.name === "Blog")?.id;
  
  const blogContents = await getAllContentByMenuId(blogId);
//  console.log(blogContents);
  return [{ slug: '1' }, { slug: '2' }, { slug: '3' }]
}

export default function Blog({ params }) {
  
  return (
    <>
      <Wrapper>
        <BlogSingleDynamic params={params}/>
      </Wrapper>
    </>
  );
}
