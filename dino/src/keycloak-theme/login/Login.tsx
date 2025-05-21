import { KcProps } from "keycloakify";
import Template from "keycloakify/login/Template";
import { useI18n } from "./i18n";
import "../css/main.css";
import { useEffect, useState } from "react";

export default function Login(props: KcProps) {
  const { kcContext, doUseDefaultCss = false } = props;
  const { url, login, realm, usernameHidden, message } = kcContext;
  const { i18n } = useI18n({ kcContext });
  const { msgStr } = i18n;

  const [showRegistrationInfo, setShowRegistrationInfo] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("showRegistrationInfo") === "true") {
      setShowRegistrationInfo(true);
      sessionStorage.removeItem("showRegistrationInfo");
    }
  }, []);


  console.log("kcContext.message", kcContext.message);

  return (
    <div className="kcBodyClass">
      <div className="kcLoginCard">
        <div className="kcRealmName">{realm.displayName ?? realm.realm}</div>
        <h1 className="kcFormTitleClass">Connexion</h1>

        {kcContext.message?.type === "error" && (
          <div className="kcMessage kcMessage--error">
            🦕 Raaaw... essaie encore petit dino !
          </div>
        )}

        {kcContext.message?.type === "success" && (
          <div className="kcMessage kcMessage--success">
            🦖 Ton email est parti à dos de ptérodactyle !
          </div>
        )}

        {showRegistrationInfo && (
          <div className="kcMessage kcMessage--info">
            🦕 Rejoindre le troupeau ? Parle au gardien du parc !
          </div>
        )}

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
            <a
              href={url.loginUrl}
              className="kcLink"
              onClick={() => {
                sessionStorage.setItem("showRegistrationInfo", "true");
              }}
            >
              Pas encore inscrit ? Rejoins nous !
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
