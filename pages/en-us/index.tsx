import React from 'react'
import { NextPage } from 'next'
import { useTheme, Grid } from 'components'
import PackageIcon from '@geist-ui/icons/package'
import FeatherIcon from '@geist-ui/icons/feather'
import GitHubIcon from '@geist-ui/icons/github'
import { HomeCell } from 'lib/components'

const Application: NextPage<{}> = () => {
  const theme = useTheme()

  return (
    <>
      <div className="layout">
        <div className="hero">
          <h1 className="title">Портал</h1>
          <h3 className="desc">
            <span className="gradient-text">Облачная текстовая операционная система с интегрированными автономными ИИ-агентами.</span>
          </h3>
        </div>

        <Grid.Container gap={2} justify="center">
          <Grid xs={24} md={8}>
            <HomeCell
              icon={<PackageIcon />}
              url="/en-us/components"
              title="Компоненты"
              desc="Постоянно растущий список кратких и эстетических компонентов."
            />
          </Grid>
          <Grid xs={24} md={8}>
            <HomeCell
              icon={<FeatherIcon />}
              url="/en-us/guide/themes"
              title="Настроенный"
              desc="Настройте размеры, цвета, внешний вид, формы и многое другое."
            />
          </Grid>
          <Grid xs={24} md={8}>
            <HomeCell
              icon={<GitHubIcon />}
              url="https://github.com/geist-org/geist-ui"
              title="Открытый исходный код"
              desc="Geist открыт и бесплатно доступен по лицензии MIT."
            />
          </Grid>
        </Grid.Container>
      </div>
      <style jsx>{`
        .layout {
          min-height: calc(100vh - var(--geist-page-nav-height));
          max-width: ${theme.layout.pageWidthWithMargin};
          margin: 0 auto;
          padding: 0 ${theme.layout.gap} calc(${theme.layout.gap} * 2);
          box-sizing: border-box;
        }
        .hero {
          height: calc(100vh - var(--geist-page-nav-height) - 300px);
          min-height: 30vh;
          max-width: 500px;
          margin: 0 auto;
          text-align: center;
          align-items: center;
          justify-content: center;
          display: flex;
          flex-direction: column;
        }
        .title {
          font-size: 3.75rem;
          font-weight: 700;
          margin: 0;
          color: white;
        }
        .desc {
          color: ${theme.palette.accents_5};
          font-size: 1.5rem;
          font-weight: 500;
          margin: 0 0 ${theme.layout.gap};
        }
        .gradient-text {
          background: linear-gradient(90deg, purple, pink, red, blue);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </>
  )
}

export default Application