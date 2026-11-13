import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { services } from "@/lib/services";
import { getSettings } from "@/lib/site";

export async function SiteChrome({ children }: { children: React.ReactNode }) {
  const settings = await getSettings();
  return (
    <div className="site">
      <Header phone={settings.phone} services={services.map(({ slug, name }) => ({ slug, name }))} />
      <main id="main">{children}</main>
      <Footer settings={settings} />
    </div>
  );
}
