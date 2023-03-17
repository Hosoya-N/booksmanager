import React from "react";
import { Route, Routes } from "react-router-dom";

import { Return } from "../components/pages/home/Return";
import { UserManagement } from "../components/pages/home/UserManagement";

import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={
        <HeaderLayout>
          <UserManagement />
        </HeaderLayout>
      } />

      <Route path="/book_management" element={
        <HeaderLayout>
          <UserManagement />
        </HeaderLayout>
      } />

      <Route path="/return" element={
        <HeaderLayout>
          <Return />
        </HeaderLayout>
      } />

      <Route path="*" element={
        <HeaderLayout>
          <Page404 />
        </HeaderLayout>
      } />

    </Routes>
  );
};
