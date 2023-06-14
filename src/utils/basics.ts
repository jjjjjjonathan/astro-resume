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

function getProfileIcon(network: string) {
  if (network === 'GitHub') return 'mdi:github';
  if (network === 'LinkedIn') return 'mdi:linkedin';
  return ''
}

const reducers = {
  url(): object {
    return {
      url: basics.url,
      urlDisplay: basics.url.split('//')[1],
      urlIcon: 'fa6-solid:globe',
    };
  },

  location(): object {
    return {
      location: `${basics.location.city}, ${basics.location.region}`,
      locationIcon: 'fa6-solid:location-dot',
    };
  },

  email(): object {
    return {
      emailDisplay: basics.email,
      emailUrl: `mailto:${basics.email}`,
      emailIcon: 'fa6-solid:envelope',
    };
  },

  phone(): object | null {
    if (basics.phone.length < 1) {
      return null;
    } else {
      return {
        phone: basics.phone,
        icon: 'fa6-solid:phone',
      };
    }
  },

  profiles(): object {
    return basics.profiles.map((profile) => ({
      profileUsername: profile.username,
      profileUrl: profile.url,
      profileIcon:
        profile.network === 'GitHub'
          ? 'fa6-brands:github'
          : profile.network === 'LinkedIn'
          ? 'fa6-brands:linkedin'
          : null,
    }));
  },

  default(property: string): string | object {
    return basics[property as keyof typeof basics];
  },
};

export const getBasics = (property: string): string | object | null => {
  return (reducers[property as keyof typeof reducers] || reducers.default)(
    property
  );
};
