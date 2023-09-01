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

export type Event = {
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
  readonly rsvpInstances: RSVPInstance[];
  readonly comments: string | null;
  readonly options: EventOption[];
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
