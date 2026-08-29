import type { Locale } from "@/i18n/routing";

export type Stat = {
  value: string;
  label: string;
};

export type Feature = {
  key: string;
  title: string;
  description: string;
  image: string;
};

export type Project = {
  slug: string;
  name: string;
  /** Client industry, e.g. "Fintech & Automotive". */
  sector: string;
  /** Engineering discipline, e.g. "Digital Financial Services". */
  discipline: string;
  summary: string;
  cover: string;
  interfaceImage: string;
  /** Dark hue sampled from the cover, used as the case study hero background. */
  tint: string;
  stats: Stat[];
  challenge: string;
  solution: string;
  features: Feature[];
};

const byLocale: Record<Locale, Project[]> = {
  ar: [
    {
      slug: "my-phone",
      name: "ماي فون",
      sector: "الإلكترونيات الاستهلاكية",
      discipline: "التجارة الرقمية والعمليات",
      summary: "منصة موحدة تدمج تجارة الأجهزة المحمولة مع سير عمل تشغيلي داخلي لإدارة دورة حياة الصيانة، والاستبدال، والخدمات.",
      cover: "/images/work/my-phone-cover.png",
      interfaceImage: "/images/work/my-phone-operations-dashboard.webp",
      stats: [
        {
          value: "مركزية تامة",
          label: "الرؤية التشغيلية",
        },
        {
          value: "رقمية بالكامل",
          label: "دورة حياة الطلب",
        },
      ],
      challenge: "تتجاوز منصة ماي فون التجارة الإلكترونية التقليدية من خلال ربط واجهة التجزئة الخاصة بالعملاء بسير عمل تشغيلي داخلي عميق. يمكن للعملاء تصفح الأجهزة، وطلب الاستبدال، وتقديم تذاكر الصيانة، والتي تدخل فوراً في دورة حياة منظمة تُدار عبر لوحة تحكم داخلية. يضمن النظام رؤية كاملة لطلبات الخدمة منذ بدئها مروراً بالتقييم الهندسي وحتى الإنجاز النهائي.",
      solution: "قمنا بهندسة منصة مزدوجة الواجهة. يوفر التطبيق العام تجربة سلسة للتجارة وطلبات الخدمة، بينما تُركز لوحة التحكم التشغيلية الداخلية إدارة أوامر العمل. يقوم كل طلب عميل بإنشاء تذكرة قابلة للتتبع ديناميكياً، مما يتيح للموظفين الداخليين متابعة الجهاز طوال دورة حياته التشغيلية.",
      features: [
        {
          key: "storefront",
          title: "واجهة المتجر للعملاء",
          description: "تتيح طبقة التجارة الرقمية للمستخدمين استكشاف الأجهزة المحمولة المتاحة، ومقارنة المواصفات، ومراجعة الأسعار. تركز واجهة المستخدم على صور المنتجات عالية الجودة والتنقل السلس لزيادة التحويل.",
          image: "/images/work/my-phone-storefront.webp",
        },
        {
          key: "product details",
          title: "تفاصيل المنتج واختياره",
          description: "توفر صفحات المنتجات التفصيلية معلومات شاملة عن الجهاز، وتوافر المخزون من الـ ERP الداخلي، وتكوينات التسعير الديناميكية بناءً على اختيارات التخزين واللون.",
          image: "/images/work/my-phone-product-details.webp",
        },
        {
          key: "service request",
          title: "طلب الخدمة والاستبدال",
          description: "مسار رقمي منظم خطوة بخطوة يتيح للعملاء طلب إصلاحات الأجهزة أو استبدالها. يقوم المستخدمون بإدخال حالات الأجهزة، وتحميل الصور، وتلقي تقييمات أولية فورية.",
          image: "/images/work/my-phone-service-request.webp",
        },
        {
          key: "operations dashboard",
          title: "لوحة تحكم العمليات الداخلية",
          description: "جوهر النظام. توفر لوحة التحكم المؤسسية هذه لمديري العمليات رؤية لحظية لجميع طلبات العملاء الواردة، والطلبات المعلقة، ودورات حياة الصيانة الجارية.",
          image: "/images/work/my-phone-operations-dashboard.webp",
        },
        {
          key: "repair ticket",
          title: "تذكرة الإصلاح والخدمة",
          description: "يتم تحويل طلبات العملاء إلى تذاكر خدمة منظمة. تتعقب الفرق الهندسية الداخلية حالة الجهاز، وتعين العمل، وتسجل إجراءات الإصلاح، وتتابع الطلب حتى اكتماله.",
          image: "/images/work/my-phone-repair-ticket.webp",
        },
      ],
      tint: "#121c26",
    },
    {
      slug: "drive-finance",
      name: "درايف للتمويل مصر",
      sector: "التقنية المالية والسيارات",
      discipline: "الخدمات المالية الرقمية",
      summary: "نظام بيئي متصل للتمويل الرقمي يمتد عبر الويب والموبايل، يُمكّن العملاء من الإدارة الذاتية لأقساط المركبات وتتبع العلاقات المالية.",
      cover: "/images/work/drive-finance-cover.png",
      interfaceImage: "/images/work/drive-finance-customer-dashboard.webp",
      stats: [
        {
          value: "منصة موحدة",
          label: "تجربة العملاء",
        },
        {
          value: "متكامل وآمن",
          label: "دفع الأقساط",
        },
      ],
      challenge: "يمثل مشروع درايف للتمويل مصر تحولاً رقمياً كاملاً لتجربة عملاء تمويل المركبات. قمنا ببناء نظام بيئي مالي متعدد المنصات يشمل بوابة ويب وتطبيق موبايل أصلي. توفر المنصة رؤية موحدة لحسابات العملاء، مما يتيح لهم تتبع علاقاتهم التمويلية بأمان، ومراجعة جداول الأقساط، وتنفيذ المدفوعات، واستكشاف عروض التمويل المخصصة.",
      solution: "قمنا بتطوير خدمة مالية رقمية متعددة المنصات. تتكامل البنية بشكل عميق مع الأنظمة المالية الحالية لعرض بيانات الأقساط بأمان. من خلال منصة الويب (React) وتطبيق الموبايل (React Native)، يحصل المستخدمون على وصول فوري إلى لوحة المعلومات المالية الخاصة بهم، مما يتيح الخدمة الذاتية السلسة، ومعالجة المدفوعات، والتتبع المستمر.",
      features: [
        {
          key: "customer dashboard",
          title: "لوحة معلومات الويب للعميل",
          description: "بوابة آمنة وموحدة حيث يمكن للعملاء عرض عقود تمويل مركباتهم النشطة، وتتبع إجمالي الأرصدة المستحقة، والوصول إلى وثائق الحساب الهامة بلمحة.",
          image: "/images/work/drive-finance-customer-dashboard.webp",
        },
        {
          key: "installments",
          title: "نظرة عامة على الأقساط",
          description: "تفصيل مرئي دقيق لجدول أقساط العميل. تبرز الواجهة تواريخ الاستحقاق القادمة، وتاريخ الدفع، والمدة المتبقية، مما يلغي الحاجة إلى الاستفسارات اليدوية.",
          image: "/images/work/drive-finance-installments.webp",
        },
        {
          key: "payment",
          title: "تجربة الدفع الرقمي",
          description: "مسار دفع سلس ومتكامل يتيح للعملاء تسوية الأقساط القادمة مباشرة عبر المنصة باستخدام بطاقات الائتمان أو بوابات الدفع المحلية المتكاملة.",
          image: "/images/work/drive-finance-payment.webp",
        },
        {
          key: "mobile dashboard",
          title: "تطبيق الهاتف الأصلي",
          description: "تمت ترجمة النظام البيئي المالي بأكمله إلى تجربة موبايل أصلية (React Native)، تقدم تسجيل دخول بيومتري، وإشعارات للمدفوعات المستحقة، وعروض تمويل مخصصة حصرية.",
          image: "/images/work/drive-finance-mobile-dashboard.webp",
        },
      ],
      tint: "#121726",
    },
    {
      slug: "zona-erp",
      name: "زونا العقارية",
      sector: "العقارات والتقنية العقارية",
      discipline: "نظام تشغيل مؤسسي",
      summary: "نظام تخطيط موارد مؤسسي (ERP) عقاري متكامل بعمق يغطي دورة المبيعات بأكملها من اكتشاف العقار والحجز الرقمي إلى العمليات الداخلية وتتبع الأقساط.",
      cover: "/images/work/zona-cover.png",
      interfaceImage: "/images/work/zona-4.jpg",
      stats: [
        {
          value: "رقمي ومؤتمت",
          label: "مسار عمل الحجوزات",
        },
        {
          value: "نظام مركزي",
          label: "عمليات المبيعات",
        },
      ],
      challenge: "تطلبت زونا أساساً تكنولوجياً قوياً لإدارة عملياتها العقارية المعقدة. قمنا بتسليم نظام بيئي شامل لتخطيط موارد المؤسسات (ERP) مدمج مع تجربة رقمية للعملاء. يحكم النظام دورة الحياة التشغيلية الكاملة للعقارات، والوحدات، وعلاقات العملاء. يمكن للمشترين المحتملين تصفح المخزون المتاح وإجراء حجوزات رقمية، والتي تتدفق بسلاسة إلى الـ ERP الداخلي حيث تدير فرق المبيعات خط الأنابيب، وجداول الأقساط، وتوافر العقارات.",
      solution: "صممنا نظام تشغيل عقاري مركزي. تتيح واجهة رقمية عالية الأداء للمستخدمين اكتشاف العقارات ودفع رسوم الحجز بأمان. يؤدي هذا فوراً إلى تحفيز مسارات العمل التشغيلية داخل الـ ERP المخصص، وقفل توافر الوحدة، وهيكلة علاقة العميل الناتجة، والمتابعات البيعية، والأقساط المالية.",
      features: [
        {
          key: "property discovery",
          title: "اكتشاف العقارات",
          description: "واجهة عملاء عالية الأداء تتيح للمشترين المحتملين البحث وتصفية المشاريع العقارية المتاحة باستخدام معايير معقدة مثل الموقع، ونطاق السعر، ونوع الوحدة.",
          image: "/images/work/zona-1.jpg",
        },
        {
          key: "property details",
          title: "تفاصيل العقار والوحدات",
          description: "صفحات تفاصيل عقارية غامرة تتميز بمعارض وسائط غنية، ومخططات رئيسية تفاعلية، وتوافر لحظي للوحدات متزامن مباشرة من نظام الـ ERP الخلفي.",
          image: "/images/work/zona-2.jpg",
        },
        {
          key: "reservation",
          title: "مسار الحجز الرقمي",
          description: "تجربة دفع سلسة تمكّن العملاء من حجز وحدتهم المطلوبة بدفع رسوم حجز رقمية. هذا الإجراء يحدّث توافر المخزون العالمي فوراً.",
          image: "/images/work/zona-checkout.webp",
        },
        {
          key: "erp dashboard",
          title: "لوحة تحكم ERP المؤسسية",
          description: "مركز القيادة التشغيلية لفريق المبيعات. يصور خط أنابيب المبيعات الحالي، والحجوزات الرقمية الحديثة، وحالة مخزون المشروع الإجمالية، والصحة المالية.",
          image: "/images/work/zona-admin.webp",
        },
        {
          key: "units",
          title: "إدارة الوحدات والعملاء",
          description: "واجهات داخلية عميقة تتيح للموظفين إدارة حالات الوحدات الفردية، وهيكلة خطط أقساط العملاء، وتتبع المدفوعات، وحكم العلاقة العقارية المستمرة.",
          image: "/images/work/zona-inventory.webp",
        },
      ],
      tint: "#161e22",
    },
    {
      slug: "freek-booking",
      name: "فري كيك",
      sector: "الرياضة والترفيه",
      discipline: "نظام حجوزات وسوق رقمي",
      summary: "بنية تحتية متعددة المنصات لحجز الملاعب الرياضية تدير اكتشاف الملاعب، والتوافر اللحظي، وحجوزات الموبايل، والإدارة التشغيلية الخلفية.",
      cover: "/images/work/freek-cover.png",
      interfaceImage: "/images/work/freek-venue-management.webp",
      stats: [
        {
          value: "لحظية ودقيقة",
          label: "البنية التحتية للحجوزات",
        },
        {
          value: "منظمة بالكامل",
          label: "عمليات المنشآت",
        },
      ],
      challenge: "فري كيك هو نظام بيئي رقمي كامل بُني لتحديث إدارة المنشآت الرياضية. تتكون البنية المعمارية من منصة ويب عامة (Next.js)، وتطبيق موبايل (Flutter)، ونظام إدارة داخلي قوي (Django). يكتشف العملاء ملاعب كرة القدم بسلاسة، ويراجعون السعات الاستيعابية، ويؤكدون الحجوزات. في الوقت نفسه، يستخدم مشغلو المنشآت البوابة الداخلية للإشراف على الجدولة، وإدارة مخزون الملاعب، وتنسيق العمليات اليومية.",
      solution: "قمنا بتسليم بنية معمارية متماسكة للسوق الرقمي. توفر تطبيقات الويب والموبايل الموجهة للعملاء مسارات حجز مرنة وعالية التفاعل مدعومة بـ React و Redux و Framer Motion. تعمل الواجهة الخلفية المبنية بـ Django كمصدر وحيد للحقيقة لتوافر المنشآت، مما يضمن النزاهة التامة للمعاملات خلال فترات ذروة الحجوزات.",
      features: [
        {
          key: "field discovery",
          title: "اكتشاف الملاعب",
          description: "واجهة ويب تفاعلية تتيح لعشاق الرياضة اكتشاف ملاعب كرة القدم المتاحة، وعرض سعات الأبعاد، والمرافق، وبيانات الموقع.",
          image: "/images/work/freek-venue-discovery.webp",
        },
        {
          key: "field details",
          title: "التوافر اللحظي",
          description: "تعرض ملفات تعريف الملاعب التفصيلية بيانات الجدولة اللحظية. يمنع النظام الحجوزات المزدوجة عن طريق قفل الفترات الزمنية عالمياً عبر الويب، والموبايل، وواجهات الإدارة الداخلية.",
          image: "/images/work/freek-venue-management.webp",
        },
        {
          key: "booking",
          title: "مسار عمل الحجز",
          description: "عملية حجز سلسة متعددة الخطوات. يختار المستخدمون المدة المطلوبة، ويؤكدون تفاصيل الفريق، ويعالجون المدفوعات بأمان لتأكيد مباراتهم.",
          image: "/images/work/freek-booking-flow.webp",
        },
        {
          key: "mobile booking",
          title: "تطبيق الهاتف المحمول",
          description: "تطبيق موبايل أصلي (Flutter) يوفر تجربة الحجز الأساسية أثناء التنقل. تشمل الميزات إعادة الحجز السريع، وتذكيرات المباريات القادمة، وتصاريح الدخول الرقمية.",
          image: "/images/work/freek-financial-reconciliation.webp",
        },
        {
          key: "scheduling",
          title: "عمليات المنشأة الداخلية",
          description: "البوابة الداخلية المدعومة بـ Django والتي يستخدمها مديرو المنشآت للإشراف على الجدولة اليومية، وإدارة مخزون الملاعب، ومعالجة الحجوزات دون اتصال، وتنسيق المهام التشغيلية اليومية.",
          image: "/images/work/freek-scheduling.webp",
        },
      ],
      tint: "#122621",
    },
    {
      slug: "retail-erp",
      name: "نظام ERP للتجارة القطاعية",
      sector: "التجزئة والإلكترونيات",
      discipline: "تجارة إلكترونية متعددة المستأجرين و ERP",
      summary: "بنية معمارية قوية وقابلة لإعادة الاستخدام تجمع بين التجارة الرقمية للعملاء والعمليات الخلفية العميقة التي تشمل المخزون، والتخزين، وإدارة الحملات.",
      cover: "/images/work/retail-cover.png",
      interfaceImage: "/images/work/retail-storefront.webp",
      stats: [
        {
          value: "نواة قابلة لإعادة الاستخدام",
          label: "البنية المعمارية للمنصة",
        },
        {
          value: "متزامنة بالكامل",
          label: "المستودعات والطلبات",
        },
      ],
      challenge: "يمثل هذا المشروع واسع النطاق نظاماً بيئياً متكاملاً للتجارة الإلكترونية وتخطيط الموارد (ERP) صُمم خصيصاً لقطاع التجزئة للإلكترونيات والأجهزة المنزلية. بدلاً من متجر مستقل، تم تصميمه كمنصة عالية القابلية لإعادة الاستخدام. يربط النظام واجهة رقمية متطورة — حيث يستكشف العملاء فئات المنتجات، والتلفزيونات، والأجهزة عبر الويب والموبايل — مع ERP داخلي واسع. يدير هذا العمود الفقري عمليات التجزئة المعقدة بما في ذلك المخزون متعدد المستودعات، وتنفيذ الطلبات المهيكل، وبيانات العملاء، وإدارة الحملات التسويقية.",
      solution: "هندسنا نموذجاً معمارياً موحداً. توفر طبقة التجارة إمكانات تصفح وشراء عالية الأداء عبر الأجهزة، تتفاعل مباشرة مع الـ ERP المركزي. يضمن ذلك اتساقاً تاماً للمخزون عبر المستودعات، وتوجيه آلي للطلبات، ويمنح الشركة تحكماً دقيقاً في عمليات التجزئة وحملات العملاء.",
      features: [
        {
          key: "storefront",
          title: "واجهة المتجر الإلكتروني",
          description: "تجربة تجارة رقمية عالية الأداء مصممة للإلكترونيات. يمكن للعملاء استكشاف فئات المنتجات المعقدة، واستخدام التصفية المتقدمة، وعرض صور عالية الدقة.",
          image: "/images/work/retail-1.png",
        },
        {
          key: "product",
          title: "تفاصيل المنتجات الذكية",
          description: "تعرض صفحات المنتجات ديناميكياً المواصفات الهامة، وخيارات الضمان، وتوافر المخزون اللحظي المتزامن عبر مواقع مستودعات فعلية متعددة.",
          image: "/images/work/retail-2.png",
        },
        {
          key: "checkout",
          title: "عربة التسوق والدفع الآمن",
          description: "مسار مبسط للشراء يدعم منطق التنفيذ المعقد. يحسب النظام تلقائياً تكاليف الشحن بناءً على أقرب مستودع مخزن وطريقة التوصيل المحددة.",
          image: "/images/work/retail-3.png",
        },
        {
          key: "inventory",
          title: "إدارة المخزون العالمية",
          description: "يوفر الـ ERP الداخلي رؤية كاملة لمستويات المخزون عبر الأعمال بأكملها. يمكن للعمليات مراقبة العناصر سريعة الحركة، وتعيين تنبيهات انخفاض المخزون، وبدء مسارات عمل المشتريات.",
          image: "/images/work/retail-4.png",
        },
        {
          key: "warehouse",
          title: "عمليات المستودعات",
          description: "واجهات تشغيلية عميقة يستخدمها موظفو المستودعات لإدارة مواقع الصناديق للمنتجات، ومعالجة الشحنات الواردة، وتجهيز طلبات العملاء، وتوجيه الشحنات.",
          image: "/images/work/retail-supply-chain.webp",
        },
        {
          key: "campaigns",
          title: "حملات المبيعات والعمليات",
          description: "تستخدم فرق التسويق الـ ERP لبناء حملات مبيعات مستهدفة، وإدارة الخصومات الشاملة، وتحليل بيانات أداء المبيعات الدقيقة عبر فئات المنتجات.",
          image: "/images/work/retail-pos.webp",
        },
      ],
      tint: "#211d18",
    },
    {
      slug: "digital-commerce",
      name: "منصة التجارة الرقمية والتجزئة",
      sector: "تكنولوجيا",
      discipline: "منصة تجارة إلكترونية",
      summary: "منظومة تجارة رقمية متكاملة تجمع بين واجهات المتاجر عالية الأداء، وتجارب المنتجات التفاعلية، وإمكانات الأسواق متعددة البائعين، وإدارة العمليات من خلال أنظمة تشغيلية متقدمة.",
      cover: "/images/work/digital-commerce-storefront.png",
      interfaceImage: "/images/work/digital-commerce-storefront.png",
      stats: [
        {
          value: "زادت",
          label: "الكفاءة التشغيلية",
        },
        {
          value: "عالي",
          label: "تفاعل المستخدمين",
        },
      ],
      challenge: "منظومة تجارة رقمية متكاملة لشركات الأثاث والسلع المنزلية والتجزئة. تدعم المنصة كلاً من التجارة للبائع الواحد والتجارة متعددة البائعين (الأسواق). يشمل النظام واجهات التجارة الإلكترونية الموجهة للعملاء بالإضافة إلى إدارة تشغيلية وإدارية كاملة.",
      solution: "قمنا بهندسة منصة رقمية شاملة تدمج بسلاسة التقنيات المتقدمة مع واجهات المستخدم البديهية، مما يحقق قيمة تجارية كبيرة.",
      features: [
        {
          key: "commerce experience",
          title: "تجربة التجارة الرقمية",
          description: "تجارب تجارة إلكترونية عالية الأداء موجهة للعملاء. يمكن للعملاء استكشاف الفئات بسلاسة، والبحث، وتصفية المنتجات للعثور على ما يحتاجون إليه بالضبط.",
          image: "/images/work/digital-commerce-storefront.png",
        },
        {
          key: "product discovery",
          title: "استكشاف المنتجات",
          description: "يمكن للعملاء عرض صفحات مفصلة للمنتجات، واستكشاف المنتجات بصرياً، وإضافة المنتجات بسهولة إلى سلة التسوق لتجربة تسوق سلسة.",
          image: "/images/work/digital-commerce-product.png",
        },
        {
          key: "immersive visualization",
          title: "تصور تفاعلي للمنتجات",
          description: "تصور متقدم للمنتجات يدعم التجارب التفاعلية، بما في ذلك تصور المنتجات بالواقع المعزز وعروض تفاعلية بزاوية 360 درجة. يمكن للعملاء التأكد من ملاءمة قطعة الأثاث لمساحتهم قبل الشراء.",
          image: "/images/work/digital-commerce-ar.png",
        },
        {
          key: "checkout customer journey",
          title: "إتمام الشراء ورحلة العميل",
          description: "عمليات إتمام الشراء المبسطة، والإدارة الكاملة للحساب، وتتبع الطلبات لحظياً تمكن العميل طوال رحلته.",
          image: "/images/work/digital-commerce-360.png",
        },
        {
          key: "commerce operations",
          title: "عمليات التجارة",
          description: "يدعم النظام الخلفي/اللوحة الإدارية إدارة شاملة للمنتجات، والفئات، والمخزون، والطلبات، وعمليات المحاسبة مع ضوابط إدارية قوية.",
          image: "/images/work/digital-commerce-admin.png",
        },
        {
          key: "multi vendor management",
          title: "إدارة البائعين المتعددين",
          description: "يدعم بنية الأسواق متعددة البائعين، مما يتيح إدارة البائعين، والأدوار، والصلاحيات ضمن نظام الإدارة الرئيسي (Super-admin).",
          image: "/images/work/digital-commerce-marketplace.png",
        },
      ],
      tint: "#1b1f19",
    },
    {
      slug: "restaurant-platform",
      name: "منصة إدارة وتشغيل المطاعم",
      sector: "تكنولوجيا",
      discipline: "عمليات الضيافة",
      summary: "منصة رقمية متكاملة لإدارة وتشغيل المطاعم، تربط بين الطلبات والحجوزات والطاولات والطلب عبر QR وعمليات المطبخ في منظومة واحدة.",
      cover: "/images/work/restaurant-menu.png",
      interfaceImage: "/images/work/restaurant-menu.png",
      stats: [
        {
          value: "زادت",
          label: "الكفاءة التشغيلية",
        },
        {
          value: "عالي",
          label: "تفاعل المستخدمين",
        },
      ],
      challenge: "نظام متكامل لإدارة وتشغيل المطاعم يربط العملاء، والمطاعم، والطاولات، والطلبات، وعمليات المطبخ، والموظفين. يمكن للعملاء تصفح القوائم الرقمية، وطلب الطعام، واختيار تناول الطعام في المطعم أو الاستلام، وتقديم الطلبات مباشرة من طاولاتهم باستخدام رموز QR.",
      solution: "قمنا بهندسة منصة رقمية شاملة تدمج بسلاسة التقنيات المتقدمة مع واجهات المستخدم البديهية، مما يحقق قيمة تجارية كبيرة.",
      features: [
        {
          key: "digital menu",
          title: "القائمة الرقمية",
          description: "يمكن للعملاء تصفح قائمة رقمية تفاعلية لاستكشاف العروض، وتخصيص اختياراتهم، والاختيار بين تناول الطعام في المطعم أو الاستلام.",
          image: "/images/work/restaurant-menu.png",
        },
        {
          key: "table reservations",
          title: "حجوزات الطاولات",
          description: "نظام حجز مدمج يتيح للعملاء التحقق من توفر الطاولات لحظياً وحجز طاولاتهم مباشرة.",
          image: "/images/work/restaurant-reservations.png",
        },
        {
          key: "qr table ordering",
          title: "الطلب عبر QR",
          description: "تجربة تناول طعام سلسة حيث يقوم العملاء بمسح رمز QR على طاولتهم لفتح القائمة، واختيار الطعام، وإرسال طلبهم مباشرة إلى المطبخ.",
          image: "/images/work/restaurant-qr-ordering.png",
        },
        {
          key: "kitchen order operations",
          title: "عمليات المطبخ والطلبات",
          description: "يتلقى موظفو المطبخ والخدمة الطلب فوراً مع تحديد الطاولة، مما يتيح التحضير الدقيق والتسليم السريع إلى الطاولة الصحيحة.",
          image: "/images/work/restaurant-kitchen.png",
        },
        {
          key: "restaurant administration",
          title: "إدارة المطعم",
          description: "نظام إدارة قوي يمكن مديري المطعم من الإشراف على الطاولات، والموظفين، وعناصر القائمة، وحالات الطلبات، وسير عمل المطبخ بشكل عام.",
          image: "/images/work/restaurant-admin.png",
        },
      ],
      tint: "#1f1d19",
    },
    {
      slug: "car-rental",
      name: "منصة تأجير السيارات",
      sector: "تكنولوجيا",
      discipline: "منصة سوق رقمي",
      summary: "منظومة متكاملة لتأجير السيارات تربط بين ملاك المركبات والعملاء والإدارة من خلال دورة منظمة لإضافة المركبات ومراجعة مستنداتها وإتاحة تأجيرها.",
      cover: "/images/work/car-rental-4.webp",
      interfaceImage: "/images/work/car-rental-4.webp",
      stats: [
        {
          value: "زادت",
          label: "الكفاءة التشغيلية",
        },
        {
          value: "عالي",
          label: "تفاعل المستخدمين",
        },
      ],
      challenge: "سوق رقمي لتأجير السيارات حيث يمكن لملاك المركبات إدراج سياراتهم ويمكن للعملاء استكشاف وتأجير السيارات المتاحة. يشمل المنتج تطبيق ويب، تطبيق أندرويد، تطبيق iOS، ولوحة تحكم إدارية لعمليات مراجعة واعتماد المركبات.",
      solution: "قمنا بهندسة منصة رقمية شاملة تدمج بسلاسة التقنيات المتقدمة مع واجهات المستخدم البديهية، مما يحقق قيمة تجارية كبيرة.",
      features: [
        {
          key: "vehicle discovery",
          title: "استكشاف المركبات",
          description: "يمكن للعملاء تصفح السيارات المتاحة، وتصفيتها حسب تفضيلاتهم، ومقارنة خيارات التأجير عبر واجهة استكشاف سلسة على الويب والهواتف.",
          image: "/images/work/car-rental-2.webp",
        },
        {
          key: "vehicle details pricing",
          title: "تفاصيل المركبة والأسعار",
          description: "عروض تفصيلية للمركبة تعرض الأسعار بالساعة واليوم والشهر، مما يتيح للعملاء اختيار مدة التأجير المثلى.",
          image: "/images/work/car-rental-3.webp",
        },
        {
          key: "owner vehicle submission",
          title: "إضافة مركبة المالك",
          description: "يقوم ملاك المركبات بإنشاء حسابات، وإضافة معلومات المركبة، وتحديد الأسعار الديناميكية، ورفع مستندات التأمين والتسجيل اللازمة.",
          image: "/images/work/car-rental-4.webp",
        },
        {
          key: "document verification",
          title: "التحقق من المستندات واعتمادها",
          description: "يقوم النظام الإداري بمراجعة صارمة للمركبات والمستندات المقدمة، مما يضمن سوقاً منظماً وآمناً قبل نشر المركبات.",
          image: "/images/work/car-rental-5.webp",
        },
        {
          key: "rental management",
          title: "إدارة التأجير (الموبايل)",
          description: "يستكمل العملاء التأجير ويديرون حجوزاتهم عبر تطبيق الهاتف المحمول (أندرويد/iOS)، مما يوفر تجربة مستخدم متكاملة وسلسة أثناء التنقل.",
          image: "/images/work/car-rental-6.webp",
        },
      ],
      tint: "#191d20",
    },
    {
      slug: "ticket-marketplace",
      name: "منصة سوق تذاكر الفعاليات",
      sector: "تكنولوجيا",
      discipline: "منصة سوق رقمي",
      summary: "سوق رقمي لتذاكر الفعاليات يربط بين المستخدمين لعرض التذاكر وشرائها وإدارتها من خلال تجربة متكاملة على الويب والهواتف المحمولة.",
      cover: "/images/work/ticket-marketplace-1.png",
      interfaceImage: "/images/work/ticket-marketplace-1.png",
      stats: [
        {
          value: "زادت",
          label: "الكفاءة التشغيلية",
        },
        {
          value: "عالي",
          label: "تفاعل المستخدمين",
        },
      ],
      challenge: "سوق رقمي لتذاكر الفعاليات يتيح للمستخدمين إدراج التذاكر التي يمتلكونها ويسمح للمستخدمين الآخرين بشراء التذاكر المتاحة. يتكون من تطبيق ويب، تطبيق أندرويد، وتطبيق iOS.",
      solution: "قمنا بهندسة منصة رقمية شاملة تدمج بسلاسة التقنيات المتقدمة مع واجهات المستخدم البديهية، مما يحقق قيمة تجارية كبيرة.",
      features: [
        {
          key: "event discovery",
          title: "استكشاف الفعاليات",
          description: "يمكن للمستخدمين تصفح الفعاليات القادمة، واستكشاف القوائم الشائعة، والعثور على التذاكر المتاحة بسهولة عبر جميع المنصات.",
          image: "/images/work/ticket-marketplace-2.png",
        },
        {
          key: "ticket marketplace",
          title: "سوق التذاكر",
          description: "سوق قوي بين المستخدمين يربط الحاضرين. يمكن للمستخدمين شراء التذاكر لغرض إعادة البيع أو إدراج التذاكر المتبقية التي لم يعودوا بحاجة إليها.",
          image: "/images/work/ticket-marketplace-3.png",
        },
        {
          key: "ticket listing",
          title: "إدراج التذاكر للبيع",
          description: "يقوم البائعون بإنشاء حسابات، وتحديد الفعالية، وإدراج تذاكر محددة للبيع، وتحديد سعر البيع، وإدارة مخزونهم المدرج بأمان.",
          image: "/images/work/ticket-marketplace-4.png",
        },
        {
          key: "ticket purchase",
          title: "شراء التذاكر",
          description: "يقوم المشترون بعرض قوائم التذاكر بأمان، ومقارنة الأسعار، واستكمال مشترياتهم داخل بيئة رقمية موثوقة للغاية.",
          image: "/images/work/ticket-marketplace-5.png",
        },
        {
          key: "mobile ticket experience",
          title: "تجربة التذاكر عبر الموبايل",
          description: "يمكن الوصول فوراً إلى التذاكر المشتراة عبر تطبيقات أندرويد و iOS الأصلية، مما يوفر دخولاً وإدارة سلسة لحاضري الفعاليات.",
          image: "/images/work/ticket-marketplace-6.png",
        },
      ],
      tint: "#171921",
    },
    {
      slug: "web-infrastructure",
      name: "الويب والبنية التحتية الرقمية",
      sector: "تكنولوجيا",
      discipline: "البنية التحتية للويب",
      summary: "حلول رقمية متكاملة تجمع بين تطوير المواقع، وهندسة WordPress، والاستضافة، والصيانة، والدعم التقني المستمر.",
      cover: "/images/work/web-infrastructure-1.webp",
      interfaceImage: "/images/work/web-infrastructure-1.webp",
      stats: [
        {
          value: "زادت",
          label: "الكفاءة التشغيلية",
        },
        {
          value: "عالي",
          label: "تفاعل المستخدمين",
        },
      ],
      challenge: "خدمة متكاملة للوجود الرقمي والبنية التحتية تغطي هندسة المواقع الإلكترونية، وتطوير WordPress، والاستضافة، والصيانة، ودعم تكنولوجيا المعلومات المستمر. استناداً إلى العمل المكثف المنجز لـ World Poster.",
      solution: "قمنا بهندسة منصة رقمية شاملة تدمج بسلاسة التقنيات المتقدمة مع واجهات المستخدم البديهية، مما يحقق قيمة تجارية كبيرة.",
      features: [
        {
          key: "digital experience",
          title: "التجربة الرقمية",
          description: "مواقع إلكترونية للشركات عالية الجودة وتجارب رقمية مخصصة مصممة للارتقاء بحضور العلامة التجارية والتواصل التشغيلي.",
          image: "/images/work/web-infrastructure-2.webp",
        },
        {
          key: "wordpress engineering",
          title: "هندسة WordPress",
          description: "تطوير WordPress مخصص وتخصيص هيكلي عميق يضمن قابلية التوسع، والأمان، والأداء الاستثنائي.",
          image: "/images/work/web-infrastructure-3.webp",
        },
        {
          key: "hosting infrastructure",
          title: "الاستضافة والبنية التحتية",
          description: "دعم استضافة قوي وخدمات بنية تحتية لتكنولوجيا المعلومات توفر بيئات عالية التوافر والمرونة للمنصات الرقمية.",
          image: "/images/work/web-infrastructure-4.webp",
        },
        {
          key: "maintenance support",
          title: "الصيانة والدعم التقني",
          description: "صيانة تقنية مستمرة، وتحديثات متواصلة، ودعم تقني استباقي لضمان استمرار عمل الأنظمة دون انقطاع.",
          image: "/images/work/web-infrastructure-5.webp",
        },
      ],
      tint: "#141924",
    },
  ],
  en: [
    {
      slug: "my-phone",
      name: "My Phone",
      sector: "Consumer Electronics",
      discipline: "Digital Commerce & Operations",
      summary: "A unified platform integrating mobile device commerce with an internal operational workflow for maintenance, trade-ins, and service lifecycle management.",
      cover: "/images/work/my-phone-cover.png",
      interfaceImage: "/images/work/my-phone-operations-dashboard.webp",
      stats: [
        {
          value: "Centralized",
          label: "Operational Visibility",
        },
        {
          value: "Fully Digitized",
          label: "Order Lifecycle",
        },
      ],
      challenge: "My Phone is a comprehensive web-based platform that transcends traditional e-commerce by tightly coupling customer-facing retail with deep internal operational workflows. Customers can browse devices, request trade-ins, and submit maintenance tickets, which immediately enter a structured lifecycle managed by an internal dashboard. The system ensures total visibility over service requests from initiation through engineering assessment to final completion.",
      solution: "We engineered a dual-surface platform. The public application provides a seamless commerce and service-request experience, while the internal operational dashboard centralizes work order management. Every customer request dynamically generates a traceable ticket, allowing internal staff to progress the device through its entire operational lifecycle.",
      features: [
        {
          key: "storefront",
          title: "Customer Storefront",
          description: "The digital commerce layer allows users to explore available mobile devices, compare specifications, and review pricing. The UI prioritizes high-quality product imagery and seamless navigation to drive conversion.",
          image: "/images/work/my-phone-storefront.webp",
        },
        {
          key: "product details",
          title: "Product Details & Selection",
          description: "Detailed product pages provide comprehensive device information, stock availability from the internal ERP, and dynamic pricing configurations based on storage and color selections.",
          image: "/images/work/my-phone-product-details.webp",
        },
        {
          key: "service request",
          title: "Service & Trade-in Request",
          description: "A structured, step-by-step digital flow allowing customers to request device repairs or trade-ins. Users input device conditions, upload images, and receive immediate preliminary assessments.",
          image: "/images/work/my-phone-service-request.webp",
        },
        {
          key: "operations dashboard",
          title: "Internal Operations Dashboard",
          description: "The core of the system. This enterprise dashboard provides operations managers with real-time visibility into all incoming customer requests, pending orders, and ongoing maintenance lifecycles.",
          image: "/images/work/my-phone-operations-dashboard.webp",
        },
        {
          key: "repair ticket",
          title: "Repair & Service Ticket",
          description: "Customer requests are converted into structured service tickets. Internal engineering teams track the device status, assign work, log repair actions, and follow the request through to completion.",
          image: "/images/work/my-phone-repair-ticket.webp",
        },
      ],
      tint: "#121c26",
    },
    {
      slug: "drive-finance",
      name: "Drive Finance Egypt",
      sector: "Fintech & Automotive",
      discipline: "Digital Financial Services",
      summary: "A connected digital financing ecosystem spanning web and mobile, empowering customers to self-manage vehicle installments and track financial relationships.",
      cover: "/images/work/drive-finance-cover.png",
      interfaceImage: "/images/work/drive-finance-customer-dashboard.webp",
      stats: [
        {
          value: "Unified Platform",
          label: "Customer Experience",
        },
        {
          value: "Integrated",
          label: "Installment Payments",
        },
      ],
      challenge: "Drive Finance Egypt represents a complete digital transformation of the vehicle financing customer experience. We built a cross-platform financial ecosystem encompassing a web portal and a native mobile application. The platform provides a unified view of customer accounts, empowering users to securely track their financing relationship, review installment schedules, execute payments, and explore tailored financing offers.",
      solution: "We developed a cross-platform digital financial service. The architecture integrates deeply with existing financial systems to securely expose installment data. Through the React web platform and React Native mobile application, users gain immediate access to their financial dashboard, enabling seamless self-service, payment processing, and ongoing relationship tracking.",
      features: [
        {
          key: "customer dashboard",
          title: "Customer Web Dashboard",
          description: "A secure, unified portal where customers can view their active vehicle financing contracts, track total outstanding balances, and access critical account documentation at a glance.",
          image: "/images/work/drive-finance-customer-dashboard.webp",
        },
        {
          key: "installments",
          title: "Installment Overview",
          description: "A highly visual breakdown of the customer's installment schedule. The interface highlights upcoming due dates, paid history, and remaining tenure, eliminating the need for manual inquiries.",
          image: "/images/work/drive-finance-installments.webp",
        },
        {
          key: "payment",
          title: "Digital Payment Experience",
          description: "A frictionless, integrated payment flow allowing customers to settle upcoming installments directly through the platform via credit card or integrated local payment gateways.",
          image: "/images/work/drive-finance-payment.webp",
        },
        {
          key: "mobile dashboard",
          title: "Native Mobile Application",
          description: "The entire financial ecosystem translated into a native mobile experience (React Native), offering biometric login, push notifications for due payments, and exclusive tailored financing offers.",
          image: "/images/work/drive-finance-mobile-dashboard.webp",
        },
      ],
      tint: "#121726",
    },
    {
      slug: "zona-erp",
      name: "Zona Real Estate",
      sector: "Real Estate & PropTech",
      discipline: "Enterprise Operating System",
      summary: "A deeply integrated Real Estate ERP capturing the entire sales lifecycle from initial property discovery and digital reservation to internal operations and installment tracking.",
      cover: "/images/work/zona-cover.png",
      interfaceImage: "/images/work/zona-4.jpg",
      stats: [
        {
          value: "Digitized",
          label: "Reservation Workflow",
        },
        {
          value: "Centralized ERP",
          label: "Sales Operations",
        },
      ],
      challenge: "Zona required a robust technological foundation to manage their complex real estate operations. We delivered a comprehensive ERP ecosystem combined with a digital customer experience. The system governs the entire operational lifecycle of properties, units, and customer relations. Prospects can browse available inventory and place digital reservations, which seamlessly flow into the internal ERP where sales teams manage the ongoing pipeline, installment schedules, and property availability.",
      solution: "We engineered a centralized Real Estate Operating System. A highly performant digital storefront allows users to discover properties and securely pay reservation fees. This immediately triggers operational workflows within the custom ERP, locking unit availability and structuring the resulting customer relationship, sales follow-ups, and financial installments.",
      features: [
        {
          key: "property discovery",
          title: "Property Discovery",
          description: "A high-performance customer interface allowing prospects to search and filter available real estate projects using complex parameters like location, price range, and unit type.",
          image: "/images/work/zona-1.jpg",
        },
        {
          key: "property details",
          title: "Property & Unit Details",
          description: "Immersive property detail pages featuring rich media galleries, interactive master plans, and real-time unit availability synced directly from the backend ERP system.",
          image: "/images/work/zona-2.jpg",
        },
        {
          key: "reservation",
          title: "Digital Reservation Flow",
          description: "A seamless checkout experience enabling customers to lock in their desired unit by paying a digital reservation fee. This action instantly updates global inventory availability.",
          image: "/images/work/zona-checkout.webp",
        },
        {
          key: "erp dashboard",
          title: "Enterprise ERP Dashboard",
          description: "The operational command center for the sales team. It visualizes the current sales pipeline, recent digital reservations, overall project inventory status, and financial health.",
          image: "/images/work/zona-admin.webp",
        },
        {
          key: "units",
          title: "Unit & Customer Management",
          description: "Deep internal interfaces allowing staff to manage individual unit statuses, structure customer installment plans, track payments, and govern the ongoing property relationship.",
          image: "/images/work/zona-inventory.webp",
        },
      ],
      tint: "#161e22",
    },
    {
      slug: "freek-booking",
      name: "Freek",
      sector: "Sports & Leisure",
      discipline: "Marketplace & Booking Ecosystem",
      summary: "A cross-platform sports venue booking infrastructure managing pitch discovery, live availability, mobile reservations, and backend operational management.",
      cover: "/images/work/freek-cover.png",
      interfaceImage: "/images/work/freek-venue-management.webp",
      stats: [
        {
          value: "Real-time",
          label: "Booking Infrastructure",
        },
        {
          value: "Streamlined",
          label: "Venue Operations",
        },
      ],
      challenge: "Freek is a complete digital ecosystem built to modernize sports venue management. The architecture is composed of a Next.js public web platform, a Flutter mobile application, and a powerful Django internal management system. Customers seamlessly discover football fields, review dimensional capabilities, and secure bookings. Concurrently, venue operators utilize the internal portal to oversee scheduling, manage pitch inventory, and orchestrate daily operations.",
      solution: "We delivered a cohesive marketplace architecture. The customer-facing web and mobile applications provide fluid, highly interactive booking flows powered by React, Redux, and Framer Motion. The Django backend acts as the authoritative source of truth for venue availability, ensuring strict transactional integrity during peak reservation periods.",
      features: [
        {
          key: "field discovery",
          title: "Field Discovery",
          description: "A highly interactive web interface allowing sports enthusiasts to discover available football fields, view dimensional capabilities, amenities, and location data.",
          image: "/images/work/freek-venue-discovery.webp",
        },
        {
          key: "field details",
          title: "Live Availability",
          description: "Detailed pitch profiles surface real-time scheduling data. The system prevents double-booking by locking time slots globally across web, mobile, and internal management interfaces.",
          image: "/images/work/freek-venue-management.webp",
        },
        {
          key: "booking",
          title: "Booking Workflow",
          description: "A frictionless, multi-step reservation process. Users select their desired duration, confirm team details, and securely process payments to lock in their match.",
          image: "/images/work/freek-booking-flow.webp",
        },
        {
          key: "mobile booking",
          title: "Mobile Application",
          description: "A native Flutter mobile application providing the core booking experience on-the-go. Features include quick re-booking, upcoming match reminders, and digital access passes.",
          image: "/images/work/freek-financial-reconciliation.webp",
        },
        {
          key: "scheduling",
          title: "Internal Facility Operations",
          description: "The Django-powered internal portal used by facility managers to oversee daily scheduling, manage pitch inventory, process offline bookings, and orchestrate daily operational tasks.",
          image: "/images/work/freek-scheduling.webp",
        },
      ],
      tint: "#122621",
    },
    {
      slug: "retail-erp",
      name: "Vertical Commerce ERP",
      sector: "Retail & Electronics",
      discipline: "Multi-Tenant E-Commerce & ERP",
      summary: "A robust, reusable architecture combining customer-facing digital commerce with deep backend operations encompassing inventory, warehousing, and campaign management.",
      cover: "/images/work/retail-cover.png",
      interfaceImage: "/images/work/retail-storefront.webp",
      stats: [
        {
          value: "Reusable Core",
          label: "Platform Architecture",
        },
        {
          value: "Fully Synchronized",
          label: "Warehouse & Orders",
        },
      ],
      challenge: "This large-scale project represents a verticalized ERP and e-commerce ecosystem specifically engineered for the electronics and household retail sector. Rather than a standalone shop, it was architected as a highly reusable platform. It seamlessly bridges a sophisticated digital storefront—where customers explore product categories, TVs, and appliances via web and mobile—with an expansive internal ERP. This backbone manages complex retail operations including multi-warehouse inventory, structured order fulfillment, customer data, and marketing campaign execution.",
      solution: "We engineered a unified architectural model. The commerce layer provides high-performance browsing and purchasing capabilities across devices, directly interfacing with the central ERP. This ensures absolute inventory consistency across warehouses, automated order routing, and provides the business with granular control over retail operations and customer campaigns.",
      features: [
        {
          key: "storefront",
          title: "E-Commerce Storefront",
          description: "A high-performance digital commerce experience tailored for electronics. Customers can explore complex product categories, utilize advanced filtering, and view high-resolution imagery.",
          image: "/images/work/retail-1.png",
        },
        {
          key: "product",
          title: "Intelligent Product Details",
          description: "Product pages dynamically display critical specifications, warranty options, and real-time inventory availability synchronized across multiple physical warehouse locations.",
          image: "/images/work/retail-2.png",
        },
        {
          key: "checkout",
          title: "Cart & Secure Checkout",
          description: "A streamlined path to purchase supporting complex fulfillment logic. The system automatically calculates shipping costs based on the nearest stocked warehouse and selected delivery method.",
          image: "/images/work/retail-3.png",
        },
        {
          key: "inventory",
          title: "Global Inventory Management",
          description: "The internal ERP provides total visibility over stock levels across the entire business. Operations can monitor fast-moving items, set low-stock alerts, and initiate procurement workflows.",
          image: "/images/work/retail-4.png",
        },
        {
          key: "warehouse",
          title: "Warehouse Operations",
          description: "Deep operational interfaces used by warehouse staff to manage product bin locations, process incoming shipments, pick/pack customer orders, and dispatch deliveries.",
          image: "/images/work/retail-supply-chain.webp",
        },
        {
          key: "campaigns",
          title: "Campaign & Sales Operations",
          description: "Marketing teams utilize the ERP to construct targeted sales campaigns, manage global discounts, and analyze granular sales performance data across product categories.",
          image: "/images/work/retail-pos.webp",
        },
      ],
      tint: "#211d18",
    },
    {
      slug: "digital-commerce",
      name: "Digital Commerce & Retail Platform",
      sector: "Technology",
      discipline: "Commerce Platform",
      summary: "A complete commerce ecosystem combining high-performance storefronts, immersive product experiences, marketplace capabilities, and powerful operational management.",
      cover: "/images/work/digital-commerce-storefront.png",
      interfaceImage: "/images/work/digital-commerce-storefront.png",
      stats: [
        {
          value: "Increased",
          label: "Operational Efficiency",
        },
        {
          value: "High",
          label: "User Engagement",
        },
      ],
      challenge: "A complete digital commerce ecosystem for furniture, home goods, and retail businesses. The platform supports both single-vendor commerce and multi-vendor marketplace commerce. The system includes customer-facing e-commerce experiences as well as complete operational and administrative management.",
      solution: "We engineered a comprehensive digital platform that seamlessly integrates advanced technologies with intuitive user interfaces, driving significant business value.",
      features: [
        {
          key: "commerce experience",
          title: "Commerce Experience",
          description: "High-performance customer-facing e-commerce experiences. Customers can seamlessly explore categories, search, and filter products to find exactly what they need.",
          image: "/images/work/digital-commerce-storefront.png",
        },
        {
          key: "product discovery",
          title: "Product Discovery",
          description: "Customers can view detailed product pages, explore products visually, and easily add products to their cart for a frictionless shopping journey.",
          image: "/images/work/digital-commerce-product.png",
        },
        {
          key: "immersive visualization",
          title: "Immersive Product Visualization",
          description: "Advanced product visualization supporting immersive experiences, including AR product visualization and interactive 360-degree product views. Customers can understand whether a piece of furniture is appropriate for their space before purchasing.",
          image: "/images/work/digital-commerce-ar.png",
        },
        {
          key: "checkout customer journey",
          title: "Checkout & Customer Journey",
          description: "Streamlined checkout processes, complete account management, and real-time order tracking empower the customer throughout their journey.",
          image: "/images/work/digital-commerce-360.png",
        },
        {
          key: "commerce operations",
          title: "Commerce Operations",
          description: "The backend/admin ecosystem supports comprehensive management of products, categories, inventory, orders, and accounting workflows with robust administrative controls.",
          image: "/images/work/digital-commerce-admin.png",
        },
        {
          key: "multi vendor management",
          title: "Multi-Vendor Management",
          description: "Supports multi-vendor marketplace architectures, allowing vendor management, roles, and permissions within the super-admin management ecosystem.",
          image: "/images/work/digital-commerce-marketplace.png",
        },
      ],
      tint: "#1b1f19",
    },
    {
      slug: "restaurant-platform",
      name: "Restaurant Operations Platform",
      sector: "Technology",
      discipline: "Hospitality Operations",
      summary: "A connected restaurant platform that brings ordering, reservations, table management, QR ordering, and kitchen operations into one digital system.",
      cover: "/images/work/restaurant-menu.png",
      interfaceImage: "/images/work/restaurant-menu.png",
      stats: [
        {
          value: "Increased",
          label: "Operational Efficiency",
        },
        {
          value: "High",
          label: "User Engagement",
        },
      ],
      challenge: "A complete restaurant management and ordering ecosystem connecting customers, restaurants, tables, orders, kitchen operations, and staff. Customers can browse digital menus, order food, choose dine-in or takeaway, and place orders directly from their tables using QR codes.",
      solution: "We engineered a comprehensive digital platform that seamlessly integrates advanced technologies with intuitive user interfaces, driving significant business value.",
      features: [
        {
          key: "digital menu",
          title: "Digital Menu",
          description: "Customers can browse an intuitive digital menu to explore offerings, customize their choices, and choose between dine-in or takeaway options.",
          image: "/images/work/restaurant-menu.png",
        },
        {
          key: "table reservations",
          title: "Table Reservations",
          description: "Integrated reservation system allowing customers to check table availability in real-time and book their tables directly.",
          image: "/images/work/restaurant-reservations.png",
        },
        {
          key: "qr table ordering",
          title: "QR Table Ordering",
          description: "A seamless dine-in experience where customers scan a QR code on their table to open the menu, select food, and submit their order straight to the kitchen.",
          image: "/images/work/restaurant-qr-ordering.png",
        },
        {
          key: "kitchen order operations",
          title: "Kitchen & Order Operations",
          description: "Kitchen and service staff instantly receive the order with table association, enabling accurate preparation and prompt delivery to the correct table.",
          image: "/images/work/restaurant-kitchen.png",
        },
        {
          key: "restaurant administration",
          title: "Restaurant Administration",
          description: "A robust administration ecosystem empowering restaurant managers to oversee tables, staff, menu items, order statuses, and overall kitchen workflow.",
          image: "/images/work/restaurant-admin.png",
        },
      ],
      tint: "#1f1d19",
    },
    {
      slug: "car-rental",
      name: "Car Rental Marketplace",
      sector: "Technology",
      discipline: "Marketplace Platform",
      summary: "A multi-platform car rental ecosystem connecting vehicle owners, customers, and administrators through a controlled vehicle listing and rental workflow.",
      cover: "/images/work/car-rental-4.webp",
      interfaceImage: "/images/work/car-rental-4.webp",
      stats: [
        {
          value: "Increased",
          label: "Operational Efficiency",
        },
        {
          value: "High",
          label: "User Engagement",
        },
      ],
      challenge: "A digital car rental marketplace where vehicle owners can list their vehicles and customers can discover and rent available cars. The product includes a Web Application, Android Application, iOS Application, and an Administrative Dashboard for controlled vehicle approvals.",
      solution: "We engineered a comprehensive digital platform that seamlessly integrates advanced technologies with intuitive user interfaces, driving significant business value.",
      features: [
        {
          key: "vehicle discovery",
          title: "Vehicle Discovery",
          description: "Customers can browse available cars, filter by preferences, and compare rental options across a streamlined web and mobile discovery interface.",
          image: "/images/work/car-rental-2.webp",
        },
        {
          key: "vehicle details pricing",
          title: "Vehicle Details & Pricing",
          description: "Detailed vehicle views showcasing hourly, daily, and monthly pricing, enabling customers to select their optimal rental duration.",
          image: "/images/work/car-rental-3.webp",
        },
        {
          key: "owner vehicle submission",
          title: "Owner Vehicle Submission",
          description: "Vehicle owners create accounts, add vehicle information, define dynamic pricing, and upload necessary insurance and registration documentation.",
          image: "/images/work/car-rental-4.webp",
        },
        {
          key: "document verification",
          title: "Document Verification & Approval",
          description: "The administration system strictly reviews submitted vehicles and documentation, ensuring a controlled and secure marketplace before vehicles are published.",
          image: "/images/work/car-rental-5.webp",
        },
        {
          key: "rental management",
          title: "Rental Management (Mobile)",
          description: "Customers complete rentals and manage bookings via the mobile application (Android/iOS), providing a seamless end-to-end user experience on the go.",
          image: "/images/work/car-rental-6.webp",
        },
      ],
      tint: "#191d20",
    },
    {
      slug: "ticket-marketplace",
      name: "Event Ticket Marketplace",
      sector: "Technology",
      discipline: "Marketplace Platform",
      summary: "A peer-to-peer ticket marketplace connecting event attendees through a digital platform for listing, discovering, purchasing, and managing event tickets.",
      cover: "/images/work/ticket-marketplace-1.png",
      interfaceImage: "/images/work/ticket-marketplace-1.png",
      stats: [
        {
          value: "Increased",
          label: "Operational Efficiency",
        },
        {
          value: "High",
          label: "User Engagement",
        },
      ],
      challenge: "A peer-to-peer ticket marketplace allowing users to list tickets they own and allowing other users to purchase available tickets. Consisting of a Web application, Android application, and iOS application.",
      solution: "We engineered a comprehensive digital platform that seamlessly integrates advanced technologies with intuitive user interfaces, driving significant business value.",
      features: [
        {
          key: "event discovery",
          title: "Event Discovery",
          description: "Users can browse upcoming events, discover popular listings, and find available tickets with ease across all platforms.",
          image: "/images/work/ticket-marketplace-2.png",
        },
        {
          key: "ticket marketplace",
          title: "Ticket Marketplace",
          description: "A robust peer-to-peer marketplace connecting attendees. Users can both intentionally purchase tickets for resale or list remaining tickets they no longer need.",
          image: "/images/work/ticket-marketplace-3.png",
        },
        {
          key: "ticket listing",
          title: "Ticket Listing",
          description: "Sellers create accounts, select their event, list specific tickets for sale, set a selling price, and securely manage their listed inventory.",
          image: "/images/work/ticket-marketplace-4.png",
        },
        {
          key: "ticket purchase",
          title: "Ticket Purchase",
          description: "Buyers securely view ticket listings, compare prices, and complete their purchases within a highly trusted digital environment.",
          image: "/images/work/ticket-marketplace-5.png",
        },
        {
          key: "mobile ticket experience",
          title: "Mobile Ticket Experience",
          description: "Purchased tickets are instantly accessible via the native Android and iOS applications, providing frictionless entry and management for event attendees.",
          image: "/images/work/ticket-marketplace-6.png",
        },
      ],
      tint: "#171921",
    },
    {
      slug: "web-infrastructure",
      name: "Web & Digital Infrastructure",
      sector: "Technology",
      discipline: "Web Infrastructure",
      summary: "Digital experiences and infrastructure built around high-quality websites, WordPress engineering, hosting, maintenance, and ongoing technical support.",
      cover: "/images/work/web-infrastructure-1.webp",
      interfaceImage: "/images/work/web-infrastructure-1.webp",
      stats: [
        {
          value: "Increased",
          label: "Operational Efficiency",
        },
        {
          value: "High",
          label: "User Engagement",
        },
      ],
      challenge: "A complete digital presence and infrastructure service covering website engineering, WordPress development, hosting, maintenance, and ongoing IT support. Based on the extensive work performed for World Poster.",
      solution: "We engineered a comprehensive digital platform that seamlessly integrates advanced technologies with intuitive user interfaces, driving significant business value.",
      features: [
        {
          key: "digital experience",
          title: "Digital Experience",
          description: "High-quality corporate websites and tailored digital experiences designed to elevate brand presence and operational communication.",
          image: "/images/work/web-infrastructure-2.webp",
        },
        {
          key: "wordpress engineering",
          title: "WordPress Engineering",
          description: "Custom WordPress development and deep architectural customization ensuring scalability, security, and exceptional performance.",
          image: "/images/work/web-infrastructure-3.webp",
        },
        {
          key: "hosting infrastructure",
          title: "Hosting & Infrastructure",
          description: "Robust hosting support and IT infrastructure services providing highly available and resilient environments for digital platforms.",
          image: "/images/work/web-infrastructure-4.webp",
        },
        {
          key: "maintenance support",
          title: "Maintenance & Technical Support",
          description: "Ongoing technical maintenance, continuous updates, and proactive IT support to ensure systems remain operational without disruption.",
          image: "/images/work/web-infrastructure-5.webp",
        },
      ],
      tint: "#141924",
    },
  ],
};

export function getProjects(locale: Locale): Project[] {
  return byLocale[locale];
}

export function getProject(locale: Locale, slug: string): Project | undefined {
  return byLocale[locale].find((project) => project.slug === slug);
}

export function projectTags(project: Project): string[] {
  return [project.discipline, project.sector];
}

/** Filter labels: every discipline and sector present, alphabetised. */
export function allTags(locale: Locale): string[] {
  const tags = new Set(byLocale[locale].flatMap(projectTags));
  return [...tags].sort((a, b) => a.localeCompare(b, locale));
}

/** Other projects ranked by shared discipline or sector. */
export function relatedProjects(
  locale: Locale,
  project: Project,
  limit = 3,
): Project[] {
  const tags = projectTags(project);

  return byLocale[locale]
    .filter((other) => other.slug !== project.slug)
    .map((other) => ({
      other,
      shared: projectTags(other).filter((tag) => tags.includes(tag)).length,
    }))
    .sort((a, b) => b.shared - a.shared)
    .slice(0, limit)
    .map((entry) => entry.other);
}
