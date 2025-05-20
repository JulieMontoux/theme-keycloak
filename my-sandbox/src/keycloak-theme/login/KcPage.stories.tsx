import React from "react";
import type { Meta } from "@storybook/react";
import { KcPage } from "../kc.gen";
import { getKcContextMock } from "./KcPageStory";

const meta: Meta = {
  title: "Keycloak/Login",
  component: KcPage
};

export default meta;

export const Login = {
  render: () => {
    const kcContext = getKcContextMock({ pageId: "login.ftl" });
    return <KcPage kcContext={kcContext} />;
  }
};
