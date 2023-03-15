import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../components/pages/home/Home";
import { Setting } from "../components/pages/home/Setting";
import { UserManagement } from "../components/pages/home/UserManagement";

import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={
        <HeaderLayout>
          <Home />
        </HeaderLayout>
      } />

      <Route path="/home" element={
        <HeaderLayout>
          <Home />
        </HeaderLayout>
      } />

      <Route path="/user_management" element={
        <HeaderLayout>
          <UserManagement />
        </HeaderLayout>
      } />

      <Route path="/setting" element={
        <HeaderLayout>
          <Setting />
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
