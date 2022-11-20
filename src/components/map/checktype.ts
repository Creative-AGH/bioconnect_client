import compost from "../../assets/img/compost.png";
import green from "../../assets/img/green.png";
import powder from "../../assets/img/powder.png";

export default function checkType(type: string) {
  switch (type) {
    case "HASH":
      return powder;
    case "WOOD":
      return compost;
    case "GRASS":
      return green;
    case "container":
      return "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png";
    default:
      return "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png";
  }
}
