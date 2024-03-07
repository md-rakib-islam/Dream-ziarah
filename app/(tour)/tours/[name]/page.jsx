import Wrapper from "@/components/layout/Wrapper";
import TourHeading from "@/components/tour-single/TourHeading";
import TourSingle from "@/components/tour-single/TourSingle";
import getAllContentByMenuId from "@/services/contentService";
import getAllMenuItem from "@/services/menuService";

const tourMetadatas = {
  "makkah-city-ziarah-vehicle-sharing-with-guide": {
    title:
      "Makkah City Ziarah - Vehicle Sharing with Expert Guide | DreamZiarah.com",
    description:
      "Experience the spiritual journey of Makkah City Ziarah with our convenient Vehicle Sharing option. Join fellow travelers on this guided tour led by our expert guides. Explore sacred sites and deepen your connection to the holy city in the company of like-minded pilgrims.",
  },
  "makkah-city-ziarah-luxury-private-vehicle-with-guide-(3-person-luxury)": {
    title:
      "Makkah City Ziarah Luxury Private Vehicle With Guide (3 Person Luxury) | DreamZiarah.com",
    description:
      "Experience the spiritual journey of Makkah City Ziarah with our convenient Vehicle Sharing option. Join fellow travelers on this guided tour led by our expert guides. Explore sacred sites and deepen your connection to the holy city in the company of like-minded pilgrims.",
  },
  "makkah-city-ziarah-luxury-private-vehicle-with-guide-(5-person-family)": {
    title:
      "Makkah City Ziarah Luxury Private Vehicle With Guide (5 Person Family) | DreamZiarah.com",
    description:
      "Experience the spiritual journey of Makkah City Ziarah with our convenient Vehicle Sharing option. Join fellow travelers on this guided tour led by our expert guides. Explore sacred sites and deepen your connection to the holy city in the company of like-minded pilgrims.",
  },
  "makkah-city-ziarah-luxury-private-vehicle-with-guide-(10-person-group)": {
    title:
      "Makkah City Ziarah Luxury Private Vehicle With Guide (10 Person Group) | DreamZiarah.com",
    description:
      "Experience the spiritual journey of Makkah City Ziarah with our convenient Vehicle Sharing option. Join fellow travelers on this guided tour led by our expert guides. Explore sacred sites and deepen your connection to the holy city in the company of like-minded pilgrims.",
  },
  "day-trip-from-makkah-to-jeddah-luxury-private-vehicle-(3-person-luxury)": {
    title:
      "Day Trip from Makkah to Jeddah Luxury Private Vehicle (3 Person Luxury) | DreamZiarah.com",
    description:
      "Experience the spiritual journey of Makkah City Ziarah with our convenient Vehicle Sharing option. Join fellow travelers on this guided tour led by our expert guides. Explore sacred sites and deepen your connection to the holy city in the company of like-minded pilgrims.",
  },
  "day-trip-from-makkah-to-jeddah-luxury-private-vehicle-(5-person-family)": {
    title:
      "Day Trip from Makkah to Jeddah Luxury Private Vehicle (5 Person Family) | DreamZiarah.com",
    description:
      "Experience the spiritual journey of Makkah City Ziarah with our convenient Vehicle Sharing option. Join fellow travelers on this guided tour led by our expert guides. Explore sacred sites and deepen your connection to the holy city in the company of like-minded pilgrims.",
  },
  "day-trip-from-makkah-to-jeddah-luxury-private-vehicle-(10-person-group)": {
    title:
      "Day Trip from Makkah to Jeddah Luxury Private Vehicle (10 Person Group) | DreamZiarah.com",
    description:
      "Experience the spiritual journey of Makkah City Ziarah with our convenient Vehicle Sharing option. Join fellow travelers on this guided tour led by our expert guides. Explore sacred sites and deepen your connection to the holy city in the company of like-minded pilgrims.",
  },
  "day-trip-from-makkah-to-jeddah-luxury-private-vehicle-(15-person-large-group)":
    {
      title:
        "Day Trip from Makkah to Jeddah Luxury Private Vehicle (15 Person Large Group) | DreamZiarah.com",
      description:
        "Experience the spiritual journey of Makkah City Ziarah with our convenient Vehicle Sharing option. Join fellow travelers on this guided tour led by our expert guides. Explore sacred sites and deepen your connection to the holy city in the company of like-minded pilgrims.",
    },

  "Makkah City Ziarah Luxury Private Vehicle With Guide (15 Person Large Group)":
    {
      location: "Mecca, Saudi Arabia",
      numberOfReviews: "23",
      languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
      groupSize: "11-15",
      itinerarySrc:
        "https://www.google.com/maps/d/u/1/embed?mid=12hqGh2hTCmUqQIo60aGhSTOz3wqtpSQ&ehbc=2E312F&z=6",
    },
  "makkah-city-ziarah-luxury-private-vehicle-without-guide": {
    title: "Luxury Private Vehicle Tour - Makkah City Ziarah | DreamZiarah.com",
    description:
      "Indulge in the epitome of comfort with our Luxury Private Vehicle Tour of Makkah City Ziarah. Enjoy the flexibility of a private journey, exploring sacred destinations at your pace. Immerse yourself in the spirituality of Makkah with the freedom of a private luxury vehicle.",
  },
  "makkah-city-ziarah-luxury-private-vehicle-with-guide": {
    title: "Guided Luxury Ziarah - Makkah City | DreamZiarah.com",
    description:
      "Elevate your Makkah City Ziarah experience with our Luxury Private Vehicle and Expert Guide. Immerse yourself in the spiritual ambiance as our knowledgeable guide leads you through sacred landmarks. Revel in the comfort of luxury travel with a personalized touch.",
  },
  "day-trip-from-makkah-to-taif-vehicle-sharing-with-guide": {
    title: "Guided Luxury Taif Tour - Taif City | DreamZiarah.com",
    description:
      "Elevate your Makkah City Ziarah experience with our Luxury Private Vehicle and Expert Guide. Immerse yourself in the spiritual ambiance as our knowledgeable guide leads you through sacred landmarks. Revel in the comfort of luxury travel with a personalized touch.",
  },
  "day-trip-from-makkah-to-jeddah-vehicle-sharing-with-guide": {
    title: "Guided Luxury Jeddah Tour - Jeddah City | DreamZiarah.com",
    description:
      "Elevate your Makkah City Ziarah experience with our Luxury Private Vehicle and Expert Guide. Immerse yourself in the spiritual ambiance as our knowledgeable guide leads you through sacred landmarks. Revel in the comfort of luxury travel with a personalized touch.",
  },
  "day-trip-from-makkah-to-jeddah-luxury-private-vehicle": {
    title: "Guided Luxury Jeddah Tour - Jeddah City | DreamZiarah.com",
    description:
      "Elevate your Makkah City Ziarah experience with our Luxury Private Vehicle and Expert Guide. Immerse yourself in the spiritual ambiance as our knowledgeable guide leads you through sacred landmarks. Revel in the comfort of luxury travel with a personalized touch.",
  },
  "day-trip-from-makkah-to-taif-luxury-private-vehicle": {
    title: "Guided Luxury Taif Tour - Taif City | DreamZiarah.com",
    description:
      "Elevate your Makkah City Ziarah experience with our Luxury Private Vehicle and Expert Guide. Immerse yourself in the spiritual ambiance as our knowledgeable guide leads you through sacred landmarks. Revel in the comfort of luxury travel with a personalized touch.",
  },
};

