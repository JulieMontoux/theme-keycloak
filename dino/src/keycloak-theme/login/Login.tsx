import { KcProps } from "keycloakify";
import Template from "keycloakify/login/Template";
import { useI18n } from "./i18n";
import "./Login.css";
import "../css/main.css"

export default function Login(props: KcProps) {
  const { kcContext, doUseDefaultCss = false } = props;
  const { url, login, realm, usernameHidden } = kcContext;
  const { i18n } = useI18n({ kcContext });
  const { msgStr } = i18n;

  return (
    <div className="kcBodyClass">
      <div className="kcLoginCard">
        <div className="kcRealmName">{realm.displayName ?? realm.realm}</div>
        <h1 className="kcFormTitleClass">Connexion</h1>
        <form id="kc-form-login" action={url.loginAction} method="post">
          {!usernameHidden && (
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={login.username ?? ""}
              placeholder="Nom d'utilisateur"
              className="kcInputClass"
            />
          )}
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Mot de passe"
            className="kcInputClass"
          />

          <div className="kcFormOptions">
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

          <button type="submit" id="kc-login" className="kcButtonClass">
            Connexion
          </button>
        </form>

        {realm.registrationAllowed && (
          <div className="kcRegisterWrapper">
            <a href={url.registrationUrl} className="kcLink">
              Pas encore inscrit ? Créez un compte
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
