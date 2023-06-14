import { basics } from './resume.json';

export const getName = () => {
  return basics.name;
}

export const getLabel = () => {
  return basics.label;
}

export const getEmail = () => {
  return {
    emailDisplay: basics.email,
    emailUrl: `mailto:${basics.email}`,
    emailIcon: "mdi:email"
  }
}

export const getPhone = () => {
  return {
    phoneDisplay: basics.phone,
    phoneIcon: "mdi:phone-classic"
  }
}

export const getUrl = () => {
  return {
    urlDisplay: basics.url.split('//')[1],
    urlUrl: basics.url,
    urlIcon: "mdi:earth"
  }
}

export const getLocation = () => {
  return {
    locationDisplay: `${basics.location.city}, ${basics.location.region}`,
    locationIcon: "mdi:map-marker-radius"
  }
}

export const getProfiles = () => {
  return basics.profiles.map((profile) => ({
    profileDisplay: profile.username,
    profileUrl: profile.url,
    profileIcon: getProfileIcon(profile.network)
  }))
}

export const getSummary = () => {
  return basics.summary
}

function getProfileIcon(network: string) {
  if (network === 'GitHub') return 'mdi:github';
  if (network === 'LinkedIn') return 'mdi:linkedin';
  return ''
}
