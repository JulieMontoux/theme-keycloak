import { KcProps } from "keycloakify";
import Template from "keycloakify/login/Template";
import { useI18n } from "./i18n";
import "../main.css";

export default function Register(props: KcProps) {
  const { kcContext, doUseDefaultCss = false } = props;
  const { url, register } = kcContext;
  const { i18n } = useI18n({ kcContext });
  const { msgStr } = i18n;

  const classes = {
    kcBodyClass: "kcBodyClass",
    kcFormCardClass: "kcFormCardClass",
    kcFormTitleClass: "kcFormTitleClass",
    kcInputClass: "kcInputClass",
    kcButtonClass: "kcButtonClass",
    kcFormGroupClass: "kcFormGroupClass",
    kcFormSettingClass: "kcFormOptions",
    kcLabelClass: "kcLabelClass",
    kcFormGroupErrorClass: "kcFormGroupErrorClass",
    kcFormMessageClass: "kcFormMessageClass",
    kcFormFieldErrorClass: "kcInputError",
    kcContentWrapperClass: "kcContentWrapperClass",
  };

  return (
    <div className="kcBodyClass">
      <div className="mysandbox-header">
        <img
          src="assets/logo-mysandbox.svg"
          alt="Logo MySandBox"
          className="mysandbox-logo"
        />
      </div>

      <Template
        kcContext={kcContext}
        i18n={i18n}
        doUseDefaultCss={doUseDefaultCss}
        classes={classes}
        headerNode={<></>}
        displayMessage={false}
        displayInfo={false}
      >
        <h1 className="kcFormTitleClass">Créer un compte</h1>
        <form id="kc-register-form" action={url.registrationAction} method="post">
          <div className="kcFormGroupClass">
            <input
              id="firstName"
              name="firstName"
              type="text"
              defaultValue={register.formData.firstName ?? ""}
              placeholder="Prénom"
              className="kcInputClass"
            />
          </div>
          <div className="kcFormGroupClass">
            <input
              id="lastName"
              name="lastName"
              type="text"
              defaultValue={register.formData.lastName ?? ""}
              placeholder="Nom"
              className="kcInputClass"
            />
          </div>
          <div className="kcFormGroupClass">
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={register.formData.email ?? ""}
              placeholder="Email"
              className="kcInputClass"
            />
          </div>
          <div className="kcFormGroupClass">
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={register.formData.username ?? ""}
              placeholder="Nom d'utilisateur"
              className="kcInputClass"
            />
          </div>
          <div className="kcFormGroupClass">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Mot de passe"
              className="kcInputClass"
            />
          </div>
          <div className="kcFormGroupClass">
            <button type="submit" className="kcButtonClass">
              S'inscrire
            </button>
          </div>

          <div className="kcRegisterBackLink">
            <a href={url.loginUrl} className="kcLink">
              ← Retour à la connexion
            </a>
          </div>
        </form>
      </Template>
    </div>
  );
}
