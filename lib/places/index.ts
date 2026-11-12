import type { Place } from "@/lib/types";
import { aquidneckPlaces } from "@/lib/places/aquidneck";
import { connecticutPlaces } from "@/lib/places/connecticut";
import { providencePlaces } from "@/lib/places/providence";
import { southPlaces } from "@/lib/places/south";

export const places: Place[] = [
  ...southPlaces,
  ...aquidneckPlaces,
  ...providencePlaces,
  ...connecticutPlaces,
];

const bySlug = new Map(places.map((place) => [place.slug, place]));

export function getPlace(slug: string) {
  return bySlug.get(slug);
}

export function placesByState(stateCode: Place["stateCode"]) {
  return places.filter((place) => place.stateCode === stateCode);
}

export function nearbyPlaces(place: Place) {
  return place.nearby
    .map((slug) => bySlug.get(slug))
    .filter((item): item is Place => Boolean(item));
}

export const regionLabels: Record<string, string> = {
  "south-county": "South County",
  newport: "Newport County",
  "east-bay": "East Bay",
  providence: "Providence and Kent County",
  "northern-ri": "Northern Rhode Island",
  "western-ri": "Western Rhode Island",
  "ct-shore": "Connecticut shoreline and New London County",
  "ct-extended": "The rest of Connecticut",
};

export function regionLabel(region: string) {
  return regionLabels[region] ?? region;
}
