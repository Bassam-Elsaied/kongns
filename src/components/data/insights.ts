import type { Locale } from "@/i18n/routing";

export type Block =
  | { type: "heading"; level: number; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered: boolean; items: { term: string; text: string }[] };

export type Insight = {
  slug: string;
  title: string;
  category: string;
  /** ISO date; the source markup prints these unpadded, so they are normalised here. */
  date: string;
  readTime: string;
  excerpt: string;
  /** Unpublished on the source site — listed, but not linked. */
  draft: boolean;
  author: string;
  /** Slug of the capability this article sits under. */
  capability: string | null;
  blocks: Block[];
};

const byLocale: Record<Locale, Insight[]> = {
  ar: [
    {
      slug: "evaluating-ai-agents",
      title: "تقييم وكلاء الذكاء الاصطناعي في بيئات العمل الحقيقية",
      category: "هندسة الذكاء الاصطناعي",
      date: "2025-08-12",
      readTime: "12 دقيقة",
      excerpt: "تجاوز النماذج الأولية نحو سير عمل يعتمد على الوكلاء المستقلين (AI Agents) مع ضمان الموثوقية والمراقبة الدقيقة في الأنظمة المؤسسية.",
      draft: false,
      author: "هندسة كوجنس",
      capability: "ai-solutions",
      blocks: [
        {
          type: "paragraph",
          text: "إن الانتقال من نموذج أولي يعتمد على النماذج اللغوية الكبيرة (LLMs) إلى وكيل ذكاء اصطناعي (AI Agent) جاهز للعمل في بيئة إنتاجية حقيقية هو تحدٍ هندسي معقد. فبينما تُعد واجهات المحادثة (Chatbots) مفيدة للاستفسارات العامة، فإن القيمة الحقيقية للمؤسسات تكمن في مسارات العمل المستقلة للوكلاء (Agentic Workflows) - أي الأنظمة القادرة على الاستنتاج المستقل، وتنفيذ الأدوات (Tools Execution) بدقة، وإدارة التفاعلات متعددة الخطوات.",
        },
        {
          type: "paragraph",
          text: "في هذه المقالة، نستعرض المنهجيات الهندسية اللازمة لسد \"فجوة الثقة\" في تطبيقات الذكاء الاصطناعي، والانتقال من التوليد الاحتمالي (Probabilistic) إلى الموثوقية الحتمية (Deterministic).",
        },
        {
          type: "heading",
          level: 2,
          text: "فجوة الثقة المؤسسية",
        },
        {
          type: "paragraph",
          text: "تبحث المؤسسات دائماً عن الموثوقية التامة. الوكيل الذي يعمل بنجاح بنسبة 90% يُعد غير صالح للاستخدام في الأنظمة الحرجة. إذا كان الوكيل مسؤولاً عن تعديل سجلات العملاء، أو استدعاء واجهات برمجة التطبيقات (APIs) الخارجية، أو الموافقة على مسارات العمل الداخلية، فيجب أن تكون المنظمة متأكدة تماماً من أن منطق الوكيل لن ينحرف عن حدود الامتثال والأمان.",
        },
        {
          type: "paragraph",
          text: "لسد فجوة الثقة هذه، يجب على المؤسسات التخلي عن التقييمات النوعية السطحية وتطبيق أطر تقييم آلية وصارمة مقترنة بقيود معمارية قوية.",
        },
        {
          type: "heading",
          level: 2,
          text: "1. الحدود الحتمية لتنفيذ الإجراءات",
        },
        {
          type: "paragraph",
          text: "بطبيعتها، تعتمد النماذج اللغوية على الاحتمالات، لكن واجهات برمجة التطبيقات (APIs) في المؤسسات تتطلب مدخلات حتمية ودقيقة. لذلك، يجب وضع قيود صارمة على الواجهة التي تربط بينهما.",
        },
        {
          type: "paragraph",
          text: "من خلال الحد من مساحة عمل الوكيل واستخدام مخرجات أدوات محددة النوع بقوة (Strongly Typed) - مثل إجبار النموذج على الالتزام بهيكل JSON صارم عبر تقنيات التوليد المنظم - يمكننا تقليل الطبيعة الاحتمالية للنموذج الأساسي.",
        },
        {
          type: "paragraph",
          text: "إذا حاول الوكيل توليد صيغة customerId غير صالحة، فإن طبقة التنفيذ تعترض هذا الخطأ وتمنع وصول الحالة غير الصالحة إلى نظام الإنتاج. يتم بعد ذلك إعادة الخطأ إلى الوكيل كجزء من السياق، مما يسمح له بتصحيح منطقه ذاتياً.",
        },
        {
          type: "heading",
          level: 2,
          text: "2. معمارية التدخل البشري (Human-in-the-Loop)",
        },
        {
          type: "paragraph",
          text: "بالنسبة للإجراءات عالية المخاطر - مثل تنفيذ معاملة مالية، أو تعديل قاعدة بيانات حساسة، أو إرسال رسائل جماعية - يجب أن يتوقف الوكيل مؤقتاً لطلب تفويض بشري.",
        },
        {
          type: "paragraph",
          text: "يجب أن تعامل البنية التحتية الوكيل كمُعد ذكي لمسار العمل، بينما يتصرف المشغل البشري كآلية الاعتماد النهائية.",
        },
        {
          type: "paragraph",
          text: "يتطلب هذا التعليق غير المتزامن (Asynchronous) أن يدعم إطار عمل الوكيل الاحتفاظ بالحالة (State Persistence). يجب أن يكون الوكيل قادراً على \"النوم\" واستئناف سياقه بسلاسة بمجرد تقديم المشغل البشري الموافقة أو الرفض.",
        },
        {
          type: "heading",
          level: 2,
          text: "3. التقييم المستمر (Evals)",
        },
        {
          type: "paragraph",
          text: "يتطلب الذكاء الاصطناعي في بيئة الإنتاج خطوط أنابيب تكامل وتسليم مستمر (CI/CD) مخصصة خصيصاً لاختبار الأوامر النصية (Prompts) ومنطق النموذج. يجب أن تقوم أطر العمل بتشغيل مئات من حالات الاختبار التلقائية في كل مرة يتم فيها تحديث النظام.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            {
              term: "التقييمات الحتمية (Deterministic Evals)",
              text: "هل استدعى الوكيل الأداة الصحيحة؟ هل استخرج المبلغ الدقيق؟ يمكن اختبار ذلك برمجياً.",
            },
            {
              term: "النماذج اللغوية كقاضٍ (LLM-as-a-Judge)",
              text: "للمخرجات الأكثر تعقيداً، يتم استخدام نموذج آخر عالي القدرة لتقييم أداء الوكيل بناءً على معايير محددة.",
            },
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "الخلاصة",
        },
        {
          type: "paragraph",
          text: "لقد انتهى عصر واجهات المحادثة البسيطة. تُبنى القيمة المؤسسية اليوم بواسطة وكلاء مستقلين قادرين على تنفيذ عمليات أعمال معقدة بموثوقية. يتطلب هذا التحول التعامل مع الذكاء الاصطناعي ليس كعلم بيانات تجريبي، بل كـ هندسة برمجيات دقيقة وحتمية . من خلال تطبيق حدود صارمة للأدوات، وخطوط أنابيب تقييم مستمرة، وشبكات أمان التدخل البشري، يمكن للمنظمات نشر وكلاء الذكاء الاصطناعي في بيئات العمل الحساسة بثقة تامة.",
        },
      ],
    },
    {
      slug: "rag-architecture-enterprise",
      title: "بنية RAG للبيانات المؤسسية وسيادة البيانات",
      category: "هندسة البيانات",
      date: "2025-08-11",
      readTime: "14 دقيقة",
      excerpt: "تصميم أنظمة التوليد المعزز بالاسترجاع (RAG) قابلة للتوسع وآمنة مع الحفاظ على سيادة البيانات والتحكم الدقيق في الوصول.",
      draft: false,
      author: "هندسة كوجنس",
      capability: "data-engineering",
      blocks: [
        {
          type: "paragraph",
          text: "أصبح التوليد المعزز بالاسترجاع (Retrieval-Augmented Generation - RAG) هو النمط المعماري القياسي لربط النماذج اللغوية الكبيرة (LLMs) ببيانات المؤسسات الخاصة. ومع ذلك، هناك فجوة هائلة بين بناء نموذج أولي بسيط وبين نشر نظام RAG آمن وجاهز للإنتاج يخدم آلاف الموظفين في مؤسسة ضخمة.",
        },
        {
          type: "paragraph",
          text: "يتطلب بناء نظام RAG حقيقي جهداً هندسياً مكثفاً يركز على نظافة البيانات، والتقسيم الدلالي للملفات، والتحكم الصارم في الوصول (RBAC)، أكثر من التركيز على النموذج اللغوي نفسه.",
        },
        {
          type: "heading",
          level: 2,
          text: "هندسة البيانات هي الأساس",
        },
        {
          type: "paragraph",
          text: "نظام RAG ذكي بقدر ذكاء البيانات التي يسترجعها فقط. أعلى عائد استثمار في تطوير الذكاء الاصطناعي يأتي باستمرار من التطبيق الصارم لـ هندسة البيانات في طبقة استيعاب ومعالجة البيانات (Ingestion Layer).",
        },
        {
          type: "heading",
          level: 3,
          text: "1. استراتيجية التقسيم الدلالي (Semantic Chunking)",
        },
        {
          type: "paragraph",
          text: "خوارزميات التقسيم البسيطة تقوم بفصل المستندات بشكل عشوائي بناءً على عدد الحروف أو الرموز. هذا يؤدي إلى تدمير السياق الدلالي للمستندات المعقدة. إذا تم شطر جدول بيانات إلى نصفين في قطعتين مختلفتين (Chunks)، فسيصبح بلا معنى للنموذج اللغوي.",
        },
        {
          type: "paragraph",
          text: "لذلك، يجب أن تعتمد خطوط أنابيب البيانات في بيئة الإنتاج على التقسيم الدلالي والفهم العميق لهيكل المستند:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            {
              term: "",
              text: "الحفاظ على الجداول ومعالجتها ككتل مستقلة (Markdown/HTML).",
            },
            {
              term: "",
              text: "الفهرسة الهرمية لربط التفاصيل الدقيقة بالسياق العام للمستند الأصلي.",
            },
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "2. سيادة البيانات والتحكم في الوصول (RBAC)",
        },
        {
          type: "paragraph",
          text: "عندما تنشر مؤسسة نظام RAG داخلياً، يجب أن تحترم النماذج اللغوية حدود الأمان الحالية. لا ينبغي لموظف يستفسر من المساعد الآلي للموارد البشرية أن يتمكن من استرجاع التوقعات المالية السرية الخاصة بالرئيس التنفيذي لمجرد أنه تم تضمينها في نفس مساحة المتجهات.",
        },
        {
          type: "paragraph",
          text: "في منطقة الشرق الأوسط وتحديداً في مشاريع التحول الرقمي الحكومية، تُعد سيادة البيانات (Data Sovereignty) مطلباً أمنياً إلزامياً. يتطلب ذلك إدخال البيانات الوصفية (Metadata) الخاصة بصلاحيات الوصول داخل قاعدة بيانات المتجهات، وتطبيق مرشحات حتمية صارمة عند الاسترجاع ، قبل بناء نافذة السياق الخاصة بالنموذج.",
        },
        {
          type: "paragraph",
          text: "نهج الفلترة أولاً: عندما يتم تنفيذ استعلام، يتم تمرير رموز هوية المستخدم (IAM) إلى قاعدة بيانات المتجهات. يقتصر البحث بدقة على أجزاء المستندات الموسومة بمعرفات وصول تتطابق مع مستوى تصريح المستخدم. هذا يضمن أن النموذج اللغوي غير قادر فعلياً على تسريب المعلومات المقيدة لأن تلك المعلومات لم تدخل نطاق رؤيته أبدًا.",
        },
        {
          type: "heading",
          level: 3,
          text: "3. الاسترجاع المتقدم: البحث الهجين (Hybrid Search)",
        },
        {
          type: "paragraph",
          text: "البحث الدلالي ممتاز في إيجاد التطابقات المفاهيمية، ولكنه يواجه صعوبة في مطابقة الكلمات الرئيسية الدقيقة (مثل البحث عن رمز منتج محدد أو رقم هوية).",
        },
        {
          type: "paragraph",
          text: "تستخدم أنظمة RAG المؤسسية البحث الهجين :",
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              term: "البحث الدلالي (Dense Vector)",
              text: "يلتقط المعنى العام للموضوع.",
            },
            {
              term: "البحث بالنص الدقيق (Sparse/BM25)",
              text: "يلتقط التطابقات النصية الدقيقة للأرقام والرموز.",
            },
          ],
        },
        {
          type: "paragraph",
          text: "يتم بعد ذلك تمرير النتائج من كلا البحثين عبر نموذج إعادة الترتيب (Re-ranker) لضمان تقديم السياق الأعلى قيمة فقط للنموذج اللغوي.",
        },
        {
          type: "heading",
          level: 2,
          text: "الخلاصة",
        },
        {
          type: "paragraph",
          text: "بناء معمارية RAG للمؤسسات هو في المقام الأول تحدٍ يتعلق بـ هندسة البيانات الموزعة والأمن السيبراني ، وليس مجرد تحدٍ في الذكاء الاصطناعي. من خلال التركيز القوي على تحليل المستندات، والتقسيم الدلالي، والضوابط الصارمة للوصول وسيادة البيانات، يمكن للمنظمات نشر أنظمة ذكاء اصطناعي ذكية وآمنة ومتوافقة مع المعايير المؤسسية.",
        },
      ],
    },
    {
      slug: "modular-monoliths",
      title: "البنية الأحادية المعيارية مقابل الخدمات المصغرة",
      category: "هندسة البرمجيات",
      date: "2025-08-10",
      readTime: "11 دقيقة",
      excerpt: "كيفية اتخاذ قرارات معمارية صائبة للأنظمة المؤسسية وتجنب التعقيد المبكر للخدمات المصغرة من خلال تبني حدود منطقية صارمة.",
      draft: false,
      author: "هندسة كوجنس",
      capability: "software-engineering",
      blocks: [
        {
          type: "paragraph",
          text: "على مدار العقد الماضي، روجت صناعة هندسة البرمجيات بقوة لـ \"الخدمات المصغرة\" (Microservices) باعتبارها النمط المعماري الافتراضي للتطبيقات الحديثة. كان الوعد جذاباً: عمليات نشر مستقلة، وبرمجة متعددة اللغات، وقابلية توسع أفقية لا نهائية.",
        },
        {
          type: "paragraph",
          text: "ومع ذلك، نرى في \"كوجنس\" باستمرار مؤسسات تكافح تحت وطأة الأعباء التشغيلية للأنظمة الموزعة بشكل مبكر. قبل الوصول إلى حجم شركات مثل نتفليكس أو أوبر، تجد العديد من المنظمات نفسها غارقة في تكوينات كوبرنيتيس (Kubernetes)، وتتبع الأخطاء في شبكة معقدة، ومشاكل تناسق البيانات.",
        },
        {
          type: "heading",
          level: 2,
          text: "تكلفة التوزيع المبكر",
        },
        {
          type: "paragraph",
          text: "الخدمات المصغرة ليست مجانية. إنها تستبدل التعقيد المنطقي داخل قاعدة برمجية واحدة بتعقيد تشغيلي عبر شبكة موزعة.",
        },
        {
          type: "paragraph",
          text: "عندما تقوم بتقسيم بنية أحادية إلى خدمات مصغرة بشكل مبكر، فإنك ترث المشاكل التالية:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              term: "تأخير الشبكة (Network Latency)",
              text: "ما كان يستغرق أجزاء من الملي ثانية كاستدعاء دالة في الذاكرة، أصبح الآن طلب شبكة عرضة لفقدان حزم البيانات وتأخير الاتصال.",
            },
            {
              term: "إدارة البيانات الموزعة",
              text: "تتطلب المعاملات التي يجب أن تكون مترابطة (ACID Transactions) عبر قواعد بيانات متعددة أنماطاً معقدة مثل نمط \"Saga\" أو الالتزام ثنائي المرحلة.",
            },
            {
              term: "العبء المعرفي",
              text: "لم يعد بإمكان المطورين ببساطة تشغيل التطبيق محلياً. يجب عليهم تشغيل وإدارة نصف دزينة من الحاويات (Containers) فقط لاختبار تغيير بسيط في واجهة المستخدم.",
            },
          ],
        },
        {
          type: "paragraph",
          text: "إذا كان فريق الهندسة الخاص بك يقضي وقتاً في إدارة خطوط أنابيب النشر (CI/CD) وشبكات الخدمات (Service Meshes) أكثر من الوقت الذي يقضيه في تطوير ميزات العمل الفعلية، فإن معماريتك تضر بسرعة إنجازك.",
        },
        {
          type: "heading",
          level: 2,
          text: "عودة البنية الأحادية المعيارية (Modular Monolith)",
        },
        {
          type: "paragraph",
          text: "تحافظ البنية الأحادية المعيارية على وحدة نشر (Deployment Unit) واحدة مع فرض حدود منطقية صارمة داخلياً. إنها توفر النظافة المعمارية للخدمات المصغرة دون ضريبة الشبكات الموزعة.",
        },
        {
          type: "heading",
          level: 3,
          text: "فرض الحدود المعمارية",
        },
        {
          type: "paragraph",
          text: "المفتاح لنجاح البنية الأحادية المعيارية هو منعها من التدهور إلى كود متشابك. يتطلب هذا انضباطاً صارماً:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            {
              term: "واجهات برمجية صارمة (Strict Interfaces)",
              text: "يجب أن تتواصل الوحدات مع بعضها البعض فقط من خلال واجهات عامة (APIs) محددة مسبقاً.",
            },
            {
              term: "عزل البيانات",
              text: "حتى لو كانت الوحدات تعيش في نفس القاعدة البرمجية، يجب أن تمتلك مخططات قاعدة بيانات (Schemas) خاصة بها. لا يمكن للوحدة \"أ\" الكتابة مباشرة في جداول الوحدة \"ب\".",
            },
            {
              term: "فحص المعمارية آلياً",
              text: "يجب استخدام أدوات تمنع بناء التطبيق إذا حاول مطور إجراء استيراد غير قانوني بين الوحدات عبر الحدود المسموح بها.",
            },
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "متى يجب استخراج خدمة مصغرة؟",
        },
        {
          type: "paragraph",
          text: "نوصي في كوجنس باستراتيجية \"الاستخراج عند الضرورة القصوى\" . ابدأ ببنية أحادية معيارية، وقم بفصل وحدة معينة إلى خدمة مصغرة مستقلة فقط عندما تفرض عليك متطلبات تجارية أو فنية صارمة القيام بذلك:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              term: "التباين في استهلاك الموارد",
              text: "تتطلب وحدة معينة (مثل معالجة الصور أو استنتاج الذكاء الاصطناعي) خصائص توسع مختلفة جذرياً أو أجهزة متخصصة (GPUs).",
            },
            {
              term: "حجم المنظمة",
              text: "عندما ينمو فريق الهندسة الخاص بك بشكل كبير، يصبح العبء الإداري لدمج الأكواد في مستودع واحد عنق الزجاجة. (قانون كونواي).",
            },
            {
              term: "محيط الأمان والتشفير",
              text: "تتعامل وحدة معينة مع بيانات حساسة للغاية (مثل بوابات الدفع) وتتطلب دورة تدقيق أمني مختلفة تماماً عن التطبيق الأساسي.",
            },
          ],
        },
      ],
    },
    {
      slug: "zero-downtime-deployments",
      title: "عمليات النشر بدون توقف في الأنظمة السحابية",
      category: "هندسة البرمجيات",
      date: "2025-08-09",
      readTime: "10 دقائق",
      excerpt: "تنفيذ خطوط أنابيب نشر قوية باستخدام استراتيجيات Blue-Green و Canary، والتعامل مع الحالة الموزعة وترحيل قواعد البيانات بأمان.",
      draft: false,
      author: "هندسة كوجنس",
      capability: "software-engineering",
      blocks: [
        {
          type: "paragraph",
          text: "بالنسبة للتطبيقات المؤسسية الحديثة، أصبحت \"نوافذ الصيانة المجتمعية\" (Maintenance Windows) من الماضي. في اقتصاد عالمي يعمل على مدار الساعة، يفرض التسليم المستمر ضرورة شحن الكود البرمجي الجديد إلى بيئة الإنتاج في أي وقت من اليوم - دون التأثير على تجربة المستخدم النهائي.",
        },
        {
          type: "paragraph",
          text: "يتطلب تحقيق ذلك تجاوز التحديثات المتداولة البسيطة (Rolling Updates) إلى استراتيجيات متطورة لـ عمليات النشر بدون توقف (Zero-Downtime Deployments).",
        },
        {
          type: "heading",
          level: 2,
          text: "الشرط الأساسي: التطبيقات عديمة الحالة (Stateless)",
        },
        {
          type: "paragraph",
          text: "تكون عمليات النشر بدون توقف مستحيلة إذا كان تطبيقك يخزن حالة المستخدم (مثل بيانات الجلسة Session Data) في الذاكرة المحلية للخادم. أثناء عملية النشر، يتم تدمير وإنشاء مثيلات (Instances) الخادم بشكل سريع جداً.",
        },
        {
          type: "paragraph",
          text: "للنجاة من هذا التغيير السريع، يجب أن تكون التطبيقات عديمة الحالة (Stateless) تماماً. يجب دفع جميع بيانات الجلسة وذاكرة التخزين المؤقت والحالة إلى مخازن بيانات خارجية وموزعة مثل Redis أو Memcached. هذا يضمن إمكانية توجيه طلب المستخدم إلى أي حاوية سليمة دون تمييز.",
        },
        {
          type: "heading",
          level: 2,
          text: "استراتيجيات النشر المتقدمة",
        },
        {
          type: "paragraph",
          text: "بمجرد أن يصبح التطبيق عديم الحالة، يصبح توجيه حركة المرور ديناميكياً ويمكن التحكم به.",
        },
        {
          type: "heading",
          level: 3,
          text: "1. عمليات النشر الأزرق/الأخضر (Blue-Green Deployments)",
        },
        {
          type: "paragraph",
          text: "تقلل هذه الاستراتيجية من المخاطر من خلال الحفاظ على بيئتي إنتاج متطابقتين (الزرقاء والخضراء). في أي وقت، بيئة واحدة فقط هي التي تخدم حركة المرور المباشرة.",
        },
        {
          type: "paragraph",
          text: "عند نشر إصدار جديد، يتم دفع الكود إلى البيئة الخاملة (الخضراء). يتم تشغيل اختبارات آلية ضدها. إذا نجحت، يُطلب من موازن الحمل التبديل الفوري لـ 100% من حركة المرور إلى البيئة الخضراء.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            {
              term: "الميزة الكبرى",
              text: "إذا تم اكتشاف خطأ حرج في بيئة الإنتاج، يكون التراجع (Rollback) فورياً. ما عليك سوى إعادة توجيه موازن الحمل إلى البيئة الزرقاء مرة أخرى.",
            },
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "2. إصدارات الكناري (Canary Releases)",
        },
        {
          type: "paragraph",
          text: "بينما يزيل نموذج (Blue-Green) وقت التوقف عن العمل، فإنه لا يزال يعرض 100% من المستخدمين للكود الجديد في نفس الوقت. إصدارات الكناري تخفف من هذا الخطر من خلال تعريض الإصدار الجديد لعينة إحصائية صغيرة من حركة المرور.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              term: "",
              text: "توجيه 5% من حركة المرور إلى إصدار \"الكناري\" الجديد.",
            },
            {
              term: "",
              text: "مراقبة المقاييس الرئيسية: معدلات الخطأ (HTTP 500)، وارتفاع وقت الاستجابة.",
            },
            {
              term: "",
              text: "إذا ظلت المقاييس مستقرة، يتم توسيع حركة المرور تدريجياً إلى 20%، و 50%، وفي النهاية 100%.",
            },
            {
              term: "",
              text: "إذا تم اكتشاف خلل، يتم إعادة توجيه جميع حركات المرور تلقائياً إلى الإصدار المستقر.",
            },
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "الجزء الأصعب: ترحيل قواعد البيانات (Database Migrations)",
        },
        {
          type: "paragraph",
          text: "أكبر عقبة أمام عمليات النشر بدون توقف هي حالة قاعدة البيانات. كيف تقوم بنشر كود يتطلب مخطط قاعدة بيانات جديد (Schema) دون قفل الجداول والتسبب في تعطل النظام؟",
        },
        {
          type: "paragraph",
          text: "الحل هو التوافق مع الإصدارات السابقة ونمط التوسيع/التقليص (Expand/Contract Pattern) .",
        },
        {
          type: "paragraph",
          text: "لا يمكنك بعد الآن تغيير عمود ونشر الكود في نفس الوقت. يجب نشر تغييرات المخطط بشكل مستقل تماماً عن كود التطبيق، في تسلسل متعدد الخطوات:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              term: "التوسيع (قاعدة البيانات)",
              text: "أضف العمود/الجدول الجديد إلى قاعدة البيانات. لا تحذف أو تعدل القديم.",
            },
            {
              term: "النشر (التطبيق)",
              text: "انشر إصدار التطبيق الجديد. يجب أن يُكتب بطريقة تمكنه من الكتابة في كلا العمودين القديم والجديد.",
            },
            {
              term: "الترحيل (البيانات)",
              text: "قم بتشغيل برنامج نصي في الخلفية لنسخ البيانات من العمود القديم إلى الجديد.",
            },
            {
              term: "التقليص (التطبيق)",
              text: "انشر إصداراً جديداً من التطبيق يتوقف عن الكتابة في العمود القديم.",
            },
            {
              term: "التقليص (قاعدة البيانات)",
              text: "أخيراً، قم بحذف العمود القديم.",
            },
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "الخلاصة",
        },
        {
          type: "paragraph",
          text: "تعد عمليات النشر بدون توقف في الأنظمة المؤسسية متطلباً معمارياً أساسياً. إنها تتطلب تصميم التطبيقات من الألف إلى الياء لتكون عديمة الحالة، مع إمكانية مراقبة قوية، وتطور بيانات متوافق مع الإصدارات السابقة. من خلال تبني التوجيه الديناميكي وعمليات الترحيل المنضبطة لقواعد البيانات، يمكن لفرق الهندسة في المؤسسات شحن الميزات بشكل أسرع وأكثر أماناً.",
        },
      ],
    },
    {
      slug: "enterprise-system-integration",
      title: "تكامل الأنظمة المؤسسية: الاستراتيجيات والتحديات",
      category: "تكامل الأنظمة",
      date: "2025-01-01",
      readTime: "14 دقيقة",
      excerpt: "كيفية ربط الأنظمة المتفرقة وتحديث البنية التحتية للمؤسسات باستخدام بوابات واجهات برمجة التطبيقات (API Gateways) لتحقيق التحول الرقمي الآمن.",
      draft: false,
      author: "هندسة كوجنس",
      capability: "automation-integrations",
      blocks: [
        {
          type: "paragraph",
          text: "يُعد تكامل الأنظمة المؤسسية (Enterprise System Integration) التحدي التقني الأكبر الذي يواجه مبادرات التحول الرقمي في منطقة الشرق الأوسط. حيث تمتلك العديد من الجهات الحكومية والشركات الكبرى أنظمة قديمة (Legacy Systems) ضخمة ومعقدة، تم بناؤها على مدى عقود، وتعمل الآن في جزر منعزلة عن التطبيقات الحديثة والخدمات السحابية.",
        },
        {
          type: "paragraph",
          text: "إن محاولة استبدال هذه الأنظمة القديمة بالكامل في خطوة واحدة (Big Bang Rewrite) غالباً ما تؤدي إلى كوارث تشغيلية، وتجاوز هائل في الميزانيات، وفترات توقف طويلة عن العمل.",
        },
        {
          type: "paragraph",
          text: "البديل الآمن والفعال هو التحديث التدريجي عبر تكامل الأنظمة المستند إلى بوابات واجهات برمجة التطبيقات (API Gateways) .",
        },
        {
          type: "heading",
          level: 2,
          text: "التحدي: العمل في صوامع معزولة",
        },
        {
          type: "paragraph",
          text: "بدون تكامل فعال للأنظمة، تواجه المؤسسات المشاكل التالية:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              term: "تكرار البيانات",
              text: "تخزين بيانات العميل نفسه في ثلاثة أنظمة مختلفة يؤدي إلى تناقضات حتمية.",
            },
            {
              term: "العمليات اليدوية",
              text: "يضطر الموظفون إلى استخراج البيانات من نظام وإدخالها يدوياً في نظام آخر.",
            },
            {
              term: "عجز الذكاء الاصطناعي",
              text: "لا يمكن لوكلاء الذكاء الاصطناعي أو أنظمة RAG تقديم إجابات دقيقة إذا لم تكن متصلة بجميع قواعد بيانات المؤسسة.",
            },
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "نمط التحديث التدريجي (Strangler Fig Pattern)",
        },
        {
          type: "paragraph",
          text: "بدلاً من إعادة كتابة النظام القديم، يجب على المؤسسات استخدام نمط الاستبدال التدريجي. يتضمن ذلك وضع \"بوابة واجهات برمجة تطبيقات\" (API Gateway) أمام النظام القديم، والبدء في توجيه وظائف محددة تدريجياً إلى خدمات مصغرة حديثة.",
        },
        {
          type: "heading",
          level: 3,
          text: "الخطوة 1: طبقة مكافحة الفساد البرمجي (Anti-Corruption Layer)",
        },
        {
          type: "paragraph",
          text: "الأنظمة القديمة غالباً ما تتحدث ببروتوكولات عفا عليها الزمن (مثل SOAP أو ملفات نصية). تقوم بوابة الـ API بدور المترجم، حيث تستقبل طلبات REST/JSON الحديثة من تطبيقات الجوال، وتترجمها إلى لغة النظام القديم، مما يحمي التطبيقات الحديثة من تعقيد الأنظمة المتهالكة.",
        },
        {
          type: "heading",
          level: 3,
          text: "الخطوة 2: الاستخراج التدريجي",
        },
        {
          type: "paragraph",
          text: "يتم تحديد مجال عمل واحد (مثل \"إدارة المستخدمين\"). يتم بناء خدمة حديثة للتعامل معه. بمجرد اختبارها، يتم تكوين بوابة الـ API لتوجيه جميع الطلبات المتعلقة بالمستخدمين إلى الخدمة الجديدة، متجاوزة النظام القديم تماماً. تتكرر هذه العملية حتى يصبح النظام القديم مجرد قشرة فارغة يمكن إيقاف تشغيلها بأمان.",
        },
        {
          type: "heading",
          level: 2,
          text: "اعتبارات الأمان والامتثال (Security & Compliance)",
        },
        {
          type: "list",
          ordered: false,
          items: [
            {
              term: "حماية الواجهات (API Security)",
              text: "تعريض الأنظمة الأساسية القديمة مباشرة لشبكة الإنترنت هو كارثة أمنية. توفر بوابة API خط دفاع أول حاسم، حيث تنفذ مصادقة OAuth2، وقواعد جدار حماية تطبيقات الويب (WAF)، وتحديد معدل الطلبات (Rate Limiting) لحماية الأنظمة الهشة من الهجمات أو الضغط الزائد.",
            },
            {
              term: "سيادة البيانات (Data Sovereignty)",
              text: "عند تكامل الأنظمة السحابية مع الأنظمة المحلية (On-Premise)، يجب التأكد من أن حركة البيانات الحساسة لا تعبر حدود الدولة، امتثالاً للوائح الهيئة الوطنية للأمن السيبراني (NCA) والجهات التنظيمية المحلية.",
            },
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "الخلاصة",
        },
        {
          type: "paragraph",
          text: "تكامل الأنظمة المؤسسية لا يتطلب عمليات إعادة كتابة ضخمة ومحفوفة بالمخاطر. من خلال النشر الاستراتيجي لبوابات API واعتماد نمط التحديث التدريجي، يمكن للمؤسسات ربط الأنظمة القديمة بالتطبيقات الحديثة وتهيئة البنية التحتية لتقنيات الذكاء الاصطناعي، كل ذلك دون أي توقف في سير الأعمال.",
        },
      ],
    },
    {
      slug: "architecting-for-scale",
      title: "هندسة البرمجيات للتوسع: الدروس المستفادة من بناء بنى تحتية للخدمات المصغرة",
      category: "هندسة البرمجيات",
      date: "2024-04-12",
      readTime: "٨ دقائق",
      excerpt: "نظرة عميقة على التحديات الهندسية عند الانتقال من الأنظمة المتجانسة إلى الخدمات المصغرة المعتمدة على الأحداث في بيئات عالية الإنتاجية.",
      draft: false,
      author: "فريق هندسة كوجنس",
      capability: "software-engineering",
      blocks: [
        {
          type: "paragraph",
          text: "الانتقال من نظام متجانس (Monolith) إلى نظام يعتمد على الخدمات المصغرة (Microservices) لا يتعلق فقط بفصل الأكواد البرمجية عن بعضها؛ بل هو تغيير جوهري في كيفية إدارة حالة النظام، والتعامل مع الفشل، ومعالجة البيانات بشكل متزامن أو غير متزامن.",
        },
        {
          type: "paragraph",
          text: "في هذه المقالة، نستعرض الدروس المستفادة من قيام فرقنا بهندسة أنظمة تعتمد على الأحداث (Event-Driven Architectures) قادرة على التعامل مع الآلاف من الطلبات في الثانية في بيئات الأعمال عالية المتطلبات.",
        },
        {
          type: "paragraph",
          text: "أحد أكبر المفاهيم الخاطئة حول الخدمات المصغرة هو أنها تحل مشاكل الأداء بطبيعتها. في الواقع، هي تحول المشكلة من التعقيد الداخلي إلى تعقيد شبكي وتواصلي .",
        },
        {
          type: "paragraph",
          text: "عندما يقوم أحد عملائنا في قطاع الخدمات اللوجستية بالتبليغ عن بطء في النظام المتجانس الخاص به، كان السبب الجذري يكمن في تنافس عمليات قراءة وكتابة البيانات على قاعدة بيانات مركزية واحدة.",
        },
        {
          type: "paragraph",
          text: "\"في الأنظمة الموزعة، الفشل ليس احتمالية، بل هو واقع يجب التصميم من أجله.\"",
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              term: "فصل القراءة عن الكتابة (CQRS)",
              text: "لفصل الحمل عن قاعدة البيانات الرئيسية، قمنا بإنشاء مستودعات بيانات منفصلة للعمليات المعقدة وقراءات الواجهة الأمامية، يتم تزامنها عبر أحداث غير متزامنة (Kafka).",
            },
            {
              term: "العزل التام (Bulkheading)",
              text: "صُممت كل خدمة مصغرة لتمتلك قاعدة البيانات الخاصة بها والاعتماد على نفسها في اتخاذ القرارات الأساسية، حتى لو توقفت الخدمات المجاورة عن العمل.",
            },
            {
              term: "التراجع الذكي (Graceful Degradation)",
              text: "عند ارتفاع الحمل بشكل يتجاوز السعة القصوى، تقوم أنظمتنا بتقليل جودة أو كمية البيانات المسترجعة بدلاً من إسقاط النظام بالكامل، مما يضمن استمرارية الأعمال.",
            },
          ],
        },
        {
          type: "paragraph",
          text: "الاعتماد الواسع على بروتوكول HTTP أو gRPC بين الخدمات يؤدي إلى ربط قوي (Tight Coupling) يجعل النظام يعاني ككل إذا تباطأت خدمة واحدة.",
        },
        {
          type: "paragraph",
          text: "من خلال اعتماد بنية تعتمد على الأحداث (Event-Driven Architecture) ، تمكنا من:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            {
              term: "",
              text: "فصل الناشر عن المشترك، مما يسمح بإضافة ميزات جديدة دون المساس بالخدمات الأساسية.",
            },
            {
              term: "",
              text: "إعادة معالجة الأحداث (Event Replay) للتعافي من الأعطال وتدقيق البيانات بسهولة.",
            },
            {
              term: "",
              text: "تحقيق توسع ديناميكي (Auto-scaling) بناءً على حجم طوابير الانتظار وليس فقط معدل استهلاك المعالج (CPU).",
            },
          ],
        },
        {
          type: "paragraph",
          text: "بناء منصات برمجية قابلة للتوسع ليس مجرد تمرين تقني؛ بل هو ضرورة حتمية للشركات التي تهدف إلى النمو السريع دون المساس بالموثوقية. في كوجنس، نتبنى هذه المبادئ في كل سطر برمجي نكتبه لبناء أنظمة تصمد أمام الزمن واختبارات الضغط.",
        },
      ],
    },
  ],
  en: [
    {
      slug: "evaluating-ai-agents",
      title: "Evaluating AI Agents in Production",
      category: "AI Engineering",
      date: "2025-08-12",
      readTime: "12 min read",
      excerpt: "Moving beyond LLM prototypes to deterministic agentic workflows. A deep dive into evaluation frameworks, strict type-safe tool execution, and human-in-the-loop safety.",
      draft: false,
      author: "Kogns Engineering",
      capability: "ai-solutions",
      blocks: [
        {
          type: "paragraph",
          text: "The transition from a prototype Large Language Model (LLM) to a production-ready autonomous agent is fraught with challenges. While conversational interfaces (chatbots) are useful for broad inquiry, true enterprise value lies in agentic workflows —systems capable of independent reasoning, deterministic tool execution, and stateful multi-step interactions.",
        },
        {
          type: "paragraph",
          text: "In this insight, we break down the engineering methodologies required to close the \"trust gap\" in AI deployments, moving from probabilistic generation to deterministic reliability.",
        },
        {
          type: "heading",
          level: 2,
          text: "The Enterprise Trust Gap",
        },
        {
          type: "paragraph",
          text: "Enterprise buyers demand reliability. An agent that works 90% of the time is often 100% useless in mission-critical environments. If an agent is trusted to modify customer records, trigger external API calls, or approve internal workflows, the organization must be absolutely certain that the agent's logic will not deviate from compliance boundaries.",
        },
        {
          type: "paragraph",
          text: "To close this trust gap, organizations must abandon qualitative \"vibe-checks\" and implement rigorous, automated evaluation frameworks combined with robust architectural constraints.",
        },
        {
          type: "heading",
          level: 2,
          text: "1. Deterministic Action Boundaries",
        },
        {
          type: "paragraph",
          text: "Language models are inherently probabilistic, but enterprise APIs are strictly deterministic. The interface between the two must be heavily constrained.",
        },
        {
          type: "paragraph",
          text: "By limiting the agent's action space and utilizing strongly typed tool outputs—such as forcing strict JSON schema adherence through Structured Outputs or constrained decoding techniques—we reduce the probabilistic nature of the underlying model.",
        },
        {
          type: "paragraph",
          text: "If the agent attempts to hallucinate a customerId format, the execution layer intercepts the failure, preventing the invalid state from reaching the production CRM. The error is then fed back to the agent as a context correction, allowing it to self-repair its reasoning.",
        },
        {
          type: "heading",
          level: 2,
          text: "2. Human-in-the-Loop (HITL) Architecture",
        },
        {
          type: "paragraph",
          text: "For high-stakes actions—such as executing a financial transaction, modifying a production database, or sending bulk communications—an agent must pause and request human authorization.",
        },
        {
          type: "paragraph",
          text: "The architecture should treat the agent as an intelligent workflow preparer, while a human acts as the final commit mechanism.",
        },
        {
          type: "paragraph",
          text: "This asynchronous suspension requires the agentic framework to support state persistence. The agent must be able to \"sleep\" and resume its context seamlessly once the human operator provides approval or rejection feedback via a dedicated UI dashboard.",
        },
        {
          type: "heading",
          level: 2,
          text: "3. Continuous Evaluation (LLMs-as-a-Judge vs. Deterministic Evals)",
        },
        {
          type: "paragraph",
          text: "Production AI requires automated CI/CD pipelines specifically for prompts, model reasoning, and tool execution. Frameworks must run hundreds of test cases against the agent's logic every time the system is updated.",
        },
        {
          type: "heading",
          level: 3,
          text: "Deterministic Evals",
        },
        {
          type: "paragraph",
          text: "These are binary tests. Did the agent call the correct tool? Did it extract the exact dollar amount from the receipt? These can be evaluated using traditional assertions ( assert agent_action.tool == \"extract_invoice\" ).",
        },
        {
          type: "heading",
          level: 3,
          text: "LLM-as-a-Judge Evals",
        },
        {
          type: "paragraph",
          text: "For more nuanced outputs (e.g., \"Was the agent's tone appropriate for a frustrated customer?\"), a secondary, highly capable LLM (like GPT-4 or Claude 3.5 Sonnet) is used to score the agent's output against a detailed rubric.",
        },
        {
          type: "paragraph",
          text: "| Evaluation Strategy | Speed | Cost | Accuracy for Nuance | Accuracy for Strict Logic | | :--- | :--- | :--- | :--- | :--- | | Deterministic (Regex/AST) | Very Fast | Zero | Poor | Perfect | | LLM-as-a-Judge | Slow | High | Excellent | Good (but non-deterministic) | | Human Evaluation | Very Slow | Very High | Perfect | Perfect |",
        },
        {
          type: "heading",
          level: 2,
          text: "Implementation Considerations at Scale",
        },
        {
          type: "paragraph",
          text: "When deploying agents at an enterprise scale, several operational factors emerge:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            {
              term: "Observability",
              text: "Every reasoning step, tool call, and token metric must be traced (e.g., using OpenTelemetry, LangSmith, or Phoenix). When an agent fails in production, engineers need a complete causal chain to debug the prompt.",
            },
            {
              term: "Latency",
              text: "Agentic workflows often involve multiple sequential LLM calls (Plan -> Execute -> Observe -> Re-plan). This can introduce significant latency. Streaming UI patterns and optimistic UI updates are necessary to maintain user engagement during processing.",
            },
            {
              term: "Cost Controls",
              text: "Multi-step reasoning loops can rapidly consume token budgets. Hard circuit-breakers must be implemented to prevent agents from entering infinite loops.",
            },
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Conclusion",
        },
        {
          type: "paragraph",
          text: "The era of simplistic chat wrappers is ending. Enterprise value is now generated by autonomous agents that can reliably execute complex business processes. However, this transition requires treating AI development less like data science and more like rigorous, deterministic software engineering. By implementing strict tool boundaries, continuous evaluation pipelines, and strategic human-in-the-loop safety nets, organizations can confidently deploy agentic workflows into mission-critical environments.",
        },
      ],
    },
    {
      slug: "rag-architecture-enterprise",
      title: "RAG Architecture for Enterprise Data Pipelines",
      category: "Data Engineering",
      date: "2025-08-11",
      readTime: "14 min read",
      excerpt: "Designing secure, scalable Retrieval-Augmented Generation systems while maintaining data sovereignty, RBAC, and precision at scale.",
      draft: false,
      author: "Kogns Engineering",
      capability: "data-engineering",
      blocks: [
        {
          type: "paragraph",
          text: "Retrieval-Augmented Generation (RAG) has rapidly become the standard architectural pattern for grounding Large Language Models (LLMs) in proprietary enterprise data. However, there is a massive chasm between a prototype built in a Jupyter notebook and a secure, production-grade RAG pipeline serving thousands of employees.",
        },
        {
          type: "paragraph",
          text: "A true enterprise RAG system requires significantly more engineering effort focused on data hygiene, semantic chunking, and strict access control than on the LLM itself.",
        },
        {
          type: "heading",
          level: 2,
          text: "The Foundation is Data Engineering",
        },
        {
          type: "paragraph",
          text: "A RAG system is only as intelligent as the data it retrieves. The highest ROI in AI development consistently comes from rigorous Data Engineering applied to the ingestion layer.",
        },
        {
          type: "heading",
          level: 3,
          text: "1. Ingestion and Advanced Chunking Strategy",
        },
        {
          type: "paragraph",
          text: "Naive chunking algorithms split documents arbitrarily by character or token count. This routinely destroys the semantic context of complex documents. A table cut in half across two vector chunks becomes meaningless to an LLM.",
        },
        {
          type: "paragraph",
          text: "Production pipelines must utilize Semantic Chunking and document-aware parsing.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            {
              term: "Table Preservation",
              text: "Tables must be extracted and either embedded as Markdown/HTML blocks or summarized prior to embedding.",
            },
            {
              term: "Hierarchical Indexing",
              text: "A document is parsed into a parent-child relationship. Large summary chunks act as parents, while highly detailed paragraphs act as children. If a child chunk is retrieved via vector search, the system passes the entire parent chunk to the LLM to provide surrounding context.",
            },
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "2. Data Sovereignty and Access Control (RBAC)",
        },
        {
          type: "paragraph",
          text: "When an enterprise deploys an internal RAG system, the LLM must respect existing security perimeters. An employee querying the HR bot should not be able to retrieve CEO-level financial projections simply because the data was embedded into the same vector space.",
        },
        {
          type: "paragraph",
          text: "This requires injecting access metadata into the vector store and applying hard deterministic filters at retrieval time , before the context window is constructed.",
        },
        {
          type: "paragraph",
          text: "The Filter-First Approach: When a query is executed, the user's IAM (Identity and Access Management) tokens are passed to the vector database. The search is constrained strictly to document chunks tagged with access IDs matching the user's clearance level. This ensures that the LLM is physically incapable of hallucinating or leaking restricted information because that information never enters its context window.",
        },
        {
          type: "heading",
          level: 3,
          text: "3. Advanced Retrieval: Hybrid Search and Re-ranking",
        },
        {
          type: "paragraph",
          text: "Standard semantic search (Dense Vector / K-Nearest Neighbors) is excellent at finding conceptual matches but struggles with exact keyword matching (e.g., searching for a specific product ID like \"SKU-99482\").",
        },
        {
          type: "paragraph",
          text: "Enterprise RAG pipelines utilize Hybrid Search :",
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              term: "Dense Vector Search",
              text: "Captures semantic meaning (\"software issues\").",
            },
            {
              term: "Sparse Keyword Search (BM25)",
              text: "Captures exact textual matches (\"Error 404\").",
            },
          ],
        },
        {
          type: "paragraph",
          text: "The results from both searches are combined and passed through a Cross-Encoder Re-ranker model . The re-ranker acts as a highly accurate judge, scoring the relevancy of each retrieved chunk against the user's specific query and re-ordering them to ensure only the absolute highest-value context is fed to the expensive LLM.",
        },
        {
          type: "heading",
          level: 2,
          text: "Tradeoffs and Implementation Considerations",
        },
        {
          type: "list",
          ordered: false,
          items: [
            {
              term: "Vector Database Selection",
              text: "The choice between a managed vector database (like Pinecone or Weaviate) and a vector extension on an existing relational database (like pgvector for PostgreSQL) depends heavily on data sovereignty requirements. For highly regulated industries, keeping vectors within existing compliance perimeters via pgvector often outweighs the managed convenience of external SaaS tools.",
            },
            {
              term: "Index Staleness",
              text: "Enterprise data is living. When a document is updated or deleted in the source system, the corresponding vectors must be immediately invalidated. Event-driven architectures (using tools like Kafka or Debezium) are required to listen for source changes and trigger localized re-embedding pipelines.",
            },
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Conclusion",
        },
        {
          type: "paragraph",
          text: "Building a RAG architecture for the enterprise is primarily a distributed data engineering challenge, not an AI challenge. By focusing heavily on document parsing, semantic chunking, and strict metadata-driven access controls, organizations can deploy AI systems that are not only intelligent but fundamentally secure and compliant.",
        },
      ],
    },
    {
      slug: "modular-monoliths",
      title: "Modular Monoliths vs. Microservices",
      category: "Software Engineering",
      date: "2025-08-10",
      readTime: "11 min read",
      excerpt: "Architectural decision-making for enterprise systems. When to avoid premature microservice complexity and embrace strict logical boundaries.",
      draft: false,
      author: "Kogns Engineering",
      capability: "software-engineering",
      blocks: [
        {
          type: "paragraph",
          text: "Over the last decade, the software engineering industry aggressively pushed microservices as the default architectural pattern for modern applications. The promise was alluring: independent deployments, polyglot programming, and infinite horizontal scalability.",
        },
        {
          type: "paragraph",
          text: "However, at Kogns, we frequently encounter enterprises struggling beneath the operational overhead of prematurely distributed systems. Before reaching the scale of Netflix or Uber, many organizations find themselves drowning in Kubernetes configurations, distributed tracing issues, and eventual consistency bugs.",
        },
        {
          type: "heading",
          level: 2,
          text: "The Cost of Premature Distribution",
        },
        {
          type: "paragraph",
          text: "Microservices are not free. They trade logical complexity within a single codebase for operational complexity across a distributed network.",
        },
        {
          type: "paragraph",
          text: "When you split a monolith into microservices prematurely, you inherit:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              term: "Network Latency",
              text: "What used to be a sub-millisecond in-memory function call is now a network request subject to packet loss, latency spikes, and timeouts.",
            },
            {
              term: "Distributed Data Management",
              text: "ACID transactions (Atomicity, Consistency, Isolation, Durability) across multiple databases require complex patterns like the Saga pattern or two-phase commits.",
            },
            {
              term: "Cognitive Load",
              text: "Developers can no longer simply boot up the application locally. They must orchestrate half a dozen containers just to test a frontend change.",
            },
          ],
        },
        {
          type: "paragraph",
          text: "If your engineering team spends more time managing CI/CD pipelines and service meshes than shipping business logic, your architecture is actively harming your velocity.",
        },
        {
          type: "heading",
          level: 2,
          text: "The Return of the Modular Monolith",
        },
        {
          type: "paragraph",
          text: "A modular monolith maintains a single deployable unit while enforcing strict logical boundaries internally. It offers the architectural hygiene of microservices without the distributed networking tax.",
        },
        {
          type: "heading",
          level: 3,
          text: "Enforcing Boundaries",
        },
        {
          type: "paragraph",
          text: "The key to a successful modular monolith is preventing it from deteriorating into a \"big ball of mud.\" This requires discipline:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            {
              term: "Strict Interfaces",
              text: "Modules must only communicate with each other through well-defined public APIs or interfaces.",
            },
            {
              term: "Data Isolation",
              text: "Even though the modules live in the same codebase, they should ideally possess their own database schemas. Module A cannot write directly to Module B's tables; it must call Module B's service layer.",
            },
            {
              term: "Architectural Linting",
              text: "Tooling must be used (e.g., ArchUnit in Java, or strict ESLint boundary rules in TypeScript) to break the build if a developer attempts an illegal cross-module import.",
            },
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "When to Extract a Microservice?",
        },
        {
          type: "paragraph",
          text: "We recommend a strategy of \"extraction by pain.\" Start with a modular monolith. Only carve out a specific module into an independent microservice when a strict business or technical requirement forces your hand.",
        },
        {
          type: "paragraph",
          text: "Valid reasons to extract a microservice include:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              term: "Asymmetric Scaling",
              text: "One specific module (e.g., an image processing pipeline or an AI inference engine) requires radically different scaling characteristics or specialized hardware (GPUs) compared to the rest of the app.",
            },
            {
              term: "Organizational Size",
              text: "When your engineering team grows beyond 50-100 developers, the communication overhead of merging into a single monolithic repo becomes a bottleneck. Conway's Law dictates that you must split the software to match the organizational structure.",
            },
            {
              term: "Security Perimeters",
              text: "A specific module handles highly sensitive data (e.g., PCI-DSS payment processing) and requires a fundamentally different security auditing cycle than the core application.",
            },
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Conclusion",
        },
        {
          type: "paragraph",
          text: "Microservices solve organizational and extreme scaling problems, not fundamental design problems. For the vast majority of enterprise applications, a meticulously crafted Modular Monolith will deliver superior performance, vastly simpler developer ergonomics, and significantly lower operational costs. Focus on defining strict logical boundaries first; physical distribution can come later when the business truly demands it.",
        },
      ],
    },
    {
      slug: "zero-downtime-deployments",
      title: "Zero-Downtime Deployments in Cloud-Native Systems",
      category: "Software Engineering",
      date: "2025-08-09",
      readTime: "10 min read",
      excerpt: "Implementing robust deployment pipelines using blue-green and canary strategies, handling distributed state, and managing database migrations safely.",
      draft: false,
      author: "Kogns Engineering",
      capability: "software-engineering",
      blocks: [
        {
          type: "paragraph",
          text: "For modern enterprise applications, scheduled \"maintenance windows\" are a relic of the past. In a global, always-on economy, continuous delivery dictates that new code must be shipped to production at any time of day—often dozens of times per week—without impacting the end-user experience.",
        },
        {
          type: "paragraph",
          text: "Achieving this requires moving beyond simple rolling updates to sophisticated Zero-Downtime Deployment strategies.",
        },
        {
          type: "heading",
          level: 2,
          text: "The Prerequisite: Stateless Applications",
        },
        {
          type: "paragraph",
          text: "Zero-downtime deployments are impossible if your application stores user state (like session data) in local memory. During a deployment, instances are rapidly destroyed and created.",
        },
        {
          type: "paragraph",
          text: "To survive this churn, applications must be strictly stateless . All session data, cache, and state must be pushed to external, distributed datastores like Redis or Memcached. This ensures that a user's request can be routed to any healthy container indiscriminately.",
        },
        {
          type: "heading",
          level: 2,
          text: "Deployment Topologies",
        },
        {
          type: "paragraph",
          text: "Once the application is stateless, traffic routing becomes dynamic.",
        },
        {
          type: "heading",
          level: 3,
          text: "1. Blue-Green Deployments",
        },
        {
          type: "paragraph",
          text: "This strategy minimizes risk by maintaining two identical production environments (Blue and Green). At any given time, only one environment is serving live traffic.",
        },
        {
          type: "paragraph",
          text: "When deploying a new version, the code is pushed to the idle environment (Green). Automated end-to-end tests are run against Green. If they pass, the Load Balancer is instructed to instantly switch 100% of traffic to Green.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            {
              term: "The Advantage",
              text: "If a critical bug is discovered in production, rolling back is instantaneous. You simply flip the Load Balancer back to Blue.",
            },
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "2. Canary Releases",
        },
        {
          type: "paragraph",
          text: "While Blue-Green eliminates deployment downtime, it still exposes 100% of your users to the new code simultaneously. Canary Releases mitigate this risk by exposing the new version to a small, statistical sample of traffic.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              term: "",
              text: "Route 5% of traffic to the new \"Canary\" version.",
            },
            {
              term: "",
              text: "Monitor key telemetry: HTTP 500 error rates, latency spikes, and custom business metrics.",
            },
            {
              term: "",
              text: "If metrics remain stable, gradually scale traffic to 20%, 50%, and eventually 100%.",
            },
            {
              term: "",
              text: "If an anomaly is detected, automatically route all traffic back to the stable baseline version.",
            },
          ],
        },
        {
          type: "paragraph",
          text: "This strategy limits the \"blast radius\" of any undetected bugs to a tiny fraction of the user base.",
        },
        {
          type: "heading",
          level: 2,
          text: "The Hard Part: Database Migrations",
        },
        {
          type: "paragraph",
          text: "The single greatest hurdle to zero-downtime deployments is statefulness at the database tier. How do you deploy code that requires a new database schema without locking tables and causing downtime?",
        },
        {
          type: "paragraph",
          text: "The solution is Backward Compatibility and the Expand/Contract Pattern .",
        },
        {
          type: "paragraph",
          text: "You can no longer alter a column and deploy code simultaneously. Database schema changes must be deployed completely independently of the application code, in a multi-step sequence:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              term: "Expand (Database)",
              text: "Add the new column/table to the database. Do not delete or modify the old one.",
            },
            {
              term: "Deploy (Application)",
              text: "Deploy the new application version. It must be written to write to both the old and new columns, ensuring data consistency for any older application instances still running during the transition.",
            },
            {
              term: "Migrate (Data)",
              text: "Run a background script to backfill data from the old column to the new column.",
            },
            {
              term: "Contract (Application)",
              text: "Deploy a new version of the app that stops writing to the old column.",
            },
            {
              term: "Contract (Database)",
              text: "Finally, drop the old column.",
            },
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Conclusion",
        },
        {
          type: "paragraph",
          text: "Zero-downtime deployments are not merely a DevOps concern; they are a fundamental software architecture requirement. They require applications to be designed from the ground up for statelessness, robust observability, and backward-compatible data evolution. By adopting Blue-Green or Canary routing paired with disciplined database migrations, engineering teams can ship features faster and safer, completely eliminating maintenance downtime.",
        },
      ],
    },
    {
      slug: "enterprise-system-integration",
      title: "Modernizing Legacy Systems with API Gateways",
      category: "System Integration",
      date: "2025-01-01",
      readTime: "13 min read",
      excerpt: "How to decouple monoliths and integrate legacy enterprise systems using modern API gateways without incurring massive downtime or rewrite risks.",
      draft: false,
      author: "Kogns Engineering",
      capability: "automation-integrations",
      blocks: [
        {
          type: "paragraph",
          text: "Legacy system modernization is arguably the highest-risk engineering endeavor an enterprise can undertake. Replacing a massive, undocumented, decades-old mainframe or monolith in a single \"big bang\" release almost universally results in catastrophic downtime and severe budget overruns.",
        },
        {
          type: "paragraph",
          text: "However, business agility demands that these systems be integrated into modern cloud-native ecosystems, mobile applications, and AI pipelines.",
        },
        {
          type: "paragraph",
          text: "The safest and most effective architectural pattern for achieving this is Incremental Modernization via API Gateways .",
        },
        {
          type: "heading",
          level: 2,
          text: "The Problem with \"Big Bang\" Rewrites",
        },
        {
          type: "paragraph",
          text: "The impulse to rewrite a legacy system from scratch is common, but it severely underestimates the amount of hidden, undocumented business logic locked within the old code.",
        },
        {
          type: "paragraph",
          text: "When you attempt a full rewrite:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              term: "Feature Freeze",
              text: "The business must stop innovating for 18-24 months while engineering catches up to the current state.",
            },
            {
              term: "The Moving Target",
              text: "By the time the rewrite is finished, the business requirements have changed.",
            },
            {
              term: "Cutover Risk",
              text: "Swapping the old system for the new one overnight carries an existential risk to business continuity.",
            },
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "The Strangler Fig Architecture",
        },
        {
          type: "paragraph",
          text: "Instead of rewriting the monolith, enterprises should employ the Strangler Fig Pattern . This involves placing an API Gateway in front of the legacy system and gradually strangling it by routing specific functionalities to new, modern microservices or modular monoliths one by one.",
        },
        {
          type: "heading",
          level: 3,
          text: "Step 1: Establish the Gateway",
        },
        {
          type: "paragraph",
          text: "The API Gateway becomes the single point of entry for all clients. Initially, it simply acts as a dumb proxy, forwarding 100% of the traffic directly to the legacy system.",
        },
        {
          type: "heading",
          level: 3,
          text: "Step 2: Build the Facade (Anti-Corruption Layer)",
        },
        {
          type: "paragraph",
          text: "Legacy systems often speak archaic protocols (e.g., SOAP, TCP sockets, flat files). The API Gateway or a dedicated integration layer translates modern REST/GraphQL JSON requests into whatever format the legacy system expects. This protects the new frontend clients from the complexity of the old backend.",
        },
        {
          type: "heading",
          level: 3,
          text: "Step 3: Incremental Extraction",
        },
        {
          type: "paragraph",
          text: "Identify a single, cohesive domain (e.g., \"User Authentication\"). Build a modern service to handle it. Once tested, configure the API Gateway to route all /users traffic to the new service, completely bypassing the legacy code. Repeat this process until the legacy system is merely a hollow shell, at which point it can be safely decommissioned.",
        },
        {
          type: "heading",
          level: 2,
          text: "Implementation Considerations",
        },
        {
          type: "list",
          ordered: false,
          items: [
            {
              term: "Data Synchronization",
              text: "If the new service and the legacy system both need access to the same underlying database, you must implement dual-writes or asynchronous replication (e.g., via Change Data Capture tools like Debezium) to ensure consistency during the transition phase.",
            },
            {
              term: "Security & Rate Limiting",
              text: "Exposing legacy mainframes directly to the modern web is a security disaster. The API Gateway provides a critical perimeter defense, implementing OAuth2/OIDC authentication, WAF rules, and strict rate limiting to protect the fragile legacy backend from being overwhelmed.",
            },
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Conclusion",
        },
        {
          type: "paragraph",
          text: "Enterprise system integration and legacy modernization do not require massive, risky rewrites. By strategically deploying API Gateways and adopting the Strangler Fig pattern, organizations can rapidly expose legacy data to modern applications (and AI agents) while systematically migrating away from technical debt with zero downtime.",
        },
      ],
    },
    {
      slug: "architecting-for-scale",
      title: "Architecting for Scale: The Kogns Approach to Event-Driven Systems",
      category: "Architecture",
      date: "2024-05-12",
      readTime: "8 min read",
      excerpt: "Engineering lessons from moving high-throughput systems off a monolith and onto event-driven microservices that stay resilient under load.",
      draft: false,
      author: "Kogns Engineering",
      capability: "software-engineering",
      blocks: [
        {
          type: "paragraph",
          text: "Moving from a monolith to microservices is not just a matter of splitting codebases. It is a fundamental change in how system state is managed, how failure is handled, and how data is processed synchronously or asynchronously.",
        },
        {
          type: "paragraph",
          text: "In this insight, we share lessons from engineering event-driven architectures that handle thousands of requests per second in demanding enterprise environments.",
        },
        {
          type: "heading",
          level: 2,
          text: "Monolithic Constraints",
        },
        {
          type: "paragraph",
          text: "One of the largest misconceptions about microservices is that they inherently solve performance problems. In practice, they relocate the problem: from internal complexity to network and communication complexity.",
        },
        {
          type: "paragraph",
          text: "When a logistics client reported slowness in their monolith, the root cause was contention between read and write traffic on a single central database. High-throughput applications hit the same wall around connection limits and synchronous API resolution times.",
        },
        {
          type: "paragraph",
          text: "\"In distributed systems, failure is not a probability. It is a reality you must design for.\"",
        },
        {
          type: "heading",
          level: 2,
          text: "The Transition Strategy",
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              term: "Separate reads from writes (CQRS)",
              text: "To take load off the primary database, we introduced dedicated stores for complex operations and frontend reads, kept in sync through asynchronous events (Kafka).",
            },
            {
              term: "Full isolation (bulkheading)",
              text: "Each microservice owns its own database and can make core decisions independently, even if neighboring services go down.",
            },
            {
              term: "Graceful degradation",
              text: "When load exceeds peak capacity, the system reduces the quality or volume of returned data instead of failing outright, so operations continue.",
            },
          ],
        },
        {
          type: "paragraph",
          text: "Heavy reliance on HTTP or gRPC between services creates tight coupling. If one service slows down, the whole system suffers.",
        },
        {
          type: "paragraph",
          text: "By adopting an event-driven architecture, we were able to:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            {
              term: "Decouple publishers from subscribers",
              text: "New features can be added without touching core services.",
            },
            {
              term: "Replay events",
              text: "Failures can be recovered from, and data can be audited, by replaying the event stream.",
            },
            {
              term: "Scale dynamically",
              text: "Auto-scaling is driven by queue depth, not only CPU utilization.",
            },
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Conclusion",
        },
        {
          type: "paragraph",
          text: "By decoupling services through an event bus, systems can scale independently and absorb traffic spikes asynchronously without dropping requests. Building scalable platforms is not only a technical exercise; it is a requirement for companies that need to grow without sacrificing reliability. At Kogns, we apply these principles in every system we design.",
        },
      ],
    },
  ],
};

export function getInsights(locale: Locale): Insight[] {
  return byLocale[locale];
}

export function insightCategories(locale: Locale): string[] {
  const categories = new Set(byLocale[locale].map((insight) => insight.category));
  return [...categories].sort((a, b) => a.localeCompare(b, locale));
}

export function publishedInsights(locale: Locale): Insight[] {
  return byLocale[locale].filter((insight) => !insight.draft);
}

export function getInsight(locale: Locale, slug: string): Insight | undefined {
  return byLocale[locale].find((insight) => insight.slug === slug);
}

/** Other published articles, preferring the same category. */
export function relatedInsights(
  locale: Locale,
  insight: Insight,
  limit = 2,
): Insight[] {
  return publishedInsights(locale)
    .filter((other) => other.slug !== insight.slug)
    .sort(
      (a, b) =>
        Number(b.category === insight.category) -
        Number(a.category === insight.category),
    )
    .slice(0, limit);
}

export function formatInsightDate(date: string, locale: Locale): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString(
    locale === "ar" ? "ar-EG" : "en-US",
    { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" },
  );
}
