import React from "react";
import type { Meta } from "@storybook/react";
import { KcPage } from "../keycloak-theme/kc.gen";
import { getKcContextMock } from "../keycloak-theme/login/KcPageStory";

const meta: Meta = {
  title: "Keycloak/Register",
  component: KcPage,
};

export default meta;

export const Register = {
  render: () => {
    const kcContext = getKcContextMock({
      pageId: "register.ftl"});

    return <KcPage kcContext={kcContext} />;
  },
};
