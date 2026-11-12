import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { getSettings } from "@/lib/site";

export async function SiteChrome({ children }: { children: React.ReactNode }) {
  const settings = await getSettings();
  return (
    <div className="site">
      <Header phone={settings.phone} />
      <main id="main">{children}</main>
      <Footer settings={settings} />
    </div>
  );
}
