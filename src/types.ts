import type { AxiosInstance } from "axios";

export type TeamcowboyOptions = {
  readonly privateApiKey: string;
  readonly publicApiKey: string;
  readonly userAgent?: string;
  readonly authToken?: string;
  readonly verbose?: boolean;
};

export type Client = {
  readonly privateApiKey: string;
  readonly publicApiKey: string;
  readonly axiosInstance: AxiosInstance;
  readonly auth?: string;
};

export type EventType =
  | "game"
  | "doubleheader"
  | "postseason"
  | "match"
  | "meet"
  | "tournament"
  | "jamboree"
  | "race"
  | "regatta"
  | "ride"
  | "bye"
  | "practice"
  | "scrimmage"
  | "pickup"
  | "meeting"
  | "other";

export type EventStatus = "active" | "postponed" | "canceled" | "forfeited";

export type EventResult = {
  readonly scoreEntered: boolean;
  readonly outcome: string;
  readonly score1: number | null;
  readonly score2: number | null;
  readonly isWin: boolean;
  readonly isTie: boolean;
  readonly isLoss: boolean;
  readonly scoreDisplay: string;
  readonly dhScoreEntered: boolean;
  readonly dhOutcome: string;
  readonly dhScore1: number | null;
  readonly dhScore2: number | null;
  readonly dhIsWin: boolean;
  readonly dhIsTie: boolean;
  readonly dhIsLoss: boolean;
  readonly dhScoreDisplay: string;
};

export type DateTimeInfo = {
  readonly timezoneId: string;
  readonly startDateLocal: string;
  readonly startTimeLocal: string;
  readonly startDateTimeLocal: string;
  readonly startDateLocalDisplay: string;
  readonly startTimeLocalDisplay: string;
  readonly startDateTimeLocalDisplay: string;
  readonly startDateTimeUtc: string;
  readonly startTimeTBD: boolean;
  readonly endDateLocal: string;
  readonly endTimeLocal: string;
  readonly endDateTimeLocal: string;
  readonly endDateLocalDisplay: string;
  readonly endTimeLocalDisplay: string;
  readonly endDateTimeLocalDisplay: string;
  readonly endDateTimeUtc: string;
  readonly endTimeTBD: boolean;
  readonly inPast: boolean;
  readonly inFuture: boolean;
};

export type TCLocation = {
  readonly locationId: number;
  readonly name: string;
  readonly surface: {
    readonly type: string;
    readonly typeDisplay: string;
    readonly showType: boolean;
  };
  readonly lights: {
    readonly lights: string;
    readonly lightsDisplay: string;
    readonly hasLights: boolean;
  };
  readonly address: {
    readonly addressLine1: string;
    readonly addressLine2: string;
    readonly city: string;
    readonly stateProvince: string;
    readonly postalCode: string;
    readonly partOfTown: string;
    readonly displayMultiline: string;
    readonly displaySingleLine: string;
    readonly googleMapsUrl: string;
    readonly googleMapsDirectionsUrl: string;
  };
  readonly visibility: string;
  readonly visibilityDisplay: string;
  readonly comments: string;
};

export type RSVPInstance = {
  readonly userId: number;
};

export type UserMetaInfo = {
  readonly isTeamAdmin: boolean;
  readonly showOnDashboard: boolean;
};

export type Color = {
  readonly name: string;
  readonly hexCode: string;
};

export type ColorSwatch = {
  readonly label: string;
  readonly colorCount: number;
  readonly colors: Color[];
};

export type ShirtColors = {
  readonly team1: ColorSwatch | null;
  readonly team2: ColorSwatch | null;
};

export type EventOption = {
  readonly misc: {
    readonly allowRSVPs: boolean;
  };
  readonly rsvp: {
    readonly limitTotalYesRSVPs: string;
    readonly limitTotalYesRSVPs_gender_f_value: string;
    readonly limitTotalYesRSVPs_gender_m_value: string;
    readonly limitTotalYesRSVPs_gender_other_value: string;
    readonly limitTotalYesRSVPs_mode: string;
    readonly limitTotalYesRSVPs_total_value: string;
  };
};

export type TCEvent = {
  readonly eventId: number;
  readonly team: {
    readonly teamId: number;
    readonly name: string;
  };
  readonly seasonId: number;
  readonly seasonName: string;
  readonly eventType: EventType;
  readonly eventTypeDisplay: string;
  readonly status: EventStatus;
  readonly statusDisplay: string;
  readonly personNounSingular: string;
  readonly personNounPlural: string;
  readonly title: string;
  readonly titleFull: string;
  readonly titleLabel: string;
  readonly homeAway: string;
  readonly result: EventResult;
  readonly rsvpInstances?: RSVPInstance[];
  readonly comments: string | null;
  readonly options: EventOption;
  readonly oneLineDisplay: string;
  readonly oneLineDisplayShort: string;
  readonly maleGenderDisplay: string;
  readonly femaleGenderDisplay: string;
  readonly otherGenderDisplay: string;
  readonly dateTimeInfo: DateTimeInfo;
  readonly locaton: TCLocation | object;
  readonly shirtColors: ShirtColors;
  readonly userMetaInfo: UserMetaInfo;
  readonly dateCreatedUtc: Date;
  readonly dateLastUpdatedUtc: Date;
};

export type User = {
  readonly userId: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly fullName: string;
  readonly displayName: string;
  readonly emailAddress1: string;
  readonly emailAddress2: string | null;
  readonly phone1: string;
  readonly phone2: string | null;
  readonly gender: "f" | "m" | "other";
  readonly genderDisplay: string;
  readonly birthDate_month: string;
  readonly birthDate_day: string;
  readonly birthDate_year: string;
  readonly shirtNumber: string;
  readonly shirtSize: string;
  readonly pantsSize: string;
  readonly options: object;
  readonly profilePhoto: {
    readonly fullUrl: string;
    readonly smallUrl: string;
    readonly thumbUrl: string;
  };
  readonly teamMeta?: object;
  readonly linkedUsers?: object;
  readonly dateCreatedUtc: Date;
  readonly dateLastUpdatedUtc: Date;
  readonly dateListSignInUtc: Date;
};

export type Team = {
  readonly teamId: number;
  readonly name: string;
  readonly shortName: string;
  readonly type: {
    readonly name: string;
    readonly title: string;
  };
  readonly activity: {
    readonly activityId: number;
    readonly name: string;
  };
  readonly timezoneId: string;
  readonly city: string;
  readonly stateProvince: string;
  readonly stateProvinceAbbrev: string;
  readonly country: string;
};

export type Message = {
  readonly messageId: number;
  readonly title: string;
  readonly bodyHtml: string;
  readonly bodyText: string;
  readonly isPinned: boolean;
  readonly allowComments: boolean;
};
