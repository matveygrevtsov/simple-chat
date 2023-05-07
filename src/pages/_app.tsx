import { Layout } from "@/components/Layout/Layout";
import { PreloaderScreen } from "@/components/PreloaderScreen/PreloaderScreen";
import { persistor, store } from "@/store/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<PreloaderScreen />}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </Layout>
  );
}
