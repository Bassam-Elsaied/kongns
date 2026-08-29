import { getProjects, type Project } from "@/components/data/projects";
import type { Locale } from "@/i18n/routing";

export type CapabilityItem = {
  title: string;
  description: string;
};

export type Capability = {
  slug: string;
  title: string;
  description: string;
  items: CapabilityItem[];
};

const byLocale: Record<Locale, Capability[]> = {
  ar: [
    {
      slug: "software-engineering",
      title: "هندسة البرمجيات وبنية الأنظمة السحابية",
      description: "نصمم ونبني أنظمة برمجية قوية وعالية الأداء قادرة على إدارة التعقيدات المؤسسية الحقيقية. متجاوزين الهيكليات الأحادية، نبني أنظمة موزعة مرنة، وهيكليات تعتمد على الأحداث، وتطبيقات سحابية أصلية. تعطي منهجية التطوير لدينا الأولوية للتوافر العالي، والأمان الصارم، والنشر المستمر بدون توقف.",
      items: [
        {
          title: "تطبيقات الويب",
          description: "هيكليات واجهات أمامية معقدة وديناميكية مبنية على أطر عمل حديثة لضمان أداء عالٍ.",
        },
        {
          title: "الأنظمة الموزعة",
          description: "خدمات مصغرة مرنة وهيكليات تعتمد على الأحداث (Event-driven) مصممة لبيئات العمل التي تتطلب توافراً دائماً.",
        },
        {
          title: "منظومات واجهات البرمجة (APIs)",
          description: "طبقات واجهات برمجة تطبيقات (REST و GraphQL) مصممة للاستخدام الداخلي أو لمنصات المطورين الخارجية.",
        },
        {
          title: "البنية التحتية السحابية",
          description: "البنية التحتية ككود (IaC)، الحاويات (Containerization)، وخطوط النشر القابلة للتوسع على السحابة.",
        },
      ],
    },
    {
      slug: "ai-solutions",
      title: "أنظمة الذكاء الاصطناعي للشركات ووكلاء الذكاء المستقلين",
      description: "ننشر أنظمة ذكاء اصطناعي حتمية واحتمالية تحل اختناقات تشغيلية محددة. متجاوزين واجهات المحادثة البسيطة، نقوم بتنفيذ مسارات عمل لوكلاء ذكاء اصطناعي مستقلين (Autonomous Agents)، وهيكليات توليد معزز بالاسترجاع (RAG) معقدة، ونماذج تنبؤية. نولي اهتماماً بالغاً لأطر التقييم، والأمان المعتمد على الإشراف البشري (Human-in-the-loop)، والبنية التحتية المستقلة عن النماذج لضمان بقاء بياناتكم الخاصة سيادية وآمنة.",
      items: [
        {
          title: "مسارات عمل الوكلاء المستقلين",
          description: "أنظمة مستقلة قادرة على تنفيذ استنتاجات متعددة الخطوات، واستخدام الأدوات، واتخاذ إجراءات حتمية.",
        },
        {
          title: "الاسترجاع الدلالي (RAG)",
          description: "هيكليات بحث واسترجاع متجهات (Vector Search) عالية الدقة عبر مستودعات ضخمة من الوثائق الخاصة.",
        },
        {
          title: "النمذجة التنبؤية",
          description: "خطوط تعلم آلي مخصصة لاكتشاف الحالات الشاذة، التنبؤ، وتحليل المخاطر.",
        },
        {
          title: "ذكاء البيانات",
          description: "استخراج هيكلي وآلي للرؤى الحيوية من بيانات المؤسسة غير المنظمة.",
        },
      ],
    },
    {
      slug: "digital-products",
      title: "المنتجات الرقمية",
      description: "نتعاون مع المؤسسات ذات الرؤية والمؤسسين الطموحين لهندسة منتجات رقمية متكاملة. نحن نتولى التنفيذ الفني عبر دورة حياة المنتج بأكملها — بدءاً من هندسة النظم وتجربة المستخدم وصولاً إلى البنية التحتية القابلة للتوسع والإطلاق الفعلي.",
      items: [
        {
          title: "منصات البرمجيات كخدمة (SaaS)",
          description: "هيكليات برمجية متعددة المستأجرين (Multi-tenant) مصممة للتوسع السريع، وعزل البيانات، والتوافر العالي.",
        },
        {
          title: "الأسواق الرقمية المعقدة",
          description: "منصات متعددة الأطراف مع بوابات دفع متكاملة، وجدولة، ومحركات لوجستية.",
        },
        {
          title: "هندسة المنتجات",
          description: "تطوير سريع وجاهز للإنتاج للمنتجات الأولية (MVPs) لتكون أساساً مرناً للنمو المستقبلي.",
        },
      ],
    },
    {
      slug: "automation-integrations",
      title: "الأتمتة وتكامل الأنظمة",
      description: "نقضي على التباطؤ التشغيلي من خلال هندسة عمليات تكامل ذكية بين الأنظمة القديمة والحديثة. نبني خطوط بيانات مرنة ومحركات أتمتة تعتمد على الأحداث تتيح لفرق الهندسة والعمليات التركيز على المهام الأساسية ذات القيمة العالية.",
      items: [
        {
          title: "بوابات وتكامل واجهات البرمجة (APIs)",
          description: "برمجيات وسيطة (Middleware) آمنة تربط الأنظمة الداخلية القديمة بأدوات السحابة الحديثة.",
        },
        {
          title: "هندسة البيانات (ETL/ELT)",
          description: "هيكليات موثوقة لاستخراج وتحويل وتحميل (ETL) البيانات الحرجة بشكل متزامن وغير متزامن.",
        },
        {
          title: "الأتمتة التشغيلية",
          description: "استبدال مهام الامتثال، والتقارير، والتوجيه اليدوية بمسارات برمجية حتمية ومؤتمتة.",
        },
      ],
    },
    {
      slug: "data-engineering",
      title: "هندسة البيانات المؤسسية",
      description: "نصمم أسساً مرنة للبيانات تحول المعلومات المتناثرة إلى ذكاء موحد وعالي التوافر. نركز في هندسة البيانات على بناء خطوط استخراج وتحويل وتحميل (ETL/ELT) قابلة للتوسع، وبحيرات بيانات قوية، وأطر حوكمة صارمة لضمان أن تكون بياناتكم الخاصة نظيفة وآمنة وجاهزة لتطبيقات التعلم الآلي والذكاء الاصطناعي المتقدمة.",
      items: [
        {
          title: "خطوط البيانات (ETL/ELT)",
          description: "خطوط بيانات مؤتمتة وعالية التوافر لنقل تيرابايتات من البيانات عبر الأنظمة الموزعة.",
        },
        {
          title: "حوكمة وأمن البيانات",
          description: "ضوابط وصول صارمة، وتتبع مسار البيانات، وفرض الامتثال لأصول البيانات المؤسسية.",
        },
        {
          title: "البنية التحتية للتعلم الآلي",
          description: "مستودعات الخصائص (Feature stores) وخطوط عمليات التعلم الآلي (MLOps) لتسريع تدريب النماذج ونشرها.",
        },
        {
          title: "التحليلات في الوقت الفعلي",
          description: "هيكليات تدفق البيانات التي توفر رؤى لحظية لاتخاذ القرارات التشغيلية الحاسمة.",
        },
      ],
    },
  ],
  en: [
    {
      slug: "software-engineering",
      title: "Enterprise Software & Cloud-Native Architecture",
      description: "We architect and engineer robust, high-performance software systems capable of managing true enterprise complexity. Moving beyond monolithic structures, we build resilient distributed systems, event-driven architectures, and cloud-native applications on containerized and serverless frameworks. Our engineering lifecycle prioritizes high availability, strict security, and zero-downtime deployments.",
      items: [
        {
          title: "Web Applications",
          description: "Complex, stateful frontend architectures built on modern frameworks for high throughput.",
        },
        {
          title: "Distributed Systems",
          description: "Resilient microservices and event-driven architectures designed for zero-downtime environments.",
        },
        {
          title: "API Ecosystems",
          description: "REST and GraphQL API layers architected for internal consumption or external developer platforms.",
        },
        {
          title: "Cloud-Native Infrastructure",
          description: "Infrastructure as Code (IaC), containerization, and scalable deployment pipelines on AWS and GCP.",
        },
      ],
    },
    {
      slug: "ai-solutions",
      title: "Autonomous Agents & Production AI Systems",
      description: "We deploy deterministic and probabilistic AI systems that solve specific operational bottlenecks. Moving beyond generic conversational interfaces, we implement autonomous agentic workflows, complex Retrieval-Augmented Generation (RAG) architectures, and predictive models. We prioritize evaluation frameworks, human-in-the-loop safety, and model-agnostic infrastructure to ensure your proprietary data remains sovereign and secure.",
      items: [
        {
          title: "Agentic Workflows",
          description: "Autonomous systems capable of executing multi-step reasoning, tool usage, and deterministic actions.",
        },
        {
          title: "Semantic Retrieval (RAG)",
          description: "High-precision vector search and retrieval architectures over massive proprietary document stores.",
        },
        {
          title: "Predictive Modeling",
          description: "Custom machine learning pipelines for anomaly detection, forecasting, and risk analysis.",
        },
        {
          title: "Data Intelligence",
          description: "Automated extraction and structuring of critical insights from unstructured enterprise data.",
        },
      ],
    },
    {
      slug: "digital-products",
      title: "Digital Products",
      description: "We partner with visionary enterprises and ambitious founders to engineer complete digital products. We own the technical execution across the entire lifecycle—from system architecture and UX engineering to scalable infrastructure and production launch.",
      items: [
        {
          title: "SaaS Platforms",
          description: "Multi-tenant software architectures designed for rapid scaling, data isolation, and high availability.",
        },
        {
          title: "Complex Marketplaces",
          description: "Multi-sided platforms with integrated payment gateways, scheduling, and logistics engines.",
        },
        {
          title: "Product Engineering",
          description: "Rapid, production-ready development of MVPs that serve as resilient foundations for future growth.",
        },
      ],
    },
    {
      slug: "automation-integrations",
      title: "Automation & Integrations",
      description: "We eliminate operational drag by architecting intelligent integrations between disparate legacy and modern systems. We build resilient data pipelines and event-driven automation engines that allow your engineering and operational teams to focus on core logic.",
      items: [
        {
          title: "API Gateways & Integration",
          description: "Secure middleware connecting legacy on-premise systems with modern cloud SaaS tools.",
        },
        {
          title: "Data Engineering (ETL/ELT)",
          description: "Reliable architectures that extract, transform, and load mission-critical data synchronously and asynchronously.",
        },
        {
          title: "Operational Automation",
          description: "Replacing manual compliance, reporting, and routing tasks with deterministic code pipelines.",
        },
      ],
    },
    {
      slug: "data-engineering",
      title: "Enterprise Data Engineering",
      description: "We architect resilient data foundations that transform scattered information into unified, highly available intelligence. Our data engineering practice focuses on building scalable ETL/ELT pipelines, robust data lakes, and strict governance frameworks to ensure your proprietary data is clean, secure, and ready for advanced machine learning and AI applications.",
      items: [
        {
          title: "Data Pipelines (ETL/ELT)",
          description: "Automated and highly available pipelines moving terabytes of data across distributed systems.",
        },
        {
          title: "Data Governance & Security",
          description: "Strict access controls, lineage tracking, and compliance enforcement for enterprise data assets.",
        },
        {
          title: "ML Infrastructure",
          description: "Feature stores and MLOps pipelines designed to accelerate model training and deployment.",
        },
        {
          title: "Real-Time Analytics",
          description: "Streaming data architectures that provide sub-second insights for critical operational decisions.",
        },
      ],
    },
  ],
};

/** Work delivered under each capability, taken from the case study cross-links. */
const capabilityProjects: Record<string, string[]> = {
  "software-engineering": [
    "my-phone",
    "drive-finance",
    "zona-erp",
    "freek-booking",
    "retail-erp",
    "digital-commerce",
    "restaurant-platform",
    "car-rental",
    "ticket-marketplace",
    "web-infrastructure",
  ],
  "ai-solutions": [],
  "digital-products": [
    "my-phone",
    "drive-finance",
    "freek-booking",
    "digital-commerce",
    "restaurant-platform",
    "car-rental",
    "ticket-marketplace",
    "web-infrastructure",
  ],
  "automation-integrations": [
    "my-phone",
  ],
  "data-engineering": [
    "zona-erp",
    "retail-erp",
  ],
};

export function getCapabilities(locale: Locale): Capability[] {
  return byLocale[locale];
}

export function getCapability(
  locale: Locale,
  slug: string,
): Capability | undefined {
  return byLocale[locale].find((capability) => capability.slug === slug);
}

export function projectsForCapability(
  locale: Locale,
  slug: string,
): Project[] {
  const slugs = capabilityProjects[slug] ?? [];
  return getProjects(locale).filter((project) => slugs.includes(project.slug));
}
