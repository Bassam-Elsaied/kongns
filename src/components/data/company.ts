import type { Locale } from "@/i18n/routing";

export type Principle = {
  title: string;
  description: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type Company = {
  intro: string;
  philosophy: Principle[];
  process: ProcessStep[];
  careers: { title: string; description: string; cta: string };
};

const byLocale: Record<Locale, Company> = {
  ar: {
    intro: "كوجنس هي شركة تقنية أسسها مهندسون. نجمع بين هندسة البرمجيات والذكاء الاصطناعي وعقلية المنتجات لحل تعقيدات الأعمال الحقيقية.",
    philosophy: [
      {
        title: "الهندسة أولاً",
        description: "نؤمن بأن تحديات الأعمال هي في جوهرها تحديات هندسية. نحن لا نكتفي بكتابة الكود؛ بل نصمم أنظمة مرنة قادرة على التوسع بثبات تحت الضغط.",
      },
      {
        title: "عقلية المنتج",
        description: "لا قيمة للتقنية بدون تبني المستخدمين لها. نحن نبني بتعاطف شديد مع المستخدم النهائي، لضمان أن حلولنا تعالج فعلياً الاحتكاك التشغيلي الذي صُممت لأجله.",
      },
      {
        title: "الذكاء الاصطناعي كأساس",
        description: "نحن لا نرى الذكاء الاصطناعي كميزة إضافية، بل كركيزة معمارية أساسية. نبني أنظمة حتمية مدعومة بذكاء احتمالي.",
      },
      {
        title: "مبني للتوسع",
        description: "نرفض الديون التقنية قصيرة المدى لصالح البنى المعمارية القوية الموجهة بالأحداث، والتي تُعد شركائنا للعمل بقدرات مؤسسية هائلة.",
      },
    ],
    process: [
      {
        step: "01",
        title: "الاستكشاف والبنية المعمارية",
        description: "قبل كتابة سطر واحد من الكود، نقوم برسم خريطة شاملة لمساحة المشكلة. نحدد البنية التقنية، ونماذج البيانات، وحدود النظام اللازمة لحل الاحتكاك التشغيلي الأساسي.",
      },
      {
        step: "02",
        title: "هندسة تكرارية",
        description: "نبني في دورات سريعة تعتمد على الاختبار. نقدم برمجيات وظيفية باستمرار، مما يتيح لك التحقق من القرارات التقنية وتبني المستخدمين في مرحلة مبكرة.",
      },
      {
        step: "03",
        title: "النشر والعمليات",
        description: "ننشر أنظمتنا في بنية تحتية سحابية آمنة مع إمكانية مراقبة كاملة، وخطوط أنابيب CI/CD، واختبارات آلية لضمان قابلية التوسع دون توقف.",
      },
    ],
    careers: {
      title: "انضم إلى الفريق الهندسي",
      description: "نحن مهتمون دائمًا بالتواصل مع مهندسي البرمجيات الاستثنائيين، والمهندسين المعماريين، وباحثي الذكاء الاصطناعي الذين يشاركوننا هوسنا ببناء أنظمة عالية الأداء.",
      cta: "ابدأ المحادثة",
    },
  },
  en: {
    intro: "Kogns is a technology company built by engineers. We combine software architecture, artificial intelligence, and product thinking to solve real business complexity.",
    philosophy: [
      {
        title: "Engineering First",
        description: "We believe that business problems are fundamentally engineering problems. We don't just write code; we design resilient systems that scale gracefully under pressure.",
      },
      {
        title: "Product Mindset",
        description: "Technology serves no purpose without adoption. We build with extreme empathy for the end-user, ensuring our solutions actually solve the operational friction they were designed for.",
      },
      {
        title: "AI Native",
        description: "We view AI not as a feature, but as a foundational architectural primitive. We build deterministic systems augmented by probabilistic intelligence.",
      },
      {
        title: "Built for Scale",
        description: "We reject short-term technical debt in favor of robust, event-driven architectures that prepare our partners for enterprise-grade throughput.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Architecture",
        description: "Before writing a single line of code, we aggressively map the problem space. We define the technical architecture, data models, and system boundaries required to solve the core operational friction.",
      },
      {
        step: "02",
        title: "Iterative Engineering",
        description: "We build in rapid, test-driven cycles. We deliver functional software continuously, allowing you to validate technical decisions and user adoption early in the lifecycle.",
      },
      {
        step: "03",
        title: "Deployment & Operations",
        description: "We deploy to secure, cloud-native infrastructure with full observability, CI/CD pipelines, and automated testing to ensure zero-downtime scalability.",
      },
    ],
    careers: {
      title: "Join the Engineering Team",
      description: "We are always interested in connecting with exceptional software engineers, architects, and AI researchers who share our obsession with building high-performance systems.",
      cta: "Start a Conversation",
    },
  },
};

export function getCompany(locale: Locale): Company {
  return byLocale[locale];
}
