import { alpha, Box } from "@mui/system";
import SignInView from "./SignInView";

export default async function SignInPage({ params }) {
  const { locale = "en" } = await params;
  return (<Box sx={{bgcolor: alpha("#0f172a", 0.50),}}  ><SignInView locale={locale} /></Box>);
}
