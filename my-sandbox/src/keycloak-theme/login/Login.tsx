import { KcProps } from "keycloakify";
import Template from "keycloakify/login/Template";
import { useI18n } from "./i18n";
import "./Login.css";

export default function Login(props: KcProps) {
  const { kcContext, doUseDefaultCss = false } = props;
  const { url, login, usernameHidden, realm } = kcContext;
  const { i18n } = useI18n({ kcContext });

  const classes = {
    kcBodyClass: "kcBodyClass",
    kcFormCardClass: "kcFormCardClass",
    kcFormTitleClass: "kcFormTitleClass",
    kcInputClass: "kcInputClass",
    kcButtonClass: "kcButtonClass",
    kcFormGroupClass: "kcFormGroupClass",
    kcRealmClass: "kcRealmClass",
  };

  return (
    <div className="kcBodyClass">
      <div className="mysandbox-header">
        <img
          src="/logo-mysandbox.svg"
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
        <h1 className="kcFormTitleClass">Connexion</h1>

        <form id="kc-form-login" action={url.loginAction} method="post">
          {!usernameHidden && (
            <div className="kcFormGroupClass">
              <input
                id="username"
                name="username"
                type="text"
                defaultValue={login.username ?? ""}
                placeholder="Nom d'utilisateur"
                className="kcInputClass"
              />
            </div>
          )}

          <div className="kcFormGroupClass">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Mot de passe"
              className="kcInputClass"
            />
          </div>

          <div className="kcFormGroupClass kcFormOptions">
            <label className="kcCheckbox">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                defaultChecked={login.rememberMe}
              />
              Se souvenir de moi
            </label>

            {realm.resetPasswordAllowed && (
              <a href={url.loginResetCredentialsUrl} className="kcLink">
                Mot de passe oublié ?
              </a>
            )}
          </div>

          <div className="kcFormGroupClass">
            <button type="submit" id="kc-login" className="kcButtonClass">
              Connexion :)
            </button>
          </div>

          {realm.registrationAllowed && (
            <div className="kcFormGroupClass kcRegisterWrapper">
              <span>Pas encore inscrit ? </span>
              <a href={url.registrationUrl} className="kcLink">
                S'inscrire
              </a>
            </div>
          )}
        </form>
      </Template>
    </div>
  );
}
