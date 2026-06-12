import Link from "next/link";

export const metadata = {
  title: "Sahifa topilmadi | Travel Easy Admin",
  description: "Travel Easy Uzbekistan administrator paneli",
};

export default function NotFoundPage() {
  return (
    <main className="admin-auth">
      <section className="admin-auth__card text-center">
        <img
          src="/img/brand/travel-easy-emblem.svg"
          alt=""
          width="72"
          height="72"
        />
        <h1 className="mt-20">Sahifa topilmadi</h1>
        <p className="mt-10">So&apos;ralgan admin sahifasi mavjud emas.</p>
        <Link href="/dashboard" className="admin-auth__submit mt-20">
          Dashboardga qaytish
        </Link>
      </section>
    </main>
  );
}
