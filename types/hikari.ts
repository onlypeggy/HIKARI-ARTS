export type BadgeTone = "neutral" | "success" | "warning";

export type HikariModuleId =
  | "students"
  | "courses"
  | "teachers"
  | "admissions"
  | "therapy";

export type HikariMetric = {
  label: string;
  value: string;
};

export type HikariModule = {
  id: HikariModuleId;
  title: string;
  description: string;
  status: string;
  statusTone: BadgeTone;
  metrics: HikariMetric[];
};

export type OperatingSignal = {
  label: string;
  value: string;
  change: string;
  description: string;
  tone: BadgeTone;
};

export type HikariActivity = {
  title: string;
  description: string;
  time: string;
};

