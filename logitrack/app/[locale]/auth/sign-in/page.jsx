import SignInView from "./SignInView";

export default async function SignInPage({ params }) {
  const { locale = "en" } = await params;
  return <SignInView locale={locale} />;
}
