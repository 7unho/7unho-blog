const CONFIG = {
  // profile setting (required)
  profile: {
    name: "7unho",
    image: "/profile.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "BE developer",
    bio: "'같이'를 창출하는 개발자",
    email: "rlawnsgh8395@gmail.com",
    linkedin: "",
    github: "7unho",
    instagram: "ho7unkim",
  },
  projects: [
    {
      name: `PROJECTS`,
      href: "projects",
    },
  ],
  // blog setting (required)
  blog: {
<<<<<<< HEAD
    title: "7unho",
    description: "습관을 만드는 기록",
    theme: "auto", // ['light', 'dark', 'auto']
=======
    title: "morethan-log",
    description: "welcome to morethan-log!",
    scheme: "dark", // 'light' | 'dark' | 'system'
>>>>>>> upstream/main
  },

  // CONFIG configration (required)
  link: "https://7unho.blog",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
<<<<<<< HEAD
    enable: true,
=======
    enable: false,
>>>>>>> upstream/main
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
<<<<<<< HEAD
      repo: "7unho/7unho-blog",
=======
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
>>>>>>> upstream/main
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
