import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'

const logo = (
  <span>
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 200 200">
    <text x="30" y="110" font-family="Verdana" font-size="40" fill="white">
      1PNK.ru
    </text>
  </svg>
  </span>
)

const config: DocsThemeConfig = {
  project: {
    link: 'https://1pnk.ru'
  },
  docsRepositoryBase: 'https://1pnk.ru',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – PNK'
      }
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === '/' || !title
        ? 'https://1pnk.ru'
        : `https://1pnk.ru`

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Make beautiful websites with Next.js & MDX."
        />
        <meta
          name="og:description"
          content="Акционерное общество «Первая нерудная компания»."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="nextra.site" />
        <meta name="twitter:url" content="https://1pnk.ru" />
        <meta
          name="og:title"
          content={title ? title + ' – PNK' : 'PNK'}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Nextra" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    )
  },
  // banner: {
  //   key: '2.0-release',
  //   text: (
  //     <a href="https://nextra.site" target="_blank" rel="noreferrer">
  //       🎉 Nextra 2.0 is released. Read more →
  //     </a>
  //   )
  // },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <a
            className="flex items-center gap-1 text-current"
            target="_blank"
            rel="noopener noreferrer"
            title="prtl.cc Portal"
            href="https://prtl.cc"
          >
            <span>Разработано с участием людей</span>
          </a>
        </div>
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} Акционерное общество «Первая нерудная компания» является крупнейшим производителем нерудных материалов, объединившим 18 щебеночных заводов в единый холдинг. Предприятия расположены на территории Российской Федерации от Карелии до Дальнего Востока. Основной вид деятельности – добыча и переработка нерудных полезных ископаемых с целью реализации, поставки щебня и производных продуктов для дорожного, нефтегазового, промышленного и гражданского строительства.
        </p>
        <qa-bot
          theme="infer"
          target="_blank"
          orientation="bottom-right"
          title="DocsQA"
          description="@Jina AI" >
        </qa-bot>
      </div>
    )
  }
}

export default config
