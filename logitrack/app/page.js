import Layout from "@/components/layout/Layout";
import LogiButton from "@/components/ui/Button/button";
import LogiCard from "@/components/ui/Card/Card";

export default function DashboardPage() {
  return (
    <Layout title="Dashboard">
      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        <LogiCard
          title="Aktif Seferler"
          description="2 araç şu anda aktif olarak yolda."
        >
          <LogiButton size="small">Detay</LogiButton>
        </LogiCard>
        <LogiCard
          title="Tamamlanan Seferler"
          description="Son 7 günde 42 sefer başarıyla tamamlandı."
        />
        <LogiCard
          title="Bakım Gereken Araçlar"
          description="3 araç bakım sürecinde."
        />
      </div>
    </Layout>
  );
}
