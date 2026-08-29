import type { Locale } from "@/i18n/routing";

export type LegalSection = {
  /** Anchor id, shared across locales so links survive a language switch. */
  id: string;
  number: string;
  title: string;
  body: string;
};

export type LegalDocument = {
  slug: string;
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

const byLocale: Record<Locale, LegalDocument[]> = {
  ar: [
    {
      slug: "privacy-policy",
      title: "سياسة الخصوصية",
      lastUpdated: "أغسطس 2026",
      intro: "تلتزم شركة كوجنس (Kogns) بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية المعلومات الشخصية عندما تتفاعل مع موقعنا الإلكتروني أو خدماتنا أو منتجاتنا التقنية.",
      sections: [
        {
          id: "section-01",
          number: "01",
          title: "المعلومات التي نجمعها",
          body: "نحن نجمع المعلومات التي تقدمها طواعية عند الاتصال بنا من خلال موقعنا، مثل اسمك وعنوان بريدك الإلكتروني ومعلومات الشركة وتفاصيل المشاريع أو الاستفسارات التي ترسلها إلينا.",
        },
        {
          id: "section-02",
          number: "02",
          title: "المعلومات التي يتم جمعها تلقائياً",
          body: "عند زيارة موقع كوجنس، قد نجمع تلقائياً معلومات معينة حول جهازك وتفاعلك مع الموقع. يشمل ذلك عنوان بروتوكول الإنترنت (IP)، ونوع المتصفح، ومعلومات نظام التشغيل، والصفحات التي قمت بزيارتها، وذلك لأغراض الأمان وتحسين أداء الموقع.",
        },
        {
          id: "section-03",
          number: "03",
          title: "كيف نستخدم معلوماتك",
          body: "نستخدم المعلومات التي نجمعها للرد على استفساراتك، وتقديم خدمات الهندسة البرمجية والحلول التقنية، وتحسين موقعنا الإلكتروني، والوفاء بالتزاماتنا القانونية. لا نقوم ببيع معلوماتك الشخصية لأي أطراف خارجية.",
        },
        {
          id: "section-04",
          number: "04",
          title: "أمن البيانات",
          body: "نتخذ إجراءات تقنية وتنظيمية معقولة لحماية بياناتك من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف. ومع ذلك، لا يوجد نظام آمن بنسبة 100% عبر الإنترنت، ولا يمكننا ضمان الأمان المطلق لمعلوماتك.",
        },
        {
          id: "section-05",
          number: "05",
          title: "الاحتفاظ بالبيانات",
          body: "نحتفظ بالمعلومات الشخصية فقط طالما كان ذلك ضرورياً لتحقيق الأغراض الموضحة في سياسة الخصوصية هذه، ما لم يكن هناك التزام قانوني يتطلب فترة احتفاظ أطول.",
        },
        {
          id: "section-06",
          number: "06",
          title: "حقوق الخصوصية الخاصة بك",
          body: "بناءً على موقعك الجغرافي، قد يكون لديك حقوق معينة تتعلق بمعلوماتك الشخصية، بما في ذلك الحق في الوصول إلى بياناتك أو تصحيحها أو طلب حذفها. لتقديم طلب يتعلق ببياناتك، يرجى التواصل معنا عبر قنوات الاتصال المتاحة على الموقع.",
        },
        {
          id: "section-07",
          number: "07",
          title: "التغييرات على هذه السياسة",
          body: "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة مع تحديث تاريخ 'تم التحديث الأخير'. ننصحك بمراجعة هذه السياسة بشكل دوري.",
        },
        {
          id: "section-08",
          number: "08",
          title: "اتصل بنا",
          body: "إذا كانت لديك أي أسئلة أو مخاوف بشأن سياسة الخصوصية هذه أو ممارساتنا في التعامل مع البيانات، يرجى التواصل معنا عبر صفحة 'اتصل بنا' على موقعنا.",
        },
      ],
    },
    {
      slug: "terms-of-service",
      title: "شروط الخدمة",
      lastUpdated: "أغسطس 2026",
      intro: "مرحباً بك في كوجنس (Kogns). تحكم شروط الخدمة هذه وصولك إلى موقعنا الإلكتروني واستخدامه. يرجى قراءة هذه الشروط بعناية قبل استخدام الموقع.",
      sections: [
        {
          id: "section-01",
          number: "01",
          title: "قبول الشروط",
          body: "من خلال الوصول إلى موقع كوجنس الإلكتروني أو استخدامه، فإنك توافق على الالتزام بشروط الخدمة هذه. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام موقعنا.",
        },
        {
          id: "section-02",
          number: "02",
          title: "الغرض من الموقع",
          body: "يقدم هذا الموقع معلومات عامة حول خدمات كوجنس في هندسة البرمجيات، وحلول الذكاء الاصطناعي، وهندسة البيانات، والمنتجات التقنية الخاصة بنا. المعلومات المقدمة على الموقع لا تشكل عقداً أو عرضاً ملزماً.",
        },
        {
          id: "section-03",
          number: "03",
          title: "الملكية الفكرية",
          body: "جميع المحتويات، والتصميمات، والرسومات، والنصوص، والشعارات الموجودة على موقع كوجنس هي ملك لشركة كوجنس ومحمية بموجب قوانين الملكية الفكرية. لا يُسمح بإعادة إنتاج أو توزيع أو تعديل أي من هذه المحتويات دون إذن كتابي مسبق منا.",
        },
        {
          id: "section-04",
          number: "04",
          title: "استخدام الموقع",
          body: "أنت توافق على استخدام الموقع لأغراض قانونية فقط وبطريقة لا تنتهك حقوق الآخرين أو تقيد استخدامهم للموقع. يُحظر استخدام الموقع لنقل أي مواد ضارة أو غير قانونية أو محاولة الوصول غير المصرح به إلى أنظمتنا.",
        },
        {
          id: "section-05",
          number: "05",
          title: "إخلاء المسؤولية",
          body: "يتم تقديم المعلومات الموجودة على هذا الموقع 'كما هي' دون أي ضمانات صريحة أو ضمنية. نحن لا نضمن دقة أو اكتمال أو حداثة المحتوى الموجود على الموقع، ونتنصل من أي مسؤولية عن أي أخطاء أو سهو.",
        },
        {
          id: "section-06",
          number: "06",
          title: "حدود المسؤولية",
          body: "إلى أقصى حد يسمح به القانون، لن تكون كوجنس أو أي من مديريها أو موظفيها مسؤولة عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو تبعية تنشأ عن استخدامك للموقع أو اعتمادك على المعلومات المقدمة فيه.",
        },
        {
          id: "section-07",
          number: "07",
          title: "روابط الجهات الخارجية",
          body: "قد يحتوي موقعنا على روابط لمواقع جهات خارجية لا نتحكم فيها ولا نديرها. نحن غير مسؤولين عن ممارسات الخصوصية أو المحتوى الخاص بتلك المواقع، ونقدم هذه الروابط لراحتك فقط.",
        },
        {
          id: "section-08",
          number: "08",
          title: "التعديلات على الشروط",
          body: "نحتفظ بالحق في تعديل شروط الخدمة هذه في أي وقت. سيتم نشر الشروط المحدثة على هذه الصفحة، ويعتبر استمرارك في استخدام الموقع بعد نشر التعديلات بمثابة قبول منك للشروط الجديدة.",
        },
      ],
    },
  ],
  en: [
    {
      slug: "privacy-policy",
      title: "Privacy Policy",
      lastUpdated: "August 2026",
      intro: "Kogns is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you interact with our website, services, and digital products.",
      sections: [
        {
          id: "section-01",
          number: "01",
          title: "Information We Collect",
          body: "We collect information you voluntarily provide when you contact us through our website, such as your name, email address, company information, and the details of your engineering inquiries or project requests.",
        },
        {
          id: "section-02",
          number: "02",
          title: "Automatically Collected Information",
          body: "When you visit the Kogns website, we may automatically collect certain information about your device and interaction with our site. This includes your IP address, browser type, operating system, and page views, which helps us ensure security and optimize website performance.",
        },
        {
          id: "section-03",
          number: "03",
          title: "How We Use Your Information",
          body: "We use the information we collect to respond to your inquiries, deliver our software engineering services and technical solutions, improve our website, and comply with legal obligations. We do not sell your personal information to third parties.",
        },
        {
          id: "section-04",
          number: "04",
          title: "Data Security",
          body: "We implement reasonable technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction. However, no internet-based system is 100% secure, and we cannot guarantee absolute security of your information.",
        },
        {
          id: "section-05",
          number: "05",
          title: "Data Retention",
          body: "We retain personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.",
        },
        {
          id: "section-06",
          number: "06",
          title: "Your Privacy Rights",
          body: "Depending on your jurisdiction, you may have specific rights regarding your personal information, including the right to access, correct, or request deletion of your data. To exercise these rights, please contact us using the information provided on our website.",
        },
        {
          id: "section-07",
          number: "07",
          title: "Changes to This Policy",
          body: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page with a revised 'Last Updated' date. We encourage you to review this policy periodically.",
        },
        {
          id: "section-08",
          number: "08",
          title: "Contact Us",
          body: "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us through the 'Contact' page on our website.",
        },
      ],
    },
    {
      slug: "terms-of-service",
      title: "Terms of Service",
      lastUpdated: "August 2026",
      intro: "Welcome to Kogns. These Terms of Service govern your access to and use of our website. Please read these terms carefully before using our site.",
      sections: [
        {
          id: "section-01",
          number: "01",
          title: "Acceptance of Terms",
          body: "By accessing or using the Kogns website, you agree to be bound by these Terms of Service. If you do not agree to any part of these terms, please do not use our website.",
        },
        {
          id: "section-02",
          number: "02",
          title: "Purpose of Website",
          body: "This website provides general information about Kogns's software engineering services, AI solutions, data engineering capabilities, and proprietary digital products. The information presented on this site does not constitute a binding contract or formal offering.",
        },
        {
          id: "section-03",
          number: "03",
          title: "Intellectual Property",
          body: "All content, designs, graphics, text, and logos on the Kogns website are the property of Kogns and are protected by intellectual property laws. You may not reproduce, distribute, or modify any content without our prior written permission.",
        },
        {
          id: "section-04",
          number: "04",
          title: "Use of the Website",
          body: "You agree to use the website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the site. You are prohibited from using the site to transmit any harmful or illegal material or attempting unauthorized access to our systems.",
        },
        {
          id: "section-05",
          number: "05",
          title: "Disclaimer of Warranties",
          body: "The information on this website is provided 'as is' without any representations or warranties, express or implied. We do not warrant the accuracy, completeness, or timeliness of the content on the site, and we disclaim any liability for errors or omissions.",
        },
        {
          id: "section-06",
          number: "06",
          title: "Limitation of Liability",
          body: "To the maximum extent permitted by applicable law, Kogns and its directors or employees shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your use of the website or your reliance on any information provided herein.",
        },
        {
          id: "section-07",
          number: "07",
          title: "Third-Party Links",
          body: "Our website may contain links to third-party websites that we do not operate or control. We are not responsible for the privacy practices or content of these external sites, and we provide these links solely for your convenience.",
        },
        {
          id: "section-08",
          number: "08",
          title: "Modifications to Terms",
          body: "We reserve the right to modify these Terms of Service at any time. Updated terms will be posted on this page, and your continued use of the website following any changes constitutes your acceptance of the revised terms.",
        },
      ],
    },
  ],
};

export function getLegalDocuments(locale: Locale): LegalDocument[] {
  return byLocale[locale];
}

export function getLegalDocument(
  locale: Locale,
  slug: string,
): LegalDocument | undefined {
  return byLocale[locale].find((document) => document.slug === slug);
}
