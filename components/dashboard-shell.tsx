import {
  Activity,
  Award,
  BookOpen,
  GraduationCap,
  HeartPulse,
  Music2,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { HikariActivity, HikariModule, OperatingSignal } from "@/types/hikari";

const moduleIcons = {
  students: Users,
  courses: BookOpen,
  teachers: Music2,
  admissions: GraduationCap,
  therapy: HeartPulse,
} satisfies Record<HikariModule["id"], typeof Users>;

type DashboardShellProps = {
  modules: HikariModule[];
  signals: OperatingSignal[];
  activity: HikariActivity[];
};

export function DashboardShell({ modules, signals, activity }: DashboardShellProps) {
  return (
    <main className="min-h-screen">
      <header className="border-b border-border bg-panel">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="text-sm font-medium text-muted">HIKARI Arts</p>
            <h1 className="mt-1 text-2xl font-semibold tracking-normal text-foreground">
              国际音乐教育运营台
            </h1>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary">查看课程</Button>
            <Button>新增学员</Button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-6 lg:grid-cols-[1fr_340px] lg:px-8">
        <section className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {signals.map((signal) => (
              <Card key={signal.label} className="p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm text-muted">{signal.label}</p>
                  <Badge tone={signal.tone}>{signal.change}</Badge>
                </div>
                <p className="mt-4 text-3xl font-semibold">{signal.value}</p>
                <p className="mt-1 text-sm text-muted">{signal.description}</p>
              </Card>
            ))}
          </div>

          <section>
            <div className="mb-3 flex items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold">核心业务模块</h2>
                <p className="text-sm text-muted">围绕学员、课程、教师和认证推进日常运营。</p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {modules.map((module) => {
                const Icon = moduleIcons[module.id];
                return (
                  <Card key={module.id} className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-panel-strong">
                          <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{module.title}</h3>
                          <p className="mt-1 text-sm leading-6 text-muted">{module.description}</p>
                        </div>
                      </div>
                      <Badge tone={module.statusTone}>{module.status}</Badge>
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4">
                      {module.metrics.map((metric) => (
                        <div key={metric.label}>
                          <p className="text-xs text-muted">{metric.label}</p>
                          <p className="mt-1 font-mono text-lg font-semibold">{metric.value}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>
        </section>

        <aside className="space-y-6">
          <Card className="p-5">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-accent" aria-hidden="true" />
              <h2 className="font-semibold">本周重点</h2>
            </div>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-sm font-medium">音乐疗愈认证</p>
                <p className="mt-1 text-sm leading-6 text-muted">
                  完成认证路径、导师审核节点和学员作品提交规范。
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">国际升学服务</p>
                <p className="mt-1 text-sm leading-6 text-muted">
                  梳理目标院校、作品集要求和面试辅导排期。
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-accent" aria-hidden="true" />
              <h2 className="font-semibold">最近动态</h2>
            </div>
            <ol className="mt-4 space-y-4">
              {activity.map((item) => (
                <li key={`${item.time}-${item.title}`} className="border-l border-border pl-4">
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{item.description}</p>
                  <p className="mt-2 font-mono text-xs text-muted">{item.time}</p>
                </li>
              ))}
            </ol>
          </Card>
        </aside>
      </div>
    </main>
  );
}

