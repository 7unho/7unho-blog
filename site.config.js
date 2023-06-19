const CONFIG = {
  // profile setting (required)
  profile: {
    name: "7unho",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "BE developer",
    bio: "'같이'를 창출하는 개발자",
    email: "rlawnsgh8395@gmail.com",
    linkedin: "",
    github: "7unho",
    instagram: "",
  },
  projects: [
    {
      name: `PORTFOLIO`,
      href: "7unho.blog/portfolio",
    },
  ],
  // blog setting (required)
  blog: {
    title: "7unho",
    description: "개발 블로그",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "7unho.blog",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://file.notion.so/f/s/e93e9037-1c2a-4e52-95b8-49cae461db0b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-04-09_20.28.58.png?id=c8a848b0-c861-486c-9339-7e8a6be58e85&table=block&spaceId=632571f2-6f4c-4829-be21-8045aa2fdeef&expirationTimestamp=1687234320086&signature=S1HRRSHgP59_AU3fppXcJl9Vga7p0t-4fLNdIfoLoxw&downloadName=%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-04-09+20.28.58.png", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "7unho/7unho-blog",
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
}

module.exports = { CONFIG }