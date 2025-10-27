import Link from "next/link";
import RegisterForm from "@/components/forms/RegisterForm";
import styles from "./styles.module.css";

const highlights = [
  "Gerçek zamanlı araç takibi",
  "Bakım planlamasını otomatikleştirin",
  "Teslimat performansını artırın",
];

export const metadata = {
  title: "Logitrack | Kayıt Ol",
  description:
    "Logitrack platformuna hemen katılın, filonuzu tek merkezden yönetin ve teslimatlarınızı optimize edin.",
};

export default function RegisterPage() {
  return (
    <div className={styles.page}>
      <section className={styles.leftPanel}>
        <div className={styles.brand}>
          <span className={styles.brandMark}>LT</span>
          <span>Logitrack</span>
        </div>

        <div className={styles.leftContent}>
          <h1>Filonuzu tek panelden yönetin</h1>
          <p>
            Logitrack, operasyonlarınızı sadeleştirmeniz ve ekibinizin daha hızlı
            karar alabilmesi için bütün araç verilerini tek bir yerde toplar.
          </p>

          <ul className={styles.highlightList}>
            {highlights.map((item) => (
              <li key={item}>
                <span className={styles.highlightBullet} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className={styles.leftFooter}>
          © {new Date().getFullYear()} Logitrack — tüm hakları saklıdır.
        </p>
      </section>

      <section className={styles.rightPanel}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>Hemen kayıt olun</h2>
            <p>
              Zaten hesabınız var mı? <Link href="/login">Giriş yapın</Link>
            </p>
          </div>

          <RegisterForm showTitle={false} />

          <p className={styles.terms}>
            “Kayıt Ol” butonuna tıklayarak Logitrack&apos;in kullanım koşullarını ve
            verilerinizi güvenle işlemesini kabul etmiş olursunuz.
          </p>
        </div>
      </section>
    </div>
  );
}
