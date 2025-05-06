
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/Home";
import ProfilePage from "@/pages/Profile";
import NotFound from "@/pages/NotFound";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile/:id" element={<ProfilePage />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
