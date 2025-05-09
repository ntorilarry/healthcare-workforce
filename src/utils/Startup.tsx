import { Toaster } from "react-hot-toast";
import AppRouter from "./AppRouter";
import { ScrollToTop } from "./ScrollToTop";

const Startup = () => {
  return (
    <div>
      <Toaster />
      <ScrollToTop />
      <AppRouter />
    </div>
  );
};

export default Startup;
