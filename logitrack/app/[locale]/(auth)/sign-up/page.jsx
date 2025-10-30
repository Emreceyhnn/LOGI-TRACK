import { alpha, Box } from "@mui/system";
import SignupPage from "./SignUpView";

export default async function SignUpPage({ params }) {
  const { locale = "en" } = await params;
  return (<Box sx={{bgcolor: alpha("#0f172a", 0.50),}}  ><SignupPage locale={locale} /></Box>);
}
