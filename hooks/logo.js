import { BASE_URL, GET_SITESETTINGS } from "@/constant/constants";
const useLogo = async() => {
    const res = await fetch(GET_SITESETTINGS);
  const siteSettings =  await res.json();
  const logoUrl = `${BASE_URL}/${siteSettings.general_settings[0].logo}`;
  return logoUrl;
}

export default useLogo;