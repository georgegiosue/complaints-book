import { Dispatch, SetStateAction } from "react";
import ReCAPTCHA from "react-google-recaptcha";

type CaptchaProps = {
  recaptcha: {
    enabled: boolean;
    siteKey: string;
  };
  setCaptchaValid: Dispatch<SetStateAction<boolean>>;
};

export const Captcha: React.FC<CaptchaProps> = ({
  recaptcha,
  setCaptchaValid,
}) => {
  const handleCaptcha = (value: string | null) => {
    setCaptchaValid(!!value);
  };
  return (
    <section className="flex justify-center">
      {recaptcha.enabled && (
        <ReCAPTCHA sitekey={recaptcha.siteKey} onChange={handleCaptcha} />
      )}
    </section>
  );
};
