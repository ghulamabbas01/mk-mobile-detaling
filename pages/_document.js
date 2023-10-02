import * as React from "react";
import PropTypes from "prop-types";
import Document, { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import theme, { roboto } from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";

export default function MyDocument(props) {
  const { emotionStyleTags } = props;

  return (
    <Html lang="en" className={roboto.className}>
      <Head>
        {/* PWA primary color */}
        {/* meta tages */}
        {/* twitter meta tages  */}

        <meta name="twitter:card" content="app" />
        <meta name="twitter:site" content="MK Mobile Detailing" />
        <meta
          name="description"
          content="MK Mobile Detailing is a Mobile Car Detailing Service. Interior And Exterior Detail,Mold Remove ,Water Intrusion , Water Damage, Polish, Scratch Remove, Odor Remove, Touch Up Pain, Engine Cleaning,Pete Hair Remove,Buffing,Clay bar, Wax "
        />
        <meta name="twitter:app:name:iphone" content="Mk Mobile Detaling" />
        <meta name="twitter:app:name:ipad" content="Mk Mobile Detaling" />
        <meta name="twitter:app:name:googleplay" content="Mk Mobile Detaling" />
        {/* twitter meta tages  */}
        {/* og tages  */}
        <meta property="og:title" content="Mk Mobile Detailing" />
        <meta property="og:site_name" content="Mk Mobile Detailing" />
        <meta property="og:url" content="MK Mobile Detailing Services" />
        <meta
          property="og:description"
          content="MK Mobile Detailing is a Mobile Car Detailing Service. Interior And Exterior Detail,Mold Remove ,Water Intrusion , Water Damage, Polish, Scratch Remove, Odor Remove, Touch Up Pain, Engine Cleaning,Pete Hair Remove,Buffing,Clay bar, Wax 
          
       "
        />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://i.ibb.co/GtNQrDC/logo.png" />
        {/* og tages  */}

        <meta name="robots" content="index,follow" />
        <meta
          property="og:title"
          content=" MK Mobile Detailing is a professional auto detailing business that offers premium car detailing services for customers in the greater metropolitan area. The company is owned and operated by Mooneer Khair, who has over 3+ years of experience in the industry."
        />
        <meta property="dc:creator" content="Abbas Khan" />
        <meta
          property="keywords"
          content="MK MOBILE DELAILING,mk mobile,mobile Services,usa mobile Services,new car watch,usa mobile detailing Services,mobile detailing equipment,mobile detailing business,mobile detailing near me,mobile detailing prices,Mobile Car Wash And Detailing,Mobile Detailing Services,Auto Detailing,Mobile Auto Detailing,Mobile Auto Detailing,Professional Mobile Detailing,Auto Detailing Packages & Pricing,mk,mk mobile,mkmobile,mkmobiledetailing,MK Mobile Detailing,MK Mobile Detailing services,mk mobile detailing services, mk mobile car detailing, m&k mobile detailing, mk detailing ontario, mk detailing, bk mobile detailing, b k detailing, ck mobile detailing, c&m mobile detailing, d&k mobile, g's mobile detailing, h&k detailing, i m detailing, j mobile detailing, nk car detailing, mk auto detail ontario ca ultra mobile detailing, yk detailing, 2k car detailing, 3k detailing, 4k mobile detailing services, 4k mobile auto detailing, 6 star detailing, mobile detailing mobile detailing near me, mobile detailing setup, auto mobile detailing, car mobile detailing near me, mobile detailing companies, whats mobile detailing,car detailing car detailing, near me mobile ,car detailing near me, car detailing kit, mobile car detailing "
        />
        <meta name="application-name" content="MK Mobile Detailing Services" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <meta />
        <title>Mk Mobile Detailing</title>
        {/* meta tages  */}
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="emotion-insertion-point" content="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Foundation&family=Farsan&display=swap"
          rel="stylesheet"
        />
        {emotionStyleTags}
      </Head>
      <body style={{ scrollBehavior: "smooth" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};

MyDocument.propTypes = {
  emotionStyleTags: PropTypes.array.isRequired,
};
