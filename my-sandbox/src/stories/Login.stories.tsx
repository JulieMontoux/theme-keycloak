import React from "react";
import type { Meta } from "@storybook/react";
import { KcPage } from "../keycloak-theme/kc.gen";
import { getKcContextMock } from "../keycloak-theme/login/KcPageStory";

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
