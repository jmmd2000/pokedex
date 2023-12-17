import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import { api } from "~/utils/api";

const inter = Inter({ subsets: ["latin"] });

import "~/styles/globals.css";
import { Layout } from "~/components/layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={inter.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default api.withTRPC(MyApp);
