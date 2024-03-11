import Wrapper from "@/components/layout/Wrapper";
import TourHeading from "@/components/tour-single/TourHeading";
import TourSingle from "@/components/tour-single/TourSingle";
import getAllContentByMenuId from "@/services/contentService";
import getAllMenuItem from "@/services/menuService";

const tourMetadatas = {
  //makka
  "makkah-city-ziarah-vehicle-sharing-with-guide": {
    title:
      "Explore Ziyarat Places in Makkah with Dream Ziarah | Discover Holiness",
    description:
      "Join on a spiritual journey to explore sacred Ziyarat places in Makkah with Dream Ziarah. Experience the essence of holiness in the heart of Saudi Arabia with our shared and guided tours.",
  },
  "makkah-city-ziarah-luxury-private-vehicle-without-guide-(5-person-family)": {
    title:
      "Explore Ziyarat Places in Makkah with Dream Ziarah | Discover Holiness",
    description:
      "Join on a spiritual journey to explore sacred Ziyarat places in Makkah with Dream Ziarah. Experience the essence of holiness in the heart of Saudi Arabia with our shared and guided tours.",
  },
  "makkah-city-ziarah-luxury-private-vehicle-without-guide-(15-person-large-group)":
    {
      title:
        "Explore Ziyarat Places in Makkah with Dream Ziarah | Discover Holiness",
      description:
        "Join on a spiritual journey to explore sacred Ziyarat places in Makkah with Dream Ziarah. Experience the essence of holiness in the heart of Saudi Arabia with our shared and guided tours.",
    },
  "makkah-city-ziarah-luxury-private-vehicle-without-guide-(3-person-luxury)": {
    title:
      "Explore Ziyarat Places in Makkah with Dream Ziarah | Discover Holiness",
    description:
      "Join on a spiritual journey to explore sacred Ziyarat places in Makkah with Dream Ziarah. Experience the essence of holiness in the heart of Saudi Arabia with our shared and guided tours.",
  },
  "makkah-city-ziarah-luxury-private-vehicle-without-guide-(10-person-group)": {
    title:
      "Explore Ziyarat Places in Makkah with Dream Ziarah | Discover Holiness",
    description:
      "Join on a spiritual journey to explore sacred Ziyarat places in Makkah with Dream Ziarah. Experience the essence of holiness in the heart of Saudi Arabia with our shared and guided tours.",
  },
  "makkah-city-ziarah-luxury-private-vehicle-with-guide-(10-person-group)": {
    title:
      "Explore Ziyarat Places in Makkah with Dream Ziarah | Discover Holiness",
    description:
      "Join on a spiritual journey to explore sacred Ziyarat places in Makkah with Dream Ziarah. Experience the essence of holiness in the heart of Saudi Arabia with our shared and guided tours.",
  },
  "makkah-city-ziarah-luxury-private-vehicle-with-guide-(5-person-family)": {
    title:
      "Explore Ziyarat Places in Makkah with Dream Ziarah | Discover Holiness",
    description:
      "Join on a spiritual journey to explore sacred Ziyarat places in Makkah with Dream Ziarah. Experience the essence of holiness in the heart of Saudi Arabia with our shared and guided tours.",
  },
  "makkah-city-ziarah-luxury-private-vehicle-with-guide-(3-person-luxury)": {
    title:
      "Explore Ziyarat Places in Makkah with Dream Ziarah | Discover Holiness",
    description:
      "Join on a spiritual journey to explore sacred Ziyarat places in Makkah with Dream Ziarah. Experience the essence of holiness in the heart of Saudi Arabia with our shared and guided tours.",
  },
  "makkah-city-ziarah-luxury-private-vehicle-with-guide-(15-person-large-group)":
    {
      title:
        "Explore Ziyarat Places in Makkah with Dream Ziarah | Discover Holiness",
      description:
        "Join on a spiritual journey to explore sacred Ziyarat places in Makkah with Dream Ziarah. Experience the essence of holiness in the heart of Saudi Arabia with our shared and guided tours.",
    },

  //end makkah

  //madina
  "madinah-city-ziarah-vehicle-sharing-with-guide": {
    title:
      "Discover Ziyarat Places in Madina with Dream Ziarah | Spiritual Journeys",
    description:
      "Join Dream Ziarah to discover the sacred Ziyarat places in Madina. Our tours offer a deep dive into the spiritual history of Islam, guiding you through Madina's most revered sites.",
  },
  "madinah-city-ziarah-luxury-private-vehicle-with-guide-(5-person-family)": {
    title:
      "Discover Ziyarat Places in Madina with Dream Ziarah | Spiritual Journeys",
    description:
      "Join Dream Ziarah to discover the sacred Ziyarat places in Madina. Our tours offer a deep dive into the spiritual history of Islam, guiding you through Madina's most revered sites.",
  },
  "madinah-city-ziarah-luxury-private-vehicle-with-guide-(3-person-luxury)": {
    title:
      "Discover Ziyarat Places in Madina with Dream Ziarah | Spiritual Journeys",
    description:
      "Join Dream Ziarah to discover the sacred Ziyarat places in Madina. Our tours offer a deep dive into the spiritual history of Islam, guiding you through Madina's most revered sites.",
  },
  "madinah-city-ziarah-luxury-private-vehicle-with-guide-(10-person-group)": {
    title:
      "Discover Ziyarat Places in Madina with Dream Ziarah | Spiritual Journeys",
    description:
      "Join Dream Ziarah to discover the sacred Ziyarat places in Madina. Our tours offer a deep dive into the spiritual history of Islam, guiding you through Madina's most revered sites.",
  },
  "madinah-city-ziarah-luxury-private-vehicle-without-guide-(5-person-family)":
    {
      title:
        "Discover Ziyarat Places in Madina with Dream Ziarah | Spiritual Journeys",
      description:
        "Join Dream Ziarah to discover the sacred Ziyarat places in Madina. Our tours offer a deep dive into the spiritual history of Islam, guiding you through Madina's most revered sites.",
    },
  "madinah-city-ziarah-luxury-private-vehicle-without-guide-(3-person-luxury)":
    {
      title:
        "Discover Ziyarat Places in Madina with Dream Ziarah | Spiritual Journeys",
      description:
        "Join Dream Ziarah to discover the sacred Ziyarat places in Madina. Our tours offer a deep dive into the spiritual history of Islam, guiding you through Madina's most revered sites.",
    },
  "madinah-city-ziarah-luxury-private-vehicle-with-guide-(15-person-large-group)":
    {
      title:
        "Discover Ziyarat Places in Madina with Dream Ziarah | Spiritual Journeys",
      description:
        "Join Dream Ziarah to discover the sacred Ziyarat places in Madina. Our tours offer a deep dive into the spiritual history of Islam, guiding you through Madina's most revered sites.",
    },
  "madinah-city-ziarah-luxury-private-vehicle-without-guide-(15-person-large-group)":
    {
      title:
        "Discover Ziyarat Places in Madina with Dream Ziarah | Spiritual Journeys",
      description:
        "Join Dream Ziarah to discover the sacred Ziyarat places in Madina. Our tours offer a deep dive into the spiritual history of Islam, guiding you through Madina's most revered sites.",
    },
  "madinah-city-ziarah-luxury-private-vehicle-without-guide-(10-person-group)":
    {
      title:
        "Discover Ziyarat Places in Madina with Dream Ziarah | Spiritual Journeys",
      description:
        "Join Dream Ziarah to discover the sacred Ziyarat places in Madina. Our tours offer a deep dive into the spiritual history of Islam, guiding you through Madina's most revered sites.",
    },
  //end madina

  // Jeddah
  "day-trip-from-makkah-to-jeddah-vehicle-sharing-with-guide": {
    title:
      "Explore Ziyarat Places in Jeddah with Dream Ziarah | Spiritual Tours",
    description:
      "Experience Jeddah like never before with Dream Ziarah. Explore sacred Ziyarat places and uncover the spiritual and cultural heritage of this historic city.",
  },
  "day-trip-from-makkah-to-jeddah-luxury-private-vehicle-(3-person-luxury)": {
    title:
      "Explore Ziyarat Places in Jeddah with Dream Ziarah | Spiritual Tours",
    description:
      "Experience Jeddah like never before with Dream Ziarah. Explore sacred Ziyarat places and uncover the spiritual and cultural heritage of this historic city.",
  },
  "day-trip-from-makkah-to-jeddah-luxury-private-vehicle-(5-person-family)": {
    title:
      "Explore Ziyarat Places in Jeddah with Dream Ziarah | Spiritual Tours",
    description:
      "Experience Jeddah like never before with Dream Ziarah. Explore sacred Ziyarat places and uncover the spiritual and cultural heritage of this historic city.",
  },
  "day-trip-from-makkah-to-jeddah-luxury-private-vehicle-(10-person-group)": {
    title:
      "Explore Ziyarat Places in Jeddah with Dream Ziarah | Spiritual Tours",
    description:
      "Experience Jeddah like never before with Dream Ziarah. Explore sacred Ziyarat places and uncover the spiritual and cultural heritage of this historic city.",
  },
  "day-trip-from-makkah-to-jeddah-luxury-private-vehicle-(15-person-large-group)":
    {
      title:
        "Explore Ziyarat Places in Jeddah with Dream Ziarah | Spiritual Tours",
      description:
        "Experience Jeddah like never before with Dream Ziarah. Explore sacred Ziyarat places and uncover the spiritual and cultural heritage of this historic city.",
    },
  //end jeddah
  // taif
  "day-trip-from-makkah-to-taif-vehicle-sharing-with-guide": {
    title:
      "Ziyarat Places in Taif with Dream Ziarah | Serenity and Spirituality",
    description:
      "With Dream Ziarah, explore the serene and sacred Ziyarat places in Taif. Our tours are tailored for those seeking peace and spiritual enrichment in the breathtaking landscapes of Taif.",
  },
  "day-trip-from-makkah-to-taif-luxury-private-vehicle-(3-person-luxury)": {
    title:
      "Ziyarat Places in Taif with Dream Ziarah | Serenity and Spirituality",
    description:
      "With Dream Ziarah, explore the serene and sacred Ziyarat places in Taif. Our tours are tailored for those seeking peace and spiritual enrichment in the breathtaking landscapes of Taif.",
  },
  "day-trip-from-makkah-to-taif-luxury-private-vehicle-(5-person-family)": {
    title:
      "Ziyarat Places in Taif with Dream Ziarah | Serenity and Spirituality",
    description:
      "With Dream Ziarah, explore the serene and sacred Ziyarat places in Taif. Our tours are tailored for those seeking peace and spiritual enrichment in the breathtaking landscapes of Taif.",
  },
  "day-trip-from-makkah-to-taif-luxury-private-vehicle-(10-person-group)": {
    title:
      "Ziyarat Places in Taif with Dream Ziarah | Serenity and Spirituality",
    description:
      "With Dream Ziarah, explore the serene and sacred Ziyarat places in Taif. Our tours are tailored for those seeking peace and spiritual enrichment in the breathtaking landscapes of Taif.",
  },
  "day-trip-from-makkah-to-taif-luxury-private-vehicle-(15-person-large-group)":
    {
      title:
        "Ziyarat Places in Taif with Dream Ziarah | Serenity and Spirituality",
      description:
        "With Dream Ziarah, explore the serene and sacred Ziyarat places in Taif. Our tours are tailored for those seeking peace and spiritual enrichment in the breathtaking landscapes of Taif.",
    },
  //end taif
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
