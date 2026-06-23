import { DashboardShell } from "@/components/dashboard-shell";
import { hikariModules, operatingSignals, recentActivity } from "@/lib/hikari-data";

export default function Home() {
  return (
    <DashboardShell
      modules={hikariModules}
      signals={operatingSignals}
      activity={recentActivity}
    />
  );
}

