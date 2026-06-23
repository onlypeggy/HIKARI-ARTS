import type { HikariActivity, HikariModule, OperatingSignal } from "@/types/hikari";

export const operatingSignals: OperatingSignal[] = [
  {
    label: "活跃学员",
    value: "128",
    change: "+12",
    description: "本月新增报名与试课",
    tone: "success",
  },
  {
    label: "进行中课程",
    value: "36",
    change: "稳定",
    description: "包含大师课与项目制课程",
    tone: "neutral",
  },
  {
    label: "认证申请",
    value: "18",
    change: "待审",
    description: "音乐疗愈路径待导师确认",
    tone: "warning",
  },
  {
    label: "升学项目",
    value: "9",
    change: "+3",
    description: "作品集与面试辅导推进中",
    tone: "success",
  },
];

export const hikariModules: HikariModule[] = [
  {
    id: "students",
    title: "学员管理",
    description: "管理学员档案、报名状态、课程进度、作品提交与认证记录。",
    status: "运行中",
    statusTone: "success",
    metrics: [
      { label: "待跟进", value: "24" },
      { label: "本周课时", value: "86" },
    ],
  },
  {
    id: "courses",
    title: "课程管理",
    description: "维护课程体系、班级排期、项目制学习任务与交付节点。",
    status: "规划中",
    statusTone: "neutral",
    metrics: [
      { label: "课程包", value: "12" },
      { label: "待发布", value: "4" },
    ],
  },
  {
    id: "teachers",
    title: "教师管理",
    description: "沉淀导师资料、授课方向、排班能力和老师 IP 运营素材。",
    status: "运行中",
    statusTone: "success",
    metrics: [
      { label: "导师", value: "21" },
      { label: "可排班", value: "14" },
    ],
  },
  {
    id: "admissions",
    title: "国际升学",
    description: "跟踪目标院校、作品集计划、申请材料和面试辅导进度。",
    status: "重点",
    statusTone: "warning",
    metrics: [
      { label: "目标院校", value: "31" },
      { label: "申请中", value: "9" },
    ],
  },
  {
    id: "therapy",
    title: "音乐疗愈认证",
    description: "管理认证等级、课程路径、督导审核和证书发放流程。",
    status: "搭建中",
    statusTone: "neutral",
    metrics: [
      { label: "认证路径", value: "3" },
      { label: "待审核", value: "18" },
    ],
  },
];

export const recentActivity: HikariActivity[] = [
  {
    title: "新增音乐疗愈认证批次",
    description: "6 名学员进入导师审核阶段。",
    time: "09:40",
  },
  {
    title: "国际升学作品集更新",
    description: "钢琴与萨克斯方向各新增 1 个作品集节点。",
    time: "11:20",
  },
  {
    title: "教师资料待完善",
    description: "3 位导师缺少授课方向和可排班时间。",
    time: "14:05",
  },
];

