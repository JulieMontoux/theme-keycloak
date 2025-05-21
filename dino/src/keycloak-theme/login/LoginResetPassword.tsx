import { KcProps } from "keycloakify";
import { useI18n } from "./i18n";
import "../css/main.css";

export default function LoginResetPassword(props: KcProps) {
  const { kcContext, doUseDefaultCss = false } = props;
  const { url, realm } = kcContext;
  const { i18n } = useI18n({ kcContext });
  const { msgStr } = i18n;

  return (
    <div className="kcBodyClass">
      <div className="kcLoginCard">
        <div className="kcRealmName">{realm.displayName ?? realm.realm}</div>
        <h1 className="kcFormTitleClass">Mot de passe oublié</h1>

        <form id="kc-reset-password-form" action={url.loginAction} method="post">
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Nom d'utilisateur ou e-mail"
            className="kcInputClass"
          />

          <button type="submit" className="kcButtonClass">
            Envoyer le lien de réinitialisation
          </button>
        </form>

        <div style={{ marginTop: "1rem" }}>
          <a href={url.loginUrl} className="kcLink">
            🔙 Retour à la connexion
          </a>
        </div>
      </div>
    </div>
  );
}