// export const metadata = {
//   title: "Ziarah Packages for Spiritual Exploration - Dream Ziarah",
//   description:  "Embark on a soul-stirring Ziarah journey with DreamZiarah.com. Discover sacred destinations and enrich your spiritual experience with our meticulously curated Ziarah packages.",
// };

export async function generateStaticParams() {
  const data = await getAllMenuItem();
  // const ziarahId = data?.menus?.find((item) => item.name === "Ziarah")?.id;
  const ziarahId = data?.menus
    ?.find((item) => item.name == "Tours")
    ?.children?.find((child) => child?.name == "Makka Tours")?.id;

  const tourContents = await getAllContentByMenuId(ziarahId);

  const modifiedContents = tourContents?.filter((item) => {
    console.log("modifiedContents", item);
    if (
      item.name === "makkah" ||
      item.name === "medina" ||
      item.name === "jedda" ||
      item.name === "jeddah" ||
      item.name === "tabuk" ||
      item.name === "taif"
    )
      return false;
    return true;
  });
  // console.log("fdf", modifiedContents);
  return modifiedContents?.map((item) => ({
    name: item?.name?.toLowerCase()?.split(" ")?.join("-"),
    // slug : item?.id?.toString()
  }));
}

export async function generateMetadata({ params, searchParams }, parent) {
  const { name } = params;

  return {
    title: tourMetadatas[name]?.title,
    description: tourMetadatas[name]?.description,
  };
}

export default function Tour({ params }) {
  return (
    <>
      <Wrapper>
        <TourSingle params={params}>
          <TourHeading params={params} />
        </TourSingle>
      </Wrapper>
    </>
  );
}
